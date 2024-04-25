import React, {FC} from 'react';
import {IDText, MainContainer, TitleText, TouchableOpacity} from './style';
import {PostDataProps} from '../../apiServices/types';

interface PostItemProps {
  postData: PostDataProps;
  onItemclick: any;
}

const PostItem: FC<PostItemProps> = React.memo(({postData, onItemclick}) => {
  return (
    <TouchableOpacity onPress={() => onItemclick(postData?.id)}>
      <MainContainer>
        <IDText># {postData?.id}</IDText>
        <TitleText>{postData?.title}</TitleText>
      </MainContainer>
    </TouchableOpacity>
  );
});

export default PostItem;
