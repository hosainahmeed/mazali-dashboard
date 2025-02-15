import React from "react";
import { Button, Form, Input, Spin } from "antd";
// import { usePatchNewPasswordMutation } from "../../Redux/api/authApis";

const ChangePassword = () => {
  const [form] = Form.useForm();
  //   const [setNewPassword, { isLoading: isNewPassChange }] =
  // usePatchNewPasswordMutation({});
  const onFinish = async (values) => {
    console.log("Success:", values);
    // const ChangePasswordDatas = {
    //   oldPassword: values.oldPassword,
    //   newPassword: values.newPassword,
    //   confirmPassword: values.confirmPassword,
    // };
    // try {
    //   await setNewPassword(ChangePasswordDatas).unwrap();
    //   message.success("Password Changed successfully.");
    // } catch (error) {
    //   console.error("Failed to change password:", error);
    //   message.error("Failed to change Password.");
    // }
  };
  return (
    <Form
      requiredMark={false}
      form={form}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        name="oldPassword"
        label={<span className="text-white">Old Password</span>}
        rules={[
          {
            required: true,
            message: "name is required",
          },
        ]}
      >
        <Input.Password
          style={{
            width: "100%",
            height: 40,
            border: "none",
            borderRadius: "5px",
            color: "#111",
            backgroundColor: "#fff",
            outline: "none",
          }}
          className="!bg-[#1E1E1E] !text-white p-2 w-full outline-none"
        />
      </Form.Item>

      <Form.Item
        name="newPassword"
        label={<span className="text-white">New Password</span>}
        rules={[
          {
            required: true,
            message: "name is required",
          },
        ]}
      >
        <Input.Password
          style={{
            width: "100%",
            height: 40,
            border: "none",
            borderRadius: "5px",
            color: "#111",
            backgroundColor: "#fff",
            outline: "none",
          }}
          className="!bg-[#1E1E1E] !text-white p-2 w-full outline-none"
        />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        label={<span className="text-white">Confirm Password</span>}
        rules={[
          {
            required: true,
            message: "phone number is required",
          },
        ]}
      >
        <Input.Password
          style={{
            width: "100%",
            height: 40,
            border: "none",
            borderRadius: "5px",
            color: "#111",
            backgroundColor: "#fff",
            outline: "none",
          }}
          className="!bg-[#1E1E1E] !text-white p-2 w-full outline-none"
        />
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        // disabled={isNewPassChange}
        className="!bg-[#00D5A9] !hover:bg-[#00D5A9] active:bg-[#00D5A9] w-full"
      >
        {/* {isNewPassChange ? <Spin /> : "Update password"} */}
        update pass
      </Button>
    </Form>
  );
};

export default ChangePassword;
