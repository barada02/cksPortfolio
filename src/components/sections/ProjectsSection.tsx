import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { staggerContainer, staggerItem } from '../../animations/variants';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/projectData';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['2xl']};
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing['2xl']};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.backgroundSecondary};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  transition: transform ${theme.animations.normal} ease, box-shadow ${theme.animations.normal} ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ProjectImage = styled.div`
  height: 240px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${theme.animations.normal} ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.xl};
`;

const ProjectTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  margin-bottom: ${theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.lg};
  font-size: ${theme.fontSizes.md};
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
`;

const ProjectTag = styled.span`
  background: rgba(121, 40, 202, 0.1);
  color: ${theme.colors.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

const FeaturedProject = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: ${theme.spacing['2xl']};
  margin-bottom: ${theme.spacing['3xl']};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FeaturedProjectImage = styled.div`
  height: 400px;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${theme.animations.normal} ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
  
  @media (max-width: ${theme.breakpoints.lg}) {
    height: 300px;
  }
`;

const FeaturedProjectSubtitle = styled.p`
  color: ${theme.colors.primary};
  font-weight: 600;
  margin-bottom: ${theme.spacing.md};
`;

const FeaturedProjectTitle = styled.h3`
  font-size: ${theme.fontSizes['3xl']};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

const ProjectsSection = () => {
  // Get featured project
  const featuredProject = projects.find(project => project.isFeatured);
  
  // Get regular projects (excluding featured one)
  const regularProjects = projects.filter(project => !project.isFeatured);
  
  return (
    <Section id="projects">
      <SectionTitle 
        title="My Projects"
        subtitle="Check out some of my recent work"
      />
      
      <ProjectsContainer>
        {/* Featured Project */}
        {featuredProject && (
          <FeaturedProject
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FeaturedProjectContent>
              <FeaturedProjectSubtitle>Featured Project</FeaturedProjectSubtitle>
              <FeaturedProjectTitle>{featuredProject.title}</FeaturedProjectTitle>
              <ProjectDescription>{featuredProject.description}</ProjectDescription>
              <ProjectTags>
                {featuredProject.tags.map((tag, index) => (
                  <ProjectTag key={index}>{tag}</ProjectTag>
                ))}
              </ProjectTags>              <ProjectLinks>
                {featuredProject.github && (
                  <Button 
                    as="a" 
                    href={featuredProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    outlined
                  >
                    <FaGithub style={{ marginRight: '8px' }} /> Code
                  </Button>
                )}
              </ProjectLinks>
            </FeaturedProjectContent>
            <FeaturedProjectImage>
              <img src={featuredProject.image} alt={featuredProject.title} />
            </FeaturedProjectImage>
          </FeaturedProject>
        )}
        
        {/* Regular Projects */}
        <ProjectsGrid
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {regularProjects.map((project) => (
            <ProjectCard key={project.id} variants={staggerItem}>
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <ProjectTag key={index}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>                <ProjectLinks>
                  {project.github && (
                    <Button 
                      as="a" 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      outlined
                      primary={false}
                    >
                      <FaGithub style={{ marginRight: '8px' }} /> Code
                    </Button>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </Section>
  );
};

export default ProjectsSection;
