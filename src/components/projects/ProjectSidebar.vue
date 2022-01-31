<template>
  <div class="ml-2 mt-2">
    <nav>
      <router-link to="/add"><b-button variant="warning" class="m-3">+</b-button></router-link>
      <ul class="list-unstyled ml-1">
        <li class="text-secondary">
          <b-icon icon="list-task"></b-icon>
          <p class="font-tiny">ALL</p>
        </li>
        <li class="text-secondary">
          <b-icon icon="telephone-fill"></b-icon>
          <p class="font-tiny">Machines</p>
        </li>
        <li class="text-secondary">
          <b-icon icon="person-fill"></b-icon>
          <p class="font-tiny">Parts</p>
        </li>
        <li class="text-secondary">
          <b-icon icon="person-fill"></b-icon>
          <p class="font-tiny">Other</p>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  components: {},

  data() {
    return {};
  },

  methods: {},

  computed: {},
};
</script>

<style></style>
