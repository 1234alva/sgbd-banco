import axios from 'axios';

const API_URL = 'http://localhost:3000/clientes';

export const getClientes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createCliente = async (cliente: any) => {
  const response = await axios.post(API_URL, cliente);
  return response.data;
};
