import React from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import Search from "./components/Search";
import InstructorsTable from "./components/InstructorsTable";

const Home = () => {
  return (
    <div>
      <Search />
      <InstructorsTable />
    </div>
  );
};

export default Home;
