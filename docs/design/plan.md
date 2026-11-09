# Full FigCraft Interface Design Gate

Status: **Required before product frontend implementation; not started.** User instruction: 2026-11-09. Backend may start independently. Keep the existing frontend shell intact while producing the design. The accepted M1–M8 capability/release order remains; this gate places complete interface design before frontend coding, not all capabilities into the first release.

## Inputs and authority

Use local [product scope](../planning/product-scope.md), [domain model](../domain/model.md), [shared roadmap](../planning/roadmap.md) and [architecture](../architecture/system.md). [Screen inventory](screen-inventory.md) lists the agreed capability coverage. [Progress](progress.md) records real artifact IDs, component links, prototypes and remaining gaps. Local task 01 owns this gate.

Design all agreed M1–M8 interfaces, including planned later-phase features. Private chat, billing, native apps/Apple login, automatic translation and other conditional/unapproved branches are not extra required screens. Represent their absence accurately. Future product changes update affected designs before implementation; completing this gate does not freeze the interface forever.

## Ordered work and evidence

| Step | Work                                                                                                                           | Completion evidence                                                                                                                                                              |
| ---- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D01  | Inventory users/roles, routes, flows, permission/state transitions and release labels.                                         | Every inventory row has entry/exit actions, role access and links to domain meaning; no missing agreed capability.                                                               |
| D02  | Define information architecture and navigation for public/signed-in reader, club roles, author/publisher and authorized staff. | Route/navigation map and key wireframes; reader-only use requires no club/follow/ownership.                                                                                      |
| D03  | Build reusable FigCraft foundations and component library.                                                                     | Named tokens/styles/variables, layout rules, component masters, variants and interaction states; component inventory has no unowned placeholders.                                |
| D04  | Compose all inventory screens for mobile and desktop with representative TR/EN content.                                        | FigCraft page/frame IDs for every flow/state; long labels/text, empty/loading/error/permission/partial-success states are covered.                                               |
| D05  | Connect interaction prototypes for critical journeys.                                                                          | Navigable prototypes cover personal flow, contribution/review, clubs/sharing/moderation, author/publisher, import/export/deletion and M8 sharing/discovery/challenges.           |
| D06  | Review consistency, roles, privacy, responsiveness and accessibility intent.                                                   | Recorded inspection/preview evidence; no unresolved critical usability/permission/data-loss contradiction; domain/source-owner behavior preserved.                               |
| D07  | Produce implementation handoff and open the code gate.                                                                         | Progress is complete with real artifact references, component-to-screen coverage, behavior/data requirements and local ticket mapping. Only then unblock implementation task 18. |

Record page/frame/component/prototype identifiers and export/preview evidence in this repository's docs/design records. FigCraft project data alone is insufficient as a resumable handoff. Do not invent identifiers or mark design complete from a written plan. This documentation change has not created a FigCraft design.

## Foundations and reusable components

Derive the final component inventory from the screens; the following are required coverage families, not a target component count:

- Foundations: semantic color/status tokens, type hierarchy, spacing/layout, responsive grids, focus, contrast, motion intent, icons and image treatment.
- Navigation/composition: desktop/mobile app shell, header/navigation, tabs/breadcrumbs, search/filter/sort/pagination, role-aware actions and organization context.
- Inputs/actions: buttons/links/icon actions, form fields, selection controls, partial-date entry, typed progress, half-star rating, uploads/evidence, ISBN scanning/fallback and validation.
- Feedback/containers: dialogs/drawers, menus, tooltips, alerts/toasts, loading/skeletons, empty/unavailable/denied states, pending/failed saves and recoverable drafts.
- Book/personal presentation: Work/Edition/adaptation/series display, private provisional status, covers, optional copy/loan detail, journey/intention controls, notes/quotations, lists, goal/statistic views.
- Social/collective presentation: audience picker, feed/activity, spoiler controls, review/thread/comment/basic like, membership/role/admission, shared reading/events, grouped notifications.
- Staff/transfer/growth presentation: contribution/claim evidence queues, merge/restriction/appeal status, import mapping/row preview/confirmation/results, export/erasure progress, challenge/recognition and summary preview/share.

For each final component record its purpose, master ID, variants/states, responsive behavior, keyboard/focus intent and consuming screens. Reuse masters across screens; explain intentional exceptions. Avoid drawing disconnected screen copies that cannot supply reusable implementation components.

## Completion gate

All screen-inventory rows must be designed with real frame references. Required foundations/components/variants and critical prototypes must be present. Review notes resolve critical gaps, and handoff data/action/permission requirements are recorded. Then update progress and task 01 completion, make task 18 ready and proceed with implementation prerequisites. Product code or reusable TSX components are not deliverables of this design task; the existing shell remains the baseline.
