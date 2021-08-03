import axios from 'axios';
import {LoadingSubject} from './subject-services'

export const Get = (path: string[]) => {
  LoadingSubject.next(true);
  const api = path.join('/');
  return axios.get(api).then(res => {
    LoadingSubject.next(false);
    if (res.status === 200 || res.status === 201) {
      return res.data;
    }
  }).catch(error => {
    showErrors(error);
    LoadingSubject.next(false);
    throw error;
  })
}

export const Add = (path: string[], body: any) => {
  LoadingSubject.next(true);
  const api = path.join('/');
  return axios.post(api, body).then(res => {
    LoadingSubject.next(false);
    if (res.status === 200 || res.status === 201) {
      return res.data;
    }
  }).catch(error => {
    showErrors(error);
    LoadingSubject.next(false);
    throw error;
  })
}

export const Update = (path: string[], body: any) => {
  LoadingSubject.next(true);
  const api = path.join('/');
  return axios.put(api, body).then(res => {
    LoadingSubject.next(false);
    if (res.status === 200 || res.status === 201) {
      return res.data;
    }
  }).catch(error => {
    showErrors(error);
    LoadingSubject.next(false);
    throw error;
  })
}

export const Delete = (path: string[]) => {
  LoadingSubject.next(true);
  const api = path.join('/');
  return axios.delete(api).then(res => {
    LoadingSubject.next(false);
    if (res.status === 200 || res.status === 201)
      return res.data;
  }).catch(error => {
    showErrors(error);
    LoadingSubject.next(false);
    throw error;
  })
}

const showErrors = (error: any) => {
  if (error != null) {
    if (Array.isArray(error.errors)) {
      // AlertSubject.next({isShow: true, err: error.errors[0]})
    } else if (error.title == null) {
      // AlertSubject.next({isShow: true, err: 'Error'})
    } else {
      // AlertSubject.next({isShow: true, err: error.title})
    }
  }
}
