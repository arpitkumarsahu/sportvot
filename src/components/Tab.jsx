import "./Tabs.css";

import React, { useEffect, useRef, useState } from "react";

const Tabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef([]);
  useEffect(() => {
    updateIndicator(selectedTab);
  }, [selectedTab]);

  const updateIndicator = (index) => {
    const currentTab = tabsRef.current[index];
    if (currentTab) {
      const { offsetWidth, offsetLeft } = currentTab;
      setIndicatorStyle({
        width: `${offsetWidth}px`,
        transform: `translateX(${offsetLeft}px)`,
      });
      
    }
  };

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
        <div className="indicator" style={indicatorStyle}></div>
      </div>
    </div>
  );
};

export default Tabs;
