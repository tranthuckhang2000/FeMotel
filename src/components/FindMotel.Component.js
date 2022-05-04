import React, { useState } from "react";
import motel from "../assets/images/motel-room.jpg";

export default function Find() {
  document.title = "Tìm Kiếm";
  const db = [
    {
      id: 1,
      title: "Accountant III",
      description:
        "eros viverra eget congue eget semper rutrum nulla nunc purus",
      square: 80,
      phone: "432-131-8110",
      image: "http://dummyimage.com/183x204.png/cc0000/ffffff",
      address: "Shangyuan",
    },
    {
      id: 2,
      title: "VP Marketing",
      description:
        "justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis",
      square: 7,
      phone: "970-756-2333",
      image: "http://dummyimage.com/102x77.png/ff4444/ffffff",
      address: "Gludug",
    },
    {
      id: 3,
      title: "Biostatistician I",
      description:
        "aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt",
      square: 59,
      phone: "980-548-6615",
      image: "http://dummyimage.com/91x155.png/ff4444/ffffff",
      address: "Alue Glumpang",
    },
    {
      id: 4,
      title: "Research Associate",
      description:
        "facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus",
      square: 100,
      phone: "187-508-7039",
      image: "http://dummyimage.com/260x84.png/5fa2dd/ffffff",
      address: "Sumbergedong",
    },
    {
      id: 5,
      title: "Internal Auditor",
      description:
        "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
      square: 10,
      phone: "700-959-2445",
      image: "http://dummyimage.com/74x57.png/cc0000/ffffff",
      address: "Sida",
    },
    {
      id: 6,
      title: "Structural Engineer",
      description:
        "suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis",
      square: 90,
      phone: "253-839-2273",
      image: "http://dummyimage.com/85x127.png/dddddd/000000",
      address: "Grimshaw",
    },
    {
      id: 7,
      title: "Marketing Manager",
      description:
        "non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit",
      square: 18,
      phone: "712-283-5696",
      image: "http://dummyimage.com/269x236.png/ff4444/ffffff",
      address: "Kętrzyn",
    },
    {
      id: 8,
      title: "Electrical Engineer",
      description:
        "sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante",
      square: 98,
      phone: "501-803-7449",
      image: "http://dummyimage.com/183x54.png/cc0000/ffffff",
      address: "Boussé",
    },
    {
      id: 9,
      title: "Paralegal",
      description:
        "diam cras pellentesque volutpat dui maecenas tristique est et tempus",
      square: 44,
      phone: "778-774-5159",
      image: "http://dummyimage.com/87x67.png/ff4444/ffffff",
      address: "Kaiapoi",
    },
    {
      id: 10,
      title: "Senior Cost Accountant",
      description:
        "est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
      square: 43,
      phone: "544-139-1630",
      image: "http://dummyimage.com/105x231.png/dddddd/000000",
      address: "Meadow Lake",
    },
    {
      id: 11,
      title: "Social Worker",
      description:
        "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at",
      square: 42,
      phone: "618-346-8676",
      image: "http://dummyimage.com/252x18.png/ff4444/ffffff",
      address: "Kufa",
    },
    {
      id: 12,
      title: "Environmental Specialist",
      description:
        "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi",
      square: 74,
      phone: "928-439-4674",
      image: "http://dummyimage.com/283x96.png/cc0000/ffffff",
      address: "Moratuwa",
    },
    {
      id: 13,
      title: "Data Coordiator",
      description:
        "quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque",
      square: 24,
      phone: "620-655-1101",
      image: "http://dummyimage.com/279x112.png/cc0000/ffffff",
      address: "Boissevain",
    },
    {
      id: 14,
      title: "Assistant Media Planner",
      description:
        "orci eget orci vehicula condimentum curabitur in libero ut massa volutpat",
      square: 59,
      phone: "369-345-5798",
      image: "http://dummyimage.com/3x67.png/5fa2dd/ffffff",
      address: "Halle",
    },
    {
      id: 15,
      title: "Recruiting Manager",
      description:
        "orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio",
      square: 37,
      phone: "355-682-5122",
      image: "http://dummyimage.com/167x13.png/ff4444/ffffff",
      address: "Patimuan",
    },
    {
      id: 16,
      title: "Software Test Engineer III",
      description:
        "primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est",
      square: 53,
      phone: "788-736-6255",
      image: "http://dummyimage.com/225x161.png/5fa2dd/ffffff",
      address: "Bayan Uula Sumu",
    },
    {
      id: 17,
      title: "Chemical Engineer",
      description:
        "velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat",
      square: 40,
      phone: "147-838-6568",
      image: "http://dummyimage.com/7x150.png/dddddd/000000",
      address: "Huangtudian",
    },
    {
      id: 18,
      title: "Associate Professor",
      description:
        "sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer",
      square: 76,
      phone: "694-953-3182",
      image: "http://dummyimage.com/182x99.png/dddddd/000000",
      address: "Zykovo",
    },
    {
      id: 19,
      title: "Developer III",
      description:
        "morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis",
      square: 87,
      phone: "572-986-9011",
      image: "http://dummyimage.com/63x163.png/ff4444/ffffff",
      address: "Bribir",
    },
    {
      id: 20,
      title: "Administrative Officer",
      description:
        "congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam",
      square: 71,
      phone: "490-531-1172",
      image: "http://dummyimage.com/63x139.png/5fa2dd/ffffff",
      address: "Ngou",
    },
  ];
  const [square, setSquare] = useState();
  const [price, setPrice] = useState();
  const [position, setPosition] = useState();

  const squareArray = [
    { id: 1, title: "Dưới 10m²" },
    { id: 2, title: "10m² - 20m²" },
    { id: 3, title: "30m² - 40m²" },
  ];
  const priceArray = [
    { id: 1, title: "Dưới 1tr" },
    { id: 2, title: "1tr - 2tr" },
    { id: 3, title: "2tr - 3tr" },
  ];
  const positionArray = [
    { id: 1, title: "Sư phạm kỹ thuật" },
    { id: 2, title: "Kinh tế HCM" },
    { id: 3, title: "Ngoại Thương" },
  ];

  return (
    <div className="container-fluid bkg">
      <div className="container main main-body">
        <img
          style={{ height: "300px" }}
          src="https://dummyimage.com/300x250.png/dddddd/000000"
          alt="test"
        />
        <h1>Tìm Kiếm Phòng Trọ</h1>
        <div className="search-from">
          <input
            type="text"
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Nhập nơi cần tìm"
          />
          <button type="button" class="btn">
            Tìm kiếm
          </button>
        </div>
        <div className="row">
          <div className="col-sm-9">
            <div className="motel-room">
              <div className="border-gradient">
                <div className="motel-room-item">
                  <div className="des-image">
                    <img src={motel} alt="motel-room-img"></img>
                  </div>
                  <div className="description">
                    <div className="title">
                      <h4>PHÒNG TRỌ SANG TRỌNG</h4>
                    </div>
                    <div className="price-square-address">
                      <h6>100tr/ngày</h6>
                      <h6>46m²</h6>
                      <h6>Thái Lan</h6>
                    </div>
                    <div className="des">
                      <p>
                        Cho Thuê Căn Hộ Sang Trọng - Địa Chỉ: 123 Băng Cốc -Thái
                        Lan - Nhà mới 80% có thang máy, máy lạnh đầy đủ - đường
                        lớn dễ di chuyển.
                      </p>
                    </div>
                    <div className="contact">
                      <h6>Gọi 0123334333</h6>
                      <h6>Nhắn Zalo</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-gradient">
                <div className="motel-room-item">
                  <div className="des-image">
                    <img src={motel} alt="motel-room-img"></img>
                  </div>
                  <div className="description">
                    <div className="title">
                      <h4>PHÒNG TRỌ SANG TRỌNG</h4>
                    </div>
                    <div className="price-square-address">
                      <h6>100tr/ngày</h6>
                      <h6>46m²</h6>
                      <h6>Thái Lan</h6>
                    </div>
                    <div className="des">
                      <p>
                        Cho Thuê Căn Hộ Sang Trọng - Địa Chỉ: 123 Băng Cốc -Thái
                        Lan - Nhà mới 80% có thang máy, máy lạnh đầy đủ - đường
                        lớn dễ di chuyển.
                      </p>
                    </div>
                    <div className="contact">
                      <h6>Gọi 0123334333</h6>
                      <h6>Nhắn Zalo</h6>
                    </div>
                  </div>
                </div>
              </div>

              {db.map((item) => (
                <div key={item.id} className="border-gradient">
                  <div className="motel-room-item">
                    <div className="des-image">
                      <img src={item.image} alt="motel-room-img"></img>
                    </div>
                    <div className="description">
                      <div className="title">
                        <h4>{item.title}</h4>
                      </div>
                      <div className="price-square-address">
                        <h6>{item.price}tr/tháng</h6>
                        <h6>{item.square}m²</h6>
                        <h6>{item.address}</h6>
                      </div>
                      <div className="des">
                        <p>
                          Cho Thuê Căn Hộ Cao CấpĐịa Chỉ: 174 Trần Bá Giao, P.5,
                          Q.Gò VấpTiện ích:- Nhà mới 100% có thang máy, mặt tiền
                          đường lớn dễ di chuyển- Phòng diện…
                        </p>
                      </div>
                      <div className="contact">
                        <h6>Gọi {item.phone}</h6>
                        <h6>Nhắn Zalo</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{marginTop: "20px"}} className="filter col-sm-3">
            <div className="border-gradient">
              <div className="filter-item">
                <h6>Diện tích</h6>
                <ul>
                  {squareArray.map((item) => (
                    <li>
                      <input
                        type="radio"
                        checked={item.id == square}
                        onChange={() => setSquare(item.id)}
                      />
                      <label>{item.title}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-gradient">
              <div className="filter-item">
                <h6>Trường</h6>
                <ul>
                  {positionArray.map((item) => (
                    <li>
                      <input
                        type="radio"
                        checked={item.id == position}
                        onChange={() => setPosition(item.id)}
                      />
                      <label>{item.title}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-gradient">
              <div className="filter-item">
                <h6>Giá tiền</h6>
                <ul>
                  {priceArray.map((item) => (
                    <li>
                      <input
                        type="radio"
                        checked={item.id == price}
                        onChange={() => setPrice(item.id)}
                      />
                      <label>{item.title}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
