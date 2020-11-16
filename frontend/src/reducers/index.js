import { combineReducers } from 'redux';

import { ModuleName as ContextModuleName } from '../store/modules/context/types';
import context from '../store/modules/context/reducers';

export default combineReducers({
  [ContextModuleName]: context,
});
