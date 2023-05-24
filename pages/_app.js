/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState } from "react";
import AOS from "aos";
import axios from "axios";
import Script from "next/script";
import { destroyCookie, parseCookies } from "nookies";
import Head from "next/head";
import "animate.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";

// Global styles
import "../public/fonts/font.css";
import "../styles/style.scss";
import "../styles/responsive.scss";

import GoTop from "../components/Shared/GoTop";
import Navbar from "../components/Layouts/Navbar";
import baseUrl from "../utils/baseUrl";

const MyApp = ({ Component, pageProps }) => {
  const [user, setUser] = useState(pageProps.user);

  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>GREEN GALLERY</title>
      </Head>

      <Navbar user={user} />
      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
      <Script
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
        dangerouslySetInnerHTML={{
          __html: ` (function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
  ChannelIO('boot', {
    "pluginKey": "851db043-3ce1-4d57-b7af-58aa7dcb9c7e", //please fill with your plugin key
    "memberId": "${user && user.login_id}", //fill with user id
    "profile": {
      "name": "${user && user.user_name}", //fill with user name
      "mobileNumber": "${user && user.mobile}", //fill with user phone number
    }
  });`,
        }}
      />
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
