import Drawer from './Drawer';
import GlobalStyle from '../styles/GlobalStyle';
//import GlobalStyle from "./style.js";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TextField, Button, IconButton } from '@material-ui/core/';
import {
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
  MenuRounded,
  ArrowForward,
} from '@material-ui/icons';
import { Divider, Typography } from '@mui/material';

export default function App({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GlobalStyle />

      <nav>
        <Link href="/">
          <Button variant="text" color="inherit">
            Boirlerplate
          </Button>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <Button variant="text" color="inherit">
                Serviços
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <Button variant="text" color="inherit">
                Sobre
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <Button variant="outlined" color="inherit">
                login
              </Button>
            </Link>
          </li>
        </ul>

        <Button color="inherit" id="hamburguer" onClick={() => setOpen(true)}>
          <MenuRounded />
        </Button>
      </nav>
      <Drawer open={open} setOpen={setOpen} />

      <main>{children}</main>

      <footer>
        <Divider className="divider" textAlign="center">
          <Typography variant="h6">copyright© all rights reserved</Typography>
        </Divider>
      </footer>
    </>
  );
}
