import styled from 'styled-components/native';
import {color, layout, space} from 'styled-system';
import {ViewPropsType} from '../../../types/styledComponents';
import theme from '../../theme';
import {verticalScale} from 'react-native-size-matters/extend';
import {BottomSheetView} from '@gorhom/bottom-sheet';

export const MainContainer = styled.SafeAreaView.attrs<ViewPropsType>(() => ({
  bg: theme.colors.baseColor,
}))`
  ${color}
  ${layout}
  ${space}
`;

export const SubContainer = styled.View.attrs<ViewPropsType>(() => ({
  paddingHorizontal: verticalScale(10),
  bg: theme.colors.white,
}))`
  ${color}
  ${layout}
  ${space}
`;

export const PostFlatList = styled.FlatList.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))``;

export const HeaderContainer = styled.View.attrs<ViewPropsType>(() => ({
  height: 40,
  bg: theme.colors.baseColor,
}))`
  justify-content: center;
  ${color}
  ${layout}
${space}
`;

export const HeaderTitle = styled.Text.attrs<ViewPropsType>(() => ({}))`
  font-size: ${16}px;
  color: ${theme.colors.black};
  font-weight: bold;
  text-align: center;
  justify-content: center;
  align-self: center;
  ${color}
  ${space}
`;

export const BottomSheetContainer = styled(
  BottomSheetView,
).attrs<ViewPropsType>(() => ({
  alignItems: 'center',
  flex: 1,
}))``;
