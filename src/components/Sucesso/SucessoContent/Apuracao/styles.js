import { makeStyles } from '@material-ui/styles';
import { APP_COLORS } from '../../../../constants/appColors';

export const useStyles = makeStyles(() => ({
    position: {
        width: '240px',
        height: '240px',
        bottom: '-50px',
        position: 'absolute',
    },
    votosParticipante1: {
        color: APP_COLORS.primaryGrey,
        '& .MuiCircularProgress-root': {
            width: '100% !important',
            height: '100% !important',
            transform: 'rotate(90deg) !important',
            '-webkit-transform': 'rotate(90deg)',
        },
    },
    votosParticipante2: {
        color: APP_COLORS.primaryGrey,
        '& .MuiCircularProgress-root': {
            width: '100% !important',
            height: '100% !important',
            transform: 'scaleX(-1) rotate(90deg)  !important',
            '-webkit-transform': 'scaleX(-1) rotate(90deg)',
        },
    },
    winColor: {
        color: `${APP_COLORS.primaryOrange} !important`,
    },
    percentualResultado: ({ votosP1 }) => {
        //considera 220 graus como 100% dos votos
        //rotaciona o equivalente em graus à porcentagem de votos do participante 1
        const rotateDeg = -110 + (votosP1 / 100) * 220;
        return {
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '2px solid white',
            transform: `rotate(${rotateDeg}deg)`,

            textShadow: `-1px 1px ${APP_COLORS.textGrey}`,
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
        };
    },
    votos1: {
        width: '50%',
        textAlign: 'end',
        paddingTop: '10px',
        paddingRight: '10px',
    },
    votos2: {
        width: '50%',
        paddingTop: '10px',
        paddingLeft: '10px',
    },
    eixo1: {
        display: 'inline-block',
        transform: 'rotate(-13deg)',
    },
    eixo2: {
        display: 'inline-block',
        transform: 'rotate(13deg)',
    },
    percentualDivider: {
        width: '2px',
        height: '40px',
        backgroundColor: 'white',
    },
    dadosResultado: {
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    dadosResultadoText: {
        marginTop: '-10px',
        color: APP_COLORS.secondaryTextGrey,
        fontSize: '11px',
    },
    contagemText: {
        fontSize: '33px',
        color: APP_COLORS.primaryOrange,
        marginTop: '-5px',
        marginBottom: '-2px',
    },
}));
