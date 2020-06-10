import {apiAddress} from "../../constants/ApiConstants";

export const getElections = () => {
  fetch(`${apiAddress}/api/election`)
    .then((data) => data.json());
};