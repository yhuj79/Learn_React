import { bindActionCreators } from 'redux';
import * as userDataAction from './userData';

import { store } from './store';

const {dispatch} = store;

export const UserDataAction = bindActionCreators(userDataAction, dispatch);