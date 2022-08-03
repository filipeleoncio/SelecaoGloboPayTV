import React from 'react';
import { getDescricaoParticipante } from '../utils/functions';
import { useStyles } from './styles';
import clsx from 'clsx';

export const Participante = ({ info, index, selected, onClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.participanteCard}>
            <p className={classes.titulo}>{info.nome}</p>
            <img
                src={info.img}
                width='392.7'
                height='304.5'
                alt={`foto ${info.nome}`}
                className={clsx(classes.image, { [classes.selected]: selected })}
                onClick={onClick}
                title={`Eliminar ${info.nome}`}
            />
            <p className={classes.descricao}>{getDescricaoParticipante(index, info.nome, info.sexo)}</p>
        </div>
    );
};
