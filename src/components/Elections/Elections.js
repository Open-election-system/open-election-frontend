import './Elections.scss';

import React, {Component} from 'react';
import {
  Paper
} from '@material-ui/core';
import VoteDialog from "../VoteDialog/VoteDialog";
import ElectionCard from "../ElectionCard/ElectionCard"
import Grid from "@material-ui/core/Grid";

class Elections extends Component {
  state = {
    showVoteCardDialog: false,
    electionToOpen: null
  };

  handleVote = () => {
  };

  handleVoteDialogOpen = (electionData) => this.setState({showVoteCardDialog: true, electionToOpen: electionData});

  handleVoteDialogClose = () => this.setState({showVoteCardDialog: false});

  renderVoteCardDialog = () => {
    if (!this.state.showVoteCardDialog) {
      return null;
    }

    return <VoteDialog
      electionData={this.state.electionToOpen}
      handleClose={this.handleVoteDialogClose}
      handleVote={this.handleVote}/>
  };

  render() {
    const {elections} = this.props;

    return (
      <React.Fragment>
        <Grid className='elections-container' container spacing={3}>
          {elections.map(electionData => (
            <Grid item xs={4}>
              <Paper>
                <ElectionCard
                  electionData={electionData}
                  handleVoteDialogOpen={this.handleVoteDialogOpen}/>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {this.renderVoteCardDialog()}
      </React.Fragment>
    );
  }
}

export default Elections;