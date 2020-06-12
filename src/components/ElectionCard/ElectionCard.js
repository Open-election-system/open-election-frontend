import './ElectionCard.scss';

import React from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

export default class ElectionCard extends React.Component {

  render() {
    const {electionData, handleVoteDialogOpen} = this.props;

    return (<Card>
      <CardActionArea onClick={() => handleVoteDialogOpen(electionData)}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {electionData.election.name}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {electionData.election.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='election-card-actions-container'>
        <Button
          size="small"
          color="primary"
          onClick={() => handleVoteDialogOpen(electionData)}>
          Проголосувати
        </Button>
      </CardActions>
    </Card>)
  }
}