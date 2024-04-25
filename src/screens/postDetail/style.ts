import styled from 'styled-components/native';
import {color, layout, space} from 'styled-system';
import {ViewPropsType} from '../../../types/styledComponents';
import {verticalScale} from 'react-native-size-matters/extend';
import theme from '../../theme';
import {Dimensions} from 'react-native';

export const MainContainer = styled.SafeAreaView.attrs<ViewPropsType>(() => ({
  bg: theme.colors.baseColor,
  flex: 1,
}))`
  ${color}
  ${layout}
  ${space}
`;

export const SubContainer = styled.View.attrs<ViewPropsType>(() => ({
  paddingHorizontal: verticalScale(10),
  bg: theme.colors.white,
  flex: 1,
}))`
  ${color}
  ${layout}
  ${space}
`;

export const RowContainer = styled.View.attrs<ViewPropsType>(() => ({
  flexDirection: 'row',
  marginTop: verticalScale(10),
}))``;

export const TitleText = styled.Text.attrs<ViewPropsType>(() => ({
  width: Dimensions.get('screen').width * 0.3,
}))`
  font-size: ${16}px;
  color: ${theme.colors.black};
  font-weight: bold;
  ${color}
  ${space}
`;

export const DescriptionText = styled.Text.attrs<ViewPropsType>(() => ({
  width: Dimensions.get('screen').width * 0.7 - 30,
}))`
  font-size: ${16}px;
  color: ${theme.colors.black};
  ${color}
  ${space}
`;

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
