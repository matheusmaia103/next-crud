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
        borderRadius: '50px',
        paddingTop: '15px',
        paddingBottom: '15px',
      },
      contained: {
        background: 'linear-gradient(45deg, #b853ed, #290748)',
        boxShadow: '0px 0px 40px -2px #b853ed',
        margin: '40px auto',
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
      main: '#b853ed',
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
