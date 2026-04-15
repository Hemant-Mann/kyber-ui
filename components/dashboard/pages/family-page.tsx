import { Button, Card, PageHeader, StatCard } from "@kyber/dashboard-kit";

const stats = [
  { title: "Family members", value: "4", meta: "Tracked profiles", icon: "⚯" },
  { title: "Total spending", value: "$235.34", meta: "Per month", icon: "$" },
  { title: "Most active member", value: "Me", meta: "11 subscriptions", icon: "◌" },
  { title: "Potential savings", value: "$0.00", meta: "With family plans", icon: "↘" },
  { title: "Total budget", value: "No budget set", meta: "All within budget", icon: "◎" },
];

const members = [
  { name: "Me", subs: 11, spend: "$107.31", defaultTag: true, logos: ["▲", "◎", "◈", "+8"] },
  { name: "Sarah", subs: 4, spend: "$49.96", defaultTag: false, logos: ["N", "H", "♫", "+1"] },
  { name: "Kids", subs: 2, spend: "$19.98", defaultTag: false, logos: ["▶", "D"] },
  { name: "Parents", subs: 4, spend: "$58.09", defaultTag: false, logos: ["☰", "☕", "＋", "+2"] },
] as const;

export function FamilyPage() {
  return (
    <section className="page-section fade-up">
      <PageHeader
        title="Family Members"
        description="Manage who uses your subscriptions (Demo Mode)"
        actions={<Button>Add Family Member</Button>}
      />

      <section className="family-summary-grid">
        {stats.map((item) => (
          <StatCard key={item.title} title={item.title} value={item.value} meta={item.meta} icon={item.icon} />
        ))}
      </section>

      <section className="family-members-grid">
        {members.map((member) => (
          <Card className="member-rich-card" key={member.name}>
            <div className="member-rich-card__head">
              <div className="member-avatar member-avatar--photo" aria-hidden>
                <span />
              </div>
              <div>
                <h3>
                  {member.name} {member.defaultTag ? <small>Default</small> : null}
                </h3>
                <p>{member.subs} subscriptions</p>
              </div>
              <button type="button" aria-label="More">⋮</button>
            </div>

            <div className="member-rich-card__spend">
              <span>Monthly spending</span>
              <strong>{member.spend} /month</strong>
            </div>

            <div className="member-rich-card__logos">
              {member.logos.map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </div>

            <Button variant="secondary">View subscriptions</Button>
          </Card>
        ))}
      </section>
    </section>
  );
}
