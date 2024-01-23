<template>
  <div>
    <h1>Formulario</h1>
    <form @submit.prevent="submitForm">
      <h2>Información personal</h2>
      <div style="display: flex;">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" @blur="validarNombre">
        <div v-show="nombreError" style="color: red;">{{ nombreError }}</div>
        <label for="apellidoPaterno">Apellido Paterno:</label>
        <input type="text" id="apellidoPaterno" v-model="apellidoPaterno" @blur="validarApellidoPaterno">
        <div v-show="apellidoPaternoError" style="color: red;">{{ apellidoPaternoError }}</div>
        <label for="apellidoMaterno">Apellido Materno:</label>
        <input type="text" id="apellidoMaterno" v-model="apellidoMaterno">
      </div>
      <h2>Dirección</h2>
      <div style="display: fle;">
        <label for="codigoPostal">Código Postal:</label>
        <input type="number" id="codigoPostal">
        <label for="calle">Calle:</label>
        <input type="text" id="calle">
        <label for="numero">Número:</label>
        <input type="number" id="numero">
        <br/>
        <br/>
        <label for="ciudad">Ciudad:</label>
        <input type="text" id="ciudad">
      </div>
      <h2>Información adicional</h2>
      <div style="display: flex;">
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fechaNacimiento" v-model="fechaNacimiento" @change="validarFechaNacimiento">
        <div v-show="fechaNacimientoError" style="color: red;">{{ fechaNacimientoError }}</div>
        <label for="correoElectronico">Correo Electrónico:</label>
        <input type="text" id="correoElectronico" v-model="correoElectronico" @blur="validarCorreo">
        <div v-show="correoElectronicoError" style="color: red;">{{ correoElectronicoError }}</div>
        <label for="numeroTelefonico">Número Telefónico:</label>
        <input type="number" id="numeroTelefonico" v-model="numeroTelefonico" @blur="validarTelefono">
        <div v-show="telefonoError" style="color: red;">{{ telefonoError }}</div>
      </div>
      <br />
      <div>
        <label for="photo">Foto</label>
        <input id="photo" type="file" @change="validarTamanio" />
        <div v-show="photoError" style="color: red;">{{ photoError }}</div>
      </div>
      <br />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  data() {
    return {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      nombreError: '',
      apellidoPaternoError: '',
      numeroTelefonico: '',
      telefonoError: '',
      correoElectronico: '',
      correoElectronicoError: '',
      fechaNacimiento: '',
      fechaNacimientoError: '',
      photoError: ''
    };
  },
  methods: {
    validarNombre() {
      this.nombreError = this.nombre.trim() === '' ? 'El nombre no puede estar vacío' : '';
    },
    validarApellidoPaterno() {
      this.apellidoPaternoError = this.apellidoPaterno.trim() === '' ? 'El apellido paterno no puede estar vacío' : '';
    },
    validarFechaNacimiento() {
      const fechaNacimiento = new Date(this.fechaNacimiento);
      const fechaActual = new Date();
      const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
      console.log(edad);
      if (edad < 18 || edad > 18) {
        this.fechaNacimientoError = 'Tu edad debe ser de 18 años';
      }
    },
    validarTelefono() {
      if (this.numeroTelefonico.length != 10) {
        this.telefonoError = 'El numero debe tener 10 digitos';
      }
    },
    validarCorreo() {
      const correo = this.correoElectronico;
      const expresion = /\w+@\w+\.+[a-z]/;
      if (!expresion.test(correo)) {
        this.correoElectronicoError = 'El correo no es válido';
      }
    },
    validarTamanio() {
      const photo = document.getElementById('photo');
      const photoSize = photo.files[0].size;
      if (photoSize > 3000000) {
        this.photoError = 'La foto no debe pesar más de 3MB';
      }
    },
    validarFormulario() {
      this.validarNombre();
      this.validarApellidoPaterno();
      this.validarFechaNacimiento();
      this.validarCorreo();
      this.validarTelefono();
      this.validarTamanio();
    },
    submitForm() {
      this.validarFormulario();
      console.log('Formulario enviado con éxito');
    }
  }
};
</script>
