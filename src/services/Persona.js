import axios from 'axios';

const API_URL = 'http://localhost:8080/api/personas/page';

const obtenerPersonasPaginadas = async (page, size, filter, sortBy) => {
  try {
      const response = await axios.post(API_URL, {
          page,
          size,
          filter,
          sortBy
      });
      console.log(response);
      return response.data;
  } catch (error) {
      throw error;
  }
};

export default {
  obtenerPersonasPaginadas
};
