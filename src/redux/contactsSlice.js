import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: contactsInitialState,
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contactsList.push(action.payload);
    },
    delContact(state, action) {
      state.contactsList = state.contactsList.filter(
        contact => contact.id !== action.payload
      );
    },
    updFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, delContact, updFilter } = contactsSlice.actions;
