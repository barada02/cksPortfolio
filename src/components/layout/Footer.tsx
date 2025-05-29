import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.backgroundSecondary};
  padding: ${theme.spacing.xl} 0;
  margin-top: ${theme.spacing['3xl']};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const SocialIcon = styled.a`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.xl};
  transition: transform ${theme.animations.fast} ease, color ${theme.animations.fast} ease;
  
  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.sm};
`;

const NameHighlight = styled.span`
  background: ${theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="mailto:contact@example.com" aria-label="Email">
            <FaEnvelope />
          </SocialIcon>
        </SocialLinks>
        <Copyright>
          © {currentYear} Designed & Built by <NameHighlight>Chandan Kumar Barada</NameHighlight>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
