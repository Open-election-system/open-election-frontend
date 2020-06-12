import './ElectionsPageStyle.scss';

import React, {Component} from 'react';
import Elections from "../../Elections/Elections";
import {apiAddress} from "../../../constants/ApiConstants";
import AppBarContainer from "../../../containers/AppBar/AppBarContainer";
import Typography from "@material-ui/core/Typography";
import Footer from "../../Footer/Footer";
import ElectionsSkeleton from "../../ElectionsSkeleton/ElectionsSkeleton";

class ElectionsPage extends Component {
  state = {
    elections: null
  };

  componentDidMount() {
    this.getAllElections();
  }

  getAllElections = () => {
    const headers = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'user-id': '1'
      }
    };

    fetch(`${apiAddress}/elections/all`, headers)
      .then((data) => data.json())
      .then((res) => {
        return this.setState({elections: res});
      });
  };

  render() {
    const {elections} = this.state;

    return (
      <div className='elections'>
        <AppBarContainer  logged/>

        <div className='elections-content-container'>
          <div className='title-container'>
            <Typography gutterBottom variant="h3" component="h2">
              Доступні вибори
            </Typography>
          </div>

          {elections ? <Elections elections={elections}/> : <ElectionsSkeleton/>}
        </div>

        <Footer/>
      </div>
    );
  }
}

export default ElectionsPage;