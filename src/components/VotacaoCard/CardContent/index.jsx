import React, { useState } from 'react';
import { Participante } from './Participante';
import { useStyles } from './styles';

export const CardContent = ({ info }) => {
    const [participanteSelecionado, setParticipanteSelecionado] = useState(0);
    const classes = useStyles();

    const propsParticipante = (index) => ({
        info: info.infoParticipantes[index - 1],
        index: index,
        selected: participanteSelecionado === index,
        onClick: () => setParticipanteSelecionado(index),
    });

    return (
        <div className={classes.participanteSection}>
            <Participante {...propsParticipante(1)} />
            <Participante {...propsParticipante(2)} />
        </div>
    );
};
