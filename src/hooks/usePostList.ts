import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {PostDataProps} from '../apiServices/types';
import {getPostData} from '../apiServices/post';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

export const usePostList = () => {
  const [postList, setPostList] = useState<PostDataProps[]>([]);
  const [postId, setPostId] = useState(0);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '40%'], []);

  useEffect(() => {
    callPostListAPI();
  }, []);

  const callPostListAPI = async () => {
    try {
      const data = await getPostData();
      setPostList(data?.data);
    } catch (error) {
      console.log('Post List API Error: ', error);
    }
  };

  const memoizedCallback = useCallback(() => {}, []);

  const handleChildComponent = useCallback((id: number) => {
    setPostId(id);
    bottomSheetRef.current?.present();
  }, []);

  return {
    postList,
    postId,
    bottomSheetRef,
    snapPoints,
    handleChildComponent,
    memoizedCallback,
  };
};
