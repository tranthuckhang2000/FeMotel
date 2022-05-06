import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useNav,
  useMemo,
} from "react";
import { AccountContext } from "../contexts/Account.Context";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { Form, Field } from "react-final-form";
import { useNavigate } from "react-router-dom";

const onSubmit = (values) => {
  console.log(values);
};

export default function LogUp({ isLoading, listAccount, getAllAccount }) {
  const accountContext = useContext(AccountContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("account")) {
      navigate("/find");
    } else {
      getAllAccount();
      document.title = "Đăng Nhập";
    }
  }, []);

  useEffect(() => {
    if (
      accountContext.valid &&
      accountContext.findAccountByEmailAndPass(
        accountContext.email,
        accountContext.pass,
        listAccount
      )
    ) {
      accountContext.setStatusLogIn(true);
      let acc = accountContext.getAccountByEmail(
        accountContext.email,
        listAccount
      );
      localStorage.setItem("account", acc.fullName);
      // console.log(accountContext.fullName);
      navigate("/find");
    } else {
      accountContext.setStatusLogIn(false);
    }
  }, [accountContext.countLogIn]);

  return (
    <div className="form-09">
      <h2 style={{ textAlign: "center" }}>Đăng Nhập</h2>
      <div className="border-gradient">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, values, submitting, validating, valid }) => (
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Field name="email">
                  {({ input, meta }) => (
                    <div>
                      <Input
                        {...input}
                        onChange={(e) => {
                          accountContext.setEmail(e.target.value);
                        }}
                        value={accountContext.email}
                        type="email"
                        placeholder="Email..."
                        invalid={meta.error && meta.touched}
                      />
                      {accountContext.valid === false &&
                        !accountContext.email && (
                          <span>Vui lòng nhập thông tin</span>
                        )}
                      {accountContext.valid &&
                        accountContext.statusLogIn === false && (
                          <span>Thông tin đăng nhập không đúng</span>
                        )}
                    </div>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Label for="password">Mật khẩu</Label>
                <Field name="password">
                  {({ input, meta }) => (
                    <div>
                      <Input
                        {...input}
                        onChange={(e) => {
                          accountContext.setPass(e.target.value);
                        }}
                        value={accountContext.pass}
                        type="password"
                        placeholder="Nhập lại mật khẩu..."
                        invalid={meta.error && meta.touched}
                      />
                      {accountContext.valid === false &&
                        !accountContext.pass && (
                          <span>Vui lòng nhập thông tin</span>
                        )}
                      {accountContext.valid &&
                        accountContext.statusLogIn === false && (
                          <span>Thông tin đăng nhập không đúng</span>
                        )}
                    </div>
                  )}
                </Field>
              </FormGroup>
              <Button
                color="primary"
                onClick={() => {
                  accountContext.validForm(
                    accountContext.email,
                    accountContext.pass
                  );
                  console.log();
                  accountContext.setCountLogIn((pre) => pre + 1);
                }}
              >
                Đăng nhập
              </Button>
            </form>
          )}
        />
      </div>
    </div>
  );
}
