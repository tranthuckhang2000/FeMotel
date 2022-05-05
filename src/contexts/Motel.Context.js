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

  const validForm = (...params) => {
    setValid(true);
    for (let i = 0; i < params.length; i++) {
      if (!params[i]) {
        setValid(false);
      }
    }
  };

  const findAccountByEmail = (email, listAccount) => {
    var result = false;
    for (let i = 0; i < listAccount.length; i++) {
      if (listAccount[i].email === email) {
        result = true;
      }
    }
    return result;

    // console.log(result);
  };
  const findAccountByPhone = (phone, listAccount) => {
    var result = false;
    if (listAccount.length > 0) {
      for (let i = 0; i < listAccount.length; i++) {
        if (listAccount[i].phone === phone) {
          result = true;
          // console.log(phone)
          // console.log(listAccount[i]);
        }
      }
      return result;
    }
  };

  const findAccountByEmailAndPass = (email, pass, listAccount) => {
    var result = false;
    console.log(email);
    console.log(pass);
    for (let i = 0; i < listAccount.length; i++) {
      if (listAccount[i].email === email && listAccount[i].pass === pass) {
        result = true;
      }
    }
    return result;
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
  };
  return (
    <MotelContext.Provider value={value}>{children}</MotelContext.Provider>
  );
}

export { MotelContext, MotelProvider };
