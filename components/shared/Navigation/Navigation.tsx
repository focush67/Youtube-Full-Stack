import React from "react";
import Navbar from "./Navbar/navbar";
import Sidebar from "./sidebar/sidebar";
import getCurrentSubscriptions from "@/services/getCurrentSubscriptions";
const Navigation = async () => {
  const subscriptions = await getCurrentSubscriptions();
  return (
    <>
      <Sidebar subscribedChannels={subscriptions} />
      <Navbar />
    </>
  );
};

export default Navigation;
