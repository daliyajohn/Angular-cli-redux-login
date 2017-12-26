import { Action } from '@ngrx/store';

export const LOGIN_SUBMIT = '[LOGIN] login submit';
export const LOGIN_SUCCESS = '[LOGIN] login success';
export const LOGIN_FAIL = '[LOGIN] login fail';

export class LoginSubmit implements Action {
    readonly type = LOGIN_SUBMIT;
    constructor(public payload?: any) { }
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload?: any) { }
}

export class LoginFail implements Action {
    readonly type = LOGIN_FAIL;
    constructor(public payload?: any) { }
}

export type LoginAction = LoginSubmit | LoginSuccess | LoginFail;
