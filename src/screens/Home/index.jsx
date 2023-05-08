import React from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import Search from "./components/Search";
import InstructorsTable from "./components/InstructorsTable";

const Home = () => {
  return (
    <div className="h-screen w-screen relative">
      <SideBar />
      <TopBar backButtonEnabled={true} />
      <div className="absolute right-0 bottom-0 w-4/5 h-5/6 font-inter">
        <Search />
        <InstructorsTable />
      </div>
    </div>
  );
};

export default Home;
