import { createContext, useReducer } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import Cookies from 'js-cookie';

export const Store = createContext();

const initialState = {
  records: {
    people: Cookies.get('people')
      ? JSON.parse(Cookies.get('people'))
      : [{ name: 'Matheus', age: 21, job: 'dev' }],
  },
};

function Reducer(state, action) {
  switch (action.type) {
    case 'SAVE_NEW_PERSON':
      const newPerson = action.payload;
      const peopleUpdated = [newPerson, ...state.records.people];
      alert('Item salvo!');
      Cookies.set('people', JSON.stringify(peopleUpdated));
      return { ...state, records: { people: peopleUpdated } };
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
