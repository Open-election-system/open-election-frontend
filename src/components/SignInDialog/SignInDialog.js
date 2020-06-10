import './SignInDialogStyle.scss';

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
import {apiAddress} from "../../constants/ApiConstants";
import {withRouter} from "react-router-dom";
import {ELECTIONS} from "../../constants/Routes";

const signInFields = {
  email: 'email',
  password: 'password'
};

class SignInDialog extends Component {
  state = {
    userData: {
      [signInFields.email]: null,
      [signInFields.password]: null
    },

    showPassword: false
  };

  redirectToElections = async () => this.props.history.push(ELECTIONS);

  handleSignIn = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.userData)
    };

    fetch(`${apiAddress}/auth/login`, requestOptions)
      .then(async response => {
        const data = await response.json();

        this.redirectToElections();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  handleChange = (prop) => (event) => this.setState({userData: {...this.state.userData, [prop]: event.target.value}});

  toggleShowPassword = () => this.setState({showPassword: !this.state.showPassword});

  render() {
    const {handleClose} = this.props;
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
              <InputLabel htmlFor={`outlined-adornment-${signInFields.email}`}>Email</InputLabel>
              <OutlinedInput
                id={`outlined-adornment-${signInFields.email}`}
                onChange={this.handleChange(signInFields.email)}
                labelWidth={60}/>
            </FormControl>

            <FormControl className='login-input-field' variant="outlined">
              <InputLabel htmlFor={`outlined-adornment-${signInFields.password}`}>Пароль</InputLabel>
              <OutlinedInput
                id={`outlined-adornment-${signInFields.password}`}
                type={this.state.showPassword ? 'text' : 'password'}
                onChange={this.handleChange(signInFields.password)}
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
            onClick={() => this.handleSignIn()} color="primary">
            Увійти
          </Button>
        </DialogActions>
      </Dialog>)
  }
}

export default withRouter(SignInDialog);