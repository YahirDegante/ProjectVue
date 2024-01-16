<template>
  <b-nav vertical class="custom-sidebar">
    <b-nav-item :class="{ 'active': isActive(['electronics', 'videogames']) }">
      <b-link :to="{ name: 'electronics' }" class="linkStyle">Tienda de juguetes</b-link>
    </b-nav-item>

    <b-nav-item :class="{ 'active': isActive(['kitchen','stove']) }">
      <b-link :to="{ name: 'kitchen' }" class="linkStyle">Tienda de electrodomesticos</b-link>
    </b-nav-item>

    <b-nav-item :class="{ 'active': isActive(['cleaningProducts', 'industrialDetergents']) }">
      <b-link :to="{ name: 'cleaningProducts' }" class="linkStyle">Tienda de productos para el hogar</b-link>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  methods: {
    isActive(routes) {
      return routes.includes(this.$route.name);
    }
  }
}
</script>

<style>
.custom-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  background-color: #3498db;
  padding-top: 55px;
}

.linkStyle {
  color: #fff;
}

.custom-sidebar .active {
  background-color: #2c3e50;
}
</style>
