import './SignUpDialogStyle.scss';

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
import {addUser} from "../../util/http/users";

const signUpFields = {
  email: 'email',
  password: 'password',
  name: 'name',
  surname: 'surname',
  identification_code: 'identification_code',
  age: 'age',
  organization: 'organization'
};

class SignUpDialog extends Component {
  state = {
    userData: {
      [signUpFields.email]: null,
      [signUpFields.password]: null,
      [signUpFields.name]: null,
      [signUpFields.surname]: null,
      [signUpFields.identification_code]: null,
      [signUpFields.age]: null,
      [signUpFields.organization]: null
    },
    showPassword: false
  };

  handleAddUser() {
    const {handleClose} = this.props;

    addUser(this.state.userData);
    handleClose();
  };

  handleChange = (prop) => (event) => this.setState({userData: {...this.state.userData, [prop]: event.target.value}});

  toggleShowPassword = () => this.setState({showPassword: !this.state.showPassword});

  render() {
    const {handleClose} = this.props;
    return (
      <Dialog
        className='sign-up-dialog'
        onClose={this.props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}>

        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}>
          Реєстрація
        </DialogTitle>

        <DialogContent dividers>
          <div className='sign-up-input-fields-container'>
            <FormControl fullWidth className='sign-up-input-field' variant="outlined">
              <InputLabel htmlFor={`outlined-adornment-${signUpFields.name}`}>Ім'я</InputLabel>
              <OutlinedInput
                id={`outlined-adornment-${signUpFields.name}`}
                onChange={this.handleChange(signUpFields.name)}
                labelWidth={60}/>
            </FormControl>

            <FormControl fullWidth className='sign-up-input-field' variant="outlined">
              <InputLabel htmlFor={`outlined-adornment-${signUpFields.surname}`}>Прізвище</InputLabel>
              <OutlinedInput
                id={`outlined-adornment-${signUpFields.surname}`}
                onChange={this.handleChange(signUpFields.surname)}
                labelWidth={60}/>
            </FormControl>

            <FormControl fullWidth className='sign-up-input-field' variant="outlined">
              <InputLabel htmlFor={`outlined-adornment-${signUpFields.identification_code}`}>Іден.
                код</InputLabel>
              <OutlinedInput
                id={`outlined-adornment-${signUpFields.identification_code}`}
                onChange={this.handleChange(signUpFields.identification_code)}
                labelWidth={60}/>
            </FormControl>

            <FormControl fullWidth className='sign-up-input-field' variant="outlined">
              <InputLabel htmlFor={`outlined-adornment-${signUpFields.age}`}>Вік</InputLabel>
              <OutlinedInput
                id={`outlined-adornment-${signUpFields.age}`}
                onChange={this.handleChange(signUpFields.age)}
                labelWidth={60}/>
            </FormControl>

            <FormControl fullWidth className='sign-up-input-field' variant="outlined">
              <InputLabel htmlFor={`outlined-adornment-${signUpFields.organization}`}>Організація</InputLabel>
              <OutlinedInput
                id={`outlined-adornment-${signUpFields.organization}`}
                onChange={this.handleChange(signUpFields.organization)}
                labelWidth={60}/>
            </FormControl>

            <FormControl fullWidth className='sign-up-input-field' variant="outlined">
              <InputLabel htmlFor={`outlined-adornment-${signUpFields.email}`}>Email</InputLabel>
              <OutlinedInput
                id={`outlined-adornment-${signUpFields.email}`}
                onChange={this.handleChange(signUpFields.email)}
                labelWidth={60}/>
            </FormControl>

            <FormControl className='sign-up-input-field' variant="outlined">
              <InputLabel htmlFor={`outlined-adornment-${signUpFields.password}`}>Пароль</InputLabel>
              <OutlinedInput
                id={`outlined-adornment-${signUpFields.password}`}
                type={this.state.showPassword ? 'text' : 'password'}
                onChange={this.handleChange(signUpFields.password)}
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
          <Button autoFocus onClick={() => this.handleAddUser()} color="primary">
            Зареєструватися
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default SignUpDialog;