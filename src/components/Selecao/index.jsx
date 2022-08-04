import React from 'react';
import { SelecaoContent } from './SelecaoContent';
import { DefaultCard } from '../DefaultCard';

export const Selecao = ({ onAvancar }) => {
    return (
        <DefaultCard>
            <SelecaoContent onAvancar={onAvancar} />
        </DefaultCard>
    );
};
