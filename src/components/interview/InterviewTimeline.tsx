'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ChevronDown, ChevronRight, Clock, CheckCircle, Lightbulb, HelpCircle, Target } from 'lucide-react';

interface InterviewStage {
  id: string;
  title: string;
  duration: string;
  description: string;
  whatToExpect: string[];
  howToPrepare: string[];
  exampleQuestions?: string[];
  tips: string[];
}

interface InterviewTimelineProps {
  stages: InterviewStage[];
}

interface AccordionSectionProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionSection({ title, icon, items, isOpen, onToggle }: AccordionSectionProps) {
  return (
    <div className="border border-[--border] rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-[--background-secondary] hover:bg-[--border] transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-medium text-left">{title}</span>
        </div>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-[--foreground-muted]" />
        ) : (
          <ChevronRight className="h-5 w-5 text-[--foreground-muted]" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-[--card]">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[--primary] rounded-full mt-2 flex-shrink-0" />
                <span className="text-[--foreground-muted] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function InterviewStageCard({ stage, isLast }: { stage: InterviewStage; isLast: boolean }) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = [
    {
      key: 'expect',
      title: 'What to Expect',
      icon: <CheckCircle className="h-5 w-5 text-[--primary]" />,
      items: stage.whatToExpect
    },
    {
      key: 'prepare',
      title: 'How to Prepare',
      icon: <Target className="h-5 w-5 text-[--accent]" />,
      items: stage.howToPrepare
    },
    ...(stage.exampleQuestions ? [{
      key: 'questions',
      title: 'Example Questions',
      icon: <HelpCircle className="h-5 w-5 text-[--primary]" />,
      items: stage.exampleQuestions
    }] : []),
    {
      key: 'tips',
      title: 'Tips for Success',
      icon: <Lightbulb className="h-5 w-5 text-yellow-500" />,
      items: stage.tips
    }
  ];

  return (
    <div className="relative">
      <Card className="relative z-10">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center text-white font-semibold">
                {stage.id === 'application' ? '1' :
                 stage.id === 'screening' ? '2' :
                 stage.id === 'technical' ? '3' :
                 stage.id === 'sales-presentation' ? '3' :
                 stage.id === 'functional' ? '3' :
                 stage.id === 'system-design' ? '4' :
                 stage.id === 'board-presentation' ? '3' :
                 stage.id === 'stakeholder-meetings' ? '4' :
                 stage.id === 'executive-screening' ? '2' :
                 stage.id === 'cultural-fit' ? '5' :
                 stage.id === 'final' ? '6' :
                 stage.id === 'ceo-final' ? '5' : '?'}
              </div>
              <div>
                <CardTitle className="text-xl">{stage.title}</CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="h-4 w-4 text-[--foreground-muted]" />
                  <span className="text-sm text-[--foreground-muted]">{stage.duration}</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[--foreground-muted] leading-relaxed">
            {stage.description}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {sections.map((section) => (
            <AccordionSection
              key={section.key}
              title={section.title}
              icon={section.icon}
              items={section.items}
              isOpen={openSections[section.key] || false}
              onToggle={() => toggleSection(section.key)}
            />
          ))}
        </CardContent>
      </Card>
      
      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute left-9 top-full w-0.5 h-8 bg-[--border] z-0" />
      )}
    </div>
  );
}

export function InterviewTimeline({ stages }: InterviewTimelineProps) {
  return (
    <div className="space-y-8">
      {stages.map((stage, index) => (
        <InterviewStageCard 
          key={stage.id} 
          stage={stage} 
          isLast={index === stages.length - 1}
        />
      ))}
    </div>
  );
}
