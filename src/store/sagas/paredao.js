import { call, put, all, takeEvery } from 'redux-saga/effects';
import ParedaoService from '../../services/paredao';
import { ParedaoActions, ParedaoTypes } from '../ducks/paredao';

const service = new ParedaoService();

function* getParedaoInfo({ data }) {
    try {
        let result;

        if (!data) {
            result = yield call(service.getParedaoVigenteInfo, {});
        }

        yield put(ParedaoActions.setParedaoResponse(result));
    } catch (error) {
        yield put(ParedaoActions.setParedaoResponse({}));
        //set error state
    }
}

function* postVoto({ data }) {
    try {
        const result = yield call(service.postVoto, { data });

        yield put(ParedaoActions.postVotoResponse(result));
    } catch (error) {
        yield put(ParedaoActions.postVotoResponse({}));
        //set error state
    }
}

export default function* watcher() {
    yield all([
        takeEvery(ParedaoTypes.GET_PAREDAO_REQUEST, getParedaoInfo),
        takeEvery(ParedaoTypes.POST_VOTO_REQUEST, postVoto),
    ]);
}
