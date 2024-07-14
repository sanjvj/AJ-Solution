// src/components/DataAnalyticsPage.js

import React from "react";
import { Footer } from "../Components/Footer";
import { FooterAnimation } from "../Components/FooterAnimation";

const DataAnalyticsPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h2 className="text-zinc-400 font-lg text-2xl mt-20">
        Data Analytics Services
      </h2>
      <br />
      <p className="text-zinc-400 font-light text-lg">
        At AJ Solutions, our data analytics services help you transform data into actionable insights. We utilize advanced analytical tools and techniques to provide you with a deep understanding of your business performance and market trends.
      </p>
      <br />
      <p className="text-zinc-400 font-light text-lg pb-4">
        Our team of data analysts works closely with you to identify key metrics and develop customized dashboards and reports. From data collection to analysis and visualization, we deliver solutions that drive informed decision-making.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Business Intelligence:</span> We provide comprehensive BI solutions to help you monitor and manage your business performance.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1">
        <span className="font-bold">Predictive Analytics:</span> Our predictive models help you anticipate future trends and make proactive decisions.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        <span className="font-bold">Data Visualization:</span> We create intuitive dashboards and visualizations to make complex data easily understandable.
      </p>
      <p className="text-zinc-400 font-light text-lg pb-1 mb-4">
        At AJ Solutions, we follow a comprehensive approach to data analytics: Data Collection, Analysis, Visualization, and Interpretation.
      </p>

      <FooterAnimation />
      <Footer />
    </div>
  );
};

export default DataAnalyticsPage;
