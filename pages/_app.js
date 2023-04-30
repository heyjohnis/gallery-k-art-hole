import "animate.css";
import AOS from "aos";
import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";

// Global styles
import "../public/fonts/font.css";
import "../styles/responsive.scss";
import "../styles/style.scss";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";

import axios from "axios";
import { destroyCookie, parseCookies } from "nookies";
import Navbar from "../components/Layouts/Navbar";
import baseUrl from "../utils/baseUrl";

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>GREEN GALLERY</title>
      </Head>

      <Navbar user={pageProps.user} />
      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { medq_token } = parseCookies(ctx);
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!medq_token) {
    const isProtectedRoute = ctx.pathname === "/admin/dashboard";
    if (isProtectedRoute) {
      redirectUser(ctx, "/auth");
    }
  } else {
    try {
      const url = `${baseUrl}/myinfo`;

      const response = await axios({
        method: "post",
        url: url,
        headers: { Authorization: `Bearer ${medq_token}` },
        data: {},
      });

      const user = response.data.my_info;
      const isAdmin = user.role == "admin";
      const isNotPermitted = !isAdmin && ctx.pathname === "/admin/dashboard";
      if (isNotPermitted) {
        redirectUser(ctx, "/products");
      }
      pageProps.user = user;
    } catch (error) {
      destroyCookie(ctx, "medq_token");
    }
  }
  return { pageProps };
};

export default MyApp;
