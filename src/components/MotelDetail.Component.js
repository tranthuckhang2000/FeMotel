import React from "react";

export default function MotelDetail() {
  document.title = "Chi tiết";
  return (
    <div className="motel-detail container">
      <div className="img-cover">
        <img
          src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/03/10/z2372635820017-a799e12b812c7d3db8b2a8fc80af7077_1615391073.jpg"
          alt="img cover"
        ></img>
      </div>
      <div className="title">
        <h2>
          PHÒNG TRỌ MỚI XÂY RẤT ĐẸP SỐ 373/1/2A ĐƯỜNG LÝ THƯỜNG KIỆT, QUẬN TÂN
          BÌNH - GẦN BÊN TRƯỜNG ĐẠI HỌC BÁCH KHOA
        </h2>
      </div>
      <div className="cover-des">
        <div className="address">
          <p>
            <span className="title">Địa chỉ: </span>{" "}
            <span>
              373/1/2A Phố Lý Thường Kiệt, Phường 9, Quận Tân Bình, Hồ Chí Minh
            </span>
          </p>
        </div>
        <div className="hashtag">
          <div className="price">
            <p>
              <span className="title">Giá: </span> <span>3.5 triệu/tháng</span>
            </p>
          </div>
          <div className="square">
            <p>
              <span className="title">Diện tích: </span> <span>15m2</span>
            </p>
          </div>
        </div>
      </div>

      <div className="des">
        <h3>Thông tin mô tả</h3>
        <div className="des-detail">
          <p>
            PHÒNG TRỌ MỚI, ĐẸP SỐ 373/1/2a LÝ THƯỜNG KIỆT, GẦN ĐH BÁCH KHOA -
            Phòng nằm ngay trung tâm quận Tân Bình (xem hình thật). HẼM THÔNG,
            HẼM TO cách ĐƯỜNG LÝ THƯỜNG KIỆT 30m. - Nằm cách Trường Đại Học BÁCH
            KHOA 700m, cách chợ Ông Địa 100m, Nằm sau lưng trường THPT Nguyễn
            Thái Bình, cách chợ Tân Bình 800m - Phòng được ốp lát gạch sạch sẽ ,
            tất cả các phòng đều có Máy lạnh, Quạt hút nhưng Cửa sổ vẫn bao la…
            nhiều phòng có BAN CÔNG rất thoáng mát. - Phòng có Gác lững đẹp nằm
            ngủ, có kệ Bếp nấu ăn, Toilet đầy đủ thiết bị vệ sinh, nước nóng
            năng lượng mặt trời - Thang máy chất lượng thuận tiện đi lại, Có
            Camera an ninh quan sát các tầng, khóa vân tay, Sân thượng phơi quần
            áo có mái che.
          </p>
        </div>
      </div>
      <div className="contact">
        <h6>Giá: 4tr</h6>
        <h6>Địa chỉ: 9 Phố Tạ Quang Bửu, Phường 5, Quận 8, Hồ Chí Minh</h6>
        <h6>Khu vực: Nông Lâm tp HCM</h6>
        <h6>Đt: 0908246366</h6>
      </div>
    </div>
  );
}
