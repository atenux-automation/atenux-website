import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-2">Política de Privacidade</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização: 23 de março de 2026</p>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Introdução</h2>
            <p>
              A Atenux ("nós", "nosso") opera o site atenux.com e os serviços de automação de
              atendimento via WhatsApp e outros canais de comunicação. Esta Política de Privacidade
              descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Dados que coletamos</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dados de identificação: nome, e-mail, telefone fornecidos via formulários de contato.</li>
              <li>Dados de uso: páginas visitadas, tempo de navegação, dispositivo e navegador.</li>
              <li>Dados de mensagens: conteúdo de conversas processadas pelos nossos chatbots, quando aplicável, exclusivamente para a prestação do serviço contratado.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Como usamos seus dados</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prestar e melhorar nossos serviços de atendimento automatizado.</li>
              <li>Responder solicitações de contato e suporte.</li>
              <li>Enviar comunicações relevantes sobre nossos serviços (com seu consentimento).</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Compartilhamento de dados</h2>
            <p>
              Não vendemos seus dados pessoais. Podemos compartilhá-los com:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provedores de infraestrutura e tecnologia necessários para a operação do serviço (ex.: Meta/WhatsApp Business API).</li>
              <li>Autoridades legais, quando exigido por lei.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Armazenamento e segurança</h2>
            <p>
              Seus dados são armazenados em servidores seguros com criptografia em trânsito e em
              repouso. Adotamos medidas técnicas e organizacionais para proteger suas informações
              contra acesso não autorizado, perda ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Seus direitos (LGPD)</h2>
            <p>Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Solicitar acesso aos seus dados pessoais.</li>
              <li>Corrigir dados incompletos ou desatualizados.</li>
              <li>Solicitar a exclusão dos seus dados.</li>
              <li>Revogar consentimento a qualquer momento.</li>
              <li>Solicitar a portabilidade dos seus dados.</li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato pelo e-mail{" "}
              <a href="mailto:contato@atenux.com" className="text-accent hover:underline">contato@atenux.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Cookies</h2>
            <p>
              Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para
              entender o uso do serviço. Você pode desabilitar cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Contato</h2>
            <p>
              Para dúvidas sobre esta política, entre em contato:<br />
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

export default PrivacyPolicy;
