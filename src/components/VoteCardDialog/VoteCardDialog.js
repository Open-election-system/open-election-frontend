import './VoteCardDialogStyle.scss';

import React, {Component} from 'react';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

class VoteCardDialog extends Component {
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

export default VoteCardDialog;