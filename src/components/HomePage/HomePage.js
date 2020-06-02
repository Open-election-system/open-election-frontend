import './HomePageStyle.scss';

import React, {Component} from 'react';
import AppBarComponent from '../AppBar/AppBarComponent';
import Footer from '../Footer/Footer';
import manAndLaptopImage from '../../assests/man-and-laptop.png';
import RegistrationDialog from '../RegistrationDialog/RegistrationDialog';
import LoginDialog from '../LoginDialog/LoginDialog';
import {USER, ADMINISTRATOR} from "../../constants/UserRoles";

class HomePage extends Component {
  state = {
    showRegistrationDialog: false,
    showLoginDialog: false
  };

  handleRegistrationDialogOpen = () => this.setState({showRegistrationDialog: true});

  handleRegistrationDialogClose = () => this.setState({showRegistrationDialog: false});

  handleLoginDialogOpen = () => this.setState({showLoginDialog: true});

  handleLoginDialogClose = () => this.setState({showLoginDialog: false});

  renderRegistrationDialog() {
    if (!this.state.showRegistrationDialog) {
      return null;
    }

    return <RegistrationDialog
      handleClose={this.handleRegistrationDialogClose}
      handleAddUser={this.handleAddUser}/>
  }

  renderLoginDialog() {
    if (!this.state.showLoginDialog) {
      return null;
    }

    return <LoginDialog
      handleClose={this.handleLoginDialogClose}
      handleLogin={this.handleLogin}/>
  }

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
      <div className='main-container'>
        <div className='content-container'>
          <AppBarComponent
            handleRegistrationDialogOpen={this.handleRegistrationDialogOpen}
            handleLoginDialogOpen={this.handleLoginDialogOpen}/>

          <img
            className='home-page-image'
            src={manAndLaptopImage}
            alt={'man and laptop'}/>
          <Footer/>

          {this.renderRegistrationDialog()}
          {this.renderLoginDialog()}
        </div>
      </div>
    );
  }
}

export default HomePage;