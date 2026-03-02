// ABOUTME: Project card component for displaying personal projects.
// ABOUTME: Bordered cards with hover-dim sibling effect in a grid layout.

interface ProjectCardProps {
  name: string;
  description: string;
  stack: string;
}

export function ProjectGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg hover-dim-group">{children}</div>;
}

export function ProjectCard({ name, description, stack }: ProjectCardProps) {
  return (
    <div className="flex flex-col p-md border border-border rounded-lg transition-colors duration-300 hover:border-faint">
      <h3 className="text-copy text-base font-normal mb-xs">{name}</h3>
      <p className="text-sm text-muted leading-relaxed flex-1 mb-xs">{description}</p>
      <p className="text-xs text-faint italic">{stack}</p>
    </div>
  );
}
