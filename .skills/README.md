# Agent Skills

This directory contains AI agent skills from [Vercel Labs](https://github.com/vercel-labs/agent-skills) that provide specialized instructions for code review and optimization.

## Available Skills

### 🚀 react-best-practices

React and Next.js performance optimization guidelines from Vercel Engineering. Contains 40+ rules across 8 categories.

**Use when:**
- Writing new React components or Next.js pages
- Implementing data fetching (client or server-side)
- Reviewing code for performance issues
- Optimizing bundle size or load times

**Categories:**
- Eliminating waterfalls (Critical)
- Bundle size optimization (Critical)
- Server-side performance (High)
- Client-side data fetching (Medium-High)
- Re-render optimization (Medium)
- Rendering performance (Medium)
- JavaScript micro-optimizations (Low-Medium)

### 🎨 web-design-guidelines

Review UI code for compliance with web interface best practices. Audits code for 100+ rules covering accessibility, performance, and UX.

**Use when:**
- Reviewing UI implementations
- Checking accessibility compliance
- Auditing design decisions
- Reviewing UX patterns
- Checking against best practices

**Categories:**
- Accessibility (aria-labels, semantic HTML)
- Focus States (keyboard navigation)
- Forms (validation, error handling)
- Animation (reduced-motion, performance)
- Typography (proper formatting)
- Images (optimization, alt text)
- Performance (lazy loading, virtualization)
- Navigation & State (URL management)
- Dark Mode & Theming
- Touch & Interaction
- Internationalization

## How AI Agents Use These

AI coding assistants (like Claude) can reference these skills when:

1. **Code Review**: "Review this component using react-best-practices"
2. **Performance Audit**: "Check this page for performance issues"
3. **Accessibility**: "Review accessibility of this form"
4. **Optimization**: "Help me optimize this Next.js page"

The skills provide structured guidelines that help ensure code follows industry best practices.

## Source

Skills sourced from: https://github.com/vercel-labs/agent-skills

License: MIT
