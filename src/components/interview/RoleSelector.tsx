'use client';

import { Code, TrendingUp, Users, Crown } from 'lucide-react';

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

interface RoleData {
  title: string;
  description: string;
  stages: InterviewStage[];
}

type RoleKey = 'engineering' | 'sales' | 'general' | 'executive';

interface RoleSelectorProps {
  roles: RoleKey[];
  activeRole: RoleKey;
  onRoleChange: (role: RoleKey) => void;
  roleData: Record<RoleKey, RoleData>;
}

const roleIcons: Record<string, React.ReactNode> = {
  engineering: <Code className="h-5 w-5" />,
  sales: <TrendingUp className="h-5 w-5" />,
  general: <Users className="h-5 w-5" />,
  executive: <Crown className="h-5 w-5" />,
};

const roleLabels: Record<string, string> = {
  engineering: 'Engineering',
  sales: 'Sales', 
  general: 'General & Admin',
  executive: 'Executive',
};

export function RoleSelector({ roles, activeRole, onRoleChange, roleData }: RoleSelectorProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Choose Your Role Track
        </h2>
        <p className="text-lg text-[--foreground-muted]">
          Different roles have tailored interview processes. Select yours to see the specific journey.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 p-1 bg-[--background-secondary] rounded-lg">
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => onRoleChange(role)}
            className={`
              flex items-center gap-2 px-4 py-3 rounded-md font-medium transition-all duration-200
              ${activeRole === role 
                ? 'bg-[--primary] text-white shadow-sm' 
                : 'text-[--foreground-muted] hover:text-[--foreground] hover:bg-white/50'
              }
            `}
          >
            {roleIcons[role]}
            <span className="whitespace-nowrap">{roleLabels[role]}</span>
          </button>
        ))}
      </div>

      {/* Role Description */}
      <div className="text-center bg-[--card] border border-[--border] rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">
          {roleData[activeRole].title} Track
        </h3>
        <p className="text-[--foreground-muted] leading-relaxed">
          {roleData[activeRole].description}
        </p>
      </div>
    </div>
  );
}
