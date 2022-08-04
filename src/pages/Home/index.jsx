import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import ReCAPTCHA from 'react-google-recaptcha';
import { Fade } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { RECAPTCHA_KEYS } from '../../constants/recaptchaKeys';
import { useDispatch } from 'react-redux';
import { ParedaoActions } from '../../store/ducks/paredao';
import { VOTACAO_STEPS as STEPS } from '../../constants/votacao';
import { Selecao } from '../../components/Selecao';
import { Sucesso } from '../../components/Sucesso';

export const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(STEPS.INICIO);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ParedaoActions.getParedaoRequest());
    }, [dispatch]);

    const goToVotacao = () => {
        setCurrentIndex(STEPS.SELECAO);
    };

    const goToSucesso = () => {
        setCurrentIndex(STEPS.SUCESSO);
    };

    const getFadeProps = (index) => {
        let fadeProps = { in: currentIndex === index };
        switch (index) {
            case STEPS.INICIO:
                return {
                    ...fadeProps,
                    timeout: { enter: 500, exit: 1000 },
                };
            case STEPS.SELECAO:
                return {
                    ...fadeProps,
                    style: { transitionDelay: currentIndex === index ? '800ms' : '0ms' },
                    timeout: { enter: 500, exit: 500 },
                };
            case STEPS.SUCESSO:
                return {
                    ...fadeProps,
                    style: { transitionDelay: currentIndex === index ? '500ms' : '0ms' },
                    timeout: { enter: 500, exit: 500 },
                };
            default:
                return null;
        }
    };

    return (
        <Box className={classes.centralBox}>
            <Fade {...getFadeProps(STEPS.INICIO)}>
                <div className={classes.fadeCard}>
                    <ReCAPTCHA sitekey={RECAPTCHA_KEYS.siteKey} onChange={goToVotacao} />
                </div>
            </Fade>
            <Fade {...getFadeProps(STEPS.SELECAO)}>
                <div className={classes.fadeCard}>
                    <Selecao onAvancar={goToSucesso} />
                </div>
            </Fade>
            <Fade {...getFadeProps(STEPS.SUCESSO)}>
                <div className={classes.fadeCard}>
                    <Sucesso />
                </div>
            </Fade>
        </Box>
    );
};
