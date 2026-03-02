// ABOUTME: Dark/light theme toggle button with sun/moon icon.
// ABOUTME: Shows label on hover, positioned top-right with fade-in entrance.

import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === 'dark' ? '☀' : '☽';
  const label = theme === 'dark' ? 'prefer light?' : 'prefer dark?';

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-sm right-sm sm:top-md sm:right-md z-[101] flex items-center gap-2 text-xs text-muted cursor-pointer select-none group opacity-0 animate-fade-in"
      style={{ animationDelay: '1.2s' }}
      aria-label={label}
    >
      <span className="text-lg grayscale transition-transform duration-400 ease-smooth group-hover:scale-[1.2]">
        {icon}
      </span>
      <span className="font-sans tracking-wide opacity-0 translate-x-1 transition-all duration-300 ease-smooth group-hover:opacity-100 group-hover:translate-x-0">
        {label}
      </span>
    </button>
  );
}
