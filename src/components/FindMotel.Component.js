import React, { useState, useEffect, useContext } from "react";
import motel from "../assets/images/motel-room.jpg";
import { MotelContext } from "../contexts/Motel.Context";

export default function FindMotel({ listMotel, getAllMotel }) {
  const [square, setSquare] = useState();
  const [price, setPrice] = useState();
  const [listMotelFind, setListMotelFind] = useState([]);
  const [findStatus, setFindStatus] = useState(false);

  const squareArray = [
    { id: 1, title: "Dưới 10m²", valueLeft: 0, valueRight: 10 },
    { id: 2, title: "10m² - 20m²", valueLeft: 10, valueRight: 20 },
    { id: 3, title: "30m² - 40m²", valueLeft: 30, valueRight: 40 },
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
  const motelContext = useContext(MotelContext);

  useState(() => {
    document.title = "Tìm Kiếm";
    getAllMotel();
  }, []);
  useEffect(() => {
    setListMotelFind(listMotel);
  }, [listMotel]);

  return (
    <div className="container-fluid bkg">
      {console.log(listMotel)}
      <div className="container main main-body">
        <h1>Tìm Kiếm Phòng Trọ</h1>
        <div className="search-from">
          <input
            type="text"
            className="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Nhập nơi cần tìm.."
            value={motelContext.findName}
            onChange={(e) => motelContext.setFindName(e.target.value)}
          />
          <button
            type="button"
            className="btn"
            onClick={() => {
              setListMotelFind(
                motelContext.findMotelByTitle(motelContext.findName, listMotel)
              );
              setFindStatus(true);
              console.log(listMotel);
            }}
          >
            Tìm kiếm
          </button>
        </div>
        <div className="row" style={{minHeight: "800px"}}>
          <div className="col-sm-9">
            <div className="motel-room">
              {listMotelFind.length > 0 &&
                listMotelFind.map((item) => (
                  <div key={item.id} className="border-gradient">
                    <a href={`detail/${item.id}`} alt="detail">
                      <div className="motel-room-item">
                        <div className="des-image">
                          <img src={motel} alt="motel-room-img"></img>
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
                            <p>{item.des}</p>
                          </div>
                          <div className="contact">
                            <h6>Gọi {item.phone}</h6>
                            <h6>Nhắn Zalo</h6>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}

              {/* {listMotel.length &&
                !findStatus &&
                listMotel.map((item) => (
                  <div key={item.id} className="border-gradient">
                    <a href={`detail/${item.id}`} alt="detail">
                      <div className="motel-room-item">
                        <div className="des-image">
                          <img src={motel} alt="motel-room-img"></img>
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
                            <p>{item.des}</p>
                          </div>
                          <div className="contact">
                            <h6>Gọi {item.phone}</h6>
                            <h6>Nhắn Zalo</h6>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))} */}
            </div>
          </div>
          <div style={{ marginTop: "20px" }} className="filter col-sm-3">
            <div className="border-gradient">
              <div className="filter-item">
                <h6>Diện tích</h6>
                <ul>
                  {squareArray.map((item) => (
                    <li key={item.id}>
                      <input
                        type="radio"
                        checked={item.id == square}
                        onChange={() => {
                          setSquare(item.id);
                          setListMotelFind(
                            motelContext.fillMotelBySquare(
                              item.valueLeft,
                              item.valueRight,
                              listMotelFind
                            )
                          );
                          console.log("changing");
                          setFindStatus(true);
                        }}
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
                    <li key={item.id}>
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
