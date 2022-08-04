import { VOTACAO_TEXT } from '../../../../constants/votacao';

export function getDescricaoParticipante(index, nome, sexo) {
    return index === 1
        ? VOTACAO_TEXT.descricaoParticipante1(nome, sexo)
        : VOTACAO_TEXT.descricaoParticipante2(nome, sexo);
}
