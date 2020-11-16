import { createReducer } from '@reduxjs/toolkit';
import { CLOSE_SNACKBAR, ENQUEUE_SNACKBAR, REMOVE_SNACKBAR } from './types';

const INITIAL_STATE = {
  notifications: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [REMOVE_SNACKBAR]: (state, action) => {
    return {
      ...state,
      notifications: state.notifications.filter(
        (notification) => notification.key !== action.payload
      ),
    };
  },
  [CLOSE_SNACKBAR]: (state, action) => {
    const dismissAll = !action.payload;
    return {
      ...state,
      notifications: state.notifications.map((notification) =>
        dismissAll || notification.key === action.payload
          ? { ...notification, dismissed: true }
          : { ...notification }
      ),
    };
  },
  [ENQUEUE_SNACKBAR]: (state, action) => {
    const key = action.payload.options && action.payload.options.key;
    const notification = {
      key: key || new Date().getTime() + Math.random(),
      ...action.payload,
    };
    return {
      ...state,
      notifications: [...state.notifications, notification],
    };
  },
});

export default reducer;
