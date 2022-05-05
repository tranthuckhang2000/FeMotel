import React, { useState, createContext } from "react";

const MotelContext = createContext();

function MotelProvider({ children }) {
  const [title, setTitle] = useState();
  const [phone, setPhone] = useState();
  const [price, setPrice] = useState();
  const [square, setSquare] = useState();
  const [address, setAddress] = useState();
  const [valid, setValid] = useState();
  const [des, setDes] = useState();
  const [img, setImg] = useState();
  const [findName, setFindName] = useState();

  const validForm = (...params) => {
    setValid(true);
    for (let i = 0; i < params.length; i++) {
      if (!params[i]) {
        setValid(false);
      }
    }
  };

  const findMotelByTitle = (title, listMotel) => {
    var result = [];
    // console.log(listMotel);
    for (let i = 0; i < listMotel.length; i++) {
      let a = title.toLowerCase();
      let b = listMotel[i].title.toLowerCase();
      if (b.indexOf(a) !== -1) {
        result.push(listMotel[i]);
      }
    }
    return result;
  };
  const findMotelById = (id, listMotel) => {
    for (let i = 0; i < listMotel.length; i++) {
      if (id === listMotel[i].id) {
        return listMotel[i];
      }
    }
  };

  var value = {
    title,
    setTitle,
    phone,
    setPhone,
    price,
    setPrice,
    square,
    setSquare,
    address,
    setAddress,
    valid,
    setValid,
    des,
    setDes,
    img,
    setImg,
    findMotelByTitle,
    findName,
    setFindName,
    findMotelById
  };
  return (
    <MotelContext.Provider value={value}>{children}</MotelContext.Provider>
  );
}

export { MotelContext, MotelProvider };
