import axios from "axios";

const API = "https://lyrical-amulet-276713.ew.r.appspot.com/api/1";

const getRequest = (url) => axios.get(`${API}${url}`).then(res => res.data);
const postRequest = (url, body) => axios.post(`${API}${url}`, body).then(res => res.data);
const deleteRequest = (url, param) => axios.delete(`${API}${url}`).then(res => res.data);


export const postElections = (body) => postRequest("/elections", body);
export const getElections = () => getRequest("/elections/all");



