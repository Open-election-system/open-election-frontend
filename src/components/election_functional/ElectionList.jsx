import React from "react";
import ElectionItem from "./ElectionItem";
import { useState, useEffect } from "react";

import { getElections } from "../../util/api";
import Spinner from "../Spinner";

export default function ElectionList(props) {
  const [elections, setElections] = useState([]);

  useEffect(() => {
    getElections().then((res) => setElections(res));
  }, []);

  return (
    <ul>
      {elections.length > 0 ? (
        elections.map((data) => (
          <ElectionItem
            name={data.election.name}
            start={data.election.description}
          />
        ))
      ) : (
        <Spinner />
      )}
    </ul>
  );
}
