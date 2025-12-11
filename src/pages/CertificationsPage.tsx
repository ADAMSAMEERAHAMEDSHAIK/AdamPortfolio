import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import CertificationCard from '@/components/ui/CertificationCard';

const CertificationsPage = () => {
  const certifications = [
    {
      title: "ServiceNow Certified System Administrator (CSA)",
      issuer: "ServiceNow",
      date: " May 2025",
      description: "Validated skills in ServiceNow system administration, including platform configuration, user and role management, data policies, and workflow automation. Demonstrated proficiency in maintaining and optimizing core ServiceNow modules.",
      badgeUrl: "/assets/SNCSA.png",
      verificationUrl: "https://drive.google.com/file/d/1s_0SHIxWwhtJ4cp6A0L-96Of-PoWZNFp/view"
    },
    {
      title: "ServiceNow Certified Application Developer (CAD)",
      issuer: "ServiceNow",
      date: " May 2025",
      description: "Certified in ServiceNow Application Development with demonstrated capability in building custom apps, automating workflows, and configuring platform components. Adept at delivering optimized, scalable solutions across the ServiceNow ecosystem.",
      badgeUrl: "/assets/SNCAD.png",
      verificationUrl: "https://drive.google.com/file/d/1hRgUYEUuDxfwysChQAAJrpuKAZ1f6dGQ/view?usp=sharing"
    },
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services (AWS)",
      date: "Jun 2024",
      description: "Validated foundational knowledge of AWS cloud concepts, security, architecture, pricing, and core services. Demonstrated the ability to understand cloud best practices, global infrastructure, and cost-effective solutions. This certification reflects strong cloud literacy and readiness to work with AWS-based environments across real-world projects.",
      badgeUrl: "/assets/AWSCCP.png",
      verificationUrl: "https://drive.google.com/file/d/1VEWPNxA06pQhpiozwtFQ-HD_rf2fsqBz/view?usp=sharing"
    },
    {
      title: "Redhat System Administration (RHCSA)",
      issuer: "Red Hat",
      date: "Jun 2024",
      description: "Validated skills in Linux system administration including user management, file permissions, networking, system processes, and shell scripting on Red Hat-based systems.",
      badgeUrl: "/assets/RHCSA.png",
      verificationUrl: "https://drive.google.com/file/d/1VEWPNxA06pQhpiozwtFQ-HD_rf2fsqBz/view?usp=sharing"
    },
    {
      title: "IT Specialist in Java",
      issuer: "Certiport (Pearson)",
      date: "Jul 2024",
      description: "Industry-recognized Java certification covering Java fundamentals, OOP, collections, exception handling, and best practices in software development.",
      badgeUrl: "/assets/certiport_java.png",
      verificationUrl: "https://drive.google.com/file/d/1SCj9CfYWLJeJGUe4qJ4z5rLQhlGFYZax/view?usp=sharing" 
    }
  ];

  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Certifications & Credentials"
            subtitle="Professional certifications that validate my skills and expertise."
          />
          
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </section>

      {/* 
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Continuing Education"
            subtitle="My commitment to ongoing learning and professional development."
            centered={true}
          />
          
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-navy">Learning Journey</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-navy">Currently Learning</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1">
                      <span className="text-white text-sm">▶</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Deep Learning Specialization</p>
                      <p className="text-gray-600 text-sm">Advancing my machine learning skills with neural networks and deep learning techniques.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1">
                      <span className="text-white text-sm">▶</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Advanced Financial Modeling</p>
                      <p className="text-gray-600 text-sm">Enhancing my financial analysis capabilities with complex modeling techniques.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3 text-navy">Future Learning Goals</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center mt-1">
                      <span className="text-white text-sm">○</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Cloud Computing Certification</p>
                      <p className="text-gray-600 text-sm">Planning to gain expertise in cloud platforms for data science applications.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center mt-1">
                      <span className="text-white text-sm">○</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Big Data Technologies</p>
                      <p className="text-gray-600 text-sm">Expanding knowledge in Hadoop, Spark, and other big data frameworks.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-gray-700 italic">
                "Learning is not attained by chance, it must be sought for with ardor and diligence." — Abigail Adams
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

    </PageLayout>
  );
};

export default CertificationsPage;
