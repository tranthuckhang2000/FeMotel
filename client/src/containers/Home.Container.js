import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faBolt } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  document.title="Trang chủ"
  return (
    <div className="container-fluid" id="banner-intro">
      <div className="container-fluid home-intro">
        <div className="container intro-title">
          <h1>
            <span>Welcome</span>
            <span className="active" style={{ marginLeft: 10 }}>
              Zero Nine
            </span>
          </h1>
          <h1>Top 1 Nơi Tìm Kiếm Phòng Trọ</h1>
          {/* <h6> */}
          <h6>Nếu như bạn đang tìm kiếm phòng trọ </h6>
          <h6>Nơi đây là sự lựa chọn hàng đầu</h6>
          {/* </h6> */}
          <h6>
            <span className="icon-des">
              <i className="fas fa-wifi fa-lg"></i>
            </span>
            <span>Nhanh chóng</span>
          </h6>
          <h6>
            <span className="icon-des">
              <i className="fas fa-laptop-house fa-lg"></i>
            </span>
            <span>Chính xác</span>
          </h6>
          <div className="btn-start">
            <a href="/find" alt="">
              Bắt Đầu Tìm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
