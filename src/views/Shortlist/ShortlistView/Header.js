import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Button,
  Box,
  Grid,
  SvgIcon,
  Typography,
  makeStyles
} from '@material-ui/core';
import { ShoppingCart } from 'react-feather';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      alignItems="center"
      container
      justify="space-between"
      spacing={3}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Box mt={3}></Box>
        <Typography variant="h3" color="textPrimary">
          Shortlist | Head of Marketing
        </Typography>
      </Grid>
      <Grid item>
        <a
          target="_top"
          href="https://checkout.stripe.com/pay/ppage_1HMXQrFKnpzPB0MXFHo7K8jA#fidkdWxOYHwnPyd1blpxYHZxWm9CPHY2XUhhVm9fQzxOYWgwYjA8f2lcYScpJ3dgY2B3d2B3SndsYmxrJz8nbXFxdXY%2FKip2cXdsdWArZmpoJyknaWpmZGlgJz9rcGlpKSdobGF2Jz9%2BJ2JwbGEnPyc8NGEwYzJhMihhYD00KDE1MGMoPGE3Mig3MD0zNjU9Nj0xZGA3ZDczPDQnKSdocGxhJz8nMmc9ZzA3ZzMoZ2E3ZCgxZ2BjKGdkZmEoMzA3NTM8Yzc0ZjRgN2BgMGNgJykndmxhJz8nNzczZ2E1YDIoZjQ9NSgxYGE2KD1gZjIoPTA0PWMwZmFmMDY2NzxkMjE8J3gpJ2dgcWR2Jz9eWHgl"
        >
          <Button
            color="secondary"
            textdecoration="none"
            variant="contained"
            startIcon={
              <SvgIcon fontSize="small">
                <ShoppingCart />
              </SvgIcon>
            }
          >
            Purchase Shortlist
          </Button>
        </a>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
