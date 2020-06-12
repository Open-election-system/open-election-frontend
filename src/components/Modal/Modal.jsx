import React, { useState } from "react";

import "../../components/Modal/modal.css";
import Plus from "../../images/plus.svg";
import CancelIcon from "@material-ui/icons/Cancel";
import { postElections } from "../../util/api";

export default function Modal() {
  const [isOpen, setOpen] = useState(false);
  const [optionsInfo, setOptionsInfo] = useState([{}, {}, {}]);
  const [electionInfo, setElectionInfo] = useState({
    name: null,
    description: null,
  });
  const [restrictionInfo, setRestrictionInfo] = useState({
    age_from: null,
    age_to: null,
    votes_number: null,
    reatract: false,
    start: null,
    end: null,
    organization: null,
  });

  const submitElection = () => {
    postElections({
      election: electionInfo,
      restrictions: restrictionInfo,
      options: optionsInfo,
    }).then((res) => {});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    updateRestrictionInfo(name, value);
  };

  const toggleReatractChange = (e) => {
    const { name, checked } = e.target;

    updateRestrictionInfo(name, checked);
  };

  const updateRestrictionInfo = (name, value) =>
    setRestrictionInfo((prev) => ({
      ...prev,
      [name]: name === "reatract" || name === "organization" ? value : +value,
    }));

  const handleElectionInputChange = (e) => {
    const { name, value } = e.target;

    updateElectionInfo(name, value);
  };

  const updateElectionInfo = (name, value) =>
    setElectionInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

  const handleOptionsInfoChange = (index) => (e) => {
    const { name, value } = e.target;

    const newOptions = [...optionsInfo];

    newOptions[index] = {
      ...newOptions[index],
      [name]: value,
    };

    setOptionsInfo(newOptions);
  };

  return (
    <React.Fragment>
      <div className="add-election-container" onClick={() => setOpen(true)}>
        <button className="add-election-btn">
          <img src={Plus} alt="plus" />
          <p className="add-election-p">Create new Election</p>
        </button>
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <button className="modal-exit-btn" onClick={() => setOpen(false)}>
              <CancelIcon />
            </button>
            <h2 className="input-title">Add Election:</h2>
            <div className="container">
              <form className="election-input">
                <input
                  className="modal_input"
                  name="name"
                  type="text"
                  placeholder="Name of election..."
                  onChange={handleElectionInputChange}
                />
                <input
                  className="modal_input"
                  name="description"
                  type="text"
                  placeholder="Description of election..."
                  onChange={handleElectionInputChange}
                />
                <input
                  className="modal_input"
                  name="age_from"
                  type="number"
                  placeholder="Age from"
                  onChange={handleInputChange}
                />
                <input
                  className="modal_input"
                  name="age_to"
                  type="number"
                  placeholder="Age to"
                  onChange={handleInputChange}
                />
                <input
                  className="modal_input"
                  name="votes_number"
                  type="number"
                  placeholder="Votes number"
                  onChange={handleInputChange}
                />
                <label>
                  Ability to reatract:
                  <input
                    type="checkbox"
                    name="reatract"
                    onChange={toggleReatractChange}
                  />
                </label>
                <label>
                  {" "}
                  <input
                    className="modal_input"
                    type="number"
                    name="start"
                    placeholder="Start Date..."
                    onChange={handleInputChange}
                  />
                </label>
                <input
                  className="modal_input"
                  type="number"
                  name="end"
                  placeholder="End Date..."
                  onChange={handleInputChange}
                />
                <input
                  className="modal_input"
                  type="text"
                  name="organization"
                  placeholder="Organization..."
                  onChange={handleInputChange}
                />
                <p>Options: </p>
                <input
                  className="modal_input"
                  type="text"
                  name="name"
                  placeholder="Input first candidate..."
                  onChange={handleOptionsInfoChange(0)}
                />
                <input
                  className="modal_input"
                  type="text"
                  name="description"
                  placeholder="First candidate description"
                  onChange={handleOptionsInfoChange(0)}
                />
                <input
                  className="modal_input"
                  type="text"
                  name="name"
                  placeholder="Input second candidate..."
                  onChange={handleOptionsInfoChange(1)}
                />
                <input
                  className="modal_input"
                  type="text"
                  name="description"
                  placeholder="Input second candidate description..."
                  onChange={handleOptionsInfoChange(1)}
                />
                <input
                  className="modal_input"
                  type="text"
                  name="name"
                  placeholder="Input third candidate..."
                  onChange={handleOptionsInfoChange(2)}
                />
                <input
                  className="modal_input"
                  type="text"
                  name="description"
                  placeholder="Input third candidate description..."
                  onChange={handleOptionsInfoChange(2)}
                />

                <button
                  className="add-electionInput-btn"
                  onClick={submitElection}
                >
                  Add Election
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
