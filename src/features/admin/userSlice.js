import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import userService from "./userApi";

const initialState = {
  loading: true,
  error: null,
  users: [],
  pagination: {
    currentPage: 1,
    pageSize: 10,
    totalCount: undefined
  }
};

export const findUsers = createAsyncThunk(
  "users/findAll",
  async (queryParams) => {
    const result = await userService.findAll(queryParams)
    return result.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.pagination = {
        ...state.pagination,
        currentPage: action.payload,
      }
    },
    setPageSize: (state, action) => {
      state.pagination = {
        ...state.pagination,
        pageSize: action.payload,
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(findUsers.fulfilled, (state, {payload}) => {
        state.loading = false
        state.users = payload.users
        state.pagination = {
          ...state.pagination,
          totalCount: payload.totalCount
        }
      })
  }
});

export const {setPageSize, setCurrentPage} = userSlice.actions;

export const selectUsers = (state) => state.users;
export const selectUsersPagination = (state) => state.users.pagination;

export default userSlice.reducer;
