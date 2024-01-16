<template>
    <nav aria-label="breadcrumb" class="custom-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" :class="{ 'active': isActive('electronics') }">
                <b-link :to="{ name: 'electronics' }" :style="{ color: isActive('electronics') ? 'blue' : 'grey' }">Electronicos</b-link>
            </li>
            <li class="breadcrumb-item" :class="{ 'active': isActive('videogames') }">
                <b-link :to="{ name: 'videogames' }" :style="{ color: isActive('videogames') ? 'blue' : 'grey' }">Juegos de Video</b-link>
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