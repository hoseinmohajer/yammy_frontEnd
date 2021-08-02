import React, { useState, useEffect } from "react";
import Link from "next/link";
import Register from "./components/register";
import Login from "./components/login";
import {getLocalStorageWithExpiry, clearLocalStorage} from "../../../helpers/storage";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Logout } from "./style";
import {useDispatch} from "react-redux";
import { toggleSidebar } from "../../../redux/slices/sidebar";

interface UserInfoInterface {
  phoneNumber: string;
  email: string;
  address: string;
  username: string;
}

const Header: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [showRegisterModal, toggleRegisterModal] = useState(false);
  const [showLoginModal, toggleLoginModal] = useState(false);
  const { data: loginData } = useSelector((state: {auth: {login: { data: string[] }}}) => state.auth.login);
  const { data: registerData } = useSelector((state: {auth: {register: { data: string[] }}}) => state.auth.register);
  const [userInfo, setUserInfo] = useState<UserInfoInterface | null>(null);
  const { showSidebar } = useSelector((state: {sidebar: { showSidebar: boolean }}) => state.sidebar);

  useEffect(() => {
    if (getLocalStorageWithExpiry('token')) {
      setUserInfo(getLocalStorageWithExpiry('userInfo'));
    }
  }, [loginData, registerData, setUserInfo]);
  const logoutHandler = () => {
    setUserInfo(null);
    clearLocalStorage();
  }
  return (
    <header>
      <Register showModal={showRegisterModal} toggleModal={toggleRegisterModal}/>
      <Login showModal={showLoginModal} toggleModal={toggleLoginModal}/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="full">
              <Link href={'/'}>
                <a className="logo" href="#">
                  <Image src="/images/logo.png" alt="logo" layout='intrinsic' width={183} height={63}/>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-9">
            <div className="full">
              <div className="right_header_info">
                <ul>
                  {userInfo && userInfo.phoneNumber &&
                    <li className="dinone">
                      <span style={{marginRight: '15px'}}>Contact Us :</span>
                      <Image className='header-phone-icon' layout='intrinsic' width={19} height={19} src="/images/phone_icon.png" alt="phone_icon"/>
                      <a style={{ marginLeft: '15px' }} href="#">{userInfo.phoneNumber}</a>
                    </li>
                  }
                  {userInfo && userInfo.email &&
                    <li className="dinone">
                        <Image className='header-mail-icon' layout='intrinsic' width={25} height={17} src="/images/mail_icon.png" alt="mail_icon"/>
                        <a style={{ marginLeft: '15px' }} href="#">{userInfo.email}</a>
                    </li>
                  }
                  {userInfo && userInfo.address &&
                    <li className="dinone">
                      <Image className='header-location-icon' src="/images/location_icon.png" alt="location_icon" layout='intrinsic' width={16} height={21}/>
                      <a style={{ marginLeft: '15px' }} href="#">{userInfo.address}</a>
                    </li>
                  }
                  {userInfo && userInfo.username &&
                    <li className="dinone" >
                        <Image className='header-user-icon' layout='intrinsic' width={16} height={16} src="/images/user.png" alt="user"/>
                        <a style={{ marginLeft: '15px' }} href="#">
                          {`${userInfo.username} `}
                          <Logout onClick={logoutHandler}>Logout</Logout>
                        </a>
                    </li>
                  }
                  {!userInfo &&
                    <li className="button_user">
                      <div className="button active" onClick={() => toggleLoginModal(!showRegisterModal)}>Login</div>
                      <div className="button" onClick={() => toggleRegisterModal(!showLoginModal)}>Register</div>
                    </li>
                  }
                  <li>
                    <Image className='header-search-icon' layout='intrinsic' width={16} height={16} src="/images/search_icon.png" alt="search_icon"/>
                  </li>
                  <li>
                    <button type="button" id="sidebarCollapse" onClick={() => dispatch(toggleSidebar(!showSidebar))}>
                      <Image src="/images/menu_icon.png" alt="menu_icon" layout='intrinsic' width={34} height={28}/>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
