import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import { Calendar, Award } from 'lucide-react';

const ActivitiesPage = () => {
  const events = [
    {
      title: "Technical Hub Project Space",
      role: "Finalist – Top 5 (out of 720+ participants over 120+ teams)",
      date: "Jun 2025",
      description: "Participated in the event which is similar to hackathon hosted by Technical Hub at Aditya University. Me and my team developed Nexly - AI Powered Resource Platform & Extension. Created an AI-powered resource platform with a Chrome extension for collecting, organizing and storing 1,200+ educational resources, featuring with an AI Copilot for generating summaries and insights, and a doubt clarification feature during study sessions, enhancing accessibility by 79%. Streamlined administrative workflows by integrating ServiceNow (Email Configuration & Visual Admin Panel), effectively eliminating 75% of custom UI development effort for backend management resulting in an estimated 55% reduction in operational compute costs. Successfully launched a Chrome Extension, acquiring 150+ active users by delivering educational content summaries by integrating OpenAI APIs with AWS Lambda reducing costs by 52%, and deployed DynamoDB realizing 50% faster data retrieval.",
      achievement: "Ranked Top 4"
    }
  ];

  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Hackathons & Activities"
            subtitle="Participation in tech events and competitions that fueled my creativity and technical problem-solving."
          />

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-navy">Events & Initiatives</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div key={index} className="card p-6">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-semibold text-navy">{event.title}</h4>
                    <span className="bg-gray-100 text-navy text-sm px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>

                  <p className="text-gold font-medium mt-1 mb-3">{event.role}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>

                  {event.achievement && (
                    <div className="mt-auto">
                      <div className="flex items-center text-navy">
                        <Award size={16} className="mr-2 text-gold" />
                        <span className="font-medium">{event.achievement}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Participating in such events and innovation challenges has helped me grow as a developer and problem-solver. These experiences allowed me to apply classroom concepts in real-world scenarios and collaborate under pressure.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ActivitiesPage;
