import React from "react";
import { Form, Input, Button } from "antd";

const CategoryAddModal = ({ visible, onClose, onAdd }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    console.log(values);

    // try {
    //   await onAdd(values);
    //   onClose();
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <Form
      requiredMark={false}
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Form.Item
        label={<p className="text-white text-2xl mb-3">Add Category</p>}
        name="categoryName"
        rules={[{ required: true, message: "Please input category name!" }]}
      >
        <Input placeholder="type here..." />
      </Form.Item>
      <Form.Item>
        <button
          className=" px-4 py-2 rounded-md border-1 border-[#00D5A9] text-[#00D5A9]"
          key="cancel"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="text-white ml-2 px-4 py-2 rounded-md bg-[#00D5A9]"
          key="save"
          type="sumit"
        >
          Save
        </button>
      </Form.Item>
    </Form>
  );
};

export default CategoryAddModal;
