<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Admin',
            to: 'componente'
          },
          {
            text: 'Manage',
            to: 'componente1'
          },
          {
            active: true
          }
        ]
      }
    }
  }
</script>