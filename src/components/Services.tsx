import { Bot, Layers, Users, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Layers,
    title: "Canal Único Omnichannel",
    description:
      "WhatsApp, Instagram, Webchat e Telegram — todos os canais unificados em uma só interface. Seus clientes escolhem onde falar; sua equipe responde de um único lugar, sem perder contexto.",
  },
  {
    icon: Bot,
    title: "Agente Atena (IA)",
    description:
      "Nossa inteligência artificial faz o trabalho de vários atendentes humanos. A Atena resolve demandas de forma autônoma e só transfere para um especialista quando o assunto exige atenção humana.",
  },
  {
    icon: Users,
    title: "CRM Inteligente",
    description:
      "Gerencie leads, oportunidades e clientes com automações que aceleram o ciclo de vendas e melhoram a retenção.",
  },
];

const Services = () => {
  const ref = useScrollReveal();

  return (
    <section id="servicos" className="py-28 bg-background">
      <div ref={ref} className="container mx-auto px-6">
        <div className="max-w-xl mb-16 reveal">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Serviços
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Soluções completas para comunicação empresarial
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group rounded-2xl border bg-card p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 reveal reveal-delay-${i + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <s.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
