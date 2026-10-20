import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Search, Kanban, Send, Repeat, Sparkles, Check, ArrowRight, Bot } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Future.Ai — Crie sites, prospecte e venda com IA" },
      { name: "description", content: "Plataforma com IA para criar sites e apps, prospectar clientes, CRM, disparos personalizados e follow-up. Planos de assinatura." },
      { property: "og:title", content: "Future.Ai — Crie, prospecte e venda com IA" },
      { property: "og:description", content: "Sites, apps, CRM, disparos e follow-up em uma só plataforma por assinatura." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Globe, t: "Criador de sites e apps", d: "Descreva sua ideia e a IA gera o site ou app pronto para publicar." },
  { icon: Search, t: "Prospecção de clientes", d: "Encontre empresas por nicho e região com dados de contato." },
  { icon: Sparkles, t: "Vitrine de sites", d: "Modelos prontos para mostrar e vender aos seus clientes." },
  { icon: Kanban, t: "Funil e CRM", d: "Acompanhe cada lead do primeiro contato até o fechamento." },
  { icon: Send, t: "Disparo personalizado", d: "Mensagens únicas para cada lead, escritas pela IA." },
  { icon: Repeat, t: "Follow-up automático", d: "Sequências que voltam a falar com o lead na hora certa." },
];

const plans = [
  { n: "Starter", p: "97", f: ["5 sites/apps", "500 leads/mês", "CRM básico", "Disparos limitados"] },
  { n: "Pro", p: "197", hot: true, f: ["Sites/apps ilimitados", "3.000 leads/mês", "CRM completo", "Disparos + follow-up"] },
  { n: "Agency", p: "397", f: ["Tudo do Pro", "Leads ilimitados", "Multiusuário", "Marca própria"] },
];

const showcase = ["Clínica Odonto", "Barbearia Neo", "Imobiliária Prime", "Restaurante Umami", "Academia Volt", "Advocacia Lex"];

function Index() {
  return (
    <div className="min-h-screen overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 glass">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <Bot className="h-6 w-6 text-primary" /> Future<span className="text-gradient">.Ai</span>
          </div>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#recursos" className="hover:text-foreground">Recursos</a>
            <a href="#vitrine" className="hover:text-foreground">Vitrine</a>
            <a href="#planos" className="hover:text-foreground">Planos</a>
          </nav>
          <Link to="/app" className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow">Entrar</Link>
        </div>
      </header>

      <section className="relative bg-grid pt-40 pb-28">
        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-1 font-mono text-xs text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> SISTEMA ONLINE · v1.0
          </span>
          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Crie, prospecte e venda <span className="text-gradient">no futuro.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Sites, apps, CRM, disparos e follow-up com IA em uma única plataforma. Sem créditos — assinatura fixa, uso de verdade.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/app" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow">
              Começar agora <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#planos" className="rounded-lg border border-primary/30 px-6 py-3 font-semibold hover:bg-primary/10">Ver planos</a>
          </div>
        </div>
      </section>

      <section id="recursos" className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-sm text-primary">// RECURSOS</p>
        <h2 className="mt-2 text-4xl font-bold">Tudo para fechar mais clientes</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map(({ icon: I, t, d }) => (
            <div key={t} className="glass rounded-xl p-6 transition hover:shadow-glow">
              <I className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="vitrine" className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-sm text-primary">// VITRINE</p>
        <h2 className="mt-2 text-4xl font-bold">Sites prontos para vender</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {showcase.map((s, i) => (
            <div key={s} className="glass overflow-hidden rounded-xl">
              <div className="relative h-40 bg-grid">
                <div className="absolute inset-4 rounded-md border border-primary/20 p-3">
                  <div className="h-2 w-1/3 rounded bg-primary/60" />
                  <div className="mt-3 h-2 w-2/3 rounded bg-muted" />
                  <div className="mt-2 h-2 w-1/2 rounded bg-muted" />
                  <div className={`mt-4 h-6 w-20 rounded ${i % 2 ? "bg-accent/70" : "bg-primary/70"}`} />
                </div>
              </div>
              <div className="p-4 font-medium">{s}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-sm text-primary">// PLANOS</p>
        <h2 className="mt-2 text-4xl font-bold">Assinatura simples, sem créditos</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.n} className={`glass rounded-2xl p-8 ${p.hot ? "border-primary shadow-glow" : ""}`}>
              {p.hot && <span className="font-mono text-xs text-accent">MAIS POPULAR</span>}
              <h3 className="mt-2 text-2xl font-bold">{p.n}</h3>
              <p className="mt-4"><span className="text-4xl font-bold">R${p.p}</span><span className="text-muted-foreground">/mês</span></p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.f.map((f) => <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-accent" />{f}</li>)}
              </ul>
              <Link to="/app" className={`mt-8 block rounded-lg py-3 text-center font-semibold ${p.hot ? "bg-gradient-primary text-primary-foreground" : "border border-primary/30 hover:bg-primary/10"}`}>Assinar</Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t py-10 text-center font-mono text-xs text-muted-foreground">© 2026 FUTURE.AI · TODOS OS SISTEMAS OPERACIONAIS</footer>
    </div>
  );
}
