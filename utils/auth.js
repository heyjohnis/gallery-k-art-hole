import cookie from "js-cookie";
import Router from "next/router";

export const handleLogin = (medq_token) => {
  cookie.set("medq_token", medq_token);
  Router.push("/");
};

export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
};

export const handleLogout = () => {
  cookie.remove("medq_token");
  window.localStorage.setItem("logout", Date.now());
  Router.push("/");
};
