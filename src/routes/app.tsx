import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, LayoutDashboard, Globe, Search, Kanban, Send, Repeat, Settings, Plus } from "lucide-react";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Painel — Future.Ai" },
      { name: "description", content: "Painel Future.Ai: projetos, prospecção, CRM, disparos e follow-up." },
      { property: "og:title", content: "Painel — Future.Ai" },
      { property: "og:description", content: "Gerencie sites, leads e campanhas com IA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Dashboard,
});

const nav = [
  [LayoutDashboard, "Visão geral"], [Globe, "Sites & Apps"], [Search, "Prospecção"],
  [Kanban, "Funil / CRM"], [Send, "Disparos"], [Repeat, "Follow-up"], [Settings, "Configurações"],
] as const;

const stats = [["Leads ativos", "1.284"], ["Sites publicados", "37"], ["Mensagens enviadas", "8.902"], ["Taxa de resposta", "24%"]];

const funnel: Record<string, string[]> = {
  "Novo lead": ["Barbearia Neo", "Pet Shop Luna", "Studio Fit"],
  "Contato feito": ["Clínica Sorriso", "Café Aurora"],
  "Proposta": ["Imobiliária Prime"],
  "Fechado": ["Advocacia Lex", "Academia Volt"],
};

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 shrink-0 border-r bg-card/50 p-5 md:block">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <Bot className="h-6 w-6 text-primary" /> Future<span className="text-gradient">.Ai</span>
        </Link>
        <nav className="mt-10 space-y-1">
          {nav.map(([I, l], i) => (
            <button key={l} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm ${i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}>
              <I className="h-4 w-4" /> {l}
            </button>
          ))}
        </nav>
        <div className="mt-10 rounded-xl border border-primary/30 p-4 text-xs">
          <p className="font-mono text-accent">PLANO PRO</p>
          <p className="mt-1 text-muted-foreground">Renova em 12 dias</p>
        </div>
      </aside>

      <main className="flex-1 bg-grid p-6 md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-primary">// PAINEL</p>
            <h1 className="text-3xl font-bold">Olá, bem-vindo de volta</h1>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 font-semibold text-primary-foreground shadow-glow">
            <Plus className="h-4 w-4" /> Novo site com IA
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([l, v]) => (
            <div key={l} className="glass rounded-xl p-5">
              <p className="text-sm text-muted-foreground">{l}</p>
              <p className="mt-2 font-display text-3xl font-bold text-gradient">{v}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-semibold">Funil de clientes</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {Object.entries(funnel).map(([col, items]) => (
            <div key={col} className="glass rounded-xl p-4">
              <div className="flex justify-between font-mono text-xs text-muted-foreground">
                <span>{col.toUpperCase()}</span><span className="text-primary">{items.length}</span>
              </div>
              <div className="mt-4 space-y-3">
                {items.map((it) => (
                  <div key={it} className="rounded-lg border bg-background/60 p-3 text-sm">
                    {it}
                    <p className="mt-1 text-xs text-muted-foreground">Follow-up em 2 dias</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
