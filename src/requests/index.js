import axios from 'axios';
import { get } from 'Config';
import { resultsPresenter, detailPresenter } from '../presenters';

const API_ENDPOINT = get('apiEndpoint');

export const getResults = (query) => axios.get(`${API_ENDPOINT}/sites/MLA/search`, {
  params: { q: query },
}).then(res => (
  resultsPresenter(res, null)
)).catch(error => (
  resultsPresenter(null, error)
));

export const getProductDetail = (id) => axios.get(`${API_ENDPOINT}/items/${id}`);

export const getProductDescription = (id) => axios.get(`${API_ENDPOINT}/items/${id}/description`);

export const getProductInfo = (id) => Promise.all([
  getProductDetail(id),
  getProductDescription(id),
]).then(res => (
  detailPresenter(res, null)
)).catch(error => (
  detailPresenter(null, error)
));
