import React from 'react'
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
import { MoreVertRounded } from '@material-ui/icons';

export default function List({children}) {
    return (
        
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Nome</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Idade</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Cargo</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Ações</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {children}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
