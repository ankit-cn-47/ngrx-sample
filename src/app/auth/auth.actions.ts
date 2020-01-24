import { User } from './model/user.model';
import { createAction, props } from '@ngrx/store';

export const login = createAction(
    '[Login Component] User Login',
    props<{user: User}>()
);

export const logout = createAction(
    '[Logout Button] User Logout'
);

