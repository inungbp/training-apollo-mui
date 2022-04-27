import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        minHeight: '100vh'
    },
    skeleton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        display: 'flex',
        gap: '10px',
        color: 'blue',
        minHeight: '100vh'
    },
    button: {
        margin: '10px !important',
        backgroundColor: 'red !important',
        '& .typo': {
            fontSize: '20px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '10px',
            },
        },
    },
    product: {
        textAlign: 'center',
    }
}));