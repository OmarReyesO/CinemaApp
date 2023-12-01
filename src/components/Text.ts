import styled, {css} from 'styled-components/native';
import {DefaultTheme as DefaultThemeProps} from 'styled-components';

export interface TextProps {
  fontSize?: keyof DefaultThemeProps['typography']['sizes'];
  color?: keyof DefaultThemeProps['colors'];
  fontWeight?: keyof DefaultThemeProps['typography']['fontFamily'];
}

export default styled.Text<TextProps>`
  color: ${props => {
    const {colors} = <DefaultThemeProps>props.theme;
    return colors?.[props.color ?? 'text'];
  }};

  font-family: ${props => {
    const {fontFamily} = <DefaultThemeProps>props.theme.typography;
    return fontFamily?.[props.fontWeight ?? 'regular'];
  }};

  ${props => {
    const {sizes} = <DefaultThemeProps>props.theme.typography;
    const selectedSize = sizes?.[props.fontSize ?? 'regular'];

    return css`
      font-size: ${selectedSize.size}px;
      line-height: ${selectedSize.lineHeight}px;
    `;
  }}
`;
