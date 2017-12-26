
import { AppState } from './login/login.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromLogin from './login/login.reducer';


export interface RootState {
    details: AppState;
}
