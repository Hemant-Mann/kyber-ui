import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <Card className="page-stat-card">
      <h4>{title}</h4>
      <strong>{value}</strong>
    </Card>
  );
}

function TrendChart() {
  return (
    <div className="trend-chart">
      <div className="trend-y-axis">
        <span>$260</span>
        <span>$195</span>
        <span>$130</span>
        <span>$65</span>
        <span>$0</span>
      </div>
      <div className="trend-plot">
        <svg viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(181,123,37,0.28)" />
              <stop offset="100%" stopColor="rgba(181,123,37,0.03)" />
            </linearGradient>
          </defs>
          <path d="M0,20 C12,16 24,13 36,12 C48,11 60,9 72,8 C84,8 92,8 100,8 L100,40 L0,40 Z" fill="url(#trendFill)" />
          <path d="M0,20 C12,16 24,13 36,12 C48,11 60,9 72,8 C84,8 92,8 100,8" fill="none" stroke="#b57b25" strokeWidth="0.4" />
        </svg>
      </div>
      <div className="trend-x-axis">
        <span>Nov</span>
        <span>Dec</span>
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
      </div>
    </div>
  );
}

export function AnalyticsPage() {
  return (
    <section className="page-section fade-up">
      <header className="page-head">
        <div>
          <h1>Analytics</h1>
          <p>Insights and trends about your subscription spending</p>
        </div>
      </header>

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
        <Metric title="Monthly Total" value="$242.33" />
        <Metric title="Yearly Projection" value="$2,907.90" />
        <Metric title="Active Subs" value="22" />
        <Metric title="Average Cost" value="$11.01" />
      </section>

      <Card className="analytics-card tall">
        <h3>Spending Trend</h3>
        <p>Monthly subscription spending over time</p>
        <TrendChart />
        <div className="trend-footer">
          <strong>Trending down this month ↘</strong>
          <span>Last 6 months</span>
        </div>
      </Card>
    </section>
  );
}
