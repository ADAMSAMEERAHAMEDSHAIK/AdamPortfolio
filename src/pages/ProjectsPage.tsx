import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';

const ProjectsPage = () => {
  const otherProjects = [
    {
      title: "Nexly- AI Powered Resource Platform & Extension",
      description: "Developed an AI-driven platform and browser extension that organizes 1,200+ educational resources, provides real-time summaries, insights, and study assistance using an integrated AI Copilot. Built scalable backend services with AWS Lambda, DynamoDB, and OpenAI, achieving major cost and performance improvements. Enhanced admin workflows through ServiceNow integration and reached 150+ active users within launch.",
      techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "AWS(Lambda & DynamoDB)", "OpenAI", "ServiceNow"],
      imageUrl: "/assets/nexly.jpg", // Use a placeholder for now
      githubUrl: "https://github.com/ADAMSAMEERAHAMEDSHAIK/Nexly.git", // Placeholder: add GitHub repo when ready
      liveUrl: "https://nexly-resource-manager.vercel.app/" // Optional: deploy link if hosted
    },
    {
      title: "Inventory Management System - Java-based application",
      description: "Designed and developed a Java application with JDBC and a user-friendly GUI to enable seamless database interaction for inventory operations. Built CRUD functionality (add, update, delete, view) with MySQL integration using Java Swing/AWT, achieving a 99% success rate in request handling.",
      techStack: ["Java", "JDBC", "Java GUI Frameworks (Swing, AWT)", "MySQL"],
      imageUrl: "/assets/IMS.webp", // Replace with actual image if available
      githubUrl: "https://github.com/ADAMSAMEERAHAMEDSHAIK/Java-Projects.git", // Update this when you upload
      liveUrl: "#" // Optional
    },
    {
      title: "Service Sphere",
      description: "Enhanced user convenience and a unified, centralized platform that seamlessly integrated 12 distinct professional and personal services, reducing user time-to-access by 45% and driving a 30% increase in service adoption. Architected and deployed scalable cloud infrastructure on AWS, ensuring high availability and performance for integrated services. enabling on-demand scaling during peak load and increasing service availability to 94.99%",
      techStack: ["HTML", "CSS", "JavaScript", "AWS Cloud"],
      imageUrl: "/assets/SS.png", // Replace with your actual screenshot
      githubUrl: "https://github.com/ADAMSAMEERAHAMEDSHAIK/Service_Sphere.git", // Update when repo is live
      liveUrl: "https://service-sphere-indol.vercel.app/" // Replace with your actual deployed URL
    },
    {
      title: "Personal Portfolio Website",
      description: "A professional and interactive portfolio website built using React and TypeScript. It serves as a central space to showcase my profile, including a summary, detailed about me section, experience, certifications, personal projects, activities, and recommendations. The portfolio features a clean UI, responsive design, and smooth navigation to give recruiters and peers a comprehensive view of my journey.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Component-Based Design"],
      imageUrl: "/assets/portfolio.jpg", // Replace with your actual screenshot
      githubUrl: "", // Update when repo is live
      liveUrl: "https://adam-portfolio-pied.vercel.app/" // Replace with your actual deployed URL
    }
        
  ];

  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Projects & Research"
            subtitle="Explore my academic and professional projects showcasing my skills and interests."
          />

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-navy">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectsPage;
