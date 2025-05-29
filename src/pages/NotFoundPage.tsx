import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import Button from '../components/common/Button';

const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.background};
`;

const NotFoundTitle = styled(motion.h1)`
  font-size: ${theme.fontSizes['6xl']};
  margin-bottom: ${theme.spacing.md};
  background: ${theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['4xl']};
  }
`;

const NotFoundSubtitle = styled(motion.p)`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.xl};
  max-width: 600px;
`;

const ButtonContainer = styled(motion.div)`
  margin-top: ${theme.spacing.lg};
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404 - Page Not Found
      </NotFoundTitle>
      
      <NotFoundSubtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oops! The page you are looking for does not exist.      </NotFoundSubtitle>
      
      <ButtonContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button as="a" href="/">
          Return to Home
        </Button>
      </ButtonContainer>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
