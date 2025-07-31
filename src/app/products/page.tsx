'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { 
  Bot, 
  Search, 
  Brain, 
  Users, 
  Play, 
  Download, 
  ExternalLink, 
  Check, 
  Star, 
  Quote,
  Globe
} from 'lucide-react';

export default function ProductsPage() {
  const [demoInput, setDemoInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [os, setOS] = useState<'windows' | 'mac' | 'linux'>('mac');

  // Detect OS for download CTA
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) setOS('windows');
    else if (userAgent.includes('linux')) setOS('linux');
    else setOS('mac');
  }, []);

  const demoExamples = [
    {
      query: 'How do I implement user authentication?',
      response: 'I can help you implement user authentication! Here are a few approaches:\n\n1. **JWT-based authentication** - Most common for APIs\n2. **Session-based authentication** - Traditional server-side\n3. **OAuth 2.0** - For third-party login\n\nWhich approach would you like to explore?'
    },
    {
      query: 'Find all functions that handle database connections',
      response: 'I found 8 functions handling database connections across your codebase:\n\n• `connectDB()` in utils/database.js\n• `closeConnection()` in utils/database.js\n• `createPool()` in config/db.js\n• `executeQuery()` in models/base.js\n\nWould you like me to show you any specific implementation?'
    },
    {
      query: 'Fix this TypeScript error',
      response: 'I can help fix that TypeScript error! The issue is that `user` might be undefined. Here\'s the fix:\n\n```typescript\n// Before\nconst name = user.name;\n\n// After\nconst name = user?.name ?? \'Anonymous\';\n```\n\nThis uses optional chaining and nullish coalescing for safe access.'
    }
  ];

  const typeDemo = (index: number) => {
    setIsTyping(true);
    setDemoInput('');
    setCurrentDemo(index);
    
    const text = demoExamples[index].query;
    let i = 0;
    
    const interval = setInterval(() => {
      setDemoInput(text.slice(0, i + 1));
      i++;
      
      if (i >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 50);
  };

  const getDownloadLink = () => {
    switch (os) {
      case 'windows': return 'https://ampcode.com/download/windows';
      case 'linux': return 'https://ampcode.com/download/linux';
      default: return 'https://ampcode.com/download/mac';
    }
  };

  const getDownloadText = () => {
    switch (os) {
      case 'windows': return 'Download for Windows';
      case 'linux': return 'Download for Linux';
      default: return 'Download for Mac';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Developer tools that supercharge productivity
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-balance">
              Experience the future of coding with AI-powered assistance, intelligent code search, and enterprise-grade developer tools trusted by thousands of teams worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#amp-demo">
                <Button size="xl" variant="primary" className="w-full sm:w-auto">
                  Try Amp now
                  <Play className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href={getDownloadLink()} target="_blank" rel="noopener noreferrer">
                <Button size="xl" variant="secondary" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white/20 text-white">
                  {getDownloadText()}
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="section bg-[--background-secondary]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our product suite
            </h2>
            <p className="text-lg text-[--foreground-muted] max-w-2xl mx-auto">
              Powerful tools designed to enhance every aspect of your development workflow, from coding to code discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Amp */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 mr-4">
                    <Bot className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="mb-2 text-2xl">Amp</CardTitle>
                    <CardDescription className="text-sm text-[--accent] font-semibold">AI CODING ASSISTANT</CardDescription>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Your intelligent coding companion that understands your codebase, suggests improvements, and helps you write better code faster. Features real-time completions, code explanations, and contextual assistance.
                </CardDescription>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Real-time code completions and suggestions
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Natural language code explanations
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Context-aware refactoring suggestions
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="#amp-demo">
                    <Button variant="primary" className="group-hover:shadow-lg transition-shadow">
                      Try demo
                      <Play className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href={getDownloadLink()} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">
                      Download
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Code Search */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 mr-4">
                    <Search className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="mb-2 text-2xl">Code Search</CardTitle>
                    <CardDescription className="text-sm text-[--accent] font-semibold">ENTERPRISE CODE SEARCH</CardDescription>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Lightning-fast code search across your entire codebase and repositories. Find functions, variables, and patterns instantly with powerful regex and semantic search capabilities.
                </CardDescription>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Search across millions of repositories
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Regex and semantic search support
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Enterprise security and permissions
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://sourcegraph.com/search" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="group-hover:shadow-lg transition-shadow">
                      Try search
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://sourcegraph.com/demo" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">
                      Request demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Deep Search */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 mr-4">
                    <Brain className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="mb-2 text-2xl">Deep Search</CardTitle>
                    <CardDescription className="text-sm text-[--accent] font-semibold">SEMANTIC CODE SEARCH</CardDescription>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Go beyond syntax with AI-powered semantic search that understands code meaning and context. Find similar patterns, functions, and implementations across languages.
                </CardDescription>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    AI-powered semantic understanding
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Cross-language pattern matching
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Natural language queries
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://sourcegraph.com/cody" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="group-hover:shadow-lg transition-shadow">
                      Learn more
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise AI Agents */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 mr-4">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="mb-2 text-2xl">Enterprise AI Agents</CardTitle>
                    <CardDescription className="text-sm text-[--accent] font-semibold">TEAM PRODUCTIVITY</CardDescription>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Scalable AI agents designed for enterprise teams. Automate code reviews, generate documentation, and maintain consistency across large codebases with enterprise-grade security.
                </CardDescription>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Automated code reviews and suggestions
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Team collaboration features
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Enterprise security and compliance
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://sourcegraph.com/enterprise" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="group-hover:shadow-lg transition-shadow">
                      Enterprise demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Amp Demo */}
      <section id="amp-demo" className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experience Amp in action
              </h2>
              <p className="text-lg text-[--foreground-muted] max-w-2xl mx-auto">
                See how Amp can transform your coding experience with intelligent suggestions, code explanations, and contextual assistance.
              </p>
            </div>

            {/* Demo Interface */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-gray-400 text-sm font-medium">
                  Amp AI Assistant
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6 text-white font-mono">
                <div className="mb-4">
                  <div className="text-green-400 mb-2">$ amp chat</div>
                  <div className="text-gray-300">Welcome to Amp! How can I help you code better today?</div>
                </div>

                {/* Input Area */}
                <div className="border border-gray-600 rounded-lg p-4 mb-4 bg-gray-800">
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-2">You:</span>
                    <input
                      type="text"
                      value={demoInput}
                      onChange={(e) => setDemoInput(e.target.value)}
                      placeholder="Ask Amp anything about coding..."
                      className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
                      disabled={isTyping}
                    />
                    {isTyping && <span className="text-white animate-pulse">|</span>}
                  </div>
                </div>

                {/* Response Area */}
                {currentDemo !== null && (
                  <div className="border border-gray-600 rounded-lg p-4 bg-gray-800">
                    <div className="flex items-start">
                      <span className="text-purple-400 mr-2 flex-shrink-0">Amp:</span>
                      <div className="text-gray-200 whitespace-pre-line">
                        {demoExamples[currentDemo]?.response}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Demo Controls */}
              <div className="bg-gray-800 px-6 py-4 border-t border-gray-700">
                <div className="flex flex-wrap gap-2">
                  <span className="text-gray-400 text-sm mr-4">Try these examples:</span>
                  {demoExamples.map((example, index) => (
                    <Button
                      key={index}
                      size="sm"
                      variant="secondary"
                      onClick={() => typeDemo(index)}
                      disabled={isTyping}
                      className="text-xs bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
                    >
                      {example.query.slice(0, 30)}...
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Download CTA */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-4 bg-[--background-secondary] rounded-xl p-6">
                <div className="text-left">
                  <h3 className="font-semibold text-lg mb-1">Ready to supercharge your coding?</h3>
                  <p className="text-[--foreground-muted] text-sm">Download Amp and experience AI-powered coding assistance.</p>
                </div>
                <a href={getDownloadLink()} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="primary" className="shadow-lg">
                    {getDownloadText()}
                    <Download className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison Table */}
      <section className="section bg-[--background-secondary]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compare our tools
            </h2>
            <p className="text-lg text-[--foreground-muted] max-w-2xl mx-auto">
              Choose the right combination of tools for your development workflow and team needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 font-semibold">Feature</th>
                  <th className="text-center p-6 font-semibold">Amp</th>
                  <th className="text-center p-6 font-semibold">Code Search</th>
                  <th className="text-center p-6 font-semibold">Deep Search</th>
                  <th className="text-center p-6 font-semibold">Enterprise AI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['AI Code Completions', true, false, false, true],
                  ['Natural Language Queries', true, false, true, true],
                  ['Enterprise Security', false, true, true, true],
                  ['Multi-Repository Search', false, true, true, true],
                  ['Real-time Assistance', true, false, false, true],
                  ['Team Collaboration', false, true, false, true],
                  ['Code Explanations', true, false, true, true],
                  ['Automated Reviews', false, false, false, true]
                ].map(([feature, amp, codeSearch, deepSearch, enterprise], index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-6 font-medium">{feature}</td>
                    <td className="text-center p-6">
                      {amp ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="text-center p-6">
                      {codeSearch ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="text-center p-6">
                      {deepSearch ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="text-center p-6">
                      {enterprise ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Developer Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by developers worldwide
            </h2>
            <p className="text-lg text-[--foreground-muted] max-w-2xl mx-auto">
              See what developers are saying about how our tools have transformed their coding experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[--primary] mb-4 opacity-50" />
                <p className="text-lg mb-6 leading-relaxed">
                  &ldquo;Amp has completely changed how I code. The AI suggestions are incredibly accurate and save me hours every day. It&apos;s like having a senior developer pair programming with me.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    J
                  </div>
                  <div>
                    <p className="font-semibold">Jordan Lee</p>
                    <p className="text-sm text-[--foreground-muted]">Full Stack Developer at TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[--primary] mb-4 opacity-50" />
                <p className="text-lg mb-6 leading-relaxed">
                  &ldquo;Code Search has revolutionized how our team navigates our massive codebase. Finding functions and patterns that used to take hours now takes seconds. Game changer.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    P
                  </div>
                  <div>
                    <p className="font-semibold">Priya Sharma</p>
                    <p className="text-sm text-[--foreground-muted]">Engineering Manager at DataFlow</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[--primary] mb-4 opacity-50" />
                <p className="text-lg mb-6 leading-relaxed">
                  &ldquo;The semantic search capabilities are mind-blowing. I can describe what I&apos;m looking for in plain English and it finds exactly the code patterns I need, even across different languages.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    R
                  </div>
                  <div>
                    <p className="font-semibold">Robert Chen</p>
                    <p className="text-sm text-[--foreground-muted]">Senior Backend Engineer at CloudScale</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="section bg-gradient-hero text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your development workflow?
            </h2>
            <p className="text-xl mb-12 text-gray-300 text-balance">
              Choose your path to get started with Sourcegraph&apos;s developer tools. From individual productivity to enterprise-scale solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Download className="h-12 w-12 text-white mx-auto mb-4" />
                  <CardTitle className="mb-3 text-white">Download Amp</CardTitle>
                  <CardDescription className="text-gray-300 mb-6">
                    Get started with AI-powered coding assistance in minutes. Free for individual developers.
                  </CardDescription>
                  <a href={getDownloadLink()} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" className="w-full bg-white text-[--primary] hover:bg-gray-100">
                      {getDownloadText()}
                      <Download className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-white mx-auto mb-4" />
                  <CardTitle className="mb-3 text-white">Enterprise Demo</CardTitle>
                  <CardDescription className="text-gray-300 mb-6">
                    See how our enterprise tools can scale with your team and security requirements.
                  </CardDescription>
                  <a href="https://sourcegraph.com/demo" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="lg" className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30">
                      Request demo
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Globe className="h-12 w-12 text-white mx-auto mb-4" />
                  <CardTitle className="mb-3 text-white">Documentation</CardTitle>
                  <CardDescription className="text-gray-300 mb-6">
                    Explore comprehensive guides, tutorials, and API documentation to get the most out of our tools.
                  </CardDescription>
                  <a href="https://docs.sourcegraph.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="lg" className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30">
                      View docs
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-300 mb-4">Questions about our products or need help getting started?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:product@sourcegraph.com">
                  <Button variant="ghost" className="text-white hover:bg-white/10">
                    Contact product team
                  </Button>
                </a>
                <a href="https://discord.gg/sourcegraph" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="text-white hover:bg-white/10">
                    Join our Discord
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
