---
status: accepted
---

# Reader-task features composed through public interfaces

Organize web features by reader tasks independently from backend module names/counts. Pages/app compose deliberate public feature interfaces; features do not import one another's implementations. A book-details task may consume catalog, review and personal-record endpoints without merging those backend owners. This trades composition wiring for local feature changes and avoids making the browser mirror persistence authority.

Reusable UI stays independent of app/business/data access; the API client stays independent of presentation. Backend remains permission authority. Add import/alias/type-only/lazy-loading/public-entry architecture tests with the real features and compiler, as the user requested. See the local [frontend architecture](../architecture/system.md) for the permitted dependency directions.

The 2026-11-09 user instruction additionally requires complete FigCraft design of the agreed interface/components before product frontend code. The local design plan/progress owns that gate; backend implementation may proceed independently.
