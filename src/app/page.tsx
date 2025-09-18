export default function ManifestoSite() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Hero / Manifesto */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-zinc-600/10 to-black" />
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">
          <div className="max-w-3xl space-y-4">
            <p className="uppercase tracking-widest text-xs text-zinc-400">Strange Loop Labs</p>
            <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
              We automate critical processes at leading firms with ridiculously custom AI.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300">
              Everybody will use AI tools. But top percentile firms will leverage specialized AI tools, crafted to their firm's unique processes, adapting to their knowledge, to <b>deliver differentiated outcomes</b>:
            </p>
            <ul className="text-lg md:text-xl text-zinc-300 list-disc pl-6 space-y-1">
              <li>Higher quality deliverables -- "We found 40% more deductions"</li>
              <li>Client capacity beyond what's humanly possible -- "We expanded market share from 20% to 80%"</li>
              <li>Associates trained in a fraction of the time -- "Our new associates reached senior-level profeciency in a quarter instead of a year"</li>
            </ul>
            <p className="text-lg md:text-xl text-zinc-300">
              We're a team of AI engineers who built AI for complex professional processes at the world's leading firms. We sit with professionals, understand their process deeply, design AI tools they love, securely deploy, and obsess over AI accuracy until it's perfect.
            </p> 
            <p className="text-lg md:text-xl text-zinc-300">
              And we do this for every single customer. Here's an example:
            </p> 
            <div className="mt-8">
              <h2 className="text-xl md:text-4xl font-semibold">Case Study: Big Four Accounting Firm</h2>
              <div className="mt-4 space-y-6">
                {/* Intro / Context */}
                <div className="space-y-3">
                  <p className="text-zinc-200">At this firm, a 60-person team is responsible for delivering accurate tax filings for the most complex investment portfolios in the industry, including many of the world's top 50 financial institutions. But traditional processes were reaching their breaking point.</p>
                  <p className="text-zinc-200">Strange Loop engineers sat with accountants and quickly identified two critical bottlenecks where AI would deliver <b>tens of millions of dollars of ROI.</b> We built and deployed solutions in weeks, then iterated with the accounting team to chase down every point of accuracy and every AI mistake.</p>
                  {/* <ul className="text-zinc-300 space-y-1 list-disc pl-5">
                    <li>1M+ K‑1/K‑3 forms processed every year</li>
                    <li>20% of time lost to reconciliation across systems</li>
                    <li>$10k fine per miss; complexity has quadrupled since 2020</li>
                    <li><b>Partners had no time for client advisory, training associates, or winning new business.</b></li>
                  </ul> */}
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-sm uppercase tracking-widest text-zinc-400">Document AI</div>
                    <p className="mt-2 text-zinc-200">Custom extraction models integrated into existing tax software via API.</p>
                    <ul className="mt-2 text-zinc-300 space-y-1 list-disc pl-5">
                      <li>98%+ accuracy across 300+ complex tax forms</li>
                      <li>Delivered in 3 months</li>
                      <li><b>Saved 60,000 hours of processing</b></li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-widest text-zinc-400">Excel‑based AI Agent</div>
                    <p className="mt-2 text-zinc-200">Automated reconciliation of calculations, adjustments, and allocations in Excel.</p>
                    <ul className="mt-2 text-zinc-300 space-y-1 list-disc pl-5">
                      <li>Tripled funds processed</li>
                      <li>Returns ready weeks, not days, before deadlines.</li>
                      <li>New associate work needs 95% less review</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <blockquote className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 text-zinc-300 italic">
                    “Strange Loop delivered a quick win in a strategic area, then built reusable components to scale across the practice.”
                    <div className="mt-2 not-italic text-xs text-zinc-500">— Tax AI Principal</div>
                  </blockquote>
                  <blockquote className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 text-zinc-300 italic">
                    “The people working with me are jumping for joy. This is the cleanest data they’ve ever seen.”
                    <div className="mt-2 not-italic text-xs text-zinc-500">— Tax Manager</div>
                  </blockquote>
                  <blockquote className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 text-zinc-300 italic">
                    “We have completely migrated from ABBYY and Azure Document Intelligence to Strange Loop.”
                    <div className="mt-2 not-italic text-xs text-zinc-500">— Program Manager</div>
                  </blockquote>
                </div>
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
                  "We build AI that fits existing tools (Excel, Alteryx, SharePoint, ERPs) and deploy in weeks, not quarters.",
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
