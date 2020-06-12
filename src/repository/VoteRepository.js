import axios from 'axios';
import {apiAddress} from "../constants/ApiConstants";

const addVote = voteData => axios.post(`${apiAddress}/votes`, voteData);

export default {
  addVote
}