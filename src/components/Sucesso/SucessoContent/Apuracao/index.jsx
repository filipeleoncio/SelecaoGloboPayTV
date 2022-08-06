import { CircularProgress } from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { VOTACAO_TEXT } from '../../../../constants/votacao';
import { milisegundoToDHMS, stringDateToDate } from '../../../../utils/functions';
import { useStyles } from './styles';

//parte do circulo desconsiderado para o 100% dos votos
const circuloDesconsiderado = 19.5;

//razao correspondente a parte considerada para os 100% dos votos
const razaoCirculoConsiderado = 0.61;

export const Apuracao = () => {
    const { diaHoraFim, votosP1Decimal } = useSelector((state) => ({
        votosP1Decimal: state.paredao.porcentagemVotosParticipante1,
        diaHoraFim: state.paredao.diaHoraFim,
    }));

    const votosP1 = Math.floor(votosP1Decimal);

    const classes = useStyles({ votosP1 });

    const porcentagemVotos = [
        circuloDesconsiderado + votosP1 * razaoCirculoConsiderado,
        circuloDesconsiderado + (100 - votosP1) * razaoCirculoConsiderado,
    ];

    const winning = votosP1 > 50 ? 1 : votosP1 < 50 ? 2 : 0;

    const [tempoRestante, setTempoRestante] = useState(0);
    const tempoRestanteString = useRef('');
    const tempoRestanteInicial = useRef(0);

    useEffect(() => {
        if (diaHoraFim.length > 0 && tempoRestanteInicial.current === 0) {
            const diaFim = stringDateToDate(diaHoraFim);
            const agora = new Date().getTime();
            const tempoRestanteMs = Math.abs(diaFim.getTime() - agora) / 1000;

            tempoRestanteString.current = milisegundoToDHMS(tempoRestanteMs);
            setTempoRestante(tempoRestanteMs);
        }
    }, [diaHoraFim]);

    useEffect(() => {
        const interval = setInterval(() => {
            tempoRestanteString.current = milisegundoToDHMS(tempoRestante);
            setTempoRestante((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    const styles = {
        votosParticipante1: clsx(classes.position, classes.votosParticipante1, { [classes.winColor]: winning === 1 }),
        votosParticipante2: clsx(classes.position, classes.votosParticipante2, { [classes.winColor]: winning === 2 }),
        percentualResultado: clsx(classes.position, classes.percentualResultado),
        dadosResultado: clsx(classes.position, classes.dadosResultado),
    };
    return (
        <>
            <div className={styles.votosParticipante1}>
                <CircularProgress variant='determinate' value={porcentagemVotos[0]} thickness={7} color='inherit' />
            </div>
            <div className={styles.votosParticipante2}>
                <CircularProgress variant='determinate' value={porcentagemVotos[1]} thickness={7} color='inherit' />
            </div>
            <div className={styles.percentualResultado}>
                <div className={classes.votos1}>
                    <div className={classes.eixo1}>{votosP1}%</div>
                </div>
                <div className={classes.percentualDivider} />
                <div className={classes.votos2}>
                    <div className={classes.eixo2}>{100 - votosP1}%</div>
                </div>
            </div>
            <div className={styles.dadosResultado}>
                <div className={classes.dadosResultadoText}>
                    {VOTACAO_TEXT.RESULTADO_PARTE_1}
                    <div className={classes.contagemText}>{tempoRestanteString.current}</div>
                    {VOTACAO_TEXT.RESULTADO_PARTE_2}
                </div>
            </div>
        </>
    );
};
