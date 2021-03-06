import * as userActions from './../login/login.action';
import { User, Authenticated } from './../login/login.model';
// import { Action } from 'rxjs/scheduler/Action';

export interface AppState {
    users: User[];
    data: Authenticated[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: AppState = {
    users: [],
    data: [],
    loaded: false,
    loading: false
};

const newState = (state, newData) => {
    const updatedState = Object.assign({}, state, newData);
    return updatedState;
};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case userActions.LOGIN_SUBMIT: {
            return {
                ...state,
                users: action.payload,
                loaded: false,
                loading: true
            };
        }

        case userActions.LOGIN_SUCCESS: {
            const userDetails = action.payload._body;
            return {
                ...state,
                data: userDetails,
                loaded: true,
                loading: false
            };
        }

        case userActions.LOGIN_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false
            };
        }

        default: {
            return state;
        }
    }
}
