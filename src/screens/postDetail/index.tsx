import React, {FC} from 'react';
import {
  DescriptionText,
  HeaderContainer,
  HeaderTitle,
  MainContainer,
  RowContainer,
  SubContainer,
  TitleText,
} from './style';
import {PostDetailStr} from '../../enums/stringConstant';
import {usePostDetail} from '../../hooks/usePostDetail';

interface PostDetailProps {
  id: number;
  memoizedCallback: Function;
}

const PostDetailScreen: FC<PostDetailProps> = ({id}) => {
  const {postDetail} = usePostDetail(id);

  const renderHeader = () => {
    return (
      <HeaderContainer>
        <HeaderTitle>{PostDetailStr.TITLE}</HeaderTitle>
      </HeaderContainer>
    );
  };

  const renderSubComponent = (title: string, description: string) => {
    return (
      <RowContainer>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </RowContainer>
    );
  };
  console.log('Post Detail Re-rendering');

  return (
    <MainContainer>
      {renderHeader()}
      <SubContainer>
        {renderSubComponent(PostDetailStr.ID, '# ' + postDetail?.id)}
        {renderSubComponent(PostDetailStr.TITLE, postDetail?.title || '')}
        {renderSubComponent(PostDetailStr.DESCRIPTION, postDetail?.body || '')}
      </SubContainer>
    </MainContainer>
  );
};

export default PostDetailScreen;
