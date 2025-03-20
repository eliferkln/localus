import { createStore } from "vuex";
import axiosInstance from "../utils/axiosInstance";

const store = createStore({
  state: {
    data: [],
    error: null,
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    updateData(state, updatedUser) {
      state.data = state.data.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const { data } = await axiosInstance.get("/users");
        commit("setData", data);
      } catch (error) {
        commit("setError", error);
      }
    },

    async updateUserDetail({ commit, state }, form) {
      try {
        const { data } = await axiosInstance.put(`/users/${form.id}`, form);
        commit("updateData", data);
      } catch (error) {
        commit("setError", error);
      }
    },
  },
  getters: {
    getData: (state) => state.data,
    getError: (state) => state.error,
  },
});

export default store;
