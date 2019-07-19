import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  root: {
    paddingTop: 200
  }
}

function Counter({count, classes, handleDecrement, handleIncrement}) {

  return (
    <Grid
      container
      direction='column'
      spacing={2}
      className={classes.root}
      alignItems='center'>
      <Grid item>
        <Typography>
          Clicou {count} vezes
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={handleIncrement} variant='contained' color='primary'>
          Incrementar
        </Button>
        <Button onClick={handleDecrement}>
          Decrementar
        </Button>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Counter);
