"use client";

import { useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Dialog,
  DropdownMenu,
  FormField,
  IconButton,
  Input,
  Label,
  MenuItem,
  MenuSeparator,
  Pagination,
  Radio,
  Skeleton,
  Switch,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  ToastProvider,
  Accordion,
  AccordionBody,
  DataTable,
  DatePicker,
  DateTimePicker,
  toast,
} from "@kyber/dashboard-kit";

export default function PrimitivesPage() {
  const [checked, setChecked] = useState(true);
  const [plan, setPlan] = useState("pro");
  const [page, setPage] = useState(4);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(new Date());

  const demoRows = Array.from({ length: 15 }, (_, idx) => ({
    id: `row-${idx + 1}`,
    name: `Operator ${idx + 1}`,
    tickets: 12 + idx,
    status: idx % 2 === 0 ? "active" : "pending",
  }));

  return (
    <div data-kyber-kit>
      <ToastProvider>
        <main style={{ padding: "2rem", display: "grid", gap: "1.25rem", maxWidth: 720 }}>
          <h1 style={{ margin: 0 }}>Kit Primitives</h1>

          <FormField label="Workspace Name" htmlFor="workspace-name" hint="Used in team invites">
            <Input id="workspace-name" defaultValue="Road Safety Ops" />
          </FormField>

          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
            <Checkbox id="email-alerts" checked={checked} onChange={(event) => setChecked(event.target.checked)} label="Email alerts" />
            <Switch id="daily-digest" checked={checked} onChange={(event) => setChecked(event.target.checked)} label="Daily digest" />
          </div>

          <div style={{ display: "grid", gap: "0.55rem" }}>
            <Label>Plan</Label>
            <Radio id="plan-pro" name="plan" value="pro" checked={plan === "pro"} onChange={(event) => setPlan(event.target.value)} label="Pro" />
            <Radio id="plan-enterprise" name="plan" value="enterprise" checked={plan === "enterprise"} onChange={(event) => setPlan(event.target.value)} label="Enterprise" />
          </div>

          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <Badge>Default</Badge>
            <Badge variant="success">Active</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="danger">Rejected</Badge>
          </div>

          <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
            <Avatar initials="RK" />
            <IconButton aria-label="Refresh data" icon="↻" variant="outline" />
            <DropdownMenu
              align="end"
              trigger={
                <Button type="button" variant="secondary">
                  Actions
                </Button>
              }
            >
              <MenuItem onClick={() => toast("Edit clicked")}>Edit</MenuItem>
              <MenuItem onClick={() => toast("Duplicate clicked")}>Duplicate</MenuItem>
              <MenuSeparator />
              <MenuItem onClick={() => toast({ title: "Deleted", tone: "danger" })}>Delete</MenuItem>
            </DropdownMenu>
            <Button type="button" variant="secondary" onClick={() => setDialogOpen(true)}>
              Open Dialog
            </Button>
            <Button type="button" onClick={() => toast({ title: "Saved", description: "User profile was updated", tone: "success" })}>
              Trigger Toast
            </Button>
          </div>

          <Tabs defaultValue="overview">
            <TabList>
              <Tab value="overview">Overview</Tab>
              <Tab value="members">Members</Tab>
              <Tab value="settings">Settings</Tab>
            </TabList>
            <TabPanel value="overview">Overview content panel</TabPanel>
            <TabPanel value="members">Members list panel</TabPanel>
            <TabPanel value="settings">Settings panel</TabPanel>
          </Tabs>

          <Pagination page={page} totalPages={12} onPageChange={setPage} />

          <div style={{ display: "grid", gap: "0.6rem", gridTemplateColumns: "1fr 1fr" }}>
            <DatePicker value={selectedDate} onChange={setSelectedDate} />
            <DateTimePicker value={selectedDateTime} onChange={setSelectedDateTime} />
          </div>

          <Accordion
            title="Quiz Section"
            defaultOpen
            actions={
              <>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
                <Button type="button">Save</Button>
              </>
            }
          >
            <AccordionBody>Accordion content body used for course/quiz management sections.</AccordionBody>
          </Accordion>

          <DataTable
            columns={[
              { header: "Name", accessorKey: "name", sortable: true },
              { header: "Tickets", accessorKey: "tickets", sortable: true },
              {
                header: "Status",
                accessorKey: "status",
                cell: (row) => <Badge variant={row.status === "active" ? "success" : "warning"}>{String(row.status)}</Badge>,
              },
            ]}
            rows={demoRows}
            rowKey={(row) => String(row.id)}
            pageSize={5}
          />

          <div style={{ display: "grid", gap: "0.45rem" }}>
            <Skeleton style={{ width: 220, height: 16 }} />
            <Skeleton style={{ width: "100%", height: 32 }} />
          </div>
        </main>

        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title="Archive this record?"
          description="This action can be reversed from the audit log."
          footer={
            <>
              <Button type="button" variant="secondary" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="button" onClick={() => setDialogOpen(false)}>
                Archive
              </Button>
            </>
          }
        />
      </ToastProvider>
    </div>
  );
}
