import React from "react";
import { BiCategory } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import { MdCreditCard } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { TbCategoryPlus } from "react-icons/tb";

export const SidebarLink = [
  {
    path: "/",
    label: "Dashboard",
    icon: <LuCalendarClock size={24} />,
  },
  {
    path: "/user-management",
    label: "User Management",
    icon: <FaRegCircleUser size={24} />,
  },
  {
    path: "/subscription-management",
    label: "Subscription Manage",
    icon: <MdCreditCard size={24} />,
  },
  {
    path: "/subscriber-management",
    label: "All Subscriber Manage",
    icon: <RiTeamFill size={24} />,
  },
  
  {
    path: "/category-management",
    label: "Category Manage",
    icon: <BiCategory size={24} />,
  },
  {
    path: "/subcategory-management",
    label: "Add Subcategory",
    icon: <TbCategoryPlus size={24} />,
  },
];

export const SettingLinks = [
  {
    path: "/terms-&-condition",
    label: "Terms & Condition",
  },

  {
    path: "/privacy-policy",
    label: "Privacy Policy",
  },
  {
    path: "/profile",
    label: "Profile",
  },
];
