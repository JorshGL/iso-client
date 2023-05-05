import React from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import Search from "./components/Search";

const Home = () => {
  return (
    <div className="h-screen w-screen relative">
      <SideBar />
      <TopBar backButtonEnabled={true} />
      <Search />      
    </div>
  );
};

export default Home;
