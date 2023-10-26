// import { TaskType } from "../../type/type";
import apiSlice from "../api/apiSlice";

const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTask: builder.query({
      query: (id) => `/tasks?user_id=${id}`,
      providesTags: ["tasks"],
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: `/tasks`,
        method: "POST",
        body: data,
      }),

      // async onQueryStarted(args, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data: task } = await queryFulfilled;

      //     dispatch(
      //       apiSlice.util.updateQueryData(
      //         "getTask",
      //         args.user_id,
      //         (draft: TaskType[]) => {
      //           draft.push(task);
      //         }
      //       )
      //     );
      //   } catch (err) {
      //     console.log(err);
      //   }
      // },
      invalidatesTags: ["tasks"],
    }),

    // delete task
    deleteTask: builder.mutation({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),

      // async onQueryStarted({ id, user_id }, { dispatch, queryFulfilled }) {
      //   // update task
      //   const deleteTask = dispatch(
      //     apiSlice.util.updateQueryData("getTask", user_id, (draft: []) => {
      //       return draft.filter((task: TaskType) => task.id !== id);
      //     })
      //   );

      //   // Optimistic delete task
      //   try {
      //     await queryFulfilled;
      //   } catch (e) {
      //     deleteTask.undo();
      //   }
      // },

      invalidatesTags: ["tasks"],
    }),

    // edit task
    editTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),

      // Edit task Pessimistic update
      // async onQueryStarted({ id, data }, { dispatch, queryFulfilled }) {
      //   try {
      //     const task = await queryFulfilled;

      //     dispatch(
      //       apiSlice.util.updateQueryData(
      //         "getTask",
      //         data.user_id,
      //         (draft: TaskType[]) => {
      //           const index = draft.findIndex((t: TaskType) => t.id === id);

      //           draft[index] = task?.data;
      //         }
      //       )
      //     );
      //   } catch (e) {
      //     // ignore
      //   }
      // },
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useGetTaskQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useEditTaskMutation,
} = taskApi;
