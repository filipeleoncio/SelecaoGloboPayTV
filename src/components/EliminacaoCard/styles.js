import { makeStyles } from '@material-ui/styles';
import { APP_COLORS } from '../../constants/appColors';

export const useStyles = makeStyles(() => ({
    mainCard: {
        width: '550px',
        height: '500px',
        borderStyle: 'solid',
        borderColor: APP_COLORS.primaryGrey,
        borderWidth: '5px',
        borderRadius: '5px',
        position: 'relative',
    },
}));
