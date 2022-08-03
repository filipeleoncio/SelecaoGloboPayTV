import { makeStyles } from '@material-ui/styles';
import { APP_COLORS } from '../../../constants/appColors';

export const useStyles = makeStyles(() => ({
    headerBox: {
        paddingBottom: '10px',
    },
    titulo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5px',
        paddingBottom: '15px',
    },
    icone: {
        height: '35px',
        width: '35px',
    },
    texto: {
        fontSize: '25px',
        paddingLeft: '10px',
        color: APP_COLORS.textGrey,
        margin: '0px',
    },
}));
