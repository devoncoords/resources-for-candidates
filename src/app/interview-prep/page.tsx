'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardTitle, CardDescription, CardHeader } from '@/components/ui/Card';
import { InterviewTimeline } from '@/components/interview/InterviewTimeline';
import { RoleSelector } from '@/components/interview/RoleSelector';
import { Download, MessageCircle, ArrowRight, FileText } from 'lucide-react';

const roleData = {
  engineering: {
    title: 'Engineering',
    description: 'Software engineers, data engineers, security engineers, and technical roles',
    stages: [
      {
        id: 'application',
        title: 'Application Review',
        duration: '1-2 days',
        description: 'Our recruiting team reviews your application and resume',
        whatToExpect: [
          'Initial resume and background screening',
          'Alignment check with role requirements',
          'Timeline and next steps communication'
        ],
        howToPrepare: [
          'Ensure your resume highlights relevant technical experience',
          'Include links to your GitHub, portfolio, or relevant projects',
          'Research Sourcegraph\'s mission and products'
        ],
        tips: [
          'Be specific about your technical achievements and impact',
          'Quantify your contributions where possible',
          'Show passion for developer tools and productivity'
        ]
      },
      {
        id: 'screening',
        title: 'Initial Screening',
        duration: '30 min phone/video',
        description: 'Conversation with a recruiter about your background and interest',
        whatToExpect: [
          'Discussion about your background and experience',
          'Overview of the role and team structure',
          'Q&A about Sourcegraph and the interview process'
        ],
        howToPrepare: [
          'Review the job description thoroughly',
          'Prepare examples of your technical projects and impact',
          'Think about why you\'re interested in Sourcegraph specifically'
        ],
        exampleQuestions: [
          'What interests you about working on developer tools?',
          'Tell me about a technical challenge you\'ve overcome',
          'What do you know about Sourcegraph\'s products?'
        ],
        tips: [
          'Be conversational and ask thoughtful questions',
          'Show genuine interest in the company and role',
          'Prepare questions about team culture and growth opportunities'
        ]
      },
      {
        id: 'technical',
        title: 'Technical Interview',
        duration: '60 min coding',
        description: 'Live coding session focusing on problem-solving and technical skills',
        whatToExpect: [
          'Real-time coding in your preferred language',
          'Algorithm and data structure problems',
          'Discussion of your approach and trade-offs'
        ],
        howToPrepare: [
          'Practice coding problems on LeetCode, HackerRank, or similar platforms',
          'Review fundamental algorithms and data structures',
          'Practice explaining your thought process while coding'
        ],
        exampleQuestions: [
          'Implement a function to find the longest substring without repeating characters',
          'Design a data structure for a simple cache with LRU eviction',
          'Write a function to merge overlapping intervals'
        ],
        tips: [
          'Think out loud and explain your approach',
          'Ask clarifying questions before starting',
          'Consider edge cases and discuss time/space complexity'
        ]
      },
      {
        id: 'system-design',
        title: 'System Design',
        duration: '45 min for senior roles',
        description: 'Architectural discussion and system design exercise',
        whatToExpect: [
          'Design a system relevant to Sourcegraph\'s domain',
          'Discussion of scalability and trade-offs',
          'Collaboration on architecture decisions'
        ],
        howToPrepare: [
          'Study system design fundamentals (databases, caching, load balancing)',
          'Review distributed systems concepts',
          'Practice designing systems similar to code search or developer tools'
        ],
        exampleQuestions: [
          'Design a code search system that can index millions of repositories',
          'How would you build a real-time collaboration system for code reviews?',
          'Design a distributed caching system for frequently accessed code'
        ],
        tips: [
          'Start with requirements gathering and scope clarification',
          'Think about scale, performance, and reliability',
          'Discuss trade-offs between different architectural choices'
        ]
      },
      {
        id: 'cultural-fit',
        title: 'Cultural Fit',
        duration: '30 min',
        description: 'Values alignment and team collaboration discussion',
        whatToExpect: [
          'Discussion of Sourcegraph\'s values and culture',
          'Behavioral questions about teamwork and problem-solving',
          'Two-way conversation about working style and preferences'
        ],
        howToPrepare: [
          'Review Sourcegraph\'s values and company culture',
          'Prepare STAR format examples of past experiences',
          'Think about what motivates you and your ideal work environment'
        ],
        exampleQuestions: [
          'Tell me about a time you had to collaborate with a difficult teammate',
          'Describe a situation where you had to learn something completely new',
          'How do you handle receiving constructive feedback?'
        ],
        tips: [
          'Be authentic about your values and working style',
          'Show curiosity about the team and company culture',
          'Demonstrate self-awareness and growth mindset'
        ]
      },
      {
        id: 'final',
        title: 'Final Interview',
        duration: '30 min with hiring manager',
        description: 'Final conversation with the hiring manager about role fit and mutual interest',
        whatToExpect: [
          'Deep dive into role expectations and career growth',
          'Discussion of team dynamics and projects',
          'Final Q&A and next steps'
        ],
        howToPrepare: [
          'Prepare thoughtful questions about the role and team',
          'Think about your career goals and how they align',
          'Review any feedback from previous interviews'
        ],
        exampleQuestions: [
          'What excites you most about this opportunity?',
          'How do you see yourself growing in this role?',
          'What questions do you have about the team or our roadmap?'
        ],
        tips: [
          'Show enthusiasm for the specific role and team',
          'Ask about success metrics and expectations',
          'Be prepared to discuss compensation and start date'
        ]
      }
    ]
  },
  sales: {
    title: 'Sales',
    description: 'Account executives, sales development representatives, and sales engineering roles',
    stages: [
      {
        id: 'application',
        title: 'Application Review',
        duration: '1-2 days',
        description: 'Our recruiting team reviews your application and sales background',
        whatToExpect: [
          'Review of sales experience and track record',
          'Assessment of alignment with role requirements',
          'Initial qualification and fit evaluation'
        ],
        howToPrepare: [
          'Highlight your sales achievements with specific numbers',
          'Include quota attainment and growth metrics',
          'Research Sourcegraph\'s customer base and market'
        ],
        tips: [
          'Quantify your sales success with percentages and dollar amounts',
          'Show understanding of the developer tools market',
          'Demonstrate knowledge of enterprise sales cycles'
        ]
      },
      {
        id: 'screening',
        title: 'Initial Screening',
        duration: '30 min phone/video',
        description: 'Conversation about your sales background and approach',
        whatToExpect: [
          'Discussion of your sales methodology and experience',
          'Overview of Sourcegraph\'s sales process and goals',
          'Assessment of communication and presentation skills'
        ],
        howToPrepare: [
          'Review your sales metrics and success stories',
          'Understand Sourcegraph\'s value proposition',
          'Prepare examples of complex deals you\'ve closed'
        ],
        exampleQuestions: [
          'Walk me through your sales process from lead to close',
          'Tell me about a challenging deal you won',
          'How do you handle objections from technical stakeholders?'
        ],
        tips: [
          'Be specific about your sales methodology',
          'Show curiosity about Sourcegraph\'s customers',
          'Demonstrate active listening skills'
        ]
      },
      {
        id: 'sales-presentation',
        title: 'Sales Presentation',
        duration: '45 min demo/presentation',
        description: 'Role-play scenario or product demonstration',
        whatToExpect: [
          'Mock sales presentation or product demo',
          'Handling of questions and objections',
          'Assessment of technical communication skills'
        ],
        howToPrepare: [
          'Practice presenting Sourcegraph\'s value proposition',
          'Learn about common customer pain points',
          'Prepare for technical questions about the product'
        ],
        exampleQuestions: [
          'How would you position Sourcegraph against competitors?',
          'What questions would you ask to uncover pain points?',
          'How do you build trust with technical buyers?'
        ],
        tips: [
          'Focus on customer value, not just features',
          'Ask discovery questions throughout',
          'Handle objections with empathy and data'
        ]
      },
      {
        id: 'cultural-fit',
        title: 'Cultural Fit',
        duration: '30 min',
        description: 'Values alignment and team collaboration discussion',
        whatToExpect: [
          'Discussion of Sourcegraph\'s values and culture',
          'Behavioral questions about teamwork and resilience',
          'Assessment of growth mindset and coachability'
        ],
        howToPrepare: [
          'Review Sourcegraph\'s values and company culture',
          'Prepare examples of collaboration and adaptability',
          'Think about your learning and development goals'
        ],
        exampleQuestions: [
          'How do you handle rejection and setbacks?',
          'Tell me about a time you learned from failure',
          'How do you collaborate with technical teams?'
        ],
        tips: [
          'Show resilience and growth mindset',
          'Demonstrate coachability and feedback receptiveness',
          'Express genuine interest in customer success'
        ]
      },
      {
        id: 'final',
        title: 'Final Interview',
        duration: '30 min with sales leader',
        description: 'Final conversation with sales leadership about role fit and mutual interest',
        whatToExpect: [
          'Discussion of territory, quota, and expectations',
          'Career growth and development opportunities',
          'Final assessment of cultural and role fit'
        ],
        howToPrepare: [
          'Prepare questions about territory and market opportunity',
          'Think about your career goals in sales',
          'Review compensation structure and quota expectations'
        ],
        exampleQuestions: [
          'What are your long-term career goals in sales?',
          'How do you stay motivated during challenging quarters?',
          'What support do you need to be successful?'
        ],
        tips: [
          'Show ambition and competitive drive',
          'Ask about onboarding and ramp expectations',
          'Demonstrate commitment to customer success'
        ]
      }
    ]
  },
  general: {
    title: 'General & Admin',
    description: 'Operations, marketing, HR, finance, and other business roles',
    stages: [
      {
        id: 'application',
        title: 'Application Review',
        duration: '1-2 days',
        description: 'Our recruiting team reviews your application and relevant experience',
        whatToExpect: [
          'Review of relevant experience and skills',
          'Assessment of alignment with role requirements',
          'Initial evaluation of cultural fit indicators'
        ],
        howToPrepare: [
          'Tailor your resume to highlight relevant experience',
          'Research Sourcegraph\'s business model and market',
          'Understand how your role impacts company success'
        ],
        tips: [
          'Quantify your achievements and impact',
          'Show understanding of startup/scale-up environments',
          'Demonstrate alignment with company values'
        ]
      },
      {
        id: 'screening',
        title: 'Initial Screening',
        duration: '30 min phone/video',
        description: 'Conversation about your background and interest in the role',
        whatToExpect: [
          'Discussion of your relevant experience',
          'Overview of the role and team structure',
          'Assessment of communication and interpersonal skills'
        ],
        howToPrepare: [
          'Review the job description and requirements',
          'Prepare examples of relevant projects and achievements',
          'Research Sourcegraph\'s culture and values'
        ],
        exampleQuestions: [
          'What interests you about working at Sourcegraph?',
          'Tell me about a project where you made a significant impact',
          'How do you prioritize competing demands?'
        ],
        tips: [
          'Be specific about your contributions and impact',
          'Show genuine interest in the company mission',
          'Ask thoughtful questions about the role and team'
        ]
      },
      {
        id: 'functional',
        title: 'Functional Interview',
        duration: '45-60 min',
        description: 'Deep dive into role-specific skills and experience',
        whatToExpect: [
          'Case study or scenario-based questions',
          'Discussion of relevant tools and methodologies',
          'Assessment of problem-solving approach'
        ],
        howToPrepare: [
          'Review key concepts and best practices in your field',
          'Prepare examples of successful projects or initiatives',
          'Practice explaining complex concepts clearly'
        ],
        exampleQuestions: [
          'How would you approach [role-specific challenge]?',
          'What tools and processes have you used to [relevant task]?',
          'Tell me about a time you had to influence without authority'
        ],
        tips: [
          'Use structured frameworks for problem-solving',
          'Show both strategic thinking and execution ability',
          'Demonstrate collaboration and stakeholder management'
        ]
      },
      {
        id: 'cultural-fit',
        title: 'Cultural Fit',
        duration: '30 min',
        description: 'Values alignment and team collaboration discussion',
        whatToExpect: [
          'Discussion of Sourcegraph\'s values and culture',
          'Behavioral questions about teamwork and adaptability',
          'Assessment of growth mindset and learning agility'
        ],
        howToPrepare: [
          'Review Sourcegraph\'s values and company culture',
          'Prepare STAR format examples of past experiences',
          'Think about what motivates you professionally'
        ],
        exampleQuestions: [
          'How do you handle ambiguity and change?',
          'Tell me about a time you had to learn something quickly',
          'How do you approach giving and receiving feedback?'
        ],
        tips: [
          'Be authentic about your values and working style',
          'Show adaptability and resilience',
          'Demonstrate continuous learning mindset'
        ]
      },
      {
        id: 'final',
        title: 'Final Interview',
        duration: '30 min with hiring manager',
        description: 'Final conversation with the hiring manager about role fit and mutual interest',
        whatToExpect: [
          'Discussion of role expectations and success metrics',
          'Career growth and development opportunities',
          'Final Q&A and next steps'
        ],
        howToPrepare: [
          'Prepare thoughtful questions about the role and team',
          'Think about your career goals and development',
          'Review any feedback from previous interviews'
        ],
        exampleQuestions: [
          'What does success look like in this role?',
          'How do you see this role evolving over time?',
          'What are the biggest challenges facing the team?'
        ],
        tips: [
          'Show enthusiasm for the specific opportunity',
          'Ask about growth and development paths',
          'Be prepared to discuss timeline and next steps'
        ]
      }
    ]
  },
  executive: {
    title: 'Executive',
    description: 'Director, VP, and C-level leadership positions',
    stages: [
      {
        id: 'application',
        title: 'Application Review',
        duration: '1-2 days',
        description: 'Senior leadership reviews your executive background and experience',
        whatToExpect: [
          'Review of leadership experience and track record',
          'Assessment of strategic thinking and vision',
          'Evaluation of cultural and values alignment'
        ],
        howToPrepare: [
          'Highlight leadership achievements and team impact',
          'Research Sourcegraph\'s strategy and market position',
          'Prepare to discuss your leadership philosophy'
        ],
        tips: [
          'Quantify your leadership impact with concrete metrics',
          'Show understanding of the company\'s strategic challenges',
          'Demonstrate alignment with company values and mission'
        ]
      },
      {
        id: 'executive-screening',
        title: 'Executive Screening',
        duration: '45 min with senior leader',
        description: 'Strategic conversation with executive leadership',
        whatToExpect: [
          'Discussion of your leadership experience and approach',
          'Strategic conversation about company direction',
          'Assessment of executive presence and communication'
        ],
        howToPrepare: [
          'Research Sourcegraph\'s competitive landscape',
          'Prepare your vision for the role and function',
          'Review recent company news and developments'
        ],
        exampleQuestions: [
          'How would you approach building/scaling this function?',
          'What are the key challenges in this market/industry?',
          'How do you build and develop high-performing teams?'
        ],
        tips: [
          'Think strategically about the business and market',
          'Demonstrate executive presence and gravitas',
          'Show genuine curiosity about company challenges'
        ]
      },
      {
        id: 'board-presentation',
        title: 'Board/Leadership Presentation',
        duration: '60 min presentation + Q&A',
        description: 'Strategic presentation to senior leadership or board members',
        whatToExpect: [
          'Presentation of your 90-day plan or strategic vision',
          'Q&A with multiple senior stakeholders',
          'Assessment of strategic thinking and communication'
        ],
        howToPrepare: [
          'Develop a comprehensive 30-60-90 day plan',
          'Research industry trends and competitive dynamics',
          'Prepare for challenging strategic questions'
        ],
        exampleQuestions: [
          'Present your plan for the first 90 days in this role',
          'How would you approach [specific strategic challenge]?',
          'What metrics would you use to measure success?'
        ],
        tips: [
          'Be data-driven and metrics-focused',
          'Show both vision and practical execution plans',
          'Demonstrate ability to influence senior stakeholders'
        ]
      },
      {
        id: 'stakeholder-meetings',
        title: 'Stakeholder Meetings',
        duration: '30 min each with 3-4 stakeholders',
        description: 'Individual conversations with key stakeholders and peers',
        whatToExpect: [
          'One-on-one meetings with peer executives',
          'Discussion of cross-functional collaboration',
          'Assessment of cultural fit at leadership level'
        ],
        howToPrepare: [
          'Research each stakeholder\'s background and function',
          'Think about how you\'ll collaborate across functions',
          'Prepare questions about their priorities and challenges'
        ],
        exampleQuestions: [
          'How do you see our functions working together?',
          'What are your biggest priorities this year?',
          'What would success in this partnership look like?'
        ],
        tips: [
          'Show genuine interest in cross-functional collaboration',
          'Demonstrate emotional intelligence and relationship building',
          'Ask about their perspectives and priorities'
        ]
      },
      {
        id: 'ceo-final',
        title: 'CEO Final Interview',
        duration: '45 min with CEO',
        description: 'Final conversation with the CEO about vision alignment and leadership fit',
        whatToExpect: [
          'Discussion of company vision and strategic priorities',
          'Assessment of leadership style and cultural fit',
          'Final evaluation of mutual interest and alignment'
        ],
        howToPrepare: [
          'Research the CEO\'s background and leadership philosophy',
          'Prepare thoughtful questions about company vision',
          'Think about how you\'ll contribute to overall success'
        ],
        exampleQuestions: [
          'What does the future of Sourcegraph look like to you?',
          'How do you see this role contributing to that vision?',
          'What are you most excited about for the company?'
        ],
        tips: [
          'Show alignment with the CEO\'s vision and values',
          'Demonstrate strategic thinking at the highest level',
          'Ask thoughtful questions about company direction'
        ]
      }
    ]
  }
};

type RoleKey = 'engineering' | 'sales' | 'general' | 'executive';

export default function InterviewPrepPage() {
  const [activeRole, setActiveRole] = useState<RoleKey>('engineering');

  const currentRoleData = roleData[activeRole];

  return (
    <div className="min-h-screen bg-[--background]">
      {/* Header Section */}
      <section className="bg-gradient-hero text-white section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Interview Preparation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-balance">
              Everything you need to know about interviewing at Sourcegraph. Get insights into our process, expectations, and tips for success.
            </p>
          </div>
        </div>
      </section>

      {/* Role Selector */}
      <section className="section">
        <div className="container">
          <RoleSelector 
            roles={Object.keys(roleData) as RoleKey[]}
            activeRole={activeRole}
            onRoleChange={setActiveRole}
            roleData={roleData}
          />
        </div>
      </section>

      {/* Interview Timeline */}
      <section className="section bg-[--background-secondary]">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {currentRoleData.title} Interview Process
              </h2>
              <p className="text-lg text-[--foreground-muted] max-w-3xl mx-auto">
                {currentRoleData.description}
              </p>
            </div>
            
            <InterviewTimeline stages={currentRoleData.stages} />
          </div>
        </div>
      </section>

      {/* Preparation Resources */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Additional Resources
              </h2>
              <p className="text-lg text-[--foreground-muted]">
                Download our comprehensive prep guide and get personalized support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Downloadable Prep Guide */}
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Comprehensive Prep Guide</CardTitle>
                  <CardDescription>
                    Download our detailed PDF guide with role-specific preparation materials, example questions, and insider tips from our team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm text-[--foreground-muted] mb-6 space-y-2">
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-[--primary]" />
                      Role-specific question banks
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-[--primary]" />
                      Technical preparation checklists
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-[--primary]" />
                      Company culture deep dive
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-[--primary]" />
                      Salary negotiation tips
                    </li>
                  </ul>
                  <Button className="w-full group-hover:bg-[--primary-hover] transition-colors">
                    Download Prep Guide
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Recruiter */}
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Talk to Our Recruiting Team</CardTitle>
                  <CardDescription>
                    Have specific questions about the interview process or want personalized guidance? Our recruiting team is here to help.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-sm text-[--foreground-muted] mb-6 space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-[--primary]" />
                      Role-specific guidance
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-[--primary]" />
                      Timeline expectations
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-[--primary]" />
                      Process clarifications
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-[--primary]" />
                      Accommodation requests
                    </li>
                  </ul>
                  <Button 
                    variant="secondary" 
                    className="w-full group-hover:bg-[--background-secondary] transition-colors"
                    onClick={() => window.open('mailto:recruiting@sourcegraph.com', '_blank')}
                  >
                    Contact Recruiting
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
