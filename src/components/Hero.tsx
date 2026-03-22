import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Hero = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 hero-gradient opacity-85" />

      <div ref={ref} className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-2xl space-y-8">
          <p className="text-sm font-medium tracking-widest uppercase text-accent reveal">
            Tecnologia que conecta
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white reveal reveal-delay-1">
            Conheça a Atena — sua agente de IA que atende como gente
          </h1>
          <p className="text-lg text-white/70 max-w-lg leading-relaxed reveal reveal-delay-2">
            Unifique WhatsApp, Instagram, Webchat e Telegram em um só lugar. A Atena cuida do atendimento e só transfere quando precisa de um especialista.
          </p>
          <div className="flex flex-wrap gap-4 reveal reveal-delay-3">
            <Button variant="hero" size="lg">
              Agendar demonstração
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero-outline" size="lg">
              Conheça nossos serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
