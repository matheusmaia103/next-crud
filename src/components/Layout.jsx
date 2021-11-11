import Drawer from './Drawer';
import GlobalStyle from '../styles/GlobalStyle';
//import GlobalStyle from "./style.js";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  TextField,
  Button,
  IconButton,
  AppBar,
  MuiThemeProvider,
  CssBaseline,
  Paper,
} from '@material-ui/core/';
import { Container, Divider, Typography } from '@mui/material';
import theme from '../styles/theme';
import layoutStyles from '../styles/layoutStyle';

//Context API
import {Store, StoreProvider} from '../utils/Store'

export default function App({ children }) {
  const classes = layoutStyles();

  return (
    <StoreProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Paper>

          <Container className={classes.container}>{children}</Container>

          <footer className={classes.footer}>
            <Divider className="divider" textAlign="center">
              <Typography variant="h6">
                copyright© all rights reserved
              </Typography>
            </Divider>
          </footer>
        </Paper>
      </MuiThemeProvider>
    </StoreProvider>
  );
}
