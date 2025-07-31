import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Clock, Play, FileText, Headphones, BookOpen } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'Blog' | 'Podcast' | 'Video' | 'PDF' | 'Guide';
  url: string;
  duration?: string;
  readTime?: string;
  topics: string[];
  thumbnail?: string;
  isFeatured?: boolean;
  publishedAt: string;
  popularity: number;
}

interface ResourceCardProps {
  resource: Resource;
}

const typeIcons = {
  Blog: FileText,
  Podcast: Headphones,
  Video: Play,
  PDF: FileText,
  Guide: BookOpen,
};

const typeColors = {
  Blog: 'bg-blue-50 text-blue-700 border-blue-200',
  Podcast: 'bg-purple-50 text-purple-700 border-purple-200',
  Video: 'bg-red-50 text-red-700 border-red-200',
  PDF: 'bg-green-50 text-green-700 border-green-200',
  Guide: 'bg-orange-50 text-orange-700 border-orange-200',
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = typeIcons[resource.type];
  const isExternal = resource.url.startsWith('http');
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:border-[--primary] h-full flex flex-col">
      <CardContent className="p-0 flex-1 flex flex-col">
        {/* Thumbnail */}
        <div className="aspect-video w-full overflow-hidden rounded-t-[--border-radius-lg] bg-gradient-to-br from-[--primary] to-[--accent] relative">
          {resource.thumbnail ? (
            <Image
              src={resource.thumbnail}
              alt={resource.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              <Icon className="w-8 h-8" />
            </div>
          )}
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          {/* Type and Duration */}
          <div className="flex items-center justify-between mb-3">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${typeColors[resource.type]}`}>
              <Icon className="w-3 h-3 mr-1" />
              {resource.type}
            </span>
            {(resource.duration || resource.readTime) && (
              <span className="flex items-center text-xs text-[--foreground-muted]">
                <Clock className="w-3 h-3 mr-1" />
                {resource.duration || resource.readTime}
              </span>
            )}
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-semibold text-[--foreground] mb-2 group-hover:text-[--primary] transition-colors line-clamp-2">
            {resource.title}
          </h3>
          
          {/* Description */}
          <p className="text-[--foreground-muted] text-sm mb-4 flex-1 line-clamp-3">
            {resource.description}
          </p>
          
          {/* Topics */}
          <div className="flex flex-wrap gap-1 mb-4">
            {resource.topics.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className="px-2 py-1 bg-[--background-secondary] text-xs text-[--foreground-muted] rounded-md"
              >
                {topic}
              </span>
            ))}
            {resource.topics.length > 3 && (
              <span className="px-2 py-1 bg-[--background-secondary] text-xs text-[--foreground-muted] rounded-md">
                +{resource.topics.length - 3} more
              </span>
            )}
          </div>
          
          {/* Link */}
          <div className="mt-auto">
            {isExternal ? (
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-[--primary] hover:text-[--primary-hover] transition-colors"
              >
                {resource.type === 'Blog' ? 'Read article' : 
                 resource.type === 'Podcast' ? 'Listen now' :
                 resource.type === 'Video' ? 'Watch video' : 'View resource'}
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            ) : (
              <Link
                href={resource.url}
                className="inline-flex items-center text-sm font-medium text-[--primary] hover:text-[--primary-hover] transition-colors"
              >
                {resource.type === 'Blog' ? 'Read article' : 
                 resource.type === 'Podcast' ? 'Listen now' :
                 resource.type === 'Video' ? 'Watch video' : 'View resource'}
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
