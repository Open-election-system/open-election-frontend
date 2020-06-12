import './AppBarStyle.scss';

import React, {Component} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

export default class AppBarComponent extends Component {
  renderActionButton () {
    const {handleSignUpDialogOpen, handleLoginDialogOpen} = this.props;
    return (
      <div>
        <Button
          onClick={() => handleSignUpDialogOpen()}
          color="inherit">
          Реєстрація
        </Button>

        <Button
          onClick={() => handleLoginDialogOpen()}
          color="inherit">
          Увійти
        </Button>
      </div>)
  }

  render() {
    return (
      <AppBar position="static">
        <div className='toolbar-container'>
          <Toolbar className='toolbar'>
            <Typography
              variant="h6"
              className='title'>
              Голосування
            </Typography>

            {!this.props.logged ? this.renderActionButton() : <Avatar>VK</Avatar>}
          </Toolbar>
        </div>
      </AppBar>
    );
  }
}