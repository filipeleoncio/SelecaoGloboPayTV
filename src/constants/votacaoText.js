export const VOTACAO_TEXT = {
    titulo: (
        <>
            QUEM DEVE SER <b>ELIMINADO</b>?
        </>
    ),
    descricaoParticipante1: (nome, sexo) => (
        <>
            Para eliminar {sexo === 'm' ? 'o' : 'a'} <b>{nome}</b> pelo telefone disque <b>0800-123-001</b> ou mande um
            SMS para <b>8001</b>
        </>
    ),
    descricaoParticipante2: (nome, sexo) => (
        <>
            Para eliminar {sexo === 'm' ? 'o' : 'a'} <b>{nome}</b> pelo telefone disque <b>0800-123-002</b> ou mande um
            SMS para <b>8002</b>
        </>
    ),
    buttonConfirmarText: 'Envie seu voto agora',
};
