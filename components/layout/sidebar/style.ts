import styled from 'styled-components';


export const SidebarWrapper = styled.div`
  #sidebar {
    width: 280px;
    position: fixed;
    top: 0;
    left: ${(props: {showSidebar: boolean}) => (props.showSidebar ? `0` : `-280px`)};
    height: 100vh;
    z-index: 999;
    background: #fff;
    color: #fff !important;
    transition: all 0.3s;
    overflow-y: auto;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }
  #sidebar.active {
    left: 0;
  }
  #dismiss {
    width: 35px;
    height: 35px;
    line-height: 34px;
    text-align: center;
    background: #111;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  #dismiss:hover {
    background: #111;
    color: #fff;
  }
  .overlay {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 998;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  .overlay.active {
    display: block;
    opacity: 1;
  }
  #sidebarCollapse {
    background: transparent;
    padding: 0;
    border: none;
  }
  #sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
  }
  #sidebar ul.components {
    padding: 55px 0;
    color: rgba(0, 0, 0, 0.7);
  }
  #sidebar ul p {
    color: #fff;
    padding: 10px;
  }
  #sidebar ul li a {
    padding: 10px 25px;
    font-size: 1.3em;
    display: block;
    font-weight: 300;
  }
  #sidebar ul li a:hover {
    color: #fff;
    background: #d8b00f;
  }
  #sidebar ul li.active > a, a[aria-expanded="true"] {
    color: #fff;
    background: #d8b00f;
  }
  a[data-toggle="collapse"] {
    position: relative;
  }
  .dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
  ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
  }
  ul.CTAs {
    padding: 20px;
  }
  ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  a.download {
    background: #fff;
    color: #7386D5;
  }
  a.article, a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
  }
`;
