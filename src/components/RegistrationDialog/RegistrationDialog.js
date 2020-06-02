import './RegistrationDialogStyle.scss';

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
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";

class RegistrationDialog extends Component {
  state = {
    data: {
      email: 0,
      name: '',
      surname: ''
    },

    showPassword: false
  };

  handleAddUser(handleAddUser, handleClose) {
    handleAddUser(this.state.data);
    handleClose();
  };

  handleChange = (prop) => (event) => this.setState({data: {...this.state.data, [prop]: event.target.value}});

  toggleShowPassword = () => this.setState({showPassword: !this.state.showPassword});

  render() {
    const {handleClose, handleAddVacancy} = this.props;
    return (
      <Dialog
        className='registration-dialog'
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}>

        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}>
          Реєстрація
        </DialogTitle>

        <DialogContent dividers>
          <div className='registration-input-fields-container'>
            <FormControl fullWidth className='registration-input-field' variant="outlined">
              <InputLabel htmlFor="outlined-adornment-name">Ім'я</InputLabel>
              <OutlinedInput
                id="outlined-adornment-name"
                onChange={this.handleChange('name')}
                labelWidth={60}/>
            </FormControl>

            <FormControl fullWidth className='registration-input-field' variant="outlined">
              <InputLabel htmlFor="outlined-adornment-surname">Прізвище</InputLabel>
              <OutlinedInput
                id="outlined-adornment-surname"
                onChange={this.handleChange('surname')}
                labelWidth={60}/>
            </FormControl>

            <FormControl fullWidth className='registration-input-field' variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                onChange={this.handleChange('email')}
                labelWidth={60}/>
            </FormControl>


            <FormControl className='registration-input-field' variant="outlined">
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
                      {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}/>
            </FormControl>
          </div>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={() => this.handleAddUser(handleAddVacancy, handleClose)} color="primary">
            Зареєструватися
          </Button>
        </DialogActions>
      </Dialog>)
  }
}

export default RegistrationDialog;