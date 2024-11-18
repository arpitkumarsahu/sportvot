import "./Tabs.css";

import React, { useRef, useState } from "react";

const Tabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabsRef = useRef([]);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`tab ${selectedTab === index ? "active" : ""}`}
            onClick={() => setSelectedTab(index)}
          >
            {tab}
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Tabs;
