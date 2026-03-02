// ABOUTME: Tests for the ProjectCard component used on the Projects page.
// ABOUTME: Verifies rendering of project name, description, and tech stack.

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectGrid, ProjectCard } from '../project-card';

describe('ProjectCard', () => {
  it('renders project name as a heading', () => {
    render(
      <ProjectGrid>
        <ProjectCard
          name="Weekly Meals"
          description="Automated meal planner"
          stack="Notion API · AI · Python"
        />
      </ProjectGrid>
    );
    const heading = screen.getByText('Weekly Meals');
    expect(heading.tagName).toBe('H3');
  });

  it('renders description text', () => {
    render(
      <ProjectGrid>
        <ProjectCard
          name="Weekly Meals"
          description="Automated meal planner"
          stack="Notion API · AI · Python"
        />
      </ProjectGrid>
    );
    expect(screen.getByText('Automated meal planner')).toBeDefined();
  });

  it('renders tech stack', () => {
    render(
      <ProjectGrid>
        <ProjectCard
          name="Weekly Meals"
          description="Automated meal planner"
          stack="Notion API · AI · Python"
        />
      </ProjectGrid>
    );
    expect(screen.getByText('Notion API · AI · Python')).toBeDefined();
  });

  it('renders multiple project cards', () => {
    render(
      <ProjectGrid>
        <ProjectCard name="Project A" description="Desc A" stack="Tech A" />
        <ProjectCard name="Project B" description="Desc B" stack="Tech B" />
        <ProjectCard name="Project C" description="Desc C" stack="Tech C" />
      </ProjectGrid>
    );
    expect(screen.getByText('Project A')).toBeDefined();
    expect(screen.getByText('Project B')).toBeDefined();
    expect(screen.getByText('Project C')).toBeDefined();
  });

  it('renders stack in a smaller text element', () => {
    render(
      <ProjectGrid>
        <ProjectCard
          name="Creative Renamer"
          description="Google Drive automation"
          stack="Google Apps Script · Drive API"
        />
      </ProjectGrid>
    );
    const stackEl = screen.getByText('Google Apps Script · Drive API');
    expect(stackEl.classList.contains('text-xs')).toBe(true);
  });
});
