import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const AddSubCategoryModal = ({ visible, onClose, onAdd }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    console.log({
      ...values,
      minPrice: values.minPrice,
      maxPrice: values.maxPrice,
    });
    // try {
    //   await onAdd(values);
    //   onClose();
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const categories = [
    { _id: '1', name: 'Electronics' },
    { _id: '2', name: 'Fashion' },
    { _id: '3', name: 'Home Appliances' },
  ];

  return (
    <Form
      requiredMark={false}
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <Form.Item
        className="col-span-2"
        label={<p className="text-white  text-2xl mb-3">Select Category</p>}
        name="category"
        rules={[{ required: true, message: 'Please select category!' }]}
      >
        <Select placeholder="Select Category">
          {categories.map((category) => (
            <Select.Option key={category._id} value={category._id}>
              {category.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        className="col-span-2"
        label={<p className="text-white">Subcategory Name</p>}
        name="subcategoryName"
        rules={[{ required: true, message: 'Please input subcategory name!' }]}
      >
        <Input placeholder="type here..." />
      </Form.Item>
      <Form.Item
        label={<p className="text-white">Min Price</p>}
        name="minPrice"
        required
      >
        <Input type="number" placeholder="type here..." />
      </Form.Item>
      <Form.Item
        label={<p className="text-white">Max Price</p>}
        name="maxPrice"
        required
      >
        <Input type="number" placeholder="type here..." />
      </Form.Item>
      <Form.Item className="col-span-2">
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
          type="submit"
        >
          Save
        </button>
      </Form.Item>
    </Form>
  );
};

export default AddSubCategoryModal;
