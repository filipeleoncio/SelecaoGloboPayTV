import { VOTACAO_TEXT } from '../../../../constants/votacao';

export function getDescricaoParticipante(index, nome, sexo) {
    return index === 1
        ? VOTACAO_TEXT.DESCRICAO_PARTICIPANTE_1(nome, sexo)
        : VOTACAO_TEXT.DESCRICAO_PARTICIPANTE_2(nome, sexo);
}
