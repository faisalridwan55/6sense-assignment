import styled from "styled-components";

const BasicContainer = styled.div`
  display: flex;
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.minWidth && `min-width: ${props.minWidth}`};
  ${(props) => props.flex && `flex: ${props.flex}`};
  ${(props) => props.gap && `gap: ${props.gap}`};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.minHeight && `min-height: ${props.minHeight}`};
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.marginTop && `margin-top: ${props.marginTop}`};
  ${(props) => props.marginRight && `margin-right: ${props.marginRight}`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}`};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}`};
  ${(props) => props.background && `background: ${props.background}`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`};
`;

export const Box = (props) => (
  <BasicContainer flexDirection="column" {...props} />
);

export const Row = (props) => <BasicContainer flexDirection="row" {...props} />;
