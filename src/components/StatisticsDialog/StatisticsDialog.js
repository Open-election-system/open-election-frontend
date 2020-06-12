import './StatisticsDialogStyle.scss';

import React, {Component} from 'react';
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";

import {withRouter} from "react-router-dom";
import PieChart from "../PieChart/PieChart";
import ColumnChart from "../ColumnChart/ColumnChart";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";


class StatisticsDialog extends Component {
  render() {
    const {handleClose} = this.props;
    return (
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}>

        <DialogContent dividers className='statistics-dialog-content'>
          <Grid direction={"column"} justify={"flex-start"} container spacing={3}>
            <Grid item xs={4}>
              <Paper>
                <PieChart/>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper>
                <ColumnChart/>
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>);
  }
}

export default withRouter(StatisticsDialog);