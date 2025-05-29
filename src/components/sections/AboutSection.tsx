import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { slideInLeft, slideInRight } from '../../animations/variants';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['2xl']};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled(motion.div)`
  p {
    margin-bottom: ${theme.spacing.lg};
    color: ${theme.colors.textSecondary};
    line-height: 1.8;
  }
  
  a {
    color: ${theme.colors.primary};
    font-weight: 500;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background: ${theme.colors.primary};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform ${theme.animations.normal} ease;
    }
    
    &:hover:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const HighlightText = styled.span`
  color: ${theme.colors.primary};
  font-weight: 600;
`;

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.lg};
    z-index: -1;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${theme.borderRadius.lg};
  filter: grayscale(20%);
  transition: all ${theme.animations.normal} ease;
  
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.02);
  }
`;

const AboutInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const AboutInfoItem = styled.div`
  margin-bottom: ${theme.spacing.md};
  
  h4 {
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.spacing.xs};
  }
  
  p {
    font-size: ${theme.fontSizes.lg};
    font-weight: 500;
    margin-bottom: 0;
    color: ${theme.colors.text};
  }
`;

const AboutSection = () => {
  // Placeholder for profile image URL
  const profileImageUrl = "https://via.placeholder.com/500x600";
  
  return (
    <Section id="about">
      <SectionTitle 
        title="About Me"
        subtitle="Get to know more about me and my background"
      />
      
      <AboutContainer>
        <AboutContent
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
        >
          <p>
            Hello! I'm <HighlightText>Chandan Kumar Barada</HighlightText>, a passionate developer with extensive experience in modern web and mobile technologies. My journey in software development has equipped me with a strong foundation in <HighlightText>React, Flutter, Angular</HighlightText>, and the <HighlightText>MERN stack</HighlightText>.
          </p>
          
          <p>
            My primary focus is in the exciting fields of <HighlightText>Artificial Intelligence</HighlightText> and <HighlightText>Machine Learning</HighlightText>, with special emphasis on Deep Learning and Computer Vision. Currently, I'm immersed in projects related to Large Language Models (LLMs), building integrated applications that leverage these cutting-edge technologies.
          </p>
          
          <p>
            I hold a Professional Certification in <HighlightText>IBM AI Engineering</HighlightText> and am currently pursuing my Master of Computer Applications (MCA) at Aurora Deemed to be University.
          </p>
          
          <AboutInfoGrid>
            <AboutInfoItem>
              <h4>Name</h4>
              <p>Chandan Kumar Barada</p>
            </AboutInfoItem>
            <AboutInfoItem>
              <h4>Email</h4>
              <p>contact@example.com</p>
            </AboutInfoItem>
            <AboutInfoItem>
              <h4>Education</h4>
              <p>MCA, Aurora University</p>
            </AboutInfoItem>
            <AboutInfoItem>
              <h4>Certification</h4>
              <p>IBM AI Engineer</p>
            </AboutInfoItem>
          </AboutInfoGrid>
        </AboutContent>
        
        <ProfileImageContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          <ProfileImage src={profileImageUrl} alt="Chandan Kumar Barada" />
        </ProfileImageContainer>
      </AboutContainer>
    </Section>
  );
};

export default AboutSection;
