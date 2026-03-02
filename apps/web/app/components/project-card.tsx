// ABOUTME: Project card component for displaying personal projects.
// ABOUTME: Shows project name, description, and tech stack in a grid layout.

interface ProjectCardProps {
  name: string;
  description: string;
  stack: string;
}

export function ProjectGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">{children}</div>;
}

export function ProjectCard({ name, description, stack }: ProjectCardProps) {
  return (
    <div className="space-y-xs">
      <h3 className="text-copy text-sm font-medium">{name}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
      <p className="text-xs text-faint">{stack}</p>
    </div>
  );
}
