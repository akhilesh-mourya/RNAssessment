import {useEffect, useState} from 'react';
import {getPostDetails} from '../apiServices/post';
import {PostDataProps} from '../apiServices/types';

export const usePostDetail = (id: number) => {
  const [postDetail, setPostDetail] = useState<PostDataProps>();

  useEffect(() => {
    console.log('Post Detail Id: ', id);
    callPostDetailAPI(id);
  }, [id]);

  const callPostDetailAPI = async (postId: number) => {
    try {
      const data = await getPostDetails(postId);
      setPostDetail(data);
    } catch (error) {
      console.log('Post Detail API Error: ', error);
    }
  };

  return {
    callPostDetailAPI,
    postDetail,
  };
};
