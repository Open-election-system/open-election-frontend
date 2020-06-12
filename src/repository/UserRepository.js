import axios from 'axios';
import {apiAddress} from "../constants/ApiConstants";

const addUser = userData => axios.post(`${apiAddress}/api/users`, userData);

export default {
  addUser
}