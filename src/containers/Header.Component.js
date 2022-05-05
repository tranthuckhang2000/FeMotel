import React, { useState, useEffect, useRouteMatch, useMemo } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [urlPath, setUrlPath] = useState("");
  const toggle = () => setIsOpen(!isOpen);

  const menu = [
    // { nameEn: "", nameVi: "Tra Cứu Kỹ Thuật" },
    { nameEn: "/home", nameVi: "Trang Chủ" },
    { nameEn: "/find", nameVi: "Tra Cứu Phòng Trọ" },
    { nameEn: "/post-motel", nameVi: "Đăng Trọ Mới" },
  ];

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

  return (
    <div>
      {!styleNav && (
        <div id="nav-main" className="container-fluid">
          <Navbar className="container" light expand="md">
            <NavbarBrand href="/home">
              {/* <Link to="/">App Exam</Link> */}
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
                    href="/login"
                    // onClick={() => setNameTicker(item.nameEn)}
                  >
                    Đăng nhập |
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className=""
                    href="logup"
                    // onClick={() => setNameTicker(item.nameEn)}
                  >
                    Đăng ký
                  </NavLink>
                </NavItem>
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
                    href="/login"
                    // onClick={() => setNameTicker(item.nameEn)}
                  >
                    Đăng nhập |
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className=""
                    href="logup"
                    // onClick={() => setNameTicker(item.nameEn)}
                  >
                    Đăng ký
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )}
    </div>
  );
};

export default Header;
