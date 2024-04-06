import axiosClient from './axiosClient';

export interface IProduct {
  image: string;
  name: string;
  desc: string;
  price: string;
  path: string;
}

const productApi = {
  getAll: (params: object) => {
    const url = '/products';
    return axiosClient.get(url, { params });
  },
  get: (id: number) => {
    const url = `/products/${id}`;
    return axiosClient.get<IProduct[]>(url);
  },
};

export default productApi;
