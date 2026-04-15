import type { ReactNode } from "react";
import { STATS } from "@/components/dashboard/data";
import { PlusIcon } from "@/components/icons";
import { Button, Card } from "@kyber/dashboard-kit";

function AlertBanner() {
  return (
    <div className="alert-banner fade-up">
      <strong>Payment methods expiring soon</strong>
      <p>
        Your payment method Amex Gold (06/2026) is expiring soon. <a href="#">Update payment methods</a>
      </p>
    </div>
  );
}

function WelcomeBlock({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="welcome-row fade-up">
      <div>
        <div className="welcome-row__title">
          <span className="welcome-row__avatar" aria-hidden>
            <span />
          </span>
          <h1>Welcome back, Demo User!</h1>
        </div>
        <p>Here&apos;s your subscription overview and spending insights</p>
      </div>

      <Button iconLeft={<PlusIcon />} onClick={onAdd}>
        Add Subscription
      </Button>
    </div>
  );
}

function StatCard({ title, value, meta, sub, icon }: { title: string; value: string; meta?: string; sub?: string; icon?: ReactNode }) {
  return (
    <Card className="stat-card fade-up">
      <div className="stat-card__head">
        <h3>{title}</h3>
        {icon ? <span>{icon}</span> : null}
      </div>
      <div className="stat-card__value">{value}</div>
      {meta ? <div className="stat-card__meta">{meta}</div> : null}
      {sub ? <div className="stat-card__sub">{sub}</div> : null}
    </Card>
  );
}

function BudgetCard() {
  const percent = 47;
  return (
    <Card className="detail-card fade-up">
      <div className="detail-card__head">
        <div>
          <h3>Monthly Budget</h3>
          <p>Track your spending against your budget</p>
        </div>
        <span>Budget: $500.00</span>
      </div>

      <div className="budget-line">
        <span className="text-sm font-medium">$235.34 of $500.00</span>
        <strong>{percent}%</strong>
      </div>

      <div className="progress-track">
        <div style={{ width: `${percent}%` }} />
      </div>

      <div className="budget-grid">
        <span>vs. Last month</span>
        <strong className="is-up">↑ 5%</strong>
        <span>Days remaining</span>
        <strong>16 days</strong>
        <span>Yearly projection</span>
        <strong>$2,824.02</strong>
      </div>

      <div className="budget-note">💡 Great job! You&apos;re well within your budget.</div>
    </Card>
  );
}

function RenewalsCard() {
  return (
    <Card className="detail-card fade-up renewals-card">
      <div className="detail-card__head">
        <div>
          <h3>Upcoming Renewals</h3>
          <p>Next 7 days</p>
        </div>
        <Button variant="ghost">View All →</Button>
      </div>

      <div className="renewals-list">
        <article className="renew-item">
          <div className="renew-logo renew-logo--dark" />
          <div>
            <strong>Vercel Pro</strong>
            <p>$20.00 / Monthly</p>
          </div>
          <span className="renew-badge renew-badge--red">Tomorrow</span>
        </article>
        <article className="renew-item">
          <div className="renew-logo renew-logo--yt" />
          <div>
            <strong>YouTube Premium</strong>
            <p>$11.99 / Monthly</p>
          </div>
          <span className="renew-badge renew-badge--red">in 2 days</span>
        </article>
        <article className="renew-item">
          <div className="renew-logo renew-logo--netflix" />
          <div>
            <strong>Netflix</strong>
            <p>$17.99 / Monthly</p>
          </div>
          <span className="renew-badge">in 5 days</span>
        </article>
      </div>
    </Card>
  );
}

function PaymentMethodsCard() {
  return (
    <Card className="payment-card fade-up">
      <div className="payment-card__head">
        <h3>Payment Methods</h3>
        <Button variant="ghost">Manage →</Button>
      </div>

      <div className="payment-card__row">
        <div className="payment-card__chip-wrap">
          <div className="payment-card__chip" />
          <div>
            <strong>Amex Gold •••• 2048</strong>
            <p>12 active subscriptions</p>
          </div>
        </div>
        <span>Expires 06/2026</span>
      </div>
    </Card>
  );
}

export function OverviewSection({ onAdd }: { onAdd: () => void }) {
  return (
    <>
      <WelcomeBlock onAdd={onAdd} />
      <AlertBanner />

      <section className="stats-grid">
        {STATS.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </section>

      <section className="details-grid">
        <BudgetCard />
        <RenewalsCard />
      </section>

      <PaymentMethodsCard />
    </>
  );
}
