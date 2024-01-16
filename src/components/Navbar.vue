<template>
    <div>
        <b-navbar class="custom-navbar">
            <b-navbar-brand href="#" class="custom-navbar-brand">
                <b-link :to="{ name: 'inicio' }" class="iconStyle">
                    <i class="fas fa-home"></i>
                </b-link>
                <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
                BootstrapVue
            </b-navbar-brand>
        </b-navbar>
    </div>
</template>

<style scoped>
.custom-navbar {
    background-color: #3498db;
}
.iconStyle {
    color: #fff;
    margin-right: 100px;
}

.custom-navbar-brand {
    color: #fff;
    margin-left: 16%;
}
</style>