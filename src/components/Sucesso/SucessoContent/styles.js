import { makeStyles } from '@material-ui/styles';
import { APP_COLORS } from '../../../constants/appColors';

export const useStyles = makeStyles(() => ({
    sucessoBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    resultadoBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    participanteImg: {
        width: '35%',
        objectFit: 'cover',
    },
    resultadoSubtitulo: {
        fontSize: '20px',
        color: APP_COLORS.textGrey,
    },
}));
