import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import groupService from "./groupApi";

const initialState = {
  loading: true,
  error: null,
  groups: [],
  pagination: {
    currentPage: 1,
    pageSize: 50,
    totalCount: undefined
  }
};

export const createGroup = createAsyncThunk(
  "groups/createOne",
  async (body) => {
    const result = await groupService.createOne(body)
    return result.data;
  }
);

export const findGroup = createAsyncThunk(
  "groups/findOne",
  async (groupId) => {
    const result = await groupService.findOne(groupId)
    return result.data;
  }
);

export const findGroups = createAsyncThunk(
  "groups/findAll",
  async (queryParams) => {
    const result = await groupService.findAll(queryParams)
    return result.data;
  }
);


export const updateGroup = createAsyncThunk(
  "groups/updateOne",
  async ({groupId, body}) => {
    const result = await groupService.updateOne(groupId, body)
    return result.data;
  }
);

export const deleteGroup = createAsyncThunk(
  "groups/deleteOne",
  async (groupId) => {
    await groupService.destroy(groupId)
    return groupId;
  }
);

const groupSlice = createSlice({
  name: "groups",
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
      .addCase(createGroup.fulfilled, (state, {payload}) => {
        state.loading = false
        state.groups = [...state.groups, payload.group]

        if (state.pagination.totalCount) {
          state.pagination = {
            ...state.pagination,
            totalCount: state.pagination.totalCount + 1
          }
        }
      })
      .addCase(updateGroup.fulfilled, (state, {payload}) => {
        state.groups = state.groups.map(group => {
          if (group.id === payload.id) {
            return {
              ...group,
              name: payload.name,
              description: payload.description
            }
          }
          return group
        })
      })
      .addCase(findGroups.fulfilled, (state, {payload}) => {
        state.loading = false
        state.groups = payload.groups
        state.pagination = {
          ...state.pagination,
          totalCount: payload.totalCount
        }
      })
      .addCase(findGroup.fulfilled, (state, {payload}) => {
        state.loading = false

        if (state.groups && state.groups.some(d => d.id === payload.id)) { // if group already present
          state.groups = state.groups.map(group => {
            if (group.id === payload.id) {
              return payload
            }
            return group
          })
        } else {
          state.groups = [...state.groups, payload]
        }
      })
      .addCase(deleteGroup.fulfilled, (state, {payload}) => {
        state.groups = state.groups.filter(group => group.id !== payload)
      })
  }
});

export const {setPageSize, setCurrentPage} = groupSlice.actions;

export const selectGroups = (state) => state.groups;
export const selectGroupsPagination = (state) => state.groups.pagination;

export default groupSlice.reducer;
