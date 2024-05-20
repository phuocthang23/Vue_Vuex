<template>
  <div>
    <p class="p-1 text-center bg-slate-300 text-black">Done</p>
    <ul>
      <li
        v-for="item in completed"
        :key="item.id"
        class="py-3 px-2 rounded-xl bg-green-300 text-black test-md my-2"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StatusBar",
  computed: {
    completed() {
      return this.$store.state.todo.filter((item) => item.completed === true);
    },
  },
};
</script>
