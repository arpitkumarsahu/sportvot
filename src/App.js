import React from "react";
import Tabs from "./components/Tab";

const App = () => {
  const tabs = ["Kabaddi", "Football", "Cricket", "Basketball", "Volleyball", "Others"]

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
