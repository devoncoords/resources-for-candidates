import Link from 'next/link';
import { ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';

const footerNavigation = {
  main: [
    { name: 'Interview Prep', href: '/interview-prep' },
    { name: 'Culture & Values', href: '/culture' },
    { name: 'Our Products', href: '/products' },
    { name: 'Benefits', href: '/benefits' },
    { name: 'Resources', href: '/resources' },
  ],
  company: [
    { name: 'About', href: 'https://sourcegraph.com/about' },
    { name: 'Careers', href: 'https://sourcegraph.com/careers' },
    { name: 'Blog', href: 'https://sourcegraph.com/blog' },
    { name: 'Contact', href: 'https://sourcegraph.com/contact' },
  ],
  product: [
    { name: 'Amp', href: 'https://ampcode.com' },
    { name: 'Code Search', href: 'https://sourcegraph.com/code-search' },
    { name: 'Enterprise AI', href: 'https://sourcegraph.com/enterprise-ai' },
    { name: 'Deep Search', href: 'https://sourcegraph.com/deep-search' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/sourcegraph',
      icon: Github,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/sourcegraph',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/sourcegraph',
      icon: Linkedin,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[--background-dark] text-[--foreground-dark]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[--primary] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Sourcegraph</span>
            </Link>
            <p className="text-sm leading-6 text-[--foreground-muted-dark] max-w-md">
              Join us in building the future of software development. We&apos;re creating tools that help developers code, explore, and understand their software better.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[--foreground-muted-dark] hover:text-[--foreground-dark] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Interview Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-[--foreground-muted-dark] hover:text-[--foreground-dark] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-[--foreground-muted-dark] hover:text-[--foreground-dark] transition-colors inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                        <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Products</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-[--foreground-muted-dark] hover:text-[--foreground-dark] transition-colors inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                        <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-[--border-dark] pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-[--foreground-muted-dark]">
            &copy; 2025 Sourcegraph, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
