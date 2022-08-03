import { makeStyles } from '@material-ui/styles';
import { APP_COLORS } from '../../../constants/appColors';

export const useStyles = makeStyles(() => ({
    root: {
        position: 'absolute',
        top: '-15px',
        right: '-15px',
        width: '30px',
        height: '30px',
    },
    border: {
        borderRadius: '30px',
        borderTop: `5px solid ${APP_COLORS.primaryGrey}`,
        borderLeft: `5px solid ${APP_COLORS.primaryGrey}`,
        borderRight: `5px solid ${APP_COLORS.primaryGrey}`,
        borderBottom: '5px solid transparent',
        transform: 'rotate(45deg)',
        width: 'calc(100% - 10px)',
        height: 'calc(100% - 10px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    icon: {
        width: '50%',
        height: '50%',
        transform: 'rotate(45deg)',
    },
}));
