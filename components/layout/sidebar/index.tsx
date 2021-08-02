import React from "react";
import Link from "next/link";
import { SidebarWrapper } from "./style";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {toggleSidebar} from '../../../redux/slices/sidebar';

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { showSidebar } = useSelector((state: {sidebar: { showSidebar: boolean }}) => state.sidebar);

  const linkStyle = (path: string) => {
    return {
      color: router.asPath === path ? "#fff" : "#222222",
      fontWeight: 400
    }
  };
  return (
    <SidebarWrapper showSidebar={showSidebar}>
      <div className="sidebar">
        <nav id="sidebar">
          <div id="dismiss" onClick={() => dispatch(toggleSidebar(!showSidebar))}>
            <i className="fa fa-arrow-left" />
          </div>
          <ul className="list-unstyled components">
            <li className={router.asPath === "/" ? "active" : ""}>
              <Link href="/">
                <a style={linkStyle('/')} href="#">
                  Home
                </a>
              </Link>
            </li>
            <li className={router.asPath === "/aboutFoods" ? "active" : ""}>
              <Link href="/about">
                <a style={linkStyle('/about')} href="#">
                  About
                </a>
              </Link>
            </li>
            <li className={router.asPath === "/recipes" ? "active" : ""}>
              <Link href="/recipes">
                <a style={linkStyle('/recipes')} href="#">
                  Recipes
                </a>
              </Link>
            </li>
            <li className={router.asPath === "/blog" ? "active" : ""}>
              <Link href="/blog">
                <a style={linkStyle('/blog')} href="#">
                  Blog
                </a>
              </Link>
            </li>
            <li className={router.asPath === "/contact" ? "active" : ""}>
              <Link href="/contact">
                <a style={linkStyle('/contact')} href="#">
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
