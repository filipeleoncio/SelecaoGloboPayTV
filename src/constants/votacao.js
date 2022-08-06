export const VOTACAO_TEXT = {
    TITULO: (
        <>
            QUEM DEVE SER <b>ELIMINADO</b>?
        </>
    ),
    DESCRICAO_PARTICIPANTE_1: (nome, sexo) => (
        <>
            Para eliminar {sexo === 'm' ? 'o' : 'a'} <b>{nome}</b> pelo telefone disque <b>0800-123-001</b> ou mande um
            SMS para <b>8001</b>
        </>
    ),
    DESCRICAO_PARTICIPANTE_2: (nome, sexo) => (
        <>
            Para eliminar {sexo === 'm' ? 'o' : 'a'} <b>{nome}</b> pelo telefone disque <b>0800-123-002</b> ou mande um
            SMS para <b>8002</b>
        </>
    ),
    BUTTON_CONFIRMAR: 'Envie seu voto agora',
    RESULTADO_SUBTITULO: (nome) => (
        <p>
            <b>Parabéns!</b> Seu voto para <b>{nome}</b> foi enviado com sucesso.
        </p>
    ),
    RESULTADO_PARTE_1: 'FALTAM',
    RESULTADO_PARTE_2: 'PARA ENCERRAR A VOTAÇÃO',
};

export const VOTACAO_STEPS = {
    INICIO: 1,
    SELECAO: 2,
    SUCESSO: 3,
};
