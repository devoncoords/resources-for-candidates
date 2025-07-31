'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Heart, Users, Target, BookOpen, Globe, Home, ChevronDown, ChevronUp, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';

const coreValues = [
  {
    id: 'ownership',
    title: 'Ownership & Responsibility',
    icon: Target,
    description: 'We take ownership of our work and decisions, seeing projects through to completion.',
    details: 'Everyone at Sourcegraph is empowered to make decisions and take ownership of their work. We believe in giving people the autonomy to do their best work while taking responsibility for outcomes.',
    examples: [
      'Engineers own features from design to deployment and monitoring',
      'Everyone participates in customer support and bug triage',
      'Cross-functional collaboration without requiring permission'
    ]
  },
  {
    id: 'transparency',
    title: 'Transparency & Communication',
    icon: Globe,
    description: 'We communicate openly, share context widely, and default to transparency.',
    details: 'Transparency builds trust and enables better decision-making. We share information openly, discuss challenges honestly, and keep our team and community informed.',
    examples: [
      'All-hands meetings with open Q&A and company metrics',
      'Public handbook with compensation bands and processes',
      'Open source development and community engagement'
    ]
  },
  {
    id: 'learning',
    title: 'Continuous Learning',
    icon: BookOpen,
    description: 'We invest in growth, embrace feedback, and learn from our mistakes.',
    details: 'We foster a culture of continuous learning where everyone is encouraged to grow, experiment, and improve. Mistakes are learning opportunities, not failures.',
    examples: [
      '$1,000 annual learning budget for courses, books, and conferences',
      'Regular feedback cycles and career development conversations',
      'Internal tech talks and knowledge sharing sessions'
    ]
  },
  {
    id: 'customer',
    title: 'Customer Focus',
    icon: Heart,
    description: 'We prioritize customer success and build products that solve real problems.',
    details: 'Our customers\' success is our success. We listen to feedback, understand their challenges, and build solutions that make a real difference in their work.',
    examples: [
      'Regular customer interviews and feedback sessions',
      'Product decisions driven by customer needs and usage data',
      'Support team insights fed directly into product development'
    ]
  },
  {
    id: 'diversity',
    title: 'Diversity & Inclusion',
    icon: Users,
    description: 'We build diverse teams and create an inclusive environment for everyone.',
    details: 'Diversity of thought, background, and experience makes us stronger. We actively work to create an inclusive environment where everyone can do their best work.',
    examples: [
      'Structured interview process to reduce bias',
      'Employee resource groups and mentorship programs',
      'Regular diversity and inclusion training and discussions'
    ]
  },
  {
    id: 'remote',
    title: 'Remote-First Culture',
    icon: Home,
    description: 'We embrace distributed work and build processes that work for everyone.',
    details: 'Being remote-first means we design our culture, processes, and communication for distributed teams. Everyone has equal access to information and opportunities.',
    examples: [
      'Async-first communication with documentation over meetings',
      'Home office stipends and co-working space allowances',
      'Time zone conscious scheduling and recorded meetings'
    ]
  }
];

const employeeStories = [
  {
    name: 'Sarah Chen',
    role: 'Senior Software Engineer',
    image: '/placeholder-avatar-1.jpg',
    quote: 'The ownership culture here is incredible. I&apos;ve been able to lead projects I&apos;m passionate about and see them through from idea to impact. The learning budget helped me attend React Conf and bring new ideas back to the team.',
    tenure: '2 years'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Product Manager',
    image: '/placeholder-avatar-2.jpg',
    quote: 'The transparency at Sourcegraph is unlike anywhere I&apos;ve worked. Having access to company metrics and being part of strategic discussions has helped me understand the bigger picture and make better product decisions.',
    tenure: '1.5 years'
  },
  {
    name: 'Priya Patel',
    role: 'Customer Success Manager',
    image: '/placeholder-avatar-3.jpg',
    quote: 'Working remotely here doesn&apos;t feel isolating at all. The team culture is strong, and I feel just as connected to my colleagues as I did in previous office jobs. The flexibility has been life-changing for my work-life balance.',
    tenure: '3 years'
  }
];

const workingHighlights = [
  {
    title: 'Remote-first, always',
    description: 'Built from the ground up for distributed teams with async processes and equal participation.',
    icon: Home
  },
  {
    title: 'Meaningful impact',
    description: 'Work on products used by millions of developers at companies like Meta, Uber, and Yelp.',
    icon: Target
  },
  {
    title: 'Growth opportunities',
    description: 'Clear career progression paths, mentorship programs, and learning budgets.',
    icon: BookOpen
  },
  {
    title: 'Inclusive community',
    description: 'Diverse team of 200+ people across 40+ countries working together.',
    icon: Users
  }
];

export default function CulturePage() {
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  const toggleValue = (valueId: string) => {
    setExpandedValue(expandedValue === valueId ? null : valueId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Culture & Values
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              We&apos;re building more than just great products—we&apos;re creating a culture where everyone can do their best work and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link href="/interview-prep">
                  Start Interview Prep
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="https://sourcegraph.com/careers" target="_blank" rel="noopener noreferrer">
                  View Open Positions
                  <ArrowUpRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section bg-[--background-secondary]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-[--foreground-muted] leading-relaxed">
              To make it so everyone can code. We&apos;re building universal code search and intelligence 
              to help developers understand, fix, and automate across their entire codebase.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-[--foreground-muted] max-w-3xl mx-auto">
              These values guide everything we do, from how we build products to how we treat each other and our community.
            </p>
          </div>
          
          <div className="grid gap-6 md:gap-8">
            {coreValues.map((value) => {
              const IconComponent = value.icon;
              const isExpanded = expandedValue === value.id;
              
              return (
                <Card key={value.id} className="transition-all duration-200 hover:shadow-md">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleValue(value.id)}
                      className="w-full p-6 text-left flex items-start gap-4 hover:bg-[--background-secondary] transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[--primary] rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-[--foreground-muted]" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-[--foreground-muted]" />
                          )}
                        </div>
                        <CardDescription className="text-base">
                          {value.description}
                        </CardDescription>
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className="px-6 pb-6">
                        <div className="ml-16 pt-4 border-t border-[--border]">
                          <p className="text-[--foreground-muted] mb-6">
                            {value.details}
                          </p>
                          <div>
                            <h4 className="font-semibold mb-3">How this shows up:</h4>
                            <ul className="space-y-2">
                              {value.examples.map((example, index) => (
                                <li key={index} className="flex items-start gap-2 text-[--foreground-muted]">
                                  <span className="text-[--primary] text-lg leading-none">•</span>
                                  {example}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Working at Sourcegraph */}
      <section className="section bg-[--background-secondary]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Working at Sourcegraph</h2>
            <p className="text-xl text-[--foreground-muted] max-w-3xl mx-auto">
              Discover what makes Sourcegraph a great place to build your career and make an impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {workingHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index}>
                  <CardContent className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[--accent] rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{highlight.title}</CardTitle>
                      <CardDescription className="text-base">
                        {highlight.description}
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Employee Stories */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stories from the Team</h2>
            <p className="text-xl text-[--foreground-muted] max-w-3xl mx-auto">
              Hear directly from our team members about their experience working at Sourcegraph.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {employeeStories.map((story, index) => (
              <Card key={index} className="h-full">
                <CardContent className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[--primary] rounded-full flex items-center justify-center text-white font-bold">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{story.name}</div>
                      <div className="text-sm text-[--foreground-muted]">{story.role}</div>
                      <div className="text-xs text-[--foreground-muted]">{story.tenure} at Sourcegraph</div>
                    </div>
                  </div>
                  <blockquote className="text-[--foreground-muted] italic flex-grow">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section bg-[--background-secondary]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our CEO</h2>
            <p className="text-xl text-[--foreground-muted] mb-8">
              Quinn Slack shares the story behind Sourcegraph and our vision for the future of software development.
            </p>
            <div className="relative aspect-video bg-[--card] border border-[--border] rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[--primary] to-purple-600">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">CEO Introduction Video</p>
                  <p className="text-sm opacity-80">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Learn More</h2>
            <p className="text-xl text-[--foreground-muted] mb-8">
              Dive deeper into our culture, values, and what it&apos;s like to work at Sourcegraph.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" asChild>
                <Link href="https://www.notion.so/sourcegraph/What-it-s-like-working-at-Sourcegraph-119a8e11265880b18911eee4d9b7c460" target="_blank" rel="noopener noreferrer">
                  Working at Sourcegraph
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="https://sourcegraph.com/blog/the-brute-squad" target="_blank" rel="noopener noreferrer">
                  The Brute Squad Story
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
