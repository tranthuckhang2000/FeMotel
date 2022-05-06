import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useNav,
  useMemo,
} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { AccountContext } from "../contexts/Account.Context";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [urlPath, setUrlPath] = useState("");
  const [nameUser, setNameUser] = useState();
  const [logInStatus, setLogInStatus] = useState(false);
  const accountContext = useContext(AccountContext);

  const toggle = () => setIsOpen(!isOpen);

  const menu = [
    // { nameEn: "", nameVi: "Tra Cứu Kỹ Thuật" },
    { nameEn: "/home", nameVi: "Trang Chủ" },
    { nameEn: "/find", nameVi: "Tra Cứu Phòng Trọ" },
    { nameEn: "/post-motel", nameVi: "Đăng Trọ Mới" },
  ];

  useEffect(() => {
  }, [localStorage.getItem("account")]);

  const logOut = () => {
    localStorage.removeItem("account");
    accountContext.setFullName(null);

    
  };
  // const motel-room
  const [styleNav, setStyleNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setStyleNav(true);
      } else {
        setStyleNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useMemo(() => {
    const url = window.location.pathname.slice(1);
    setUrlPath(url);
  }, []);
  useMemo(() => {
    if (localStorage.getItem("account")) {
      setNameUser(localStorage.getItem("account"));
      // setLogInStatus(true);

    }
  }, []);
  // useEffect(() => {

  // }, [accountContext.])

  return (
    <div>
      {!styleNav && (
        <div id="nav-main" className="container-fluid">
          <Navbar className="container" light expand="md">
            <NavbarBrand href="/home">
              {/* <Link to="/">App Exam</Link> */}
              {console.log(accountContext.fullName)}
              Zero Nine
            </NavbarBrand>
            <Collapse id="nav-item" isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                {menu.map((item) => (
                  <NavItem key={item.nameEn}>
                    <NavLink
                      className={urlPath === item.nameEn ? "active" : {}}
                      href={item.nameEn}
                      // onClick={() => setNameTicker(item.nameEn)}
                    >
                      {item.nameVi} |
                    </NavLink>
                  </NavItem>
                ))}
                <NavItem>
                  <NavLink
                    className=""
                    href="logup"
                    // onClick={() => setNameTicker(item.nameEn)}
                  >
                    Đăng ký |
                  </NavLink>
                </NavItem>
                {localStorage.getItem("account") && (
                  <NavItem>
                    <NavLink className="" href="#">
                      <span style={{ color: "#09e381" }}>
                        {localStorage.getItem("account")}{" "}
                      </span>
                      /{" "}
                      <span
                        style={{ color: "white" }}
                        onClick={() => {
                          logOut();
                          setLogInStatus(false);
                        }}
                      >
                        Đăng xuất
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {!localStorage.getItem("account") && (
                  <NavItem>
                    <NavLink
                      className=""
                      href="/login"
                      // onClick={() => setNameTicker(item.nameEn)}
                    >
                      {" "}
                      Đăng nhập
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )}

      {styleNav && (
        <div
          id="nav-main"
          style={{ backgroundColor: "#1e262e" }}
          className="container-fluid"
        >
          <Navbar className="container" light expand="md">
            <NavbarBrand href="/">
              {/* <Link to="/">App Exam</Link> */}
              Zero Nine
            </NavbarBrand>
            <NavbarToggler
              style={{
                backgroundImage: "url(../assets/images/menu-mobile-icon)",
              }}
              onClick={toggle}
            />
            <Collapse id="nav-item" isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                {menu.map((item) => (
                  <NavItem key={item.nameEn}>
                    <NavLink
                      className={urlPath === item.nameEn ? "active" : {}}
                      href={item.nameEn}
                      // onClick={() => setNameTicker(item.nameEn)}
                    >
                      {item.nameVi} |
                    </NavLink>
                  </NavItem>
                ))}
                <NavItem>
                  <NavLink
                    className=""
                    href="logup"
                    // onClick={() => setNameTicker(item.nameEn)}
                  >
                    Đăng ký |
                  </NavLink>
                </NavItem>
                {localStorage.getItem("account") && (
                  <NavItem>
                    <NavLink className="" href="#">
                      <span style={{ color: "#09e381" }}>{localStorage.getItem("account")} </span>/{" "}
                      <span
                        style={{ color: "white" }}
                        onClick={() => {
                          logOut();
                        }}
                      >
                        Đăng xuất
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {!localStorage.getItem("account") && (
                  <NavItem>
                    <NavLink
                      className=""
                      href="/login"
                      // onClick={() => setNameTicker(item.nameEn)}
                    >
                      {" "}
                      Đăng nhập
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )}
    </div>
  );
};

export default Header;
