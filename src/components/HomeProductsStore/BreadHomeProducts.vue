<template>
    <nav aria-label="breadcrumb" class="custom-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" :class="{ 'active': isActive('cleaningProducts') }">
                <b-link :to="{ name: 'cleaningProducts' }" :style="{ color: isActive('cleaningProducts') ? 'blue' : 'grey' }">Productos de Lipieza</b-link>
            </li>
            <li class="breadcrumb-item" :class="{ 'active': isActive('industrialDetergents') }">
                <b-link :to="{ name: 'industrialDetergents' }" :style="{ color: isActive('industrialDetergents') ? 'blue' : 'grey' }" >Detergentes Industriales</b-link>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    methods: {
        isActive(routeName) {
            return this.$route.name === routeName;
        }
    }
}
</script>
<style>
.custom-breadcrumb .breadcrumb-item.active {
    font-weight: bold;
}
</style>