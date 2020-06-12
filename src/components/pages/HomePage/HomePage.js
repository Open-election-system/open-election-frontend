import './HomePageStyle.scss';

import React, {Component} from 'react';
import Footer from '../../Footer/Footer';
import manAndLaptopImage from '../../../assests/man-and-laptop.png';
import AppBarContainer from "../../../containers/AppBar/AppBarContainer";

class HomePage extends Component {
  render() {
    return (
      <div className='home-container'>
        <AppBarContainer/>

        <img
          className='home-page-image'
          src={manAndLaptopImage}
          alt={'man and laptop'}/>

        <Footer/>
      </div>
    );
  }
}

export default HomePage;