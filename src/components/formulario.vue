<template>
  <div>
    <form id="app" @submit="checkForm" method="post">
      <b-alert variant="danger" dismissible :show="errors.length > 0">
        <b>{{
          errors.length > 1
            ? "Please correct the following errors:"
            : "Please correct the following error:"
        }}</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </b-alert>
      <h2>Informacion Personal</h2>
      <p>
        <label for="name">Nombre</label>
        <input id="name" type="text" />
      </p>

      <p>
        <label for="f_lastName">Apellido Paterno</label>
        <input id="f_lastName" type="text" />
      </p>

      <p>
        <label for="m_lastName">Apellido Materno</label>
        <input id="m_lastName" type="text" />
      </p>
      <h2>Direccion</h2>
      <p>
        <label for="postalCode">Codigo Postal</label>
        <input id="postalCode" type="number" />
      </p>

      <p>
        <label for="streetDirection">Calle</label>
        <input id="streetDirection" type="text" />
      </p>
      <p>
        <label for="numberDirection">numero</label>
        <input id="numberDirection" type="number" />
      </p>
      <p>
        <label for="city">Ciudad</label>
        <input id="city" type="text" />
      </p>
      <h2>Informacion Adicional</h2>
      <p>
        <label for="age">Edad</label>
        <input id="age" type="number" />
      </p>

      <p>
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" name="email" />
      </p>

      <p>
        <label for="cellphoneNumber">Numero de telefono</label>
        <input id="cellphoneNumber" type="number" />
      </p>
      <p>
        <label for="photo">Foto</label>
        <input id="photo" type="file" @change="handlePhotoUpload" />
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      errors: [],
      name: null,
      f_lastName: null,
      email:null,
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("nombre Requerido");
      }
      if(!this.f_lastName){
        this.errors.push("Apellido Paterno Requerido")
      }

      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
  },
});
</script>