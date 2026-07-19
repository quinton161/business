import { useState } from 'react'

const features = [
  {
    title: 'Analytics that matter',
    body: 'Real-time dashboards that turn raw activity into decisions your team can act on today.',
    icon: '📊',
  },
  {
    title: 'Secure by default',
    body: 'Enterprise-grade encryption, role-based access, and audit logs baked into every workflow.',
    icon: '🔒',
  },
  {
    title: 'Scales with you',
    body: 'From your first customer to your millionth, the platform grows without a rebuild.',
    icon: '🚀',
  },
]

const stats = [
  { value: '12k+', label: 'Teams onboarded' },
  { value: '99.98%', label: 'Uptime SLA' },
  { value: '48ms', label: 'Median response' },
  { value: '24/7', label: 'Support' },
]

function Header() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 32px',
        maxWidth: 1120,
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 20 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            borderRadius: 8,
            background: 'var(--accent)',
            color: '#fff',
            fontSize: 16,
          }}
        >
          N
        </span>
        Northwind
      </div>
      <nav style={{ display: 'flex', gap: 28, color: 'var(--muted)', fontSize: 15 }}>
        <a href="#features">Features</a>
        <a href="#stats">Results</a>
        <a href="#cta">Pricing</a>
      </nav>
      <a
        href="#cta"
        style={{
          background: 'var(--accent)',
          color: '#fff',
          padding: '10px 18px',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        Get started
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section
      style={{
        maxWidth: 820,
        margin: '0 auto',
        textAlign: 'center',
        padding: '72px 24px 56px',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          padding: '6px 14px',
          borderRadius: 999,
          border: '1px solid var(--border)',
          background: 'var(--surface)',
          color: 'var(--muted)',
          fontSize: 13,
          marginBottom: 24,
        }}
      >
        New · Workflow automation is live
      </span>
      <h1 style={{ fontSize: 52, lineHeight: 1.1, margin: '0 0 20px', letterSpacing: '-0.02em' }}>
        Run your entire business from one calm dashboard
      </h1>
      <p style={{ fontSize: 19, color: 'var(--muted)', margin: '0 auto 32px', maxWidth: 620, lineHeight: 1.6 }}>
        Northwind brings your operations, analytics, and customer relationships together so your
        team spends less time switching tabs and more time shipping.
      </p>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a
          href="#cta"
          style={{
            background: 'var(--accent)',
            color: '#fff',
            padding: '14px 26px',
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Start free trial
        </a>
        <a
          href="#features"
          style={{
            border: '1px solid var(--border)',
            color: 'var(--text)',
            padding: '14px 26px',
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            background: 'var(--surface)',
          }}
        >
          See how it works
        </a>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" style={{ maxWidth: 1120, margin: '0 auto', padding: '32px 24px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}
      >
        {features.map((f) => (
          <article
            key={f.title}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: 28,
            }}
          >
            <div style={{ fontSize: 30, marginBottom: 16 }}>{f.icon}</div>
            <h3 style={{ margin: '0 0 10px', fontSize: 19 }}>{f.title}</h3>
            <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6, fontSize: 15 }}>{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section id="stats" style={{ maxWidth: 1120, margin: '0 auto', padding: '40px 24px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 20,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: '36px 28px',
        }}
      >
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 34, fontWeight: 700, color: 'var(--accent)' }}>{s.value}</div>
            <div style={{ color: 'var(--muted)', fontSize: 14, marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function CallToAction() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  return (
    <section id="cta" style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 80px', textAlign: 'center' }}>
      <h2 style={{ fontSize: 34, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
        Ready to bring order to the chaos?
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: 17, margin: '0 0 28px' }}>
        Join thousands of teams already running on Northwind. No credit card required.
      </p>
      {joined ? (
        <div
          style={{
            display: 'inline-block',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: '16px 24px',
            color: 'var(--text)',
          }}
        >
          ✅ Thanks — we&apos;ll be in touch at <strong>{email}</strong>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (email.trim()) setJoined(true)
          }}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            style={{
              flex: '1 1 260px',
              maxWidth: 320,
              padding: '14px 16px',
              borderRadius: 10,
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              color: 'var(--text)',
              fontSize: 15,
            }}
          />
          <button
            type="submit"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              border: 'none',
              padding: '14px 26px',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Request access
          </button>
        </form>
      )}
    </section>
  )
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '24px',
        textAlign: 'center',
        color: 'var(--muted)',
        fontSize: 14,
      }}
    >
      © {new Date().getFullYear()} Northwind, Inc. All rights reserved.
    </footer>
  )
}

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
