import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { staggerContainer, staggerItem } from '../../animations/variants';
import { 
  FaReact, FaAngular, FaNodeJs, FaDatabase, 
  FaGithub, FaPython, FaDocker, FaFire
} from 'react-icons/fa';
import { 
  SiFlutter, SiTensorflow, SiPytorch, SiMongodb, 
  SiFirebase, SiExpress, SiJavascript, SiTypescript
} from 'react-icons/si';

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['2xl']};
`;

const SkillCategoryContainer = styled(motion.div)`
  margin-bottom: ${theme.spacing.xl};
`;

const CategoryTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.text};
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${theme.gradients.primary};
    border-radius: ${theme.borderRadius.full};
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background: ${theme.colors.backgroundSecondary};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  box-shadow: ${theme.shadows.sm};
  transition: transform ${theme.animations.fast} ease, box-shadow ${theme.animations.fast} ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.md};
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: ${theme.colors.primary};
`;

const SkillInfo = styled.div`
  h4 {
    font-size: ${theme.fontSizes.md};
    margin-bottom: ${theme.spacing.xs};
  }
  
  p {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.textSecondary};
    margin: 0;
  }
`;

// Skill data structure
interface Skill {
  name: string;
  level: string;
  icon: React.ReactNode;
}

const SkillsSection = () => {
  // Frontend skills
  const frontendSkills: Skill[] = [
    { name: 'React', level: 'Advanced', icon: <FaReact /> },
    { name: 'Angular', level: 'Advanced', icon: <FaAngular /> },
    { name: 'Flutter', level: 'Intermediate', icon: <SiFlutter /> },
    { name: 'JavaScript', level: 'Advanced', icon: <SiJavascript /> },
    { name: 'TypeScript', level: 'Advanced', icon: <SiTypescript /> },
  ];
  
  // Backend skills
  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 'Advanced', icon: <FaNodeJs /> },
    { name: 'Express', level: 'Advanced', icon: <SiExpress /> },
    { name: 'MongoDB', level: 'Intermediate', icon: <SiMongodb /> },
    { name: 'Firebase', level: 'Advanced', icon: <FaFire /> },
    { name: 'SQL', level: 'Intermediate', icon: <FaDatabase /> },
  ];
  
  // AI/ML skills
  const aiMlSkills: Skill[] = [
    { name: 'TensorFlow', level: 'Advanced', icon: <SiTensorflow /> },
    { name: 'PyTorch', level: 'Intermediate', icon: <SiPytorch /> },
    { name: 'Computer Vision', level: 'Advanced', icon: <FaPython /> },
    { name: 'LLMs', level: 'Intermediate', icon: <FaPython /> },
    { name: 'Deep Learning', level: 'Advanced', icon: <FaPython /> },
  ];
  
  // Tools and others
  const toolsSkills: Skill[] = [
    { name: 'Git & GitHub', level: 'Advanced', icon: <FaGithub /> },
    { name: 'Docker', level: 'Intermediate', icon: <FaDocker /> },
    { name: 'Firebase', level: 'Advanced', icon: <SiFirebase /> },
  ];
  
  return (
    <Section id="skills">
      <SectionTitle 
        title="Skills & Expertise"
        subtitle="A showcase of my technical abilities and competencies"
      />
      
      <SkillsContainer>
        {/* Frontend Skills */}
        <SkillCategoryContainer>
          <CategoryTitle>Frontend Development</CategoryTitle>
          <SkillsGrid
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} variants={staggerItem}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillInfo>
                  <h4>{skill.name}</h4>
                  <p>{skill.level}</p>
                </SkillInfo>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillCategoryContainer>
        
        {/* Backend Skills */}
        <SkillCategoryContainer>
          <CategoryTitle>Backend Development</CategoryTitle>
          <SkillsGrid
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {backendSkills.map((skill, index) => (
              <SkillCard key={index} variants={staggerItem}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillInfo>
                  <h4>{skill.name}</h4>
                  <p>{skill.level}</p>
                </SkillInfo>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillCategoryContainer>
        
        {/* AI/ML Skills */}
        <SkillCategoryContainer>
          <CategoryTitle>AI & Machine Learning</CategoryTitle>
          <SkillsGrid
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aiMlSkills.map((skill, index) => (
              <SkillCard key={index} variants={staggerItem}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillInfo>
                  <h4>{skill.name}</h4>
                  <p>{skill.level}</p>
                </SkillInfo>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillCategoryContainer>
        
        {/* Tools and Others */}
        <SkillCategoryContainer>
          <CategoryTitle>Tools & Others</CategoryTitle>
          <SkillsGrid
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {toolsSkills.map((skill, index) => (
              <SkillCard key={index} variants={staggerItem}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillInfo>
                  <h4>{skill.name}</h4>
                  <p>{skill.level}</p>
                </SkillInfo>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillCategoryContainer>
      </SkillsContainer>
    </Section>
  );
};

export default SkillsSection;
