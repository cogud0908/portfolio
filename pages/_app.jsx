import React from "react";
import App from "next/app";
import "../public/assets/css/theme-1.css";
// import "../public/assets/css/css1.css";
// import "../public/assets/css/css2.css";

// class Layout extends React.Component {
//   render () {
//     const { children } = this.props
//     return <div className='layout'>{children}</div>
//   }
// }

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
