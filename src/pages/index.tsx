import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const cards = [
  {
    title: 'Getting Started',
    description: 'Map the platform, install tooling, consume packages and run local services.',
    href: '/getting-started/overview',
  },
  {
    title: 'Libraries',
    description: 'Read library overviews, quickstarts, examples, guides and API reference.',
    href: '/libraries/overview',
  },
];

export default function Home() {
  return (
    <Layout
      title="TechIndustry Docs"
      description="Documentation portal for TechIndustry projects, guides, examples and API references">
      <header className="hero">
        <div className="container text--center">
          <h1 className="hero__title">TechIndustry Docs</h1>
          <p className="hero__subtitle">
            A single documentation portal for industrial .NET, TwinCAT, OPC UA, HMI, telemetry and API references.
          </p>
          <Link className="button button--secondary button--lg" to="/intro">
            Open Docs
          </Link>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <section className="portal-grid">
          {cards.map((card) => (
            <Link className="portal-card" key={card.href} to={card.href}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
}
