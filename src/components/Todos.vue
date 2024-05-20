<template>
  <div class="mx-auto bg-slate-200 mt-6 p-5 rounded-md w-1/2">
    <h1 class="text-center w-full bg-amber-300 py-2 text-4xl">TodoList</h1>
    <div
      v-if="auth.isAuthenticated"
      class="p-4 bg-white text-center text-xl font-semibold"
    >
      <span>Total Todo: {{ todo.length }} <button>logout</button></span>
      <!-- <button>login</button> -->
    </div>
    <ul v-if="auth.isAuthenticated" class="px-3 py-3">
      <li
        v-for="item in todo"
        :key="item.id"
        class="py-3 px-2 rounded-xl bg-gray-500 text-white test-md my-2"
      >
        {{ item.text }}
      </li>
    </ul>
    <div v-else class="text-xl font-semibold text-center py-6">
      Please login
    </div>
    <StatusBar />
  </div>
</template>

<script>
import { mapState } from "vuex";
import StatusBar from "./vuex/StatusBar.vue";
export default {
  name: "TodosList",
  components: {
    StatusBar,
  },
  // computed: {
  //   todo() {
  //     return this.$store.state.todo;
  //   },
  //   totalTodo() {
  //     return this.$store.state.todo;
  //   },
  //   isAuthorized() {
  //     return this.$store.state.auth;
  //   },
  computed: mapState(["todo", "auth", "StatusBar"]),
};
</script>

<style scoped></style>
