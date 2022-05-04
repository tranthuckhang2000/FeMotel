import React, { useState, useContext, createContext, useEffect } from "react";
import { AccountContext } from "../contexts/Account.Context";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { Form, Field } from "react-final-form";
const onSubmit = (values) => {
  console.log(values);
};

export default function LogUp({
  isLoading,
  saveAccount,
  listAccount,
  getAllAccount,
}) {
  document.title = "Đăng Ký";
  const accountContext = useContext(AccountContext);

  useEffect(() => {
    getAllAccount();
  }, []);

  return (
    <div className="form-09">
      <h2 style={{ textAlign: "center" }}>Đăng Ký</h2>
      <div className="border-gradient">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, values, submitting, validating, valid }) => (
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="fname">Họ và tên</Label>
                <Field name="fname">
                  {({ input, meta }) => (
                    <div>
                      <Input
                        {...input}
                        onChange={(e) => {
                          accountContext.setFullName(e.target.value);
                        }}
                        value={accountContext.fullName}
                        type="text"
                        placeholder="Họ và tên..."
                        invalid={meta.error && meta.touched}
                      />
                      {accountContext.valid === false &&
                        !accountContext.fullName && (
                          <span>Vui lòng nhập thông tin</span>
                        )}
                    </div>
                  )}
                </Field>
              </FormGroup>
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
                      {accountContext.findAccountByEmail(
                        accountContext.email,
                        listAccount
                      ) === true && <span>Email đã tồn tại</span>}
                    </div>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Label for="phone">Số điện thoại</Label>
                <Field name="phone">
                  {({ input, meta }) => (
                    <div>
                      <Input
                        {...input}
                        onChange={(e) => {
                          accountContext.setPhone(e.target.value);
                        }}
                        value={accountContext.phone}
                        type="phone"
                        placeholder="Số điện thoại..."
                        invalid={meta.error && meta.touched}
                      />
                      {accountContext.valid === false &&
                        !accountContext.phone && (
                          <span>Vui lòng nhập thông tin</span>
                        )}
                      {accountContext.phone && accountContext.findAccountByPhone(
                        accountContext.phone,
                        listAccount
                      ) && <span>Số điện thoại đã tồn tại</span>}
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
                        placeholder="Mật khẩu..."
                        invalid={meta.error && meta.touched}
                      />
                      {accountContext.valid === false &&
                        !accountContext.pass && (
                          <span>Vui lòng nhập thông tin</span>
                        )}
                      {accountContext.pass !== accountContext.rePass && (
                        <span>Mật khẩu không khớp</span>
                      )}
                    </div>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Nhập lại mật khẩu</Label>
                <Field name="confirmPassword">
                  {({ input, meta }) => (
                    <div>
                      <Input
                        {...input}
                        onChange={(e) => {
                          accountContext.setRePass(e.target.value);
                        }}
                        value={accountContext.rePass}
                        type="password"
                        placeholder="Nhập lại mật khẩu..."
                        invalid={meta.error && meta.touched}
                      />
                      {accountContext.valid === false &&
                        !accountContext.rePass && (
                          <span>Vui lòng nhập thông tin</span>
                        )}{" "}
                      {accountContext.pass !== accountContext.rePass && (
                        <span>Mật khẩu không khớp</span>
                      )}
                    </div>
                  )}
                </Field>
              </FormGroup>
              <Button
                color="primary"
                onClick={() => {
                  accountContext.validForm(
                    accountContext.fullName,
                    accountContext.email,
                    accountContext.phone,
                    accountContext.pass,
                    accountContext.rePass
                  );
                  if (
                    valid &&
                    accountContext.findAccountByPhone(
                      accountContext.phone,
                      listAccount
                    ) === false &&
                    accountContext.findAccountByEmail(
                      accountContext.email,
                      listAccount
                    ) === false
                  ) {
                    saveAccount(
                      accountContext.fullName,
                      accountContext.email,
                      accountContext.phone,
                      accountContext.pass
                    );
                  }
                }}
              >
                Đăng ký
              </Button>
            </form>
          )}
        />
      </div>
    </div>
  );
}
