import React, {Component} from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from "@material-ui/core/Grid";

class ElectionsSkeleton extends Component {
  render() {
    return (
      <Grid className='elections-container' container spacing={3}>
        <Grid item xs={4}>
          <Skeleton variant="rect" width="90%" height={200}/>
        </Grid>

        <Grid item xs={4}>
          <Skeleton variant="rect" width="90%" height={200}/>
        </Grid>

        <Grid item xs={4}>
          <Skeleton variant="rect" width="90%" height={200}/>
        </Grid>
      </Grid>
    );
  }
}

export default ElectionsSkeleton;