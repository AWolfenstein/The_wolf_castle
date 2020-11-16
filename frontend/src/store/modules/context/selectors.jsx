import { createSelector } from '@reduxjs/toolkit';
import { ModuleName } from './types';

const getContextState = (state) => state[ModuleName];

export const selectNotifications = createSelector(
  getContextState,
  (contextState) => contextState.notifications
);
