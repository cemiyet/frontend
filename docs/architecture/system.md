# Frontend Architecture

Status: **Architecture ready; full FigCraft design required before product implementation.** All development context is local to this repository. Authority: [product scope](../planning/product-scope.md), [domain model](../domain/model.md), [vocabulary](../../GLOSSARY.md), [accepted roadmap](../planning/roadmap.md) and local ADRs. Shared records originate in `cemiyet/backend` and are supplied here as self-contained copies.

## Design before implementation

Complete the entire agreed M1–M8 interface/component design in FigCraft before product frontend code. Follow the [design plan](../design/plan.md), [coverage inventory](../design/screen-inventory.md) and [progress](../design/progress.md). Current state: not started; code gate closed. Task 01 produces design artifacts only. Task 18 implements the shell/components after the full gate; other implementation tasks also retain that prerequisite. Existing React/Vite shell stays intact.

The gate covers public/signed-in reader, club roles, author/publisher and authorized staff experiences, including later agreed capabilities. Record responsive/interaction states, tokens, masters/variants, prototypes and preview/handoff evidence. Conditional unapproved features are outside the gate. Backend development may proceed independently; design can use the local domain/contract requirements before endpoints are implemented.

## Code organization after the gate

Retain React/Vite/pnpm. Features follow reader tasks, not a backend module count. A book-details task can compose catalog, review and personal actions. App/pages compose feature interfaces rather than merging their data authority.

```
apps/web/src/app/                   # Routes/pages/composition
apps/web/src/features/<user-task>/
apps/web/src/features/<user-task>/index.ts
apps/web/src/shared/                # Technical helpers/i18n
packages/ui/src/index.ts            # Reusable presentation
packages/api-client/src/index.ts    # Add with actual reviewed OpenAPI
```

- Features expose deliberate public entries; app/pages compose them. Features do not import another feature's implementation.
- Technical shared code has no feature dependency. Reusable UI has no product/API dependency; the API client has no app/UI dependency.
- API DTOs are transport contracts, not backend aggregate copies. Add reusable product presentation only when real consumers justify an explicit interface.
- Keep local state near its reader task. Persist online-first, preserve drafts and represent pending/failure/conflict truthfully. Isolate owner-specific cached data and clear it on logout/deletion/expiry.
- TR/EN, responsive layouts, semantic controls, focus/keyboard behavior and an accessibility review target of WCAG 2.2 AA are reflected in FigCraft and verified with real UI later.

## Backend interface ownership

The frontend may compose these owners through the API client; it cannot redefine their invariants or use cached permission as authority.

| Owner           | Frontend meaning                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Accounts        | Authentication/profile/representation associations, sessions and account erasure receipts.                               |
| Catalog         | Work/Edition/series/adaptation, private provisional identity, contributions/reconciliation and contribution recognition. |
| Library         | Saved lists/ownership/optional copies/loans; no reading prerequisite.                                                    |
| Reading         | Intention, independent journeys/progress/notes, personal goals/statistics/summaries; no saved/owned-book prerequisite.   |
| Reviews         | Explicit public reviews and one current account/Work rating.                                                             |
| Clubs           | Admission/membership/roles, shared reading, free events and archive/handover.                                            |
| Social          | Follows/blocks, deliberate sharing, chronological feed and contextual conversation.                                      |
| Moderation      | Scoped cases/reasons/sanctions/appeals; not private-data browsing or account-erasure ownership.                          |
| Portability     | Export packages and reviewed import batches/row receipts; no silent overwrite.                                           |
| Discovery       | Search/browse and later controllable personalized recommendations.                                                       |
| Notifications   | Grouped inbox/delivery preferences; security email is distinct.                                                          |
| Media           | Bounded asset upload/processing and current source-authorized delivery.                                                  |
| Challenges (M8) | Shared campaign rules/participation; distinct from private goals and Catalog recognition.                                |

Important UX constraints: private defaults and deliberate publication; accepted/provisional identity distinction; optional copy/progress detail; partial dates; independent rereads/current score; source-authorized club access; explicit import confirmation and recoverable partial success. Roles/verified author status never imply control over others' reviews or private data.

Use same-origin cookie-based browser authentication with CSRF support from the actual backend. Do not store long-lived browser bearer tokens. Provider linking is deliberate; matching emails do not merge accounts. The desired pre-external-user package is Google/Microsoft/Facebook; Apple remains conditional. Current source permission governs hidden/removed content even when old feed/inbox/search data is cached. UI affordances supplement server authorization.

## Verification and handoff

After complete design, implement architecture checks against real imports/public entries/directions/cycles, including aliases, type-only/lazy imports and source coverage. Add meaningful behavior/accessibility/integration checks with each capability:

- Verify permitted imports and rejected deep/cyclic/invalid-direction imports against all intended source files.
- Exercise session/CSRF handling, owner-specific draft cleanup/recovery and current permission revocation against actual endpoints.
- Preserve partial dates, explicit reread/current-rating intent and recoverable import/export/deletion states.
- Verify keyboard/focus, screen-reader and responsive behavior against the completed FigCraft design. Design plans and shell builds do not prove implemented product behavior.

Required local implementation references are in docs/, including shared domain/product records. The separate public documentation site is a publication target, not a frontend development dependency. Counterpart backend tasks are named by repository/task ID; actual endpoint contracts/results are required for integration acceptance, but an adjacent checkout is not required to read this documentation.
