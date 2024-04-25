import {
  moderateScale,
  scale,
  verticalScale,
} from 'react-native-size-matters/extend';
import styled from 'styled-components/native';
import {ViewPropsType} from '../../../types/styledComponents';
import {border, color, layout, space} from 'styled-system';
import theme from '../../theme';
import {TextProps} from 'react-native';

export const MainContainer = styled.View.attrs<ViewPropsType>(() => ({
  mt: verticalScale(10),
  px: verticalScale(10),
  py: scale(10),
}))`
  border-color: ${theme.colors.itemBorderColor};
  border-width: ${moderateScale(1)}px;
  border-radius: ${moderateScale(10)}px;
  ${color}
  ${layout}
  ${space}
  ${border}
`;

export const TouchableOpacity = styled.TouchableOpacity.attrs<ViewPropsType>(
  () => ({}),
)``;

export const IDText = styled.Text.attrs<TextProps>(() => ({}))`
  font-size: ${20}px;
  color: ${theme.colors.black};
  font-weight: bold;
  ${color}
  ${space}
`;

export const TitleText = styled.Text.attrs<ViewPropsType>(() => ({
  mt: verticalScale(5),
}))`
  font-size: ${16}px;
  color: ${theme.colors.black};
  font-weight: medium;
  ${color}
  ${space}
`;

export const DescriptionText = styled.Text.attrs<ViewPropsType>(() => ({
  mt: verticalScale(5),
}))`
  font-size: ${12}px;
  color: ${theme.colors.descriptionTextColor};
  ${color}
  ${space}
`;
