/**
 * Função para converter milisegundos passados por parâmetro para o fomrato DIA:HORA:MINUTO:SEGUNDO
 */
export const milisegundoToDHMS = (ms) => {
    // subtrai dias inteiros
    const dias = Math.floor(ms / 86400);
    ms -= dias * 86400;

    // subtrai horas inteiras
    const horas = Math.floor(ms / 3600) % 24;
    ms -= horas * 3600;

    // subtrai minutos inteiros
    const minutos = Math.floor(ms / 60) % 60;
    ms -= minutos * 60;

    // segundos restantes
    const segundos = Math.floor(ms % 60);

    const diasString = dias > 0 ? String(dias).padStart(2, '0') + ':' : '';
    const horasString = String(horas).padStart(2, '0');
    const minutosString = String(minutos).padStart(2, '0');
    const segundosString = String(segundos).padStart(2, '0');

    return diasString + horasString + ':' + minutosString + ':' + segundosString;
};

/**
 * Função para converter data no formato string para tipo Date
 * @params stringDate no formato DD/MM/AAAA-HH:MM:SS
 */
export const stringDateToDate = (stringDate) => {
    if (!stringDate) return null;
    const splitDiaHoraFim = stringDate.split('-');
    const splitDia = splitDiaHoraFim[0].split('/');
    const splitHora = splitDiaHoraFim[1].split(':');
    const dia = splitDia[0];
    const mes = splitDia[1];
    const ano = splitDia[2];
    const hora = splitHora[0];
    const minuto = splitHora[1];
    const segundo = splitHora[2];
    return new Date(ano, mes - 1, dia, hora, minuto, segundo);
};
