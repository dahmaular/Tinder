/* eslint-disable prettier/prettier */
import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const medium = (theme) => `
font-size: ${theme.fontSizes.caption};
font-weight: ${theme.fontWeights.bold};
color: ${theme.colors.text.error};
    flex-wrap: wrap;
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const link = (theme) => `
    color: ${theme.colors.brand.muted};
    font-weight: ${theme.fontWeights.bold};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const header = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.text.error};
    flex-wrap: wrap;
`;

const title = (theme) => `
font-family: ${theme.fonts.body};
font-size: ${theme.fontSizes.title};
font-weight: ${theme.fontWeights.bold};
`;

const headline = (theme) => `
font-family: ${theme.fonts.body};
font-size: ${theme.fontSizes.h4};
font-weight: ${theme.fontWeights.bold};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  header,
  medium,
  link,
  title,
  headline
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
