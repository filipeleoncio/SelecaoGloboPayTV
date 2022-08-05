import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ParedaoActions } from '../../../store/ducks/paredao';
import { ContentFooter } from './CardFooter';
import { Participante } from './Participante';
import { useStyles } from './styles';

export const SelecaoContent = ({ onAvancar }) => {
    const [participanteSelecionado, setParticipanteSelecionado] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
    const { infoParticipantes } = useSelector((state) => ({
        infoParticipantes: state.paredao.infoParticipantes,
    }));

    const propsParticipante = (index) => ({
        info: infoParticipantes[index - 1],
        index: index,
        selected: participanteSelecionado === index,
        onClick: () => setParticipanteSelecionado(index),
    });

    const handleClickConfirm = () => {
        if (participanteSelecionado !== 0) {
            dispatch(ParedaoActions.postVotoRequest(participanteSelecionado));
            setParticipanteSelecionado(0);
            onAvancar();
        }
    };

    return (
        <>
            <div className={classes.participanteSection}>
                <Participante {...propsParticipante(1)} />
                <Participante {...propsParticipante(2)} />
            </div>
            <ContentFooter onClickButton={handleClickConfirm} />
        </>
    );
};
