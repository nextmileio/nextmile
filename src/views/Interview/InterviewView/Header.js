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
  Breadcrumbs,
  makeStyles,
  Link
} from '@material-ui/core';
import { Check } from 'react-feather';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

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
      <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to="/app/dashboard"
            component={RouterLink}
          >
            Dashboard
          </Link>
          <Link
            variant="body1"
            color="inherit"
            to="/app/jobs"
            component={RouterLink}
          >
            Jobs
          </Link>
        </Breadcrumbs>
        <Box mt={3}></Box>
        <Typography variant="h3" color="textPrimary">
          Interview | Head of Marketing
        </Typography>
      </Grid>
      <Grid item>
        <a
          target="_top"
          href="#"
        >
          <Button
            color="secondary"
            textdecoration="none"
            variant="contained"
            startIcon={
              <SvgIcon fontSize="small">
                <Check />
              </SvgIcon>
            }
          >
            Close Job
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
