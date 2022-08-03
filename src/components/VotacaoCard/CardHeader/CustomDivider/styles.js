import { makeStyles } from '@material-ui/styles';
import { APP_COLORS } from '../../../../constants/appColors';

export const useStyles = makeStyles(() => ({
    divider: {
        borderTop: '1px dotted',
        height: '1px',
        borderColor: APP_COLORS.primaryGrey,
    },
}));
