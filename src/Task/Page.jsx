import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header";
import Hero from "./Hero";
import TaskBoard from "./TaskList/TaskBoard";

export default function Page() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Header />
      <section className="mb-20 flex flex-col mx-auto container">
        <Hero />
        <TaskBoard />
      </section>
      <Footer />
    </div>
  );
}
