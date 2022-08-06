import React from 'react';
import { useSelector } from 'react-redux';
import { VOTACAO_TEXT } from '../../../constants/votacao';
import { Apuracao } from './Apuracao';
import { useStyles } from './styles';

export const SucessoContent = () => {
    const { infoParticipantes, idParticipanteSelecionado } = useSelector((state) => ({
        infoParticipantes: state.paredao.infoParticipantes,
        idParticipanteSelecionado: state.paredao.idParticipanteSelecionado,
    }));

    const classes = useStyles();

    const nomeParticipante = infoParticipantes[idParticipanteSelecionado - 1].nome;
    return (
        infoParticipantes.length > 0 && (
            <div className={classes.sucessoBox}>
                <div className={classes.resultadoSubtitulo}>{VOTACAO_TEXT.RESULTADO_SUBTITULO(nomeParticipante)}</div>
                <div className={classes.resultadoBox}>
                    <img
                        src={infoParticipantes[0].img}
                        className={classes.participanteImg}
                        width='340'
                        height='290'
                        alt='Foto participante1'
                    />
                    <img
                        src={infoParticipantes[1].img}
                        className={classes.participanteImg}
                        width='340'
                        height='290'
                        alt='Foto participante2'
                    />
                </div>
                <Apuracao />
            </div>
        )
    );
};
