'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { 
  Heart, 
  DollarSign, 
  Clock, 
  GraduationCap, 
  Home, 
  Baby,
  Globe,
  Users,
  Gift,
  Trophy,
  ChevronDown,
  ChevronUp,
  Calculator,
  ExternalLink,
  Mail,
  MapPin,
  TrendingUp,
  Shield,
  ArrowRight
} from 'lucide-react';

// Types for the equity calculator
interface EquityCalculation {
  shares: number;
  strikePrice: number;
  currentValue: number;
  totalValue: number;
  profit: number;
}

// FAQ Data
const faqData = [
  {
    question: "When do my benefits start?",
    answer: "Most benefits begin on your first day of employment, including health insurance, 401k eligibility, and unlimited PTO. Some benefits like equity vesting have specific timelines outlined in your offer."
  },
  {
    question: "How does the equity program work?",
    answer: "Sourcegraph offers equity compensation through stock options or RSUs depending on your role and level. Options typically vest over 4 years with a 1-year cliff. We provide regular education sessions and use Carta for equity management."
  },
  {
    question: "What&apos;s covered under the health insurance?",
    answer: "We offer comprehensive medical, dental, and vision coverage with multiple plan options. Sourcegraph covers 100% of employee premiums and 80% of dependent premiums for our base plans."
  },
  {
    question: "Can I work from anywhere?",
    answer: "Yes! We&apos;re remote-first with teammates across the globe. We provide home office stipends and co-working allowances. Some roles may have timezone preferences for team collaboration."
  },
  {
    question: "What&apos;s the parental leave policy?",
    answer: "We offer 16 weeks of fully paid parental leave for all new parents (birth, adoption, or fostering). We also provide gradual return-to-work options and ongoing family support."
  },
  {
    question: "How much is the learning budget?",
    answer: "Each employee receives $1,000 annually for professional development, including courses, books, conferences, and certifications. Additional budget may be available for role-specific training."
  }
];

// Benefits data
const benefitsCategories = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive coverage for you and your family",
    benefits: [
      "100% covered medical premiums (80% for dependents)",
      "Dental and vision insurance",
      "Mental health support through Modern Health",
      "Annual wellness stipend",
      "HSA with company contribution"
    ],
    color: "bg-red-100 text-red-600"
  },
  {
    icon: DollarSign,
    title: "Financial",
    description: "Build your financial future with us",
    benefits: [
      "Competitive salary with transparent bands",
      "401k with 6% company match",
      "Equity compensation (options or RSUs)",
      "Life and disability insurance",
      "Commuter benefits"
    ],
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Time to recharge and pursue what matters",
    benefits: [
      "Unlimited PTO with 2-week minimum",
      "Flexible working hours",
      "3-month sabbatical after 4 years",
      "Company holidays plus floating days",
      "No meeting Fridays"
    ],
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Invest in your growth and learning",
    benefits: [
      "$1,000 annual learning budget",
      "Conference attendance support",
      "Internal mentorship programs",
      "Skills-based workshops",
      "Certification reimbursement"
    ],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Home,
    title: "Remote Work Support",
    description: "Everything you need to work from anywhere",
    benefits: [
      "$1,200 home office setup stipend",
      "$200/month co-working allowance",
      "High-end laptop and equipment",
      "Internet reimbursement",
      "Ergonomic accessories"
    ],
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Baby,
    title: "Family Benefits",
    description: "Support for all stages of life",
    benefits: [
      "16 weeks paid parental leave",
      "Adoption and fertility assistance",
      "Dependent care FSA",
      "Backup childcare services",
      "Family planning support"
    ],
    color: "bg-pink-100 text-pink-600"
  }
];

const perks = [
  {
    icon: Globe,
    title: "Global Retreats",
    description: "Annual company-wide gatherings in amazing locations"
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regular team building and social activities"
  },
  {
    icon: Gift,
    title: "Sourcegraph Swag",
    description: "High-quality branded gear and welcome packages"
  },
  {
    icon: Trophy,
    title: "Recognition Programs",
    description: "Peer nominations and achievement celebrations"
  }
];

// Component for collapsible FAQ items
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[--border] rounded-lg">
      <button
        className="w-full p-6 text-left flex justify-between items-center hover:bg-[--background-secondary] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[--foreground-muted]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[--foreground-muted]" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-[--foreground-muted] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

// Equity Calculator Component
function EquityCalculator() {
  const [shares, setShares] = useState(1000);
  const [strikePrice, setStrikePrice] = useState(10);
  const [currentValue, setCurrentValue] = useState(50);

  const calculation: EquityCalculation = {
    shares,
    strikePrice,
    currentValue,
    totalValue: shares * currentValue,
    profit: shares * (currentValue - strikePrice)
  };

  return (
    <div className="bg-gradient-accent p-8 rounded-lg text-white">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 mr-3" />
        <h3 className="text-xl font-bold">Equity Calculator</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Number of Shares</label>
          <input
            type="number"
            value={shares}
            onChange={(e) => setShares(Number(e.target.value))}
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
            placeholder="1000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Strike Price ($)</label>
          <input
            type="number"
            value={strikePrice}
            onChange={(e) => setStrikePrice(Number(e.target.value))}
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
            placeholder="10"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Current Value ($)</label>
          <input
            type="number"
            value={currentValue}
            onChange={(e) => setCurrentValue(Number(e.target.value))}
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70"
            placeholder="50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 p-4 rounded-lg">
          <p className="text-sm opacity-90">Total Value</p>
          <p className="text-2xl font-bold">${calculation.totalValue.toLocaleString()}</p>
        </div>
        <div className="bg-white/10 p-4 rounded-lg">
          <p className="text-sm opacity-90">Potential Profit</p>
          <p className="text-2xl font-bold text-green-300">${calculation.profit.toLocaleString()}</p>
        </div>
      </div>

      <p className="text-sm opacity-75 mt-4">
        *This is a simplified calculation for educational purposes. Actual equity value depends on many factors including vesting schedule, taxes, and market conditions.
      </p>
    </div>
  );
}

export default function BenefitsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Benefits & Equity at Sourcegraph
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-balance">
              We invest in our people with comprehensive benefits, competitive equity, and perks that support your whole life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:benefits@sourcegraph.com">
                <Button size="xl" variant="primary" className="w-full sm:w-auto">
                  Contact Benefits Team
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://carta.com/learn" target="_blank" rel="noopener noreferrer">
                <Button size="xl" variant="secondary" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white/20 text-white">
                  Learn About Equity
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Categories */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Benefits Package
            </h2>
            <p className="text-lg text-[--foreground-muted] max-w-2xl mx-auto">
              From day one, you&apos;ll have access to benefits designed to support your health, wealth, and happiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mb-3">{category.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {category.description}
                    </CardDescription>
                  </div>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-[--foreground-muted]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equity Education Section */}
      <section className="section bg-[--background-secondary]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Understanding Your Equity
            </h2>
            <p className="text-lg text-[--foreground-muted] max-w-2xl mx-auto">
              Equity is a key part of your compensation at Sourcegraph. Here&apos;s what you need to know.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">What Equity Means at Sourcegraph</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ownership in Our Success</h4>
                    <p className="text-[--foreground-muted]">
                      Your equity represents real ownership in Sourcegraph. As the company grows and succeeds, so does the value of your equity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Long-term Incentive</h4>
                    <p className="text-[--foreground-muted]">
                      Equity vests over time (typically 4 years) to align your interests with the company&apos;s long-term success.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tax Considerations</h4>
                    <p className="text-[--foreground-muted]">
                      We provide education on tax implications and work with Carta to help you understand your options.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <EquityCalculator />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-[--primary] mr-3" />
                  <h3 className="text-xl font-bold">Stock Options</h3>
                </div>
                <p className="text-[--foreground-muted] mb-4">
                  The right to purchase company shares at a fixed price (strike price). Your profit is the difference between the strike price and the current value.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mr-3"></div>
                    Lower upfront cost
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mr-3"></div>
                    Higher potential upside
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mr-3"></div>
                    More complex tax treatment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[--primary] mr-3" />
                  <h3 className="text-xl font-bold">RSUs (Restricted Stock Units)</h3>
                </div>
                <p className="text-[--foreground-muted] mb-4">
                  Company shares granted directly to you that vest over time. You own the shares once they vest, regardless of purchase price.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mr-3"></div>
                    No purchase required
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mr-3"></div>
                    Simpler tax treatment
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mr-3"></div>
                    Guaranteed value when vested
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a href="https://carta.com/learn" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="primary">
                Learn More on Carta
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Perks Showcase */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Life at Sourcegraph
            </h2>
            <p className="text-lg text-[--foreground-muted] max-w-2xl mx-auto">
              Beyond competitive benefits, we create experiences that bring our team together and celebrate our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <perk.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{perk.title}</h3>
                  <p className="text-sm text-[--foreground-muted]">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits by Location */}
      <section className="section bg-[--background-secondary]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global Benefits
            </h2>
            <p className="text-lg text-[--foreground-muted] max-w-2xl mx-auto">
              We strive to provide competitive benefits regardless of where you&apos;re located, while complying with local regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-[--primary] mr-3" />
                  <h3 className="text-xl font-bold">United States</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[--foreground-muted]">Full health, dental, and vision coverage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[--foreground-muted]">401k with company matching</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[--foreground-muted]">Stock options and RSUs available</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[--foreground-muted]">State-compliant leave policies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-6 w-6 text-[--primary] mr-3" />
                  <h3 className="text-xl font-bold">International</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[--foreground-muted]">Competitive salary with equity participation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[--foreground-muted]">Health coverage or stipend equivalent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[--foreground-muted]">Local statutory benefits compliance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[--foreground-muted]">Same learning and remote work benefits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-[--foreground-muted] text-sm">
              Specific benefits may vary by location due to local laws and regulations. Our People team will provide detailed information for your location during the hiring process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[--foreground-muted] max-w-2xl mx-auto">
              Get answers to common questions about benefits, equity, and perks at Sourcegraph.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Benefits Team CTA */}
      <section className="section bg-[--background-secondary]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have More Questions?
            </h2>
            <p className="text-lg text-[--foreground-muted] mb-8 leading-relaxed">
              Our benefits team is here to help you understand your package and make the most of your benefits. 
              Don&apos;t hesitate to reach out with any questions about health insurance, equity, or any other benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:benefits@sourcegraph.com">
                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                  Contact Benefits Team
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/interview-prep">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Back to Interview Prep
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
