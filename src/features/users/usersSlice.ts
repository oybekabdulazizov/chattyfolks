import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: nanoid(), name: 'John Doe' },
  { id: nanoid(), name: 'Oybek Abdulazizov' },
  { id: nanoid(), name: 'Leo Da Vinci' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: any) => state.users;

export default usersSlice.reducer;
