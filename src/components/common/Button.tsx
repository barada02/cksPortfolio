import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  outlined?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  as?: string;
  href?: string;
  target?: string;
  rel?: string;
}

const StyledButton = styled.button<{
  primary: boolean;
  outlined: boolean;
  fullWidth: boolean;
}>`
  display: inline-block;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.md};
  font-weight: 600;
  text-align: center;
  transition: all ${theme.animations.normal} ease;
  cursor: pointer;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  ${props => props.primary && !props.outlined && `
    background: ${theme.gradients.primary};
    color: white;
    border: none;
    box-shadow: ${theme.shadows.md};
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: ${theme.shadows.lg};
    }
    
    &:active {
      transform: translateY(-1px);
    }
  `}
  
  ${props => !props.primary && !props.outlined && `
    background: ${theme.colors.backgroundSecondary};
    color: ${theme.colors.text};
    border: none;
    
    &:hover {
      background: ${theme.colors.primary};
      color: white;
    }
  `}
  
  ${props => props.primary && props.outlined && `
    background: transparent;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
    
    &:hover {
      background: ${theme.colors.primary};
      color: white;
    }
  `}
  
  ${props => !props.primary && props.outlined && `
    background: transparent;
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.text};
    
    &:hover {
      background: ${theme.colors.text};
      color: ${theme.colors.background};
    }
  `}
`;

const Button = ({
  children,
  primary = true,
  outlined = false,
  onClick,
  type = 'button',
  fullWidth = false,
  as,
  href,
  target,
  rel,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      as={as as any}
      href={href}
      target={target}
      rel={rel}
      type={type}
      primary={primary}
      outlined={outlined}
      onClick={onClick}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
