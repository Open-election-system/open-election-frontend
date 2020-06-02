import './LoginDialogStyle.scss';

import React, {Component} from 'react';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

class LoginDialog extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },

    showPassword: false
  };

  handleLogin(handleLogin, handleClose) {
    handleLogin(this.state.data);
    handleClose();
  };

  handleChange = (prop) => (event) => this.setState({data: {...this.state.data, [prop]: event.target.value}});

  toggleShowPassword = () => this.setState({showPassword: !this.state.showPassword});

  render() {
    const {handleClose, handleAddVacancy: handleLogin} = this.props;
    return (
      <Dialog
        className='login-dialog'
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}>

        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}>
          Увійти
        </DialogTitle>

        <DialogContent dividers>
          <div className='login-input-fields-container'>
            <FormControl fullWidth className='login-input-field' variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                onChange={this.handleChange('email')}
                labelWidth={60}/>
            </FormControl>

            <FormControl className='login-input-field' variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={this.state.showPassword ? 'text' : 'password'}
                onChange={this.handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => this.toggleShowPassword()}
                      edge="end">
                      {this.state.showPassword ? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}/>
            </FormControl>
          </div>
        </DialogContent>

        <DialogActions>
          <Button
            autoFocus
            onClick={() => this.handleLogin(handleLogin, handleClose)} color="primary">
            Увійти
          </Button>
        </DialogActions>
      </Dialog>)
  }
}

export default LoginDialog;