import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { Form, Field } from "react-final-form";

const onSubmit = (values) => {
  console.log(values);
};
export default function PostMotel() {
  document.title = "Đăng phòng";
  return (
    <div className="post-motel container">
      <div className="post-motel-form">
        <h2 style={{ textAlign: "center" }}>Đăng phòng trọ</h2>
        <div className="">
          <Form
            onSubmit={onSubmit}
            validate={(values) => {
              const errors = {};
              function validateEmail(email) {
                var re =
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
              }
              if (!values.fname) {
                errors.fname = "Required";
              }
              if (!values.lname) {
                errors.lname = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
              } else if (!validateEmail(values.email)) {
                errors.email = "Not an email adress";
              }
              if (!values.password) {
                errors.password = "Required";
              }
              if (!values.tos) {
                errors.tos = "Required";
              }
              if (!values.confirmPassword) {
                errors.confirmPassword = "Required";
              } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = "Does not match";
              }
              return errors;
            }}
            render={({
              handleSubmit,
              values,
              submitting,
              validating,
              valid,
            }) => (
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="Tiêu đề">Tiêu đề</Label>
                  <Field name="title">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="text"
                          placeholder="Tiêu đề bài viết..."
                          invalid={meta.error && meta.touched}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Số điện thoại</Label>
                  <Field name="email">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="email"
                          placeholder="Số điện thoại..."
                          invalid={meta.error && meta.touched}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Label for="price">Giá</Label>
                  <Field name="price">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="text"
                          placeholder="Giá..."
                          invalid={meta.error && meta.touched}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Label for="square">Diện tích</Label>
                  <Field name="square">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="text"
                          placeholder="Diện tích..."
                          invalid={meta.error && meta.touched}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Label for="address">Địa chỉ</Label>
                  <Field name="fname">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="text"
                          placeholder="Địa chỉ..."
                          invalid={meta.error && meta.touched}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Label for="fname">Mô tả</Label>
                  <Field name="fname">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="text"
                          placeholder="Mô tả..."
                          invalid={meta.error && meta.touched}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </FormGroup>

                <FormGroup>
                  <Label for="des">Ảnh mô tả</Label>
                  <Field name="des">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="file"
                          invalid={meta.error && meta.touched}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </FormGroup>

                <FormGroup check>
                  <Field name="tos" type="checkbox">
                    {({ input, meta }) => (
                      <Label>
                        <Input
                          {...input}
                          type="checkbox"
                          invalid={meta.error && meta.touched}
                        />{" "}
                        Check Me
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </Label>
                    )}
                  </Field>
                </FormGroup>
                <Button type="submit" color="primary" disabled={!valid}>
                  Submit
                </Button>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
}
