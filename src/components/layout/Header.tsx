'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

const navigation = [
  { name: 'Interview Prep', href: '/interview-prep' },
  { name: 'Culture & Values', href: '/culture' },
  { name: 'Our Products', href: '/products' },
  { name: 'Benefits', href: '/benefits' },
  { name: 'Resources', href: '/resources' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[--background] border-b border-[--border] sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <nav className="container flex items-center justify-between py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Sourcegraph</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[--vermilion-07] rounded-lg flex items-center justify-center">
                <span className="text-[--vermilion-11] font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-[--foreground]">Sourcegraph</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
          <Link
          key={item.name}
          href={item.href}
          className="text-sm font-medium text-[--foreground] hover:text-[--vermilion-07] transition-colors"
          >
          {item.name}
          </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button
            variant="secondary"
            size="sm"
            asChild
          >
            <Link href="https://ampcode.com" target="_blank" rel="noopener noreferrer">
              Try Amp
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="primary"
            size="sm"
            asChild
          >
            <Link href="https://sourcegraph.com/contact/request-info" target="_blank" rel="noopener noreferrer">
              Contact Recruiting
            </Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[--background] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[--border]">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Sourcegraph</span>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[--vermilion-07] rounded-lg flex items-center justify-center">
                    <span className="text-[--vermilion-11] font-bold text-sm">S</span>
                  </div>
                  <span className="text-xl font-bold text-[--foreground]">Sourcegraph</span>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-[--border]">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[--foreground] hover:bg-[--background-secondary]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Button
                    variant="secondary"
                    className="w-full justify-center"
                    asChild
                  >
                    <Link href="https://ampcode.com" target="_blank" rel="noopener noreferrer">
                      Try Amp
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="primary"
                    className="w-full justify-center"
                    asChild
                  >
                    <Link href="https://sourcegraph.com/contact/request-info" target="_blank" rel="noopener noreferrer">
                      Contact Recruiting
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
