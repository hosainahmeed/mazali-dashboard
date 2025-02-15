import React, { useState, useCallback } from "react";
import { Card, Typography, Modal, Form, Input, Button, Radio } from "antd";
import PageHeading from "../../Components/Shared/PageHeading";
import JoditComponent from "../../Components/Shared/JoditComponent";

// Constants
const FEATURES = [
  "Monthly Subscriptions",
  "Yearly Subscriptions",
  "One Time Payment",
  "Recurring Payment",
  "Customizable Plans",
  "Plan Upgrades/Downgrades",
  "Pause/Resume Subscription",
  "Cancel Subscription",
];

const PRICING_PLANS = [
  { title: "Starter", price: "$4.99", features: FEATURES.slice(0, 3) },
  { title: "Pro", price: "$9.99", features: FEATURES.slice(0, 6) },
  { title: "Business", price: "$19.99", features: FEATURES },
];

// Reusable Plan Card Component
const PlanCard = ({ plan, onEdit }) => (
  <Card
    headStyle={{ border: "none" }}
    className="!bg-gradient-to-r !p-3 w-full h-full !from-[#067E65] !border-none !to-[#094c3f]"
    title={
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-2xl text-white font-semibold">{plan.title}</h1>
        <div className="flex gap-2">
          <h1 className="text-[60px] text-white">{plan.price}</h1>
          <small className="text-base text-white mt-12">/ monthly</small>
        </div>
      </div>
    }
  >
    <div className="bg-white w-full h-[300px] flex-col flex items-start p-3 rounded-md justify-between">
      <div>
        <Typography.Title level={3}>Features:</Typography.Title>
        <Typography.Text type="secondary">
          <ul className="list-disc pl-4">
            {plan.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </Typography.Text>
      </div>
      <Button onClick={() => onEdit(plan)}>Edit</Button>
    </div>
  </Card>
);

// Main Subscription Component
function Subscription() {
  const [pricing, setPricing] = useState(PRICING_PLANS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [editedPrice, setEditedPrice] = useState("");
  const [planDuration, setPlanDuration] = useState("year");
  const [price, setPrice] = useState("");
  const [numSearch, setNumSearch] = useState("");
  const [numMinutes, setNumMinutes] = useState(0);
  const [description, setDescription] = useState("");

  const handleEditClick = useCallback((plan) => {
    setSelectedPlan(plan);
    setEditedPrice(plan.price);
    setDescription(plan.features.join(", "));
    setIsModalOpen(true);
  }, []);

  const handleCancel = useCallback(() => setIsModalOpen(false), []);

  const handleSaveChanges = useCallback(() => {
    console.log("Plan Duration:", planDuration);
    console.log("Updated Price:", price);
    console.log("Number of Searches:", numSearch);
    console.log("Number of Minutes:", numMinutes);
    console.log("Updated Features:", description.split(", "));

    setIsModalOpen(false);
  }, [planDuration, price, numSearch, numMinutes, description]);

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
        width={1200}
        title="Edit Subscription"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          requiredMark={false}
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={handleSaveChanges}
          onFinishFailed={() => console.error("Failed to save changes")}
          autoComplete="off"
          className="grid grid-cols-2 gap-4"
        >
          <Form.Item
            label="Plan Duration"
            name="planDuration"
            rules={[{ required: true, message: "Please select plan duration" }]}
            className="col-span-2"
          >
            <Radio.Group
              value={planDuration}
              onChange={(e) => setPlanDuration(e.target.value)}
              className="text-white"
            >
              <Radio value="monthly">Monthly</Radio>
              <Radio value="year">Year</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please enter price" }]}
          >
            <Input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="dark-input"
            />
          </Form.Item>

          <Form.Item
            label="Number of Search"
            name="numSearch"
            rules={[
              { required: true, message: "Please enter number of search" },
            ]}
          >
            <Input
              value={numSearch}
              onChange={(e) => setNumSearch(e.target.value)}
              placeholder="Number of Search"
              className="dark-input"
            />
          </Form.Item>

          <Form.Item
            label="Number of Minutes"
            name="numMinutes"
            rules={[
              { required: true, message: "Please enter number of minutes" },
            ]}
            className="col-span-2"
          >
            <Input
              value={numMinutes}
              onChange={(e) => setNumMinutes(e.target.value)}
              placeholder="Number of Minutes"
              className="dark-input"
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter description" }]}
            className="col-span-2"
          >
            <JoditComponent
              className=""
              setContent={setDescription}
              content={description}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Subscription;
