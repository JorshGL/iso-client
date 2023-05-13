import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Layout = ({ element }) => {
  return (
    <div className="min-h-screen w-screen relative">
      <SideBar />
      <TopBar backButtonEnabled={true} />
      <div className="absolute right-0 bottom-0 w-4/5 h-5/6 font-inter">
        {element}
      </div>
    </div>
  );
};

export default Layout;
