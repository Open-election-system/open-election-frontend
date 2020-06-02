import './AppBarStyle.scss';

import React, {Component} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";

class AppBarComponent extends Component {
  render() {
    const {handleRegistrationDialogOpen, handleLoginDialogOpen} = this.props;
    return (
      <AppBar position="static">
        <Toolbar className='toolbar'>
          <Typography
            variant="h6"
            className='title'>
            Голосування
          </Typography>

          <Button
            onClick={() => handleRegistrationDialogOpen()}
            color="inherit">
            Реєстрація
          </Button>

          <Button
            onClick={() => handleLoginDialogOpen()}
            color="inherit">
            Увійти
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppBarComponent;