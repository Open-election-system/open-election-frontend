import './AppBarStyle.scss';

import React, {Component} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";

export default class AppBarComponent extends Component {
  render() {
    const {handleSignUpDialogOpen, handleLoginDialogOpen} = this.props;
    return (
      <AppBar position="static">
        <div className='toolbar-container'>
          <Toolbar className='toolbar'>
            <Typography
              variant="h6"
              className='title'>
              Голосування
            </Typography>

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
          </Toolbar>
        </div>
      </AppBar>
    );
  }
}