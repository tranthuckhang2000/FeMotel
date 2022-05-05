import React, { useState, useEffect, useContext } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { Form, Field } from "react-final-form";
import { MotelContext } from "../contexts/Motel.Context";
const onSubmit = (values) => {
  console.log(values);
};
export default function PostMotel({ listMotel, saveMotel, getAllMotel }) {

  const motelContext = useContext(MotelContext);

  useEffect(() => {
    getAllMotel();
    document.title = "Đăng phòng";
  }, []);

  return (
    <div className="post-motel container">
      <div className="post-motel-form">
        <h2 style={{ textAlign: "center" }}>Đăng phòng trọ</h2>
        <div className="">
          <Form
            onSubmit={onSubmit}
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
                          value={motelContext.title}
                          onChange={(e) => motelContext.setTitle(e.target.value)}
                          // invalid
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
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
                          type="phone"
                          placeholder="Số điện thoại..."
                          value={motelContext.phone}
                          onChange={(e) => motelContext.setPhone(e.target.value)}
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
                          value={motelContext.price}
                          onChange={(e) => motelContext.setPrice(e.target.value)}
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
                          value={motelContext.square}
                          onChange={(e) => motelContext.setSquare(e.target.value)}
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
                  <Field name="address">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="text"
                          placeholder="Địa chỉ..."
                          value={motelContext.address}
                          onChange={(e) => motelContext.setAddress(e.target.value)}
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
                  <Label for="des">Mô tả</Label>
                  <Field name="des">
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="textarea"
                          placeholder="Mô tả..."
                          value={motelContext.des}
                          rows="5"
                          onChange={(e) => motelContext.setDes(e.target.value)}
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
                <Button
                  color="primary"
                  onClick={() => {
                    saveMotel(
                      motelContext.title,
                      motelContext.phone,
                      motelContext.price,
                      motelContext.square,
                      motelContext.address,
                      motelContext.des
                    );
                  }}
                >
                  Thêm post mới
                </Button>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
}
