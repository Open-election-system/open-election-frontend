import axios from 'axios';
import {apiAddress} from "../../constants/ApiConstants";

export const addUser = userData => axios.post(`${apiAddress}/api/users`, userData);