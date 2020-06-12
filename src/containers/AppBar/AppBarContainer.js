import React, {Component} from 'react';
import AppBarComponent from '../../components/AppBar/AppBarComponent';
import SignUpDialog from '../../components/SignUpDialog/SignUpDialog';
import SignInDialog from '../../components/SignInDialog/SignInDialog';

class AppBarContainer extends Component {
  state = {
    showSignUpDialog: false,
    showLoginDialog: false
  };

  handleSignUpDialogOpen = () => this.setState({showSignUpDialog: true});

  handleSignUpDialogClose = () => this.setState({showSignUpDialog: false});

  handleLoginDialogOpen = () => this.setState({showLoginDialog: true});

  handleLoginDialogClose = () => this.setState({showLoginDialog: false});

  renderSignUpDialog() {
    if (!this.state.showSignUpDialog) {
      return null;
    }

    return <SignUpDialog handleClose={this.handleSignUpDialogClose}/>
  }

  renderLoginDialog() {
    if (!this.state.showLoginDialog) {
      return null;
    }

    return <SignInDialog handleClose={this.handleLoginDialogClose}/>
  }

  render() {
    return (
      <div className='my-style'>
        <AppBarComponent
          logged={this.props.logged}
          handleSignUpDialogOpen={this.handleSignUpDialogOpen}
          handleLoginDialogOpen={this.handleLoginDialogOpen}/>

        {this.renderSignUpDialog()}
        {this.renderLoginDialog()}
      </div>
    );
  }
}

export default AppBarContainer;