import { createContext, useReducer } from 'react';
import Cookies from 'js-cookie';

export const Store = createContext();

const initialState = {
  records: {
    people: Cookies.get('people')
      ? JSON.parse(Cookies.get('people'))
      : [{ name: 'Matheus', age: 21, job: 'dev' }],
  },
  dialog: {
    message: '',
    title: '',
    open: false,
    severity: 'success',
  },
};

function Reducer(state, action) {
  switch (action.type) {
    case 'SAVE_NEW_PERSON':
      const newPerson = action.payload;
      const peopleUpdated = [newPerson, ...state.records.people];
      Cookies.set('people', JSON.stringify(peopleUpdated));
      return {
        ...state,
        records: { people: peopleUpdated },
        dialog: {
          title: 'Sucesso!',
          message: 'Cadastro realizado com sucesso!',
          severity: 'success',
          open: true,
        },
      };

    case 'CLOSE_DIALOG':
      return { ...state, dialog: { open: false } };
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
