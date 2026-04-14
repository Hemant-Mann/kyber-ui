import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const summaries = [
  { title: "Total Categories", value: "6", meta: "6 with budget limits", icon: "◻" },
  { title: "Total Monthly Budget", value: "$445.00", meta: "Across all categories", icon: "$" },
  { title: "Budget Utilization", value: "53%", meta: "of budget", icon: "↗" },
];

const categories = [
  { name: "Entertainment", subs: 6, spent: "$69.94", limit: "$50.00", status: "Over budget", pct: 140, tone: "danger" },
  { name: "Productivity", subs: 5, spent: "$38.33", limit: "$100.00", status: "On track", pct: 38, tone: "ok" },
  { name: "Learning", subs: 2, spent: "$47.25", limit: "$75.00", status: "On track", pct: 63, tone: "ok" },
  { name: "Cloud Storage", subs: 2, spent: "$13.98", limit: "$30.00", status: "On track", pct: 47, tone: "ok" },
  { name: "Developer Tools", subs: 4, spent: "$55.00", limit: "$150.00", status: "On track", pct: 37, tone: "ok" },
  { name: "Health & Fitness", subs: 2, spent: "$10.83", limit: "$40.00", status: "On track", pct: 27, tone: "ok" },
] as const;

export function CategoriesPage() {
  return (
    <section className="page-section fade-up">
      <header className="page-head">
        <div>
          <div className="page-title-with-chip">
            <h1>Categories</h1>
            <span>$445.00 total budgets</span>
          </div>
          <p>Organize your subscriptions and set budget limits for each category</p>
        </div>
        <Button>Add Category</Button>
      </header>

      <section className="category-summary-grid">
        {summaries.map((item) => (
          <Card className="page-stat-card" key={item.title}>
            <h4>{item.title}</h4>
            <strong>{item.value}</strong>
            <p>{item.meta}</p>
            <em>{item.icon}</em>
          </Card>
        ))}
      </section>

      <section className="categories-budget-grid">
        {categories.map((cat) => (
          <Card className="category-budget-card" key={cat.name}>
            <div className="category-budget-card__head">
              <div className="category-icon" />
              <div>
                <h3>{cat.name}</h3>
                <p>{cat.subs} subscriptions</p>
              </div>
              <button type="button" aria-label="More">⋮</button>
            </div>

            <div className="category-budget-card__metrics">
              <span>spent this month</span>
              <strong>{cat.spent}</strong>
              <span>Budget Limit</span>
              <strong>{cat.limit}</strong>
            </div>

            <div className="category-progress-meta">
              <span className={cat.tone === "danger" ? "is-danger" : "is-ok"}>{cat.status}</span>
              <strong className={cat.tone === "danger" ? "is-danger" : "is-ok"}>{cat.pct}%</strong>
            </div>
            <div className="category-progress">
              <div className={cat.tone === "danger" ? "is-danger" : "is-ok"} style={{ width: `${Math.min(cat.pct, 100)}%` }} />
            </div>
          </Card>
        ))}
      </section>
    </section>
  );
}
