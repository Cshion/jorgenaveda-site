# Squad Team

> jorgenaveda-site

## Coordinator

| Name | Role | Notes |
|------|------|-------|
| Squad | Coordinator | Routes work, enforces handoffs and reviewer gates. |

## Members

| Name | Role | Charter | Status |
|------|------|---------|--------|
| Lead | Technical coordination and review | [Charter](agents/lead/charter.md) | Active |
| Frontend | Next.js, React and UI | [Charter](agents/frontend/charter.md) | Active |
| Tester | Tests and validation | [Charter](agents/tester/charter.md) | Active |
| Infra | Tooling and configuration | [Charter](agents/infra/charter.md) | Active |
| Scribe | Durable decisions and shared context | [Charter](agents/scribe/charter.md) | Built-in |
| Ralph | Work queue and backlog monitor | [Charter](agents/ralph/charter.md) | Built-in |
| Rai | Responsible AI and content safety | [Charter](agents/Rai/charter.md) | Built-in |
| Fact Checker | Verification and Devil's Advocate | [Charter](agents/fact-checker/charter.md) | Built-in |


## Coding Agent

<!-- copilot-auto-assign: false -->

| Name | Role | Charter | Status |
|------|------|---------|--------|
| @copilot | Coding Agent | — | 🤖 Coding Agent |

### Capabilities

**🟢 Good fit — auto-route when enabled:**
- Bug fixes with clear reproduction steps
- Test coverage (adding missing tests, fixing flaky tests)
- Lint/format fixes and code style cleanup
- Dependency updates and version bumps
- Small isolated features with clear specs
- Boilerplate/scaffolding generation
- Documentation fixes and README updates

**🟡 Needs review — route to @copilot but flag for squad member PR review:**
- Medium features with clear specs and acceptance criteria
- Refactoring with existing test coverage
- API endpoint additions following established patterns
- Migration scripts with well-defined schemas

**🔴 Not suitable — route to squad member instead:**
- Architecture decisions and system design
- Multi-system integration requiring coordination
- Ambiguous requirements needing clarification
- Security-critical changes (auth, encryption, access control)
- Performance-critical paths requiring benchmarking
- Changes requiring cross-team discussion

## Project Context

- **Project:** jorgenaveda-site
- **Created:** 2026-10-27
- **Stack:** Next.js, React, TypeScript, App Router, Tailwind CSS, ESLint and npm.
- **Frontend:** `frontend/`; official starter only. No backend or deployment configured.
- **Naming:** Approved descriptive roles, with the four standard built-ins.
