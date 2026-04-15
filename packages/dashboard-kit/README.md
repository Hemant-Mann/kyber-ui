# @kyber/dashboard-kit

Reusable dashboard layout and navigation primitives for Next.js apps.

## Install (workspace)

Add to root workspaces and consume as dependency:

```json
{
  "workspaces": ["packages/*"],
  "dependencies": {
    "@kyber/dashboard-kit": "workspace:*"
  }
}
```

## Import

```tsx
import "@kyber/dashboard-kit/styles.css";
import { DashboardFrame, SidebarNav, DashboardTopbar } from "@kyber/dashboard-kit";
```

## Included UI

- Layout/navigation: `DashboardFrame`, `SidebarNav`, `DashboardTopbar`
- Common content: `PageHeader`, `StatCard`, `SpendingTrendChart`
- Primitives: `Button`, `Card`, `Input`, `Textarea`, `Select`, `MultiSelect`
- Data display: `Table`, `TableHead`, `TableBody`, `TableRow`, `TableTh`, `TableTd`
- Feedback/overlay: `Alert`, `Tooltip`, `Popup`, `Drawer`

## CSS Isolation

- All package styles are scoped under `[data-kyber-kit]`.
- `DashboardFrame` automatically sets `data-kyber-kit` on the root shell.
- This prevents package classnames from leaking styles into host app DOM outside kit roots.

## Peer Dependencies

- `next >= 15`
- `react >= 19`
- `react-dom >= 19`
