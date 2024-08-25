import axios from 'axios';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
import { notifyError, notifySuccess } from './notifyService';

export const fetchItems = async apiEndpoint => {
  userStore.loadengApi = true;
  try {
    const response = await axios.get(apiEndpoint);
    console.log(`fetch ${apiEndpoint}`, response.data);
    userStore.loadengApi = false;
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${apiEndpoint}`, error);
    userStore.loadengApi = false;
    throw error;
  }
};
export const fetchItem = async (apiEndpoint, id) => {
  userStore.loadengApi = true;
  try {
    const response = await axios.get(apiEndpoint, id);
    console.log(`fetch ${apiEndpoint}`, response.data);
    userStore.loadengApi = false;
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${apiEndpoint}`, error);
    userStore.loadengApi = false;
    throw error;
  }
};

export const saveItems = async (apiEndpoint, data, id = false) => {
  const apiEndpointIfId = id ? `${apiEndpoint}/${id}` : apiEndpoint;
  userStore.loadengApi = true;
  try {
    const response = await axios.post(apiEndpointIfId, data);
    userStore.loadengApi = false;
    console.log(id ? `update ${apiEndpoint}` : `save ${apiEndpoint}`, response.data);
    notifySuccess(` تم ${id ? 'التعديل' : 'الحفظ'}`);
    return response.data;
  } catch (error) {
    userStore.loadengApi = false;
    console.log(`Error Save ${apiEndpoint}`, error);
    notifyError(error.response.data.message);
    throw error;
  }
};

export const deleteItems = async (apiEndpoint, ids) => {
  userStore.loadengApi = true;
  try {
    const response = await axios.post(apiEndpoint, ids);
    console.log(`delete Items ${apiEndpoint}`, response.data);
    userStore.loadengApi = false;
    notifySuccess('تم الحذف');
    return response.data;
  } catch (error) {
    console.error(`Error delete Items ${apiEndpoint}`, error);
    userStore.loadengApi = false;
    notifyError('تعذر حذف العناصر');
    throw error;
  }
};

export const deleteItem = async (apiEndpoint, id) => {
  userStore.loadengApi = true;
  try {
    const response = await axios.delete(`${apiEndpoint}/${id}`);
    console.log(`delete Item ${apiEndpoint}`, response.data);
    userStore.loadengApi = false;
    return response.data;
  } catch (error) {
    console.error(`Error delete Item ${apiEndpoint}`, error);
    userStore.loadengApi = false;
    throw error;
  }
};
