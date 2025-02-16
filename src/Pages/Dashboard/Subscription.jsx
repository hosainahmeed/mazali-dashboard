import React, { useState, useCallback } from "react";
import { Card, Typography, Modal, Form, Input, Button, Select } from "antd";
import PageHeading from "../../Components/Shared/PageHeading";
import { FaEdit } from "react-icons/fa";

const PRICING_PLANS = [
  {
    title: "Starter",
    price: "9.99",
    numSearch: 3,
    numMinutes: 5,
    description: "Get a head start on your reselling career",
    planDuration: "monthly", // Default plan duration
  },
  {
    title: "Pro",
    price: "49.99",
    numSearch: 5,
    numMinutes: 3,
    description: "Grow your reselling career industry",
    planDuration: "monthly", // Default plan duration
  },
  {
    title: "Business",
    price: "99.99",
    numSearch: 15,
    numMinutes: 2,
    description: "Beat your competition instantly",
    planDuration: "monthly", // Default plan duration
  },
];

const PlanCard = ({ plan, onEdit }) => {
  const billingCycle = plan.planDuration === "monthly" ? "monthly" : "yearly";

  const features = [
    plan.description,
    "Access to bi-weekly auto-generated min/max prices",
    `Number of Searches: ${plan.numSearch}`,
    `${plan.numMinutes} Minute Notification Time`,
  ];

  return (
    <Card
      headStyle={{ border: "none" }}
      className="!bg-gradient-to-r !p-3 w-full h-full !from-[#067E65] !border-none !to-[#094c3f]"
      title={
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-2xl text-white font-semibold">{plan.title}</h1>
          <div className="flex gap-2">
            <h1 className="text-[60px] text-white">${plan.price}</h1>
            <small className="text-base text-white mt-12">
              / {billingCycle}
            </small>
          </div>
        </div>
      }
    >
      <div className="bg-white w-full h-[300px] flex-col flex items-start p-3 rounded-md justify-between">
        <div>
          <Typography.Title level={3}>Features:</Typography.Title>
          <Typography.Text type="secondary">
            <ul className="list-disc pl-4">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </Typography.Text>
        </div>
      </div>
      <Button shape="circle" className="mt-3" onClick={() => onEdit(plan)}>
        <FaEdit />
      </Button>
    </Card>
  );
};

function Subscription() {
  const [pricing, setPricing] = useState(PRICING_PLANS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [form] = Form.useForm(); // Ant Design Form instance

  const handleEditClick = useCallback(
    (plan) => {
      setSelectedPlan(plan);
      form.setFieldsValue({
        planDuration: plan.planDuration, // Set the current plan duration
        price: plan.price,
        numSearch: plan.numSearch,
        numMinutes: plan.numMinutes,
      });
      setIsModalOpen(true);
    },
    [form]
  );

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleSaveChanges = useCallback(
    (values) => {
      const updatedPlan = { ...selectedPlan, ...values };

      console.log("Updated Plan Data:", updatedPlan);

      // Here, you can make an API request with `updatedPlan`
      setIsModalOpen(false);
    },
    [selectedPlan]
  );

  return (
    <div className="w-full">
      <PageHeading text="Subscription" />
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="mt-4 grid-3">
          {pricing.map((plan, index) => (
            <PlanCard key={index} plan={plan} onEdit={handleEditClick} />
          ))}
        </div>
      </div>

      <Modal
        width={800}
        title="Edit Subscription"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          requiredMark={false}
          name="basic"
          layout="vertical"
          onFinish={handleSaveChanges}
          autoComplete="off"
          className="grid grid-cols-2 gap-4"
        >
          <Form.Item label="Plan Duration" name="planDuration">
            <Select>
              <Select.Option value="monthly">Monthly</Select.Option>
              <Select.Option value="yearly">Yearly</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Price" name="price" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Number of Searches"
            name="numSearch"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Notification Time (minutes)"
            name="numMinutes"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <div className="w-full col-span-2">
            <Form.Item className="w-full col-span-2">
              <Button
                type="primary"
                className="w-full !bg-[#08765F]"
                htmlType="submit"
              >
                Save
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Subscription;
