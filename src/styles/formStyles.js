import { makeStyles } from '@material-ui/core';

const formStyles = makeStyles({
  form: {
    margin: '20px auto',
    padding: '5px',
    maxWidth: '800px',
  },
  smallInputs: {
    '@media(min-width : 860px)': {
      marginLeft: '5px',
      maxWidth: '254px',
    },
  },
});

export default formStyles;
