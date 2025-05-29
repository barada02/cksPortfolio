import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const TitleContainer = styled.div<{ centered: boolean }>`
  margin-bottom: ${theme.spacing['2xl']};
  text-align: ${props => props.centered ? 'center' : 'left'};
`;

const Title = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: ${theme.spacing.sm};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${theme.gradients.primary};
    border-radius: ${theme.borderRadius.full};
  }
`;

const Subtitle = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.lg};
  max-width: 600px;
  margin: ${theme.spacing.md} auto 0;
`;

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  const subtitleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.2 } 
    }
  };

  return (
    <TitleContainer centered={centered}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleAnimation}
      >
        <Title>{title}</Title>
      </motion.div>
      
      {subtitle && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={subtitleAnimation}
        >
          <Subtitle>{subtitle}</Subtitle>
        </motion.div>
      )}
    </TitleContainer>
  );
};

export default SectionTitle;
