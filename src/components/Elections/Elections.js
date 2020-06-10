import './Elections.scss';

import React, {Component} from 'react';
import {
  Paper
} from '@material-ui/core';
import VoteCardDialog from "../VoteCardDialog/VoteCardDialog";
import ElectionCard from "../ElectionCard/ElectionCard"
import Grid from "@material-ui/core/Grid";

class Elections extends Component {
  state = {
    showVoteCardDialog: false
  };


  handleVote = () => {
    //додати звернення на апішку
  };

  handleVoteCardDialogOpen = () => this.setState({showVoteCardDialog: true});

  handleVoteCardDialogClose = () => this.setState({showVoteCardDialog: false});


  renderVoteCardDialog() {
    if (!this.state.showVoteCardDialog) {
      return null;
    }

    return <VoteCardDialog
      handleClose={this.handleVoteCardDialogClose()}
      handleVote={this.handleVote}/>
  }

  render() {
    const {elections} = this.props;

    return (
      <React.Fragment>
        <Grid className='elections-container' container spacing={3}>
          {elections.map(election => (
            <Grid item xs={4}>
              <Paper>
                <ElectionCard
                  election={election}
                  handleVoteCardDialogOpen={this.handleVoteCardDialogOpen}/>
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