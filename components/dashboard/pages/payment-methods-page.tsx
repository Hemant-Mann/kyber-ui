import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  { title: "Payment methods", value: "5", meta: "Active methods", icon: "◻" },
  { title: "Total spending", value: "$235.33", meta: "Per month", icon: "$" },
  { title: "Assigned subscriptions", value: "21", meta: "With payment method", icon: "◈" },
  { title: "Unassigned", value: "0", meta: "Need payment method", icon: "◉" },
];

const methods = [
  { name: "Chase Visa", type: "Credit Card •••• 4242 • Exp 12/27", subs: 11, total: "$98.75/mo", featured: true, tags: ["N", "S", "D", "+8"] },
  { name: "PayPal", type: "PayPal", subs: 2, total: "$24.00/mo", featured: false, tags: ["G", "◎"] },
  { name: "Apple Pay", type: "Apple Pay", subs: 0, total: "$0.00/mo", featured: false, tags: [] },
  { name: "Amex Gold", type: "Credit Card •••• 1001 • Exp 06/26", subs: 6, total: "$65.33/mo", featured: false, tags: ["N", "A", "C", "+3"] },
  { name: "Bank of America", type: "Bank Account •••• 7890", subs: 2, total: "$47.25/mo", featured: false, tags: ["Co", "Sk"] },
] as const;

export function PaymentMethodsPage() {
  return (
    <section className="page-section fade-up">
      <header className="page-head">
        <div>
          <h1>Payment Methods</h1>
          <p>Track which payment methods are used for your subscriptions</p>
        </div>
        <Button>Add Payment Method</Button>
      </header>

      <section className="page-stat-grid">
        {stats.map((item) => (
          <Card className="page-stat-card" key={item.title}>
            <h4>{item.title}</h4>
            <strong>{item.value}</strong>
            <p>{item.meta}</p>
            <em>{item.icon}</em>
          </Card>
        ))}
      </section>

      <section className="methods-grid">
        {methods.map((method) => (
          <Card className={`method-card ${method.featured ? "is-featured" : ""}`} key={method.name}>
            <div className="method-card__head">
              <div className="method-logo" />
              <div>
                <h3>{method.name}</h3>
                <p>{method.type}</p>
              </div>
              <button type="button" aria-label="More">⋯</button>
            </div>

            <div className="method-card__meta">
              <span>{method.subs} subscriptions</span>
              <strong>{method.total}</strong>
            </div>

            <div className="method-card__tags">
              {method.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <Button variant="secondary">View subscriptions</Button>
          </Card>
        ))}
      </section>
    </section>
  );
}
