import { images } from '../assets/images';
import api from './index';

export default class ParedaoService {
    constructor() {
        this.api = api;
    }

    getParedaoVigenteInfo = () => {
        const mockResParedaoVigenteInfo = {
            infoParticipantes: [
                { img: images.participante1, nome: 'Participante 1', sexo: 'f' },
                { img: images.participante2, nome: 'Participante 2', sexo: 'm' },
            ],
        };
        return mockResParedaoVigenteInfo;

        //solução final
        // return this.api.get(ENDPOINT, payload);
    };

    postVoto = (payload) => {
        const mockResPostVoto = {
            porcentagemVotosParticipante1: 65,
            diaHoraInicio: '01/08/2022-20:00:00',
            diaHoraFim: '09/08/2022-20:00:00',
        };
        return mockResPostVoto;

        //solução final
        // return this.api.post(ENDPOINT, payload);
    };
}
