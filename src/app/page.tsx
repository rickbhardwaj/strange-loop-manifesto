export default function ManifestoSite() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Hero / Manifesto */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-zinc-600/10 to-black" />
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">
          <div className="max-w-3xl space-y-4">
            <p className="uppercase tracking-widest text-xs text-zinc-400">Strange Loop Labs</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Great custom AI is a competitive advantage.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300">
              Why hasn't AI transformed your firm yet? Generic AI tools produce commodity results. Differentiated outcomes come from engineers crafting AI to your strategic processes and most proficient professionals.
            </p>
            <p className="text-lg md:text-xl text-zinc-300">
              We are a team of applied AI engineers from top ML orgs. We sit with professionals to understand their toughest processes and data complexities, then build AI that automates it end-to-end. 
            </p>
            {/* Case Studies (inline subsection) */}
            <div className="mt-8">
              <h2 className="text-xl md:text-2xl font-semibold">Case studies</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[
                  {
                    title: "Leading Asset Management Firm",
                    body: "Tripled the capacity of the leading asset management tax team",
                  },
                  {
                    title: "Leading Global Tax Firm",
                    body: "Automatically processed 1M+ complex tax forms for the leading tax firm",
                  },
                  {
                    title: "Mid-Sized Wealth Manager",
                    body: "Enabled a wealth management firm to migrate off their BPO",
                  },
                ].map((c) => (
                  <div key={c.body} className="rounded-2xl border border-zinc-800 p-5 bg-zinc-900/40">
                    <div className="text-sm uppercase tracking-widest text-zinc-400">{c.title}</div>
                    <p className="mt-2 text-zinc-200">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* Outcomes Not Tools */}
      <section className="border-y border-zinc-800 bg-zinc-950/40">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-semibold">Outcomes, not tools.</h2>
            <p className="mt-4 text-zinc-300">Our model is simple:</p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Sit",
                body:
                  "We embed with professionals to deeply understand one costly process—inputs, edge cases, approvals, and success criteria.",
              },
              {
                title: "Build",
                body:
                  "We configure AI that fits existing tools (Excel, Alteryx, SharePoint, ERPs) and deploy in weeks—not quarters.",
              },
              {
                title: "Scale",
                body:
                  "We monitor real usage and improve daily, then expand across adjacent workflows with compounding returns.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/40">
                <div className="text-sm uppercase tracking-widest text-zinc-400">{c.title}</div>
                <p className="mt-2 text-zinc-200">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section id="proof" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              metric: "3× capacity",
              caption:
                "for a leading asset‑management tax team by automating high‑variance reconciliation and review.",
            },
            {
              metric: "BPO → in‑house",
              caption:
                "enabled a wealth management firm to migrate off their BPO with AI that matches expert standards.",
            },
            {
              metric: "1,000,000+ returns",
              caption:
                "processed for a top global tax firm with accurate, auditable extraction and review workflows.",
            },
          ].map((item) => (
            <div key={item.metric} className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950">
              <div className="text-3xl font-semibold">{item.metric}</div>
              <p className="mt-2 text-zinc-300">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The First Wave Failed */}
      <section className="border-y border-zinc-800 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">The first wave of enterprise AI failed.</h3>
            <p className="mt-4 text-zinc-300">
              Tool‑first rollouts ignored the messy reality of expert work: unstructured documents, partial data, hidden business rules, and judgment calls. The result was a long tail of exceptions dumped back on teams.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                h: "Unstructured by default",
                p: "Tables, footnotes, addenda, checkboxes, scans—variance breaks generic models.",
              },
              {
                h: "Expert‑level accuracy",
                p: "High‑stakes work demands outputs that stand up to audit and compliance.",
              },
              {
                h: "Inside existing tools",
                p: "People work in Excel, Alteryx, Outlook, ERPs. We meet them there.",
              },
            ].map((x) => (
              <div key={x.h} className="rounded-2xl border border-zinc-800 p-5 bg-zinc-900/40">
                <div className="font-medium">{x.h}</div>
                <p className="text-zinc-300 mt-1">{x.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-semibold">How we work</h3>
            <p className="mt-4 text-zinc-300">
              We are senior AI engineers who build with your experts—shipping useful AI in weeks, then compounding improvements with real‑world feedback.
            </p>
            <ul className="mt-6 space-y-3 text-zinc-300 list-disc pl-5">
              <li>Week 0–1: Onsite discovery, success criteria, data access.</li>
              <li>Week 2–4: Ship v1 inside your tools (Excel/Alteryx/SharePoint/ERP).</li>
              <li>Week 5–6: Tight feedback loop, quality gates, audit trails.</li>
              <li>Then: roll out adjacent workflows and scale.</li>
            </ul>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-6">
            {[
              {
                t: "Embedded, not outsourced",
                d: "Forward‑deployed engineers work directly with your team. No throw‑over‑the‑wall handoffs.",
              },
              {
                t: "Secure by design",
                d: "SSO, least‑privilege access, PII redaction, full auditability. Runs in your cloud or ours.",
              },
              {
                t: "Governed AI",
                d: "Versioned prompts and models, deterministic guardrails, and human‑in‑the‑loop when required.",
              },
              {
                t: "Platform speed",
                d: "Reusable building blocks for extraction, reconciliation, reasoning, and routing let us move faster than anyone else.",
              },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950">
                <div className="font-medium">{b.t}</div>
                <p className="mt-2 text-zinc-300">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-y border-zinc-800 bg-zinc-950/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h3 className="text-2xl md:text-3xl font-semibold">Where we excel</h3>
          <p className="mt-3 text-zinc-300 max-w-3xl">
            Document‑heavy, expert‑driven, high‑stakes operations—where accuracy and auditability matter.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                h: "Tax & Audit",
                p: "K‑1s, fund accounting, reconciliations, variance analysis, tie‑outs, review notes.",
              },
              {
                h: "Wealth & Asset Management",
                p: "Alt‑data ingestion, statements to Excel, advisor workflows, client reporting.",
              },
              {
                h: "Insurance & Claims",
                p: "Medical billing, claims intake, policy checks, structured extracts from messy docs.",
              },
            ].map((s) => (
              <div key={s.h} className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900/40">
                <div className="font-medium">{s.h}</div>
                <p className="mt-2 text-zinc-300">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Why Strange Loop</h3>
            <p className="mt-4 text-zinc-300">
              We’ve built and deployed AI for Fortune 500s. Unlike typical engineers, we thrive in the field—working directly with customers to build solutions they <span className="italic">love</span>. Our secure platform lets us deliver faster than anyone else.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { h: "Senior AI engineers", p: "No hand‑wavy demos—people who ship and own outcomes." },
              { h: "Inside your tools", p: "Excel, Alteryx, Outlook, SharePoint, ERPs—no change‑management theater." },
              { h: "Better‑than‑human", p: "Accuracy that meets professional standards with audit trails and controls." },
              { h: "Weeks, not quarters", p: "Start with one critical workflow; expand as ROI compounds." },
            ].map((x) => (
              <div key={x.h} className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950">
                <div className="font-medium">{x.h}</div>
                <p className="mt-2 text-zinc-300">{x.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="border-t border-zinc-800 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h4 className="text-2xl md:text-3xl font-semibold">Bring us your hardest process.</h4>
          <p className="mt-3 text-zinc-300 max-w-2xl mx-auto">
            If it’s document‑heavy, high‑variance, and business‑critical—we’ll automate it and make your experts faster and happier.
          </p>
          <div className="mt-6 inline-flex rounded-2xl overflow-hidden">
            <a href="mailto:founders@getguru.ai" className="px-6 py-3 bg-white text-black font-medium">founders@getguru.ai</a>
            <a href="https://www.getguru.ai" target="_blank" rel="noreferrer" className="px-6 py-3 border border-zinc-700 hover:bg-zinc-900">Visit site</a>
          </div>
          <p className="mt-4 text-xs text-zinc-500">No slides. A 30‑minute working session with an engineer.</p>
        </div>
      </section>

      <footer className="border-t border-zinc-900/60">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500">
          <div>© {new Date().getFullYear()} Strange Loop Labs</div>
          <div className="text-xs">Security • SOC2‑ready • Runs in your cloud</div>
        </div>
      </footer>
    </div>
  );
}
