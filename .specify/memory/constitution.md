# [PROJECT_NAME] Constitution
# WeimWisdom SPA Constitution

## Core Principles

### I. Accessibility (NON-NEGOTIABLE)
All user-facing features MUST meet WCAG 2.1 AA accessibility standards. Every interactive element MUST be keyboard accessible, have clear focus states, and provide ARIA labels where needed. Accessibility tests MUST be written and pass before feature commits. Rationale: Ensures inclusivity and legal compliance.

### II. User Experience (UX)
Features MUST prioritize intuitive navigation, clear visual hierarchy, and responsive design. All user journeys MUST be independently testable and deliver value as MVP slices. Rationale: Maximizes usability and user satisfaction.

### III. Test-First Development (NON-NEGOTIABLE)
All features MUST have unit, integration, and end-to-end tests created and passing before implementation is committed. Red-Green-Refactor cycle strictly enforced. No code merges without passing tests. Rationale: Guarantees reliability and prevents regressions.

### IV. Performance
Site MUST meet performance targets: initial load <200ms p95, interactive within 1s, and handle 1000 concurrent users without degradation. Performance tests and metrics MUST be defined and measured for all critical user journeys. Rationale: Ensures fast, scalable experience.

### V. Security
All dependencies MUST be verified, up-to-date, and free from known vulnerabilities. Sensitive data MUST be protected, authentication enforced, and threat models documented. Security tests and compliance checks required for all features. Rationale: Protects users and site integrity.

### VI. Maintainability & Simplicity (MVP)
Code MUST be structured according to best development practices, with clear separation of concerns, modularity, and documentation. Features MUST be delivered as MVP increments, avoiding unnecessary complexity. Rationale: Enables easy maintenance and future growth.

### VII. Best Practices & Standards
All development MUST follow industry standards for web development, including code style, review, and deployment. Any new feature MUST have tests created and pass prior to commits. Rationale: Ensures consistency and quality.
## Additional Constraints & Standards
Technology stack: Modern SPA framework (e.g., React, Vue, Svelte). All packages MUST be verified and maintained. Compliance: All features MUST meet accessibility, security, and performance standards. Deployment: Automated CI/CD with test gates. Documentation: All code and features MUST be documented for maintainability.

## Development Workflow & Quality Gates
All code changes MUST undergo peer review, automated linting, and test verification. No feature merges without passing all tests and accessibility checks. Deployment approval requires compliance with all principles. Quality gates: test coverage, accessibility, performance, security, maintainability.

## Governance
This constitution supersedes all other practices. Amendments require documentation, approval, and migration plan. All PRs/reviews MUST verify compliance with principles. Complexity must be justified and documented. Use README.md and docs/quickstart.md for runtime guidance. Compliance reviews scheduled quarterly.

**Version**: 1.1.0 | **Ratified**: 2026-03-19 | **Last Amended**: 2026-03-19

<!--
Sync Impact Report
Version change: 1.0.0 → 1.1.0
Modified principles: All placeholders replaced, new principles added (Accessibility, UX, Performance, Security, Maintainability, Simplicity, Best Practices)
Added sections: Additional Constraints & Standards, Development Workflow & Quality Gates
Removed sections: None
Templates requiring updates: ✅ constitution-template.md, ✅ plan-template.md, ✅ spec-template.md, ✅ tasks-template.md, ✅ checklist.agent.md, ✅ specify.agent.md
Follow-up TODOs: None
-->
