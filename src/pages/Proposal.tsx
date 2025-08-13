
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProposalSlider from "@/components/ProposalSlider";
import Footer from "@/components/Footer";

const Proposal = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ProposalSlider />
      <Footer />
    </div>
  );
};

export default Proposal;
