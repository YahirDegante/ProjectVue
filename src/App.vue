<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3 m-0 p-0">
          <Sidebar />
        </div>
        <div class="col-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
    
  </div>
</template>
