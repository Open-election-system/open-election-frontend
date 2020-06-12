import './VoteDialogStyle.scss';

import React, {Component} from 'react';
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import {withRouter} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {dateFromTimestamp} from "../../util/TimeUtil";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import StatisticsDialog from "../StatisticsDialog/StatisticsDialog";
import Repository from "../../repository/VoteRepository";

class VoteDialog extends Component {
  state = {
    showVoteCardDialog: false,
    electionToOpen: null,
    showStatisticsDialog: null
  };

  handleChange = (voteData) => {
    Repository.addVote(voteData);
  };

  handleStatisticsDialogOpen = () => this.setState({showStatisticsDialog: true});

  handleStatisticsDialogClose = () => this.setState({showStatisticsDialog: false});

  renderStatisticsDialog() {
    if (!this.state.showStatisticsDialog) {
      return null;
    }

    return <StatisticsDialog handleClose={this.handleStatisticsDialogClose}/>
  }

  render() {
    const {handleClose, electionData} = this.props;

    return (
      <Dialog
        className='vote-dialog'
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}>

        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}>

          <div className='dialog-title-content-container'>
            {electionData.election.name}

            <IconButton
              className='add-vacancy-button'
              onClick={this.handleStatisticsDialogOpen}>
              <Icon>analytics</Icon>
            </IconButton>
          </div>
        </DialogTitle>

        <DialogContent className='vote-dialog-content' dividers>
          <Typography className='restriction-title' variant="h5">
            Інформація
          </Typography>

          <Grid container spacing={3}>
            <Grid direction={"column"} item xs={4}>
              <Typography variant="h6">
                Проведення
              </Typography>

              <Typography variant="subtitle2">
                {dateFromTimestamp(electionData.restrictions[0].start)}
              </Typography>
              <Typography variant="subtitle2">
                {dateFromTimestamp(electionData.restrictions[0].end)}
              </Typography>
            </Grid>

            <Grid direction={"column"} item xs={4}>
              <Typography variant="h6">
                Вік учасників
              </Typography>

              <Typography variant="subtitle2">
                {`${electionData.restrictions[0].age_from} - ${electionData.restrictions[0].age_to}`}
              </Typography>
            </Grid>

            <Grid direction={"column"} item xs={4}>
              <Typography variant="h6">
                Організація
              </Typography>

              <Typography variant="subtitle2">
                {electionData.restrictions[0].organization}
              </Typography>
            </Grid>

            <Grid direction={"column"} item xs={12}>
              <Typography variant="h6">
                Опис
              </Typography>

              <Typography variant="subtitle2">
                {electionData.election.description}
              </Typography>
            </Grid>
          </Grid>

          <div className="checkboxes">
            <FormControl component="fieldset">
              <FormLabel component="legend">Виберіть {electionData.restrictions.votes_number}</FormLabel>
              <FormGroup>
                <Grid container spacing={2}>
                  {electionData.options.map((option, index) => (
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox onChange={() => this.handleChange({
                            election_id: electionData.election.id,
                            option_id: option.id,
                            user_id: 1
                          })}/>}
                        label={`${option.name} (${option.description})`}/>
                    </Grid>
                  ))}
                </Grid>
              </FormGroup>
            </FormControl>
          </div>
        </DialogContent>

        {this.renderStatisticsDialog()}
      </Dialog>)
  }
}

export default withRouter(VoteDialog);