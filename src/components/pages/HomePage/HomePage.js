import './HomePageStyle.scss';

import React, {Component} from 'react';
import Footer from '../../Footer/Footer';
import manAndLaptopImage from '../../../assests/man-and-laptop.png';
import {USER, ADMINISTRATOR} from '../../../constants/UserRoles';
import AppBarContainer from "../../../containers/AppBar/AppBarContainer";

class HomePage extends Component {
  render() {
    //Will be deleted in the next commits
    const role = 'Unlogged user';

    if (role === USER) {
      return <div>Ви увійшли як користувач</div>
    }

    if (role === ADMINISTRATOR) {
      return <div>Ви увійшли як адміністратор</div>
    }

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