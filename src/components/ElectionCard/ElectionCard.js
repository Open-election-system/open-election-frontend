import './ElectionCard.scss';

import React from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const ElectionListItem = ({election, handleVoteCardDialogOpen}) => (
  <Card>
    <CardActionArea onClick={() => handleVoteCardDialogOpen()}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {election.name}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {election.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className='election-card-actions-container'>
      <Button
        size="small"
        color="primary"
        onClick={() => handleVoteCardDialogOpen()}>
        Проголосувати
      </Button>
    </CardActions>
  </Card>
);

export default ElectionListItem;