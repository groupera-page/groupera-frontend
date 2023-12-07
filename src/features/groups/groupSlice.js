import {createAsyncThunk, createReducer} from "@reduxjs/toolkit";

import tokenService from "../../util/tokenServices";
import groupService from "./groupApi";

const initialState = {
  loading: true,
  error: null,
  groups: [],
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
  async () => {
    const result = await groupService.findAll()
    return result.data;
  }
);


export const updateGroup = createAsyncThunk(
  "groups/updateOne",
  async (groupId, body) => {
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


const groupReducer = createReducer(
  // name: "groups",
  initialState,
  (builder) => {
    builder
      .addCase(createGroup.fulfilled, (state, {payload}) => {
        state.loading = false
        state.groups.push(payload.data)
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
        state.groups = payload
      })
      .addCase(findGroup.fulfilled, (state, {payload}) => {
        state.loading = false
        if(state.groups.some(d => d.id === payload.data.id)){
          state.groups = state.groups.map(group => {
            if (group.id === payload.id) {
              return payload
            }
            return group
          })
        } else{
          state.groups.push(payload)
        }
      })
      .addCase(deleteGroup.fulfilled, (state, {payload}) => {
        state.groups = state.groups.filter(group => group.id !== payload)
      })
  }
);

export const selectGroups = (state) => state.groups;

export default groupReducer;
