import { Table, Popconfirm, message, Modal, Button } from "antd";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import PageHeading from "../../Components/Shared/PageHeading";
import { FaPlus } from "react-icons/fa6";
import CategoryAddModal from "../../Components/modal/CategoryAddModal";
import AddSubCategoryModal from "../../Components/modal/AddSubCategoryModal";

const SubcategoryManagement = () => {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  // Dummy data
  const [categories, setCategories] = useState([
    { sl_no: 1, name: "Electronics", sub_category: "Mobiles", _id: "1" },
    { sl_no: 2, name: "Fashion", sub_category: "Clothing", _id: "2" },
    { sl_no: 3, name: "Home Appliances", sub_category: "Kitchen", _id: "3" },
  ]);

  const handleDelete = (id) => {
    console.log("Deleted Category ID:", id);
    message.success("Category deleted successfully.");
    setCategories(categories.filter((category) => category._id !== id));
  };

  const columns = [
    { title: "Sl_no", dataIndex: "sl_no", key: "sl_no" },
    { title: "Category Name", dataIndex: "name", key: "name" },
    { title: "Sub Category", dataIndex: "sub_category", key: "sub_category" },
    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <Popconfirm
          placement="topLeft"
          title="Confirm Deletion"
          description="Are you sure you want to delete this category?"
          onConfirm={() => handleDelete(record._id)}
          okText="Yes"
          cancelText="No"
        >
          <MdDelete className="cursor-pointer text-red-500 text-2xl" />
        </Popconfirm>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <PageHeading text="Category" />
        {/* Search and add category button */}
        <div className="end-center">
          {/* <Search value={searchTerm} setValue={setSearchTerm} /> */}
          <Button
            onClick={() => setCategoryModalOpen(true)}
            style={{
              maxWidth: "220px",
              justifyContent: "center",
              height: "44px",
            }}
          >
            Add Sub Category <FaPlus />
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={categories} rowKey="_id" />{" "}
      <Modal
        className="addcategory"
        open={categoryModalOpen}
        onCancel={() => setCategoryModalOpen(false)}
        footer={false}
        centered
      >
        <AddSubCategoryModal closeModal={() => setCategoryModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default SubcategoryManagement;
