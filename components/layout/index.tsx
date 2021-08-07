import React, { FunctionComponent, ReactElement } from "react";
import Head from "next/head";
import Script from "next/script";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

// @ts-ignore
const MainLayout: FunctionComponent = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <title>HoseinMohajer - Sample Nextjs Project</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="icon" type="image/png" href="/favicon2.png" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"/>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"/>
      </Head>
      <div className="main-layout">
        <div className="wrapper">
          <Sidebar/>
          <div id="content">
            <Header/>
            {children}
            <Footer/>
          </div>
        </div>
        <div className="overlay" />
        <script src="/js/jquery.min.js"/>
        <script src="/js/popper.min.js"/>
        <script src="/js/bootstrap.bundle.min.js"/>
        <script src="/js/custom.js"/>
        <script src="/js/jquery.mCustomScrollbar.concat.min.js"/>
        <script src="/js/jquery-3.0.0.min.js"/>
        <script src="/js/scripts.js"/>
        <link rel="stylesheet" href="/css/custom.css" />
      </div>
    </>
  );
};

export default MainLayout;
