# NextJS App 05

Next.js **14.2.0** with Pages Router - full migration needed.

## Current Version
- **Next.js**: 14.2.0
- **React**: 18.3.0

## Breaking Changes for Next.js 15

### 1. Full App Router Migration (PRIMARY ISSUE)
- Still uses Pages Router despite being on 14.2
- Need complete migration to App Router for Next.js 15
- Mixed patterns (old Link, Head component, Pages Router)

### 2. Component Updates
- Link components need updating (remove `<a>` children)
- Head component needs conversion to metadata export
- Image component may need prop updates

## Installation
```bash
npm install
```

Part of **Exit Criteria Scenario 2** - Repo 5 of 10
