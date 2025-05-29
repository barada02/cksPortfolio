import { useState } from 'react';
import type { FormEvent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { slideInLeft, slideInRight } from '../../animations/variants';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['3xl']};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.md};
`;

const ContactIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${theme.borderRadius.full};
  background: ${theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes.xl};
  color: white;
  flex-shrink: 0;
`;

const ContactText = styled.div`
  h4 {
    font-size: ${theme.fontSizes.lg};
    margin-bottom: ${theme.spacing.xs};
  }
  
  p {
    color: ${theme.colors.textSecondary};
    margin-bottom: 0;
  }
  
  a {
    color: ${theme.colors.textSecondary};
    transition: color ${theme.animations.fast} ease;
    
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.full};
  background: ${theme.colors.backgroundSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text};
  transition: all ${theme.animations.fast} ease;
  
  &:hover {
    background: ${theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const FormLabel = styled.label`
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
  color: ${theme.colors.textSecondary};
`;

const FormInput = styled.input`
  padding: ${theme.spacing.md};
  background: ${theme.colors.backgroundSecondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.fonts.main};
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text};
  transition: border-color ${theme.animations.fast} ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const FormTextarea = styled.textarea`
  padding: ${theme.spacing.md};
  background: ${theme.colors.backgroundSecondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.fonts.main};
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text};
  transition: border-color ${theme.animations.fast} ease;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const FormStatus = styled.div<{ isError: boolean }>`
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  background: ${props => props.isError ? 'rgba(244, 67, 54, 0.1)' : 'rgba(76, 175, 80, 0.1)'};
  color: ${props => props.isError ? theme.colors.error : theme.colors.success};
  font-size: ${theme.fontSizes.md};
  text-align: center;
`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
    const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' as string | null }
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
    const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    try {
      // Replace with your actual EmailJS service, template, and user IDs
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'YOUR_USER_ID'
      );
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' }
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' }
      });
    }
  };
  
  return (
    <Section id="contact">
      <SectionTitle 
        title="Get In Touch"
        subtitle="Have a question or want to work together? Feel free to contact me."
      />
      
      <ContactContainer>
        <ContactInfo
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
        >
          <ContactInfoItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactText>
              <h4>Email</h4>
              <p><a href="mailto:contact@example.com">contact@example.com</a></p>
            </ContactText>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactText>
              <h4>Location</h4>
              <p>India</p>
            </ContactText>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactIcon>
              <FaLinkedin />
            </ContactIcon>
            <ContactText>
              <h4>LinkedIn</h4>
              <p><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/chandan-kumar</a></p>
            </ContactText>
          </ContactInfoItem>
          
          <SocialLinks>
            <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
        
        <ContactForm
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          <FormGroup>
            <FormLabel htmlFor="name">Your Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          {status.info.msg && (
            <FormStatus isError={status.info.error as boolean}>
              {status.info.msg}
            </FormStatus>
          )}
          
          <Button 
            type="submit" 
            disabled={status.submitting}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </ContactForm>
      </ContactContainer>
    </Section>
  );
};

export default ContactSection;
