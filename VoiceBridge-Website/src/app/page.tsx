import { WaitlistForm } from "@/components/waitlist-form";

const stats = [
  {
    value: "94.2%",
    label: "Command accuracy from prototype benchmark",
  },
  {
    value: "340ms",
    label: "Median response latency in internal testing",
  },
  {
    value: "$99/yr",
    label: "Planned Pro pricing built for mainstream adoption",
  },
];

const useCases = [
  {
    title: "Students and researchers",
    copy: "Switch tools, open docs, search sources, and keep your momentum while studying.",
  },
  {
    title: "Developers and builders",
    copy: "Trigger repetitive commands, navigate apps, and run flow steps without breaking focus.",
  },
  {
    title: "Creators and operators",
    copy: "Manage tabs, notes, communication, and workflows while your hands stay on primary work.",
  },
  {
    title: "Recovery and low-mobility users",
    copy: "Reduce strain with voice-first control for daily computer tasks and communication.",
  },
  {
    title: "Busy professionals",
    copy: "Move faster through repetitive digital work with natural commands and smart macro flows.",
  },
  {
    title: "Teams and institutions",
    copy: "Standardize voice workflows with affordable cross-platform deployment at scale.",
  },
];

const commandExamples = [
  "Open Chrome, search Scholar for transformer attention mechanisms, and open first 3 results.",
  "Switch to Slack, summarize unread items, and draft a quick reply.",
  "Run morning setup: Spotify, calendar, docs, and project workspace.",
  "Go to Google Docs and start a meeting notes template.",
];

export default function Home() {
  return (
    <main className="shell">
      <div className="backdrop" />
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">VB</span>
          <div>
            <p className="brand-name">VoiceBridge</p>
            <p className="brand-tag">voice productivity for everyone</p>
          </div>
        </div>
        <nav className="topnav">
          <a href="#video">Demo</a>
          <a href="#use-cases">Use cases</a>
          <a className="btn btn-dark" href="#waitlist">
            Join waitlist
          </a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <p className="kicker">Launching soon</p>
          <h1>
            Your voice should run your workflow, <span>not slow it down.</span>
          </h1>
          <p className="lead">
            VoiceBridge is a cross-platform voice productivity layer for everyday work. Built from
            accessibility-first principles, designed for everyone who wants faster, lower-friction
            computing.
          </p>
          <div className="hero-actions">
            <a className="btn btn-accent" href="#waitlist">
              Get early access
            </a>
            <a className="btn btn-ghost" href="#video">
              Watch demo
            </a>
          </div>
        </div>
        <div id="waitlist" className="waitlist-wrap">
          <WaitlistForm />
        </div>
      </section>

      <section className="stats">
        {stats.map((item) => (
          <article key={item.value} className="card">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section id="video" className="video-section">
        <div className="video-copy">
          <p className="kicker">See it in action</p>
          <h2>Real voice commands driving real digital tasks.</h2>
          <p>
            The product direction is clear: natural speech controlling navigation, typing, search,
            and app workflows with speed and reliability.
          </p>
          <ul className="examples">
            {commandExamples.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <a href="https://www.youtube.com/watch?v=TNiw3K0_gpU" target="_blank" rel="noreferrer">
            Open full YouTube demo
          </a>
        </div>
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/TNiw3K0_gpU"
            title="VoiceBridge demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section id="use-cases" className="use-cases">
        <p className="kicker">Built broad on purpose</p>
        <h2>A mainstream product, not a narrow niche tool.</h2>
        <div className="case-grid">
          {useCases.map((item) => (
            <article key={item.title} className="case-card">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bottom-cta">
        <h2>Join the early launch cohort.</h2>
        <p>
          Be first to access beta invitations, release notes, and onboarding updates as VoiceBridge
          expands from desktop workflows to broader everyday use.
        </p>
        <a className="btn btn-dark" href="#waitlist">
          Reserve my spot
        </a>
      </section>
    </main>
  );
}
