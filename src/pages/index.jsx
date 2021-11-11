import Image from 'next/image';
import Head from 'next/head';
import {
  Divider,   
} from '@mui/material';
import {
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  TextField,
  Typography,
  IconButton,
  Button,
  Select,
} from '@material-ui/core';
import Form from '../components/form'
import List from '../components/List'
import indexStyles from '../styles/indexStyles';
import { MoreVertRounded } from '@material-ui/icons';
import { useContext, useState } from 'react';
import { Store } from '../utils/Store';



export default function Home() {
  const classes = indexStyles();
  let i = 1;

  const {state, dispatch} = useContext(Store);
  const {records} = state;
  const {people} = records;

  const submitHandler = e =>{
    e.preventDefault();
  }
  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>

      <Divider textAlign="center">
        <Typography variant="h4" component="h1">
          Cadastro
        </Typography>
      </Divider>

      <Form />
      <List>
        {people.map((pessoa) => (
          <TableRow kew={++i}>
            <TableCell>
              <Typography variant="subtitle1">{pessoa.name}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">{pessoa.age}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1">{pessoa.job}</Typography>
            </TableCell>
            <TableCell>
              <IconButton>
                <MoreVertRounded />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </List>
    </>
  );
}
