// ABOUTME: Projects page — showcases personal projects with descriptions and tech stacks.
// ABOUTME: Grid layout with 4 project cards, text-only design.

import type { MetaFunction } from '@remix-run/node';
import { PageContainer } from '~/components/layout';
import { PageHeader } from '~/components/page-header';
import { ProjectGrid, ProjectCard } from '~/components/project-card';
import { buildMeta } from '~/lib/seo';

export const meta: MetaFunction = () =>
  buildMeta({
    title: 'Projects',
    description: "Things I've built — from AI-powered tools to design systems and automations.",
    path: '/projects',
  });

export default function ProjectsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Things I've built."
        subtitle="Side projects, tools, and systems. Case studies coming soon."
      />

      <ProjectGrid>
        <ProjectCard
          name="Making Data Accessible"
          description="Connected AI to read-only databases through Model Context Protocol. Ask questions in plain English and get real answers back. Generate visualisations from live data. Build SQL queries for persistent dashboards."
          stack="Model Context Protocol · SQL · AI"
        />
        <ProjectCard
          name="Modular Email Design System"
          description="Built a code-first email design system with AI. 20+ responsive HTML components that work across every major email client. Solved the problem of email builders being terrible without writing raw HTML from scratch."
          stack="AI · HTML Email · CSS"
        />
        <ProjectCard
          name="Weekly Meal Planner"
          description="A meal planning system connecting Notion, recipe scraping, and AI. Generates weekly plans, builds shopping lists, and gets used every single week."
          stack="Notion API · AI · MCP · Python"
        />
        <ProjectCard
          name="Automated File Namer"
          description="A Google Apps Script that monitors nested Drive folders and auto-renames files based on folder structure. Built to solve a real production workflow problem. Runs daily, zero maintenance."
          stack="Google Apps Script · Drive API"
        />
      </ProjectGrid>
    </PageContainer>
  );
}
