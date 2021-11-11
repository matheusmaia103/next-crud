import { makeStyles } from '@material-ui/core';

const layoutStyles = makeStyles({
  container: {
    minHeight: '100vh',
    maxWidth: '1000px',
    paddingTop: '100px',
  },
  footer: {
    backgroundColor: '#000814',
    color: 'white',
    marginTop: '40px',
    minHeight: '60px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default layoutStyles;
