<template>
  <b-nav vertical class="pt-5">
    <b-nav-item exact-active-class="active">
      <b-link :to="{ name: 'inicio' }">Tienda de juguetes</b-link>
    </b-nav-item>

    <b-nav-item exact-active-class="active">
      <b-link :to="{ name: 'componente' }">Tienda de electrodomesticos</b-link>
    </b-nav-item>

    <b-nav-item exact-active-class="active">
      <b-link :to="{ name: 'componente1' }">Tienda de productos para el hogar</b-link>
    </b-nav-item>
  </b-nav>
</template>
