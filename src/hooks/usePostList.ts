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

  /** This function is used to call the API and set the list data into state variable */
  const callPostListAPI = async () => {
    try {
      const data = await getPostData();
      setPostList(data?.data);
    } catch (error) {
      console.log('Post List API Error: ', error);
    }
  };

  /** This function is used for implementing heavy computational logic */
  const filteredData = (list: PostDataProps[]) => {
    return list.map(item => ({...item, title: item?.title?.toUpperCase()}));
  };

  const filteredPostList = useMemo(() => filteredData(postList), [postList]);

  /*** As per requirement this function is creating for passing callback function from parent component to child component*/
  const memoizedCallback = useCallback(() => {}, []);

  /** This function is used to show the child component through bottom sheet */
  const handleChildComponent = useCallback((id: number) => {
    setPostId(id);
    bottomSheetRef.current?.present();
  }, []);

  return {
    postId,
    bottomSheetRef,
    snapPoints,
    filteredPostList,
    handleChildComponent,
    memoizedCallback,
  };
};
