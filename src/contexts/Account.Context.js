import React, { useState, createContext } from "react";

const AccountContext = createContext();

function AccountProvider({ children }) {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [fullName, setFullName] = useState("");
  const [pass, setPass] = useState();
  const [rePass, setRePass] = useState();
  const [valid, setValid] = useState();
  const [statusLogIn, setStatusLogIn] = useState();
  const [countLogIn, setCountLogIn] = useState(0);
  // const [ , set] = useState();
  // const [ , set] = useState();
  // const [ , set] = useState();
  // const [ , set] = useState();

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

  const test = (text) => {
    console.log(text);
  };

  var value = {
    phone,
    setPhone,
    email,
    setEmail,
    pass,
    setPass,
    setFullName,
    fullName,
    rePass,
    setRePass,
    setValid,
    valid,
    validForm,
    test,
    findAccountByEmail,
    findAccountByPhone,
    findAccountByEmailAndPass,
    statusLogIn,
    setStatusLogIn,
    countLogIn,
    setCountLogIn,
  };
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
}

export { AccountContext, AccountProvider };
