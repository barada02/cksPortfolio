import SonarBIImage from '../assets/SonarBIDark.png';

// Project data
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "GeminiRx",
    description: "A personal health tracker application that monitors medicines and maintains medical records, powered by Gemini API.",
    image: "https://via.placeholder.com/800x600", // Replace with actual image when available
    tags: ["Flutter", "Gemini API", "Firebase"],
    github: "https://github.com",
    isFeatured: true
  },
  {
    id: 2,
    title: "Phytosence",
    description: "A RAG application using Snowflake Cortex search with Mistral LLM, helping biologists explore research papers and extract insights.",
    image: "https://via.placeholder.com/800x600", // Replace with actual image when available
    tags: ["Streamlit", "Mistral LLM", "Snowflake"],
    github: "https://github.com"
  },
  {
    id: 3,
    title: "SonarBI",
    description: "A business analysis platform powered by Perplexity Sonar API (sonar-deep-research model) for comprehensive data insights.",
    image: SonarBIImage, // Using the imported image
    tags: ["React", "FastAPI", "Perplexity Sonar"],
    github: "https://github.com"
  },
  {
    id: 4,
    title: "Leave Management System",
    description: "A comprehensive system for managing employee leave requests and approvals with user authentication and role-based access control.",
    image: "https://via.placeholder.com/800x600", // Replace with actual image when available
    tags: ["Angular", "PHP", "MySQL", "XAMPP"],
    github: "https://github.com"
  },
  {
    id: 5,
    title: "AI Image Generator",
    description: "A web application that generates images based on text prompts using deep learning models.",
    image: "https://via.placeholder.com/800x600", // Replace with actual image when available
    tags: ["React", "TensorFlow.js", "Node.js"],
    github: "https://github.com"
  }
];
