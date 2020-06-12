import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export default function ElectionItem(props) {
  return (
    <li className="election-item-container">
      <div>
        <span className="election-item">
          <span className="election-item-name">{props.name}</span>
          <span className="election-item-startDate">
            Description: {props.start}
          </span>
          {/* <span className="election-item-endDate">
              End Date: {props.end}
            </span> */}
          <DeleteIcon className="delete-icon" />
        </span>
      </div>
    </li>
  );
}
