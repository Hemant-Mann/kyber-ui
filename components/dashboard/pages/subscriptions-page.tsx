import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function SummaryCard({ title, value, meta }: { title: string; value: string; meta: string }) {
  return (
    <Card className="page-stat-card">
      <h4>{title}</h4>
      <strong>{value}</strong>
      <p>{meta}</p>
    </Card>
  );
}

function TableRow() {
  return (
    <div className="sub-row">
      <div className="sub-service">
        <div className="service-logo" />
        <div>
          <strong>Vercel Pro</strong>
          <p>Developer Tools</p>
        </div>
      </div>
      <span>Me</span>
      <span>•••• 1001</span>
      <span>$20.00 / Monthly</span>
      <span className="status-pill status-pill--red">Due soon</span>
    </div>
  );
}

export function SubscriptionsPage({ onAdd }: { onAdd: () => void }) {
  return (
    <section className="page-section fade-up">
      <header className="page-head">
        <div>
          <h1>My Subscriptions</h1>
          <p>Manage and track all your recurring payments in one place</p>
        </div>
        <Button onClick={onAdd}>Add Subscription</Button>
      </header>

      <div className="sub-controls">
        <div className="sub-left-controls">
          <div className="segmented">
            <button type="button" className="is-active">List</button>
            <button type="button">Calendar</button>
            <button type="button">Grid</button>
          </div>
          <div className="sub-select">View: <strong>As Billed</strong> <span>⌄</span></div>
        </div>
        <div className="inline-actions">
          <Button variant="secondary">Import</Button>
          <Button variant="secondary">Export</Button>
          <Button variant="secondary">Share</Button>
        </div>
      </div>

      <div className="optimization-banner">
        <p>
          Found <strong>5 optimization opportunities</strong> • <span>↘ Save up to $73.24/mo</span>
        </p>
        <Button variant="secondary">Review</Button>
      </div>

      <section className="page-stat-grid">
        <SummaryCard title="Recurring Spend (Monthlyized)" value="$246.22" meta="22 active subscriptions · monthlyized" />
        <SummaryCard title="Lifetime Purchases" value="$0.00" meta="0 lifetime purchases" />
        <SummaryCard title="Active Subscriptions" value="22" meta="23 total" />
        <SummaryCard title="Upcoming Renewals" value="3" meta="Due in the next 7 days" />
      </section>

      <Card className="sub-table-shell">
        <div className="sub-table-head">
          <div className="sub-search">Search subscriptions...</div>
          <div className="inline-actions">
            <Button variant="secondary">Filters</Button>
            <Button variant="secondary">Settings</Button>
          </div>
        </div>

        <div className="sub-table-labels">
          <span>Service</span>
          <span>Family Member</span>
          <span>Payment</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        <TableRow />
      </Card>
    </section>
  );
}
