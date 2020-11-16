import { createAction } from '@reduxjs/toolkit';
import { CLOSE_SNACKBAR, ENQUEUE_SNACKBAR, REMOVE_SNACKBAR } from './types';

export const closeSnackbar = createAction(CLOSE_SNACKBAR);
export const removeSnackbar = createAction(REMOVE_SNACKBAR);

export const successSnackbar = createAction(ENQUEUE_SNACKBAR, function prepare(
  text
) {
  console.log('safasf');
  return {
    payload: {
      message: text,
      options: {
        variant: 'success',
      },
    },
  };
});

export const errorSnackbar = createAction(ENQUEUE_SNACKBAR, function prepare(
  text
) {
  return {
    payload: {
      message: text,
      options: {
        variant: 'error',
      },
    },
  };
});
