import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { BookOpen, Users, Zap, ArrowRight, Quote, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Interviewing at Sourcegraph? We&apos;ve got you covered.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[--vermilion-08] text-balance">
              Everything you need to succeed in your interview journey with comprehensive preparation resources, cultural insights, and hands-on experience with our tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/interview-prep">
                <Button size="xl" variant="primary" className="w-full sm:w-auto">
                  Start your prep
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://ampcode.com" target="_blank" rel="noopener noreferrer">
                <Button size="xl" variant="secondary" className="w-full sm:w-auto bg-[--vermilion-08]/20 hover:bg-[--vermilion-08]/30 border-[--vermilion-08]/40 text-[--vermilion-11]">
                  Download Amp
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="section bg-[--background-secondary]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-[--foreground-muted] max-w-2xl mx-auto">
              Comprehensive resources designed to help you understand Sourcegraph, prepare for interviews, and experience our culture firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[--vermilion-07] rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-[--vermilion-11]" />
                  </div>
                  <CardTitle className="mb-3">Interview Preparation</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Detailed preparation guides, example questions, coding challenges, and insider tips to help you perform your best in technical and behavioral interviews.
                  </CardDescription>
                </div>
                <Link href="/interview-prep">
                  <Button variant="ghost" className="group-hover:text-[--vermilion-07] transition-colors">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[--vermilion-07] rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-[--vermilion-11]" />
                  </div>
                  <CardTitle className="mb-3">Company Culture</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Discover our values, mission, and what it&apos;s really like to work at Sourcegraph. Learn about our remote-first culture and collaborative environment.
                  </CardDescription>
                </div>
                <Link href="/culture">
                  <Button variant="ghost" className="group-hover:text-[--primary] transition-colors">
                    Explore culture
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="mb-3">Product Experience</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Try Amp and explore our developer tools firsthand. Get familiar with the products you&apos;ll be working on and see what makes them special.
                  </CardDescription>
                </div>
                <Link href="/products">
                  <Button variant="ghost" className="group-hover:text-[--primary] transition-colors">
                    Try our tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Employee Testimonials Carousel */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What our team says
            </h2>
            <p className="text-lg text-[--foreground-muted] max-w-2xl mx-auto">
              Hear from Sourcegraph employees about their interview experience and what it&apos;s like working here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-[--primary] mb-4 opacity-50" />
                <p className="text-lg mb-6 leading-relaxed">
                  &ldquo;The interview process was transparent and collaborative. I felt like I was already part of the team by the end of it. The focus on values alignment really showed me this was the right place for me.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Alex Chen</p>
                    <p className="text-sm text-[--foreground-muted]">Senior Software Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-[--primary] mb-4 opacity-50" />
                <p className="text-lg mb-6 leading-relaxed">
                  &ldquo;I appreciated how the technical interviews were realistic and relevant to the actual work. The team made me feel comfortable to ask questions and think out loud throughout the process.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    S
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Kim</p>
                    <p className="text-sm text-[--foreground-muted]">Product Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-[--primary] mb-4 opacity-50" />
                <p className="text-lg mb-6 leading-relaxed">
                  &ldquo;The culture fit conversations felt genuine and two-way. I got to learn as much about Sourcegraph as they learned about me. It set the foundation for a great working relationship.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    M
                  </div>
                  <div>
                    <p className="font-semibold">Marcus Johnson</p>
                    <p className="text-sm text-[--foreground-muted]">Engineering Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-[--background-secondary]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to join our team?
            </h2>
            <p className="text-lg text-[--foreground-muted] mb-8 leading-relaxed">
              Have questions about the interview process or want to learn more about specific roles? 
              We&apos;re here to help you succeed. Reach out to our recruiting team or connect with current employees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/interview-prep">
                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                  Start preparing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="mailto:recruiting@sourcegraph.com">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Contact recruiting
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
