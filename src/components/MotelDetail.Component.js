import React, { useState, useEffect, useContext, useMemo } from "react";
import { MotelContext } from "../contexts/Motel.Context";

export default function MotelDetail({ listMotel, getMotelById }) {
  const motelContext = useContext(MotelContext);
  const [motel, setMotel] = useState();

  useEffect(() => {
    document.title = "Chi tiết";
    const id = window.location.pathname.slice(8);
    console.log("useeffect");
    getMotelById(id);
    // console.log(motelContext.findMotelById(id));
  }, []);
  return (
    <div className="motel-detail container">
      {console.log(listMotel)}
      {console.log("dom render")}
      {listMotel && (
        <div>
          <div className="img-cover">
            <img
              src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/03/10/z2372635820017-a799e12b812c7d3db8b2a8fc80af7077_1615391073.jpg"
              alt="img cover"
            ></img>
          </div>
          <div className="title">
            <h2>{listMotel.title}</h2>
          </div>
          <div className="cover-des">
            <div className="address">
              <p>
                <span className="title">Địa chỉ: </span>{" "}
                <span>{listMotel.address}</span>
              </p>
            </div>
            <div className="hashtag">
              <div className="price">
                <p>
                  <span className="title">Giá: </span>{" "}
                  <span>{listMotel.price} triệu/tháng</span>
                </p>
              </div>
              <div className="square">
                <p>
                  <span className="title">Diện tích: </span>{" "}
                  <span>{listMotel.square} m²</span>
                </p>
              </div>
            </div>
          </div>

          <div className="des">
            <h3>Thông tin mô tả</h3>
            <div className="des-detail">
              <p>
                {listMotel.des}
                PHÒNG TRỌ MỚI, ĐẸP SỐ 373/1/2a LÝ THƯỜNG KIỆT, GẦN ĐH BÁCH KHOA
                - Phòng nằm ngay trung tâm quận Tân Bình (xem hình thật). HẼM
                THÔNG, HẼM TO cách ĐƯỜNG LÝ THƯỜNG KIỆT 30m. - Nằm cách Trường
                Đại Học BÁCH KHOA 700m, cách chợ Ông Địa 100m, Nằm sau lưng
                trường THPT Nguyễn. Thái Bình, cách chợ Tân Bình 800m - Phòng
                được ốp lát gạch sạch sẽ , tất cả các phòng đều có Máy lạnh,
                Quạt hút nhưng Cửa sổ vẫn bao la… nhiều phòng có BAN CÔNG rất
                thoáng mát. - Phòng có Gác lững đẹp nằm ngủ, có kệ Bếp nấu ăn,
                Toilet đầy đủ thiết bị vệ sinh, nước nóng năng lượng mặt trời -
                Thang máy chất lượng thuận tiện đi lại, Có Camera an ninh quan
                sát các tầng, khóa vân tay, Sân thượng phơi quần áo có mái che
              </p>
            </div>
          </div>
          <div className="contact">
            <h6>Giá: {listMotel.price}tr</h6>
            <h6>Địa chỉ: {listMotel.address}</h6>
            <h6>Khu vực: Nông Lâm tp HCM</h6>
            <h6>Đt: {listMotel.phone}</h6>
          </div>
        </div>
      )}
    </div>
  );
}
