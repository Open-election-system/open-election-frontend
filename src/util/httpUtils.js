import axios from 'axios';

const apiAddress = 'http://localhost:8080';

const getAllElections = () => {
  fetch(`${apiAddress}/api/election`)
    .then((data) => data.json())
    .then((res) => {
      return res;
    });
};


const addElection = (data) => axios.post(`${apiAddress}/api/election`, data);

const updateElection = (electionId, election) => axios.post(`${apiAddress}/api/election/${electionId}`, election);

const deleteElection = (id) => axios.delete(`${apiAddress}/api/election/${id}`);