import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  background?: 'primary' | 'secondary' | 'dark' | 'none';
}

const SectionContainer = styled.section<{ background: string }>`
  min-height: 100vh;
  padding: ${theme.spacing['3xl']} ${theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => 
    props.background === 'primary' ? theme.gradients.primary :
    props.background === 'secondary' ? theme.gradients.secondary :
    props.background === 'dark' ? theme.gradients.dark :
    'transparent'
  };

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} ${theme.spacing.lg};
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Section = ({ id, children, background = 'none' }: SectionProps) => {
  return (
    <SectionContainer id={id} background={background}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionContent>
          {children}
        </SectionContent>
      </motion.div>
    </SectionContainer>
  );
};

export default Section;
