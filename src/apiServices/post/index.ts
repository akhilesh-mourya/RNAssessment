import api from '..';
import {POST_API, POST_DETAIL_API} from '../apiConstant';
import {PostDataProps} from '../types';

export const getPostData = async () => {
  const data = await api.get<PostDataProps[]>(POST_API);
  return data;
};

export const getPostDetails = async (id: number) => {
  const {data} = await api.get(POST_DETAIL_API + '' + id);
  return data;
};
