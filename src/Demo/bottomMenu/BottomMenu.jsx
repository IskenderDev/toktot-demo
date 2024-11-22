import React, { useState } from "react";
import {
  UserOutlined,
  CreditCardOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Drawer } from "antd";
import Account from "../account/Account";
import Payments from "../payments/Payments";
import Support from "../support/Support";

const BottomMenu = () => {
  const [isDrawerOpen1, setIsDrawerOpen1] = useState(false);
  const [isDrawerOpen2, setIsDrawerOpen2] = useState(false);
  const [isDrawerOpen3, setIsDrawerOpen3] = useState(false);
  const toggleDrawer1 = () => {
    setIsDrawerOpen1(!isDrawerOpen1);
  };
  const toggleDrawer2 = () => {
    setIsDrawerOpen2(!isDrawerOpen2);
  };
  const toggleDrawer3 = () => {
    setIsDrawerOpen3(!isDrawerOpen3);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex justify-around items-center p-4">
        <button className="flex flex-col items-center" onClick={toggleDrawer1}>
          <UserOutlined className="text-2xl" />
          <span className="text-sm">Кабинет</span>
        </button>

        <Drawer
          placement="left"
          onClose={toggleDrawer1}
          open={isDrawerOpen1}
          bodyStyle={{ padding: 0 }}
          width={"100%"}
          className="transition-transform transform"
        >
          <Account />
        </Drawer>

        <button className="flex flex-col items-center" onClick={toggleDrawer2}>
          <CreditCardOutlined className="text-2xl" />
          <span className="text-sm">Оплата</span>
        </button>
        <Drawer
        closable={false}
          placement="top"
          onClose={toggleDrawer2}
          open={isDrawerOpen2}
          bodyStyle={{ padding: 0 }}
          height={"90%"}
          className="transition-transform transform"
        >
          <Payments />
        </Drawer>

        <button className="flex flex-col items-center" onClick={toggleDrawer3}>
          <QuestionCircleOutlined className="text-2xl" />
          <span className="text-sm">Помощь</span>
        </button>

        <Drawer
          closable={false}
          placement="right"
          onClose={toggleDrawer3}
          open={isDrawerOpen3}
          bodyStyle={{ padding: 0 }}
          width={"80%"}
          className="transition-transform transform"
        >
          <Support />
        </Drawer>
      </div>
    </div>
  );
};

export default BottomMenu;
