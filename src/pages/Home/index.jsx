import React, { useState } from 'react';
import { useStyles } from './styles';
import ReCAPTCHA from 'react-google-recaptcha';
import { Fade } from '@material-ui/core';
import { VotacaoCard } from '../../components/VotacaoCard';
import { Box } from '@material-ui/system';
import { RECAPTCHA_KEYS } from '../../constants/recaptchaKeys';
import { images } from '../../assets/images';

export const Home = () => {
    const [showCaptcha, setShowCaptcha] = useState(true);
    const classes = useStyles();

    function onChange() {
        setShowCaptcha(false);
    }

    const votacaoInfo = {
        infoParticipantes: [
            { img: images.participante1, nome: 'Participante 1', sexo: 'f' },
            { img: images.participante2, nome: 'Participante 2', sexo: 'm' },
        ],
    };

    return (
        <Box className={classes.centralBox}>
            <Fade in={showCaptcha} appear timeout={{ exit: 1000 }} unmountOnExit>
                <div className={classes.fadeCard}>
                    <ReCAPTCHA sitekey={RECAPTCHA_KEYS.siteKey} onChange={onChange} />
                </div>
            </Fade>
            <Fade
                in={!showCaptcha}
                style={{ transitionDelay: !showCaptcha ? '800ms' : '0ms' }}
                timeout={{ enter: 500 }}
            >
                <div className={classes.fadeCard}>
                    <VotacaoCard info={votacaoInfo} />
                </div>
            </Fade>
        </Box>
    );
};
