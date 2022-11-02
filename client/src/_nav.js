import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilDescription,
  cilViewQuilt,
  cilRunning,
  cilGraph,
  cilBarChart,
  cilTerrain,
  cilDrink,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Read the Paper",
    to: "https://arxiv.org/abs/2111.15397?fbclid=IwAR2vCkHYiy5yuPPjWXpJgAJs-uD5NkH4liORt1ch4a6X_kmpMqagGtXyez4",
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "Documentation",
  },
  {
    component: CNavItem,
    name: "Overview",
    to: "https://neuralprophet.com/html/contents.html",
    icon: <CIcon icon={cilViewQuilt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Quick Start Guide",
    to: "https://neuralprophet.com/html/quickstart.html",
    icon: <CIcon icon={cilRunning} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Tutorials",
  },
  {
    component: CNavItem,
    name: "Autoregression",
    to: "https://neuralprophet.com/html/autoregression_yosemite_temps.html",
    icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Benchmarking",
    to: "https://neuralprophet.com/html/benchmarking.html",
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Multiplicative Seasonality",
    to: "https://neuralprophet.com/html/season_multiplicative_air_travel.html",
    icon: <CIcon icon={cilTerrain} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Events and Holidays",
    to: "https://neuralprophet.com/html/events_holidays_peyton_manning.html",
    icon: <CIcon icon={cilDrink} customClassName="nav-icon" />,
  },
];

export default _nav;
