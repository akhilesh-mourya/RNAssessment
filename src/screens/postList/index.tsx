import React, {useCallback} from 'react';
import {
  BottomSheetContainer,
  HeaderContainer,
  HeaderTitle,
  MainContainer,
  SubContainer,
} from './style';
import {PostDataProps} from '../../apiServices/types';
import PostItem from '../../components/postItem';
import PostDetailScreen from '../postDetail';
import {PostListStr} from '../../enums/stringConstant';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {FlatList, ListRenderItem} from 'react-native';
import {usePostList} from '../../hooks/usePostList';

const PostListScreen = () => {
  const {
    updatedPostList,
    postId,
    bottomSheetRef,
    snapPoints,
    handleChildComponent,
    memoizedCallback,
  } = usePostList();

  const renderPostItem: ListRenderItem<PostDataProps> = ({item}) => {
    return <PostItem postData={item} onItemclick={handleChildComponent} />;
  };

  const renderPostList = () => {
    return (
      <FlatList
        data={updatedPostList}
        renderItem={renderPostItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: PostDataProps, index: number) =>
          item?.id + '' + index
        }
      />
    );
  };

  const renderHeader = () => {
    return (
      <HeaderContainer>
        <HeaderTitle>{PostListStr.TITLE}</HeaderTitle>
      </HeaderContainer>
    );
  };

  const renderChildComponent = () => {
    return (
      <BottomSheetModal ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
        <BottomSheetContainer>{renderPostDetail()}</BottomSheetContainer>
      </BottomSheetModal>
    );
  };

  const renderPostDetail = useCallback(() => {
    return <PostDetailScreen id={postId} memoizedCallback={memoizedCallback} />;
  }, [postId, memoizedCallback]);

  return (
    <BottomSheetModalProvider>
      <MainContainer>
        {renderHeader()}
        <SubContainer>
          {renderPostList()}
          {renderChildComponent()}
        </SubContainer>
      </MainContainer>
    </BottomSheetModalProvider>
  );
};

export default PostListScreen;
