import React, { useContext, useRef, useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  IconButton,
  Button,
  Select,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import formStyles from '../styles/formStyles';

//Context API
import { Store } from '../utils/Store';
import { Alert, AlertTitle } from '@mui/material';

export default function Form() {
  const classes = formStyles();
  const { state, dispatch } = useContext(Store);

  //const {name, email, job, age, cpf, number} = {}

  const [pessoa, setPessoa] = useState({
    name: '',
    age: 0,
    job: '',
    email: '',
    cpf: '',
    telefone: '',
  });
  
  const {dialog} = state;
  const {open} = dialog;
  const [isOpen, setOpen] = useState(open);
  const handleClose = (event, reason) =>{
    if(reason === 'clickaway'){
      return;
    }

    setOpen(false);
  }

  const handleClick = () =>{
    setOpen(true);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: 'SAVE_NEW_PERSON', payload: { ...pessoa } });
    setPessoa({ name: '', age: 0, job: '', email: '', cpf: '', telefone: '' });
    setOpen(true)
  };
  return (
    <Box
      component="form"
      onSubmit={(e) => submitHandler(e)}
      className={classes.form}
    >
      <TextField
        variant="outlined"
        color="primary"
        fullWidth
        label="Nome"
        type="text"
        placeholder="Digite seu nome"
        required
        value={pessoa.name}
        onChange={(e) => setPessoa({ ...pessoa, name: e.target.value })}
      />
      <TextField
        variant="outlined"
        color="primary"
        fullWidth
        label="Email"
        type="text"
        value={pessoa.name}
        placeholder="Digite seu email"
        value={pessoa.email}
        onChange={(e) => setPessoa({ ...pessoa, email: e.target.value })}
      />
      <TextField
        variant="outlined"
        color="primary"
        fullWidth
        label="Cargo"
        type="text"
        placeholder="Digite seu cargo"
        required
        value={pessoa.job}
        onChange={(e) => setPessoa({ ...pessoa, job: e.target.value })}
      />
      <TextField
        variant="outlined"
        color="primary"
        label="Idade"
        type="text"
        placeholder="Digite sua idade"
        required
        value={pessoa.age}
        onChange={(e) => setPessoa({ ...pessoa, age: e.target.value })}
      />
      <TextField
        variant="outlined"
        color="primary"
        label="Cpf"
        type="text"
        placeholder="Digite seu cpf"
        className={classes.smallInputs}
        value={pessoa.cpf}
        onChange={(e) => setPessoa({ ...pessoa, cpf: e.target.value })}
      />
      <TextField
        variant="outlined"
        color="primary"
        label="Telefone"
        type="text"
        placeholder="Digite seu telefone"
        className={classes.smallInputs}
        value={pessoa.telefone}
        onChange={(e) => setPessoa({ ...pessoa, telefone: e.target.value })}
      />
      <Button type="submit" color="secondary" variant="contained" fullWidth>
        CADASTRAR
      </Button>

      <Snackbar open={isOpen} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} variant='outlined' severity={dialog.severity}>
          <AlertTitle>{dialog.title}</AlertTitle>
          {dialog.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
