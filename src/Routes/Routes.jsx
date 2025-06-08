import React from "react";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Login from "../Pages/Auth/Login";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import Otp from "../Pages/Auth/Otp";
import { createBrowserRouter } from "react-router";
import UserManage from "../Pages/Dashboard/UserManage";
import TermsCondition from "../Pages/Dashboard/TermsCondition";
import PrivacyPolicy from "../Pages/Dashboard/PrivacyPolicy";
import Profile from "../Pages/Dashboard/Profile.jsx";
import AllSubscriber from "../Pages/Dashboard/AllSubscriber.jsx";
import Subscription from "../Pages/Dashboard/Subscription.jsx";
import CategoryManage from "../Pages/Dashboard/CategoryManage.jsx";
import SubcategoryManagement from "../Pages/Dashboard/SubcategoryManagement.jsx";
import ResetPassword from "../../../navid-dashboard/src/Pages/Auth/ResetPassword.jsx";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <DashboardHome />,
      },
      {
        path: "/user-management",
        element: <UserManage />,
      },
      {
        path: "/subscriber-management",
        element: <AllSubscriber />,
      },
      {
        path: "/subscription-management",
        element: <Subscription />,
      },
      {
        path: "//subcategory-management",
        element: <SubcategoryManagement />,
      },
      {
        path: "/category-management",
        element: <CategoryManage />,
      },
      {
        path: "/terms-&-condition",
        element: <TermsCondition />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);
