import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  overrides: {
    // Name of the component
    MuiButton: {
      root: {
        // Some CSS
        //textTransform: 'none',
      },
      contained: {
        margin: '10px auto',
      },
    },
    MuiTextField: {
      root: {
        margin: '5px 0',
      },
    },
    MuiTableHead: {
      root: {
        textAlign: 'center',
      },
    },
  },
  palette: {
    primary: {
      main: '#3c4dc9',
    },
    secondary: {
      main: '#203142',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
