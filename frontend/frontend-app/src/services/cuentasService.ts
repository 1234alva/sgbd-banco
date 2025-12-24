import axios from 'axios';

const API_URL = 'http://localhost:3000/cuentas';

export const getCuentas = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createCuenta = async (cuenta: any) => {
  const response = await axios.post(API_URL, cuenta);
  return response.data;
};
