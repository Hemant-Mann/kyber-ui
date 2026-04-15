import { Button, Card, PageHeader, SpendingTrendChart, StatCard } from "@kyber/dashboard-kit";

export function AnalyticsPage() {
  return (
    <section className="page-section fade-up">
      <PageHeader title="Analytics" description="Insights and trends about your subscription spending" />

      <div className="analytics-filter-row">
        <div className="analytics-filter-left">
          <span>Filter by</span>
          <div className="analytics-select">All data <span>⌄</span></div>
        </div>

        <div className="inline-actions">
          <div className="segmented">
            <button type="button">3m</button>
            <button type="button" className="is-active">6m</button>
            <button type="button">12m</button>
          </div>
          <Button variant="secondary">Export Report</Button>
          <Button variant="secondary">Share</Button>
        </div>
      </div>

      <section className="page-stat-grid">
        <StatCard title="Monthly Total" value="$242.33" />
        <StatCard title="Yearly Projection" value="$2,907.90" />
        <StatCard title="Active Subs" value="22" />
        <StatCard title="Average Cost" value="$11.01" />
      </section>

      <Card className="analytics-card tall">
        <h3>Spending Trend</h3>
        <p>Monthly subscription spending over time</p>
        <SpendingTrendChart className="trend-chart" />
        <div className="trend-footer">
          <strong>Trending down this month ↘</strong>
          <span>Last 6 months</span>
        </div>
      </Card>
    </section>
  );
}
