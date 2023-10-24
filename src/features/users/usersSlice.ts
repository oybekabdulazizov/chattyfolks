import { createSlice, nanoid } from '@reduxjs/toolkit';

type user_type = {
  id: string;
  name: string;
};

const initialState: Array<user_type> = [
  { id: nanoid(), name: 'John Doe' },
  { id: nanoid(), name: 'Oybek Abdulazizov' },
  { id: nanoid(), name: 'Leo Da Vinci' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const getUsers = (state: any) => state.users;

export const getUserById = (state: any, userId: string) => {
  return state.users.find((user: user_type) => user.id === userId);
};

export default usersSlice.reducer;
