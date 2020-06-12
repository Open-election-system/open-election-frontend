import React from "react";
import Plus from "../../images/plus.svg";

export default function AddElection() {
  return (
    <div className="add-election-container">
      <button className="add-election-btn">
        <img src={Plus} alt="plus" />
        <p className="add-election-p">Create new Election</p>
      </button>
    </div>
  );
}
