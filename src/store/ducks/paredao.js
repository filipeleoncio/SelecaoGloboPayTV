import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Actions
const { Types, Creators } = createActions({
    getParedaoRequest: ['data'],
    setParedaoResponse: ['data'],
    postVotoRequest: ['data'],
    postVotoResponse: ['data'],
});

export const ParedaoTypes = Types;
export const ParedaoActions = Creators;

export const INITIAL_STATE = Immutable({
    infoParticipantes: [],
    loading: false,
    porcentagemVotosParticipante1: 0,
    diaHoraInicio: '',
    diaHoraFim: '',
});

//Reducers
const reduceParedaoRequest = (state) => {
    return state.merge({ loading: true });
};

const reduceParedaoResponse = (state, { data }) => {
    return state.merge({ ...data, loading: false });
};

const reduceVotoRequest = (state, { data }) => {
    return state.merge({ loading: true });
};

const reduceVotoResponse = (state, { data }) => {
    return state.merge({ ...data, loading: false });
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_PAREDAO_REQUEST]: reduceParedaoRequest,
    [Types.SET_PAREDAO_RESPONSE]: reduceParedaoResponse,
    [Types.POST_VOTO_REQUEST]: reduceVotoRequest,
    [Types.POST_VOTO_RESPONSE]: reduceVotoResponse,
});
