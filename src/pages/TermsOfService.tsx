import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-2">Termos de Serviço</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização: 23 de março de 2026</p>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Aceitação dos termos</h2>
            <p>
              Ao acessar ou utilizar os serviços da Atenux, você concorda com estes Termos de Serviço.
              Se não concordar, não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Descrição dos serviços</h2>
            <p>
              A Atenux fornece soluções de automação de atendimento ao cliente via WhatsApp e outros
              canais de comunicação, incluindo chatbots com inteligência artificial, integração com
              sistemas de gestão e análise de dados de atendimento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Responsabilidades do usuário</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fornecer informações verdadeiras e atualizadas.</li>
              <li>Utilizar os serviços de acordo com a legislação vigente.</li>
              <li>Não utilizar os serviços para envio de spam, conteúdo ilícito ou abusivo.</li>
              <li>Manter a segurança das credenciais de acesso.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo, software, design e marca Atenux são de propriedade exclusiva da Atenux.
              É proibida a reprodução, distribuição ou modificação sem autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Limitação de responsabilidade</h2>
            <p>
              A Atenux não se responsabiliza por indisponibilidades temporárias causadas por fatores
              fora de seu controle, incluindo falhas em serviços de terceiros (Meta, WhatsApp, provedores
              de internet). Nosso compromisso é restaurar os serviços no menor tempo possível.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Pagamentos e cancelamento</h2>
            <p>
              Os termos de pagamento, valores e condições de cancelamento são definidos no contrato
              individual de prestação de serviços firmado com cada cliente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Modificações dos termos</h2>
            <p>
              Reservamo-nos o direito de alterar estes termos a qualquer momento. Alterações relevantes
              serão comunicadas por e-mail ou notificação no site. O uso continuado dos serviços após
              as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Foro e legislação aplicável</h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o
              foro da comarca de São Paulo/SP para dirimir quaisquer controvérsias.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">9. Contato</h2>
            <p>
              Para dúvidas sobre estes termos:<br />
              E-mail: <a href="mailto:contato@atenux.com" className="text-accent hover:underline">contato@atenux.com</a><br />
              Telefone: <a href="tel:+5511936190935" className="text-accent hover:underline">(11) 93619-0935</a>
            </p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default TermsOfService;
