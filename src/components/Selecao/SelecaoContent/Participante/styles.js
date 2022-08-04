import { makeStyles } from '@material-ui/styles';
import { APP_COLORS } from '../../../../constants/appColors';

export const useStyles = makeStyles(() => ({
    participanteCard: {
        display: 'flex',
        flexDirection: 'column',
        width: '49%',
    },
    titulo: {
        fontWeight: 'bold',
        color: APP_COLORS.textGrey,
    },
    descricao: {
        fontSize: '13px',
        color: APP_COLORS.textGrey,
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        border: `1px solid ${APP_COLORS.primaryGrey}`,
        borderRadius: '5px',
        boxSizing: 'border-box',
        '-moz-box-sizing': 'border-box',
        '-webkit-box-sizing': 'border-box',
        cursor: 'pointer',
    },
    selected: {
        border: `5px solid ${APP_COLORS.primaryOrange}`,
    },
}));
