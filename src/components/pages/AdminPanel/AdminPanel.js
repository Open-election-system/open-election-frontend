import React from "react";
import Sidebar from "../../navigation/Sidebar";
import Topbar from "../../navigation/Topbar";
import ElectionList from "../../election_functional/ElectionList";
import Modal from "../../Modal/Modal"
import "../../../index.css"

function App() {
  return (
    <div>
      <Topbar name={`Roma Nazaruk`} role={`Admin`} />
      <Sidebar />
      <div className="story">
        <h2 className="story-head">Election</h2>
        <h4 className="story-about">All available elections:</h4>
        <Modal />
      </div>
      <ElectionList />
    </div>
  );
}

export default App;
