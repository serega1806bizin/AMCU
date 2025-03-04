/* eslint-disable prettier/prettier */
import React, { useEffect, useReducer } from 'react';
import { Product } from '../types/Product';
import { CartProduct } from '../types/CartProduct';

type Action =
  | { type: 'openMenu' }
  | { type: 'closeMenu' };

interface State {
  isMenuVisible: boolean;
  favourites: Product[];
  cart: CartProduct[];
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'openMenu':
      return { ...state, isMenuVisible: true };

    case 'closeMenu':
      return { ...state, isMenuVisible: false };

    default:
      return state;
  }
}

const initialState: State = {
  isMenuVisible: false,
  favourites: JSON.parse(localStorage.getItem('favourites') || '[]'),
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
};

export const StateContext = React.createContext(initialState);
export const DispatchContext = React.createContext<React.Dispatch<Action>>(
  () => {},
);

type Props = {
  children: React.ReactNode;
};

export const GlobalStateProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(state.favourites));
  }, [state.favourites]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
