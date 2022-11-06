import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: contactsInitialState,
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.contactsList.push(action.payload);
      console.log('action.payload', action.payload);
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

export const { addContacts, updFilter, delContact } = contactsSlice.actions;
