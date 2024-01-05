import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import groupService from "./groupApi";

const initialState = {
  loading: true,
  error: null,
  groups: [],
  pagination: {
    currentPage: 1,
    pageSize: 50,
    totalCount: undefined,
  },
};

export const createGroup = createAsyncThunk(
  "groups/createOne",
  async (body) => {
    const result = await groupService.createOne(body);
    return result.data;
  }
);

export const findGroup = createAsyncThunk("groups/findOne", async (groupId) => {
  const result = await groupService.findOne(groupId);
  return result.data;
});

export const findGroups = createAsyncThunk(
  "groups/findAll",
  async (queryParams) => {
    const result = await groupService.findAll(queryParams);
    return result.data;
  }
);

export const updateGroup = createAsyncThunk(
  "groups/updateOne",
  async ({ groupId, body }) => {
    const result = await groupService.updateOne(groupId, body);
    if (result.status === 200) {
      return { id: groupId, ...body };
    }
    return result.data;
  }
);

export const createGroupMeeting = createAsyncThunk(
  "groups/createOneMeeting",
  async ({ groupId, body }) => {
    const result = await groupService.createOneMeeting(groupId, body);
    return result.data;
  }
);

export const updateGroupMeeting = createAsyncThunk(
  "groups/updateOneMeeting",
  async ({ meetingId, body }) => {
    const result = await groupService.updateOneMeeting(meetingId, body);
    return result.data;
  }
);

export const deleteGroupMeeting = createAsyncThunk(
  "groups/deleteOneMeeting",
  async (meetingId) => {
    await groupService.destroyOneMeeting(meetingId);
    return meetingId;
  }
);

export const deleteGroup = createAsyncThunk(
  "groups/deleteOne",
  async (groupId) => {
    await groupService.destroy(groupId);
    return groupId;
  }
);

export const joinGroup = createAsyncThunk("groups/join", async (groupId) => {
  const result = await groupService.join(groupId);
  return result.data;
});

export const leaveGroup = createAsyncThunk(
  "groups/leave",
  async ({ groupId, memberId }) => {
    const result = await groupService.leave(groupId);
    if (result.status === 200) {
      return { groupId, memberId };
    }
    return result.data;
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
      };
    },
    setPageSize: (state, action) => {
      state.pagination = {
        ...state.pagination,
        pageSize: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGroup.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload.group.verified) {
          state.groups = [...state.groups, payload.group];

          if (state.pagination.totalCount) {
            state.pagination = {
              ...state.pagination,
              totalCount: state.pagination.totalCount + 1,
            };
          }
        }
      })
      .addCase(updateGroup.fulfilled, (state, { payload }) => {
        state.groups = state.groups.map((group) => {
          if (group.id === payload.id) {
            return {
              ...group,
              ...payload,
            };
          }
          return group;
        });
      })
      .addCase(findGroups.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.groups = payload.groups;
        state.pagination = {
          ...state.pagination,
          totalCount: payload.totalCount,
        };
      })
      .addCase(findGroup.fulfilled, (state, { payload }) => {
        state.loading = false;

        if (state.groups && state.groups.some((d) => d.id === payload.id)) {
          // if group already present
          state.groups = state.groups.map((group) => {
            if (group.id === payload.id) {
              return payload;
            }
            return group;
          });
        } else {
          state.groups = [...state.groups, payload];
        }
      })
      .addCase(joinGroup.fulfilled, (state, { payload }) => {
        state.loading = false;

        if (
          state.groups &&
          state.groups.some((d) => d.id === payload.group.id)
        ) {
          // if group already present

          state.groups = state.groups.map((group) => {
            if (group.id === payload.group.id) {
              return payload.group;
            }
            return group;
          });
        }
      })
      .addCase(leaveGroup.fulfilled, (state, { payload }) => {
        state.loading = false;

        if (
          state.groups &&
          state.groups.some((d) => d.id === payload.groupId)
        ) {
          // if group already present
          state.groups = state.groups.map((group) => {
            if (group.id === payload.groupId) {
              delete group.members;
              return group;
            }
            return group;
          });
        }
      })
      .addCase(deleteGroup.fulfilled, (state, { payload }) => {
        state.groups = state.groups.filter((group) => group.id !== payload);
      })
      .addCase(deleteGroupMeeting.fulfilled, (state, { payload }) => {
        state.groups = state.groups.map((group) => {
          if (group.meetings.some((m) => m.id === payload)) {
            return {
              ...group,
              meetings: group.meetings.filter((m) => m.id !== payload),
            };
          }
          return group;
        });
      });
  },
});

export const { setPageSize, setCurrentPage } = groupSlice.actions;

export const selectGroups = (state) => state.groups;
export const selectGroupsPagination = (state) => state.groups.pagination;

export default groupSlice.reducer;
