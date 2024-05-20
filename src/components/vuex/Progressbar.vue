<template>
  <p>Progress: {{ progress }}</p>
</template>

<script>
export default {
  name: "Progressbar",
  computed: {
    progress() {
      return Math.round(
        (this.$store.state.todo.filter((item) => item.completed).length /
          this.$store.state.todo.length) *
          100
      );
    },
  },
};
</script>

<style></style>
