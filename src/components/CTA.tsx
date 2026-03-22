import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTA = () => {
  const ref = useScrollReveal();

  return (
    <section id="contato" className="py-28">
      <div ref={ref} className="container mx-auto px-6">
        <div className="hero-gradient rounded-3xl p-12 sm:p-16 text-center max-w-4xl mx-auto reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="text-white/70 max-w-md mx-auto mb-8 leading-relaxed">
            Converse com nosso time e descubra como a Atenux pode automatizar e
            escalar a comunicação da sua empresa.
          </p>
          <Button variant="hero" size="lg">
            Fale com um especialista
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
