import { ActionInterface } from './../types/action.types';
import { AccountStateInterface } from '../types/account.types';

export const accountReducer = (state: AccountStateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'ADD_FILTER':
      if (!state.filters) return state;
      return {
        ...state,
        filters: [...state.filters, action.payload.value],
        currentPage: 1,
      };
    case 'REMOVE_FILTER':
      if (!state.filters) return state;
      return {
        ...state,
        filters: state.filters.filter(ele => ele.id !== action.payload.id),
        currentPage: 1,
      };
    case 'RESET_FILTER':
      return {
        ...state,
        filters: [],
        currentPage: 1,
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        currentPage: action.payload.value,
      };
    case 'CHANGE_TAB':
      return {
        filters: [],
        tabNumber: action.payload.value,
        currentPage: 1,
      };
    default:
      return state;
  }
};
