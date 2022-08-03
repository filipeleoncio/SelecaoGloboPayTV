import { makeStyles } from '@material-ui/styles';
import { APP_COLORS } from '../../../constants/appColors';

export const useStyles = makeStyles(() => ({
    root: {
        position: 'absolute',
        top: '-18px',
        right: '-18px',
        width: '36px',
        height: '36px',
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
        '& .MuiSvgIcon-root': {
            width: '60%',
            height: '60%',
        },
    },
    icon: {
        transform: 'rotate(45deg)',
    },
}));
