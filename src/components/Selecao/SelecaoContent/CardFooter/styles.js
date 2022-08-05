import { makeStyles } from '@material-ui/styles';
import { APP_COLORS } from '../../../../constants/appColors';

export const useStyles = makeStyles(() => ({
    footerBox: {
        height: '77.75px',
        borderTop: `1px solid ${APP_COLORS.primaryGrey}`,
        backgroundColor: APP_COLORS.secondaryGrey,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiButton-root': {
            width: '200px',
            fontSize: '15px',
            textTransform: 'none',
            border: `1px solid ${APP_COLORS.borderButtonBlue}`,
            backgroundImage: `linear-gradient(${APP_COLORS.primaryButtonBlue}, ${APP_COLORS.secondaryButtonBlue})`,
            letterSpacing: '0',
        },
    },
}));
