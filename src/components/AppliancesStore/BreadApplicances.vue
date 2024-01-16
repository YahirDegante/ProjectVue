<template>
    <nav aria-label="breadcrumb" class="custom-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" :class="{ 'active': isActive('kitchen') }">
                <b-link :to="{ name: 'kitchen' }" :style="{ color: isActive('kitchen') ? 'blue' : 'grey' }">Para la cocina</b-link>
            </li>
            <li class="breadcrumb-item" :class="{ 'active': isActive('stove') }">
                <b-link :to="{ name: 'stove' }" :style="{ color: isActive('stove') ? 'blue' : 'grey' }">Estufas</b-link>
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