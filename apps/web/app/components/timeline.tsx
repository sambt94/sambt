// ABOUTME: Timeline component for displaying professional experience entries.
// ABOUTME: Supports nested sub-entries for consulting/umbrella roles.

interface TimelineEntryProps {
  date: string;
  title: string;
  company: string;
  description?: string;
  children: React.ReactNode;
}

interface TimelineSubEntryProps {
  name: string;
  date: string;
  children: React.ReactNode;
}

export function Timeline({ children }: { children: React.ReactNode }) {
  return <div className="space-y-lg">{children}</div>;
}

export function TimelineEntry({ date, title, company, description, children }: TimelineEntryProps) {
  return (
    <div className="pb-lg border-b border-border last:border-b-0">
      <p className="text-xs text-faint tracking-wide mb-xs">{date}</p>
      <h3 className="text-copy text-[0.9375rem] font-normal leading-snug">
        {title} <span className="text-muted">·</span> <span className="text-muted">{company}</span>
      </h3>
      {description && <p className="text-sm text-muted leading-relaxed mt-sm">{description}</p>}
      <ul className="mt-sm space-y-xs text-sm text-muted leading-relaxed list-none">{children}</ul>
    </div>
  );
}

export function TimelineSubEntry({ name, date, children }: TimelineSubEntryProps) {
  return (
    <li className="mt-md pl-md border-l border-border">
      <p className="text-copy text-sm font-normal">
        {name} <span className="text-faint text-xs">({date})</span>
      </p>
      <ul className="mt-xs space-y-xs text-sm text-muted leading-relaxed list-none">{children}</ul>
    </li>
  );
}
