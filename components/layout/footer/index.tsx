import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  return (
    <footer>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className=" col-md-12">
              <h2>Request A<strong className="white"> Call Back</strong></h2>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <form className="main_form">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input className="form-control" placeholder="Name" type="text"
                           name="Name"/>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input className="form-control" placeholder="Email" type="text"
                           name="Email"/>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input className="form-control" placeholder="Phone" type="text"
                           name="Phone"/>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <textarea className="textarea" placeholder="Message" name="Message"/>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <button className="send">Send</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="img-box">
                <figure>
                  <Image layout='intrinsic' width={900} height={600}  src="/images/img.jpg" alt="img"/></figure>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="footer_logo">
                <Link href={'/'}>
                  <a href="#">
                    <Image src="/images/logo1.jpg" width={192} height={68} layout='intrinsic' alt="logo"/>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <ul className="lik">
                <li className={router.asPath === '/' ? 'active' : ''}>
                  <Link href='/'><a style={{color: router.asPath === '/' ? '#fff' : '#222222', fontWeight: 400}} href="#">Home</a></Link>
                </li>
                <li className={router.asPath === '/aboutFoods' ? 'active' : ''}>
                  <Link href='/about'><a style={{color: router.asPath === '/aboutFoods' ? '#fff' : '#222222', fontWeight: 400}} href="#">About</a></Link>
                </li>
                <li className={router.asPath === '/recipes' ? 'active' : ''}>
                  <Link href='/recipes'><a style={{color: router.asPath === '/recipes' ? '#fff' : '#222222', fontWeight: 400}} href="#">Recipes</a></Link>
                </li>
                <li className={router.asPath === '/blog' ? 'active' : ''}>
                  <Link href='/blog'><a style={{color: router.asPath === '/blog' ? '#fff' : '#222222', fontWeight: 400}} href="#">Blog</a></Link>
                </li>
                <li className={router.asPath === '/contact' ? 'active' : ''}>
                  <Link href='/contact'><a style={{color: router.asPath === '/contact' ? '#fff' : '#222222', fontWeight: 400}} href="#">Contact Us</a></Link>
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              <div className="new">
                <h3>Newsletter</h3>
                <form className="newtetter">
                  <input className="tetter" placeholder="Your email" type="text"
                         name="Your email"/>
                  <button className="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p> © 2019 All Rights Reserved. Design by <a href="https://html.design/"> Free Html Templates </a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
