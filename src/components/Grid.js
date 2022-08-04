import styled from "styled-components";

const BasicContainer = styled.div`
  display: flex;
  ${(props) => props.gap && `gap: ${props.gap}`};
  ${(props) => props.flex && `flex: ${props.flex}`};
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.opacity && `opacity: ${props.opacity}`};
  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`};
  ${(props) => props.minWidth && `min-width: ${props.minWidth}`};
  ${(props) => props.minHeight && `min-height: ${props.minHeight}`};
  ${(props) => props.background && `background: ${props.background}`};
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection}`};

  ${(props) => props.border && `border: ${props.border}`};
  ${(props) => props.borderTop && `border-top: ${props.borderTop}`};
  ${(props) => props.borderRight && `border-right: ${props.borderRight}`};
  ${(props) => props.borderBottom && `border-bottom: ${props.borderBottom}`};
  ${(props) => props.borderLeft && `border-left: ${props.borderLeft}`};

  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.marginTop && `margin-top: ${props.marginTop}`};
  ${(props) => props.marginRight && `margin-right: ${props.marginRight}`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}`};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}`};

  ${(props) => props.top && `top: ${props.top}`};
  ${(props) => props.left && `left: ${props.left}`};
  ${(props) => props.right && `right: ${props.right}`};
  ${(props) => props.bottom && `bottom: ${props.bottom}`};
  ${(props) => props.position && `position: ${props.position}`};
`;

export const Box = (props) => (
  <BasicContainer flexDirection="column" {...props} />
);

export const Row = (props) => <BasicContainer flexDirection="row" {...props} />;
