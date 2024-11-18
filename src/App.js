import React from "react";
import Tabs from "./components/Tab";

const App = () => {
  const tabs = ["largerTextTabTest","Kabaddi", "Football", "Cricket", "Basketball", "Volleyball", "Others" , "low"]

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
