<template>
  <div class="mx-auto bg-slate-300 mt-6 p-5 rounded-md w-1/2">
    <div class="p-4 bg-white text-xl font-semibold">
      <span>Total Todo: {{ totalTodo.length }}</span>
    </div>
    <ul v-if="isAuthorized" class="px-3 py-3">
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
  </div>
</template>

<script>
export default {
  name: "TodosList",
  computed: {
    todo() {
      return this.$store.state.todo;
    },
    totalTodo() {
      return this.$store.state.todo;
    },
    isAuthorized() {
      return this.$store.state.auth;
    },
  },
};
</script>

<style scoped></style>
