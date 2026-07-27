import api from "./api";

export const getCustomers = (page = 1, perPage = 10) =>
  api.get(`/customers?page=${page}&per_page=${perPage}`);

export const addCustomer = (data) =>
  api.post("/customers", data);

export const updateCustomer = (id, data) =>
  api.put(`/customers/${id}`, data);

export const deleteCustomer = (id) =>
  api.delete(`/customers/${id}`);

export const getCustomerSummary = () =>
  api.get("/customers/summary");