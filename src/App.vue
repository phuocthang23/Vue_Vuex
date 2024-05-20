<template>
  <div id="app">
    <h1>{{ msg }}</h1>

    <div>
      <ChildrenPage :data="data" />
    </div>

    <div>
      <TodosList />
      
    </div>
  </div>
</template>

<script>
import { userData } from "./data/fetchData";
import ChildrenPage from "./components/ChildrenPage.vue";
import TodosList from "./components/Todos.vue";
export default {
  name: "App",
  components: {
    ChildrenPage,
    TodosList,
  },
  data() {
    return {
      data: userData,
      msg: "this is userData",
    };
  },
  created() {
    // console.log(this.data);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  margin-top: 60px;
}
</style>
