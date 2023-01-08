import React from "react";
import App from "next/app";
import "../public/assets/css/css1.css";
import "../public/assets/css/css2.css";
import "../public/assets/css/theme-1.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}
