<template>
  <div class="w-4/5 px-2 mx-auto">
    <p class="text-2xl font-medium text-red-400">This is children page</p>
    <div class="text-center">
      <menu-icon />
    </div>

    <AddModal />
    <!-- table -->
    <div
      class="relative overflow-x-auto shadow-md sm:rounded-lg container px-12 mx-auto py-4"
    >
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Email
                <a href="#"><menu-up /></a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Phone
                <a href="#"><menu-up /></a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Gender
                <a href="#"><menu-up /></a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in data"
            :key="item.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ item.name }}
            </th>
            <td class="px-6 py-4">{{ item.email }}</td>
            <td class="px-6 py-4">{{ item.phone }}</td>
            <td class="px-6 py-4">{{ item.gender }}</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import MenuUp from "vue-material-design-icons/MenuUp.vue";
import AddModal from "../components/modal/AddModal.vue";
export default {
  name: "ChildrenPage",
  props: {
    data: Array,
  },
  components: {
    MenuIcon,
    MenuUp,
    AddModal,
  },

  created() {
    // console.log(this.data);
  },
};
</script>
