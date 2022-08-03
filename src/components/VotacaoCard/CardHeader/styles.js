import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
    titulo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5px',
        paddingBottom: '10px',
    },
    icone: {
        height: '30px',
        width: '30px',
    },
    texto: {
        fontSize: '18px !important',
        paddingLeft: '10px',
    },
}));
