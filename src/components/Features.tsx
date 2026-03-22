import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  "Respostas automáticas com linguagem natural",
  "Integração com WhatsApp Business API",
  "Dashboard em tempo real com métricas-chave",
  "Automação de follow-ups e cadências",
  "Roteamento inteligente de atendimentos",
  "API aberta para integrações personalizadas",
];

const Features = () => {
  const ref = useScrollReveal();

  return (
    <section id="diferenciais" className="py-28 bg-muted/50">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
              Diferenciais
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6">
              Tecnologia pensada para escalar seu atendimento
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Nossa plataforma foi projetada para empresas que precisam atender
              milhares de conversas simultâneas sem perder qualidade nem
              contexto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 reveal reveal-delay-2">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 rounded-xl bg-card border p-5 shadow-sm"
              >
                <div className="mt-0.5 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
