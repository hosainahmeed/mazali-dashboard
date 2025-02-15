import React from "react";
import { Popconfirm, Table } from "antd";
import UserImage from "../../Utils/Sideber/UserImage";
import { Space, Button } from "antd";
import { RiDeleteBinLine } from "react-icons/ri";
const UserManageTable = ({ data, pagination }) => {
  const paymentDataInformation =
    data.map((payment, index) => ({
      key: payment._id,
      sl_No: index + 1,
      user: {
        name: payment?.user?.name || "N/A",
        email: payment?.user?.email || "N/A",
        profile_image:
          "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" ||
          payment?.user?.profile_image,
        phoneNumber: payment?.user?.phoneNumber || "N/A",
        location: payment?.user?.location || "N/A",
      },
    })) || [];

  const columns = [
    {
      title: "Sl no.",
      dataIndex: "sl_No",
      key: "sl_No",
      render: (sl_No) => <p>#{sl_No}</p>,
    },
    {
      title: "User Info",
      dataIndex: "user",
      key: "user",
      render: (user) => (
        <UserImage
          image={user?.profile_image}
          name={user?.name}
          email={user?.email}
        />
      ),
    },
    {
      title: "Phone Number",
      dataIndex: ["user", "phoneNumber"],
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: ["user", "email"],
      key: "phoneNumber",
    },
    {
      title: "Location",
      dataIndex: ["user", "location"],
      key: "location",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
          placement="topLeft"
            title="Confirm Deletion"
            description="Are you sure you want to delete this user?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"  
            cancelText="No"
          >
            <Button type="default" shape="circle">
              <RiDeleteBinLine />
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      rowClassName={() => "table-row"}
      className="mt-2"
      dataSource={paymentDataInformation}
      columns={columns}
      pagination={{ pageSize: 9 }}
    />
  );
};

export default UserManageTable;
