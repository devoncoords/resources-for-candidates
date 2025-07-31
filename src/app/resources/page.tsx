'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, SortAsc, ChevronDown, Mail, MessageCircle } from 'lucide-react';
import { ResourceCard, type Resource } from '@/components/resources/ResourceCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Mock data for resources based on the provided URLs and Sourcegraph content
const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Deep Search: How We Made Complex Code Queries Simple',
    description: 'Learn about Sourcegraph\'s advanced search capabilities and how they help developers navigate large codebases efficiently. Discover the technology behind semantic search and code intelligence.',
    type: 'Blog',
    url: 'https://sourcegraph.com/blog/deep-search',
    readTime: '8 min read',
    topics: ['Products', 'Engineering', 'Search Technology'],
    thumbnail: '/images/blog-deep-search.jpg',
    isFeatured: true,
    publishedAt: '2024-01-15',
    popularity: 95,
  },
  {
    id: '2',
    title: 'Building the Brute Squad: Our Approach to Code Intelligence',
    description: 'Inside look at how Sourcegraph builds and maintains code intelligence at scale. Learn about the engineering challenges and solutions for processing millions of repositories.',
    type: 'Blog',
    url: 'https://sourcegraph.com/blog/brute-squad',
    readTime: '12 min read',
    topics: ['Engineering', 'Products', 'Architecture'],
    thumbnail: '/images/blog-brute-squad.jpg',
    isFeatured: true,
    publishedAt: '2024-02-01',
    popularity: 88,
  },
  {
    id: '3',
    title: 'Enterprise AI Agents: The Future of Developer Tools',
    description: 'Explore how AI agents are transforming enterprise development workflows. Learn about Sourcegraph\'s vision for AI-powered code assistance and developer productivity.',
    type: 'Blog',
    url: 'https://sourcegraph.com/blog/enterprise-ai-agents',
    readTime: '10 min read',
    topics: ['AI', 'Products', 'Enterprise', 'Future of Work'],
    thumbnail: '/images/blog-ai-agents.jpg',
    isFeatured: true,
    publishedAt: '2024-03-10',
    popularity: 92,
  },
  {
    id: '4',
    title: 'Amp: Revolutionizing Code Generation - Podcast Episode',
    description: 'Deep dive into Amp, Sourcegraph\'s AI-powered coding agent. Hear from the engineering team about the challenges of building reliable AI tools for developers.',
    type: 'Podcast',
    url: 'https://ampcode.com/podcast/episode-1',
    duration: '45 min',
    topics: ['AI', 'Products', 'Amp', 'Engineering'],
    thumbnail: '/images/podcast-amp.jpg',
    isFeatured: false,
    publishedAt: '2024-02-20',
    popularity: 76,
  },
  {
    id: '5',
    title: 'Understanding Equity Compensation at Tech Companies',
    description: 'Comprehensive guide to equity compensation, stock options, and equity packages in the technology industry. Learn how to evaluate and negotiate your equity offer.',
    type: 'Guide',
    url: 'https://carta.com/equity-101',
    readTime: '15 min read',
    topics: ['Benefits', 'Compensation', 'Career Development'],
    thumbnail: '/images/guide-equity.jpg',
    isFeatured: false,
    publishedAt: '2024-01-08',
    popularity: 84,
  },
  {
    id: '6',
    title: 'Code Search Best Practices for Large Teams',
    description: 'Learn effective strategies for searching and navigating code in large organizations. Tips and tricks for using Sourcegraph to improve developer productivity.',
    type: 'Video',
    url: 'https://sourcegraph.com/videos/code-search-best-practices',
    duration: '25 min',
    topics: ['Products', 'Best Practices', 'Team Productivity'],
    thumbnail: '/images/video-search.jpg',
    isFeatured: false,
    publishedAt: '2024-01-25',
    popularity: 71,
  },
  {
    id: '7',
    title: 'Remote-First Culture: How Sourcegraph Works',
    description: 'Inside look at Sourcegraph\'s remote-first culture, communication practices, and how we maintain strong team collaboration across global time zones.',
    type: 'Blog',
    url: 'https://sourcegraph.com/blog/remote-first-culture',
    readTime: '7 min read',
    topics: ['Culture', 'Remote Work', 'Team Collaboration'],
    thumbnail: '/images/blog-remote.jpg',
    isFeatured: false,
    publishedAt: '2024-02-12',
    popularity: 79,
  },
  {
    id: '8',
    title: 'Technical Interview Preparation Guide',
    description: 'Comprehensive guide to preparing for technical interviews at Sourcegraph. Includes coding challenges, system design, and behavioral interview tips.',
    type: 'PDF',
    url: '/resources/interview-prep-guide.pdf',
    readTime: '20 min read',
    topics: ['Interview Prep', 'Technical Skills', 'Career Development'],
    thumbnail: '/images/pdf-interview.jpg',
    isFeatured: true,
    publishedAt: '2024-03-01',
    popularity: 97,
  },
  {
    id: '9',
    title: 'The Developer Experience Philosophy at Sourcegraph',
    description: 'How we think about developer experience and productivity. Learn about our principles for building tools that developers love to use.',
    type: 'Podcast',
    url: 'https://sourcegraph.com/podcast/developer-experience',
    duration: '38 min',
    topics: ['Culture', 'Products', 'Developer Experience'],
    thumbnail: '/images/podcast-dx.jpg',
    isFeatured: false,
    publishedAt: '2024-02-28',
    popularity: 73,
  },
  {
    id: '10',
    title: 'Open Source Contributions and Career Growth',
    description: 'How contributing to open source projects can accelerate your career. Tips for getting started and making meaningful contributions.',
    type: 'Blog',
    url: 'https://sourcegraph.com/blog/open-source-career',
    readTime: '6 min read',
    topics: ['Career Development', 'Open Source', 'Engineering'],
    thumbnail: '/images/blog-opensource.jpg',
    isFeatured: false,
    publishedAt: '2024-01-30',
    popularity: 68,
  },
  {
    id: '11',
    title: 'Building Inclusive Engineering Teams',
    description: 'Our approach to diversity, equity, and inclusion in engineering. Learn about Sourcegraph\'s initiatives to build more inclusive technology teams.',
    type: 'Video',
    url: 'https://sourcegraph.com/videos/inclusive-teams',
    duration: '32 min',
    topics: ['Culture', 'Diversity & Inclusion', 'Team Building'],
    thumbnail: '/images/video-inclusion.jpg',
    isFeatured: false,
    publishedAt: '2024-03-05',
    popularity: 82,
  },
  {
    id: '12',
    title: 'Sourcegraph Product Roadmap 2024',
    description: 'Get insights into our product vision and upcoming features. Learn about the strategic direction of Sourcegraph\'s platform and developer tools.',
    type: 'Guide',
    url: 'https://sourcegraph.com/roadmap-2024',
    readTime: '12 min read',
    topics: ['Products', 'Strategy', 'Future Plans'],
    thumbnail: '/images/guide-roadmap.jpg',
    isFeatured: false,
    publishedAt: '2024-03-15',
    popularity: 86,
  },
];

const resourceTypes = ['All', 'Blog', 'Podcast', 'Video', 'PDF', 'Guide'];
const topics = [
  'All',
  'Interview Prep',
  'Culture',
  'Products',
  'Engineering',
  'AI',
  'Benefits',
  'Career Development',
  'Remote Work',
  'Diversity & Inclusion',
];
const sortOptions = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'alphabetical', label: 'Alphabetical' },
];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(9);

  const filteredAndSortedResources = useMemo(() => {
    const filtered = mockResources.filter((resource) => {
      const matchesSearch = 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesType = selectedType === 'All' || resource.type === selectedType;
      const matchesTopic = selectedTopic === 'All' || resource.topics.includes(selectedTopic);
      
      return matchesSearch && matchesType && matchesTopic;
    });

    // Sort resources
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.popularity - a.popularity;
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        case 'recent':
        default:
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
    });

    return filtered;
  }, [searchQuery, selectedType, selectedTopic, sortBy]);

  const featuredResources = mockResources.filter(resource => resource.isFeatured);
  const displayedResources = filteredAndSortedResources.slice(0, itemsToShow);

  return (
    <div className="min-h-screen bg-[--background]">
      {/* Hero Section */}
      <section className="section bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Resource Library
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Everything you need to succeed at Sourcegraph. From interview preparation to understanding our culture and products.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section bg-[--background-secondary]">
        <div className="container">
          <h2 className="text-3xl font-bold text-[--foreground] mb-8 text-center">
            Featured Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[--foreground-muted] w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources by title, description, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[--border] rounded-lg bg-[--background] text-[--foreground] placeholder-[--foreground-muted] focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center justify-between mb-6">
              <Button
                variant="secondary"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
              
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-sm text-[--foreground-muted]">
                  {filteredAndSortedResources.length} resources found
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <SortAsc className="w-4 h-4 text-[--foreground-muted]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-[--border] rounded-lg px-3 py-2 bg-[--background] text-[--foreground] text-sm focus:outline-none focus:ring-2 focus:ring-[--primary]"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Filters */}
            <div className={`grid md:grid-cols-2 gap-4 mb-8 ${showFilters ? 'block' : 'hidden md:grid'}`}>
              <div>
                <label className="block text-sm font-medium text-[--foreground] mb-2">
                  Resource Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full border border-[--border] rounded-lg px-3 py-2 bg-[--background] text-[--foreground] focus:outline-none focus:ring-2 focus:ring-[--primary]"
                >
                  {resourceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[--foreground] mb-2">
                  Topic
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full border border-[--border] rounded-lg px-3 py-2 bg-[--background] text-[--foreground] focus:outline-none focus:ring-2 focus:ring-[--primary]"
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Resource Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {displayedResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>

            {/* Load More */}
            {itemsToShow < filteredAndSortedResources.length && (
              <div className="text-center">
                <Button
                  variant="secondary"
                  onClick={() => setItemsToShow(prev => prev + 6)}
                >
                  Load More Resources
                </Button>
              </div>
            )}

            {/* No Results */}
            {filteredAndSortedResources.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-[--foreground] mb-2">
                  No resources found
                </h3>
                <p className="text-[--foreground-muted] mb-4">
                  Try adjusting your search terms or filters
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedType('All');
                    setSelectedTopic('All');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Can't Find What You're Looking For */}
      <section className="section bg-[--background-secondary]">
        <div className="container">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">
                Can&apos;t find what you&apos;re looking for?
              </CardTitle>
              <p className="text-[--foreground-muted]">
                We&apos;re here to help! Reach out to our recruiting team or ask questions in our community.
              </p>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" asChild>
                <a href="mailto:recruiting@sourcegraph.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Recruiting
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a
                  href="https://sourcegraph.com/community"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join Community
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
