import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DataDeletion = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-2">Exclusão de Dados</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização: 23 de março de 2026</p>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Como solicitar a exclusão dos seus dados</h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD) e as políticas da Meta, você tem
              o direito de solicitar a exclusão de todos os dados pessoais que coletamos e armazenamos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Processo de exclusão</h2>
            <p>Para solicitar a exclusão dos seus dados, siga os passos abaixo:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Envie um e-mail para{" "}
                <a href="mailto:contato@atenux.com" className="text-accent hover:underline">contato@atenux.com</a>{" "}
                com o assunto <strong>"Solicitação de exclusão de dados"</strong>.
              </li>
              <li>
                No corpo do e-mail, informe:
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Seu nome completo.</li>
                  <li>E-mail ou número de telefone associado à sua conta.</li>
                  <li>Descrição dos dados que deseja excluir (ou "todos os dados").</li>
                </ul>
              </li>
              <li>
                Nossa equipe confirmará o recebimento da solicitação em até <strong>2 dias úteis</strong>.
              </li>
              <li>
                A exclusão será realizada em até <strong>15 dias úteis</strong> após a confirmação da
                sua identidade.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">O que será excluído</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dados de identificação (nome, e-mail, telefone).</li>
              <li>Histórico de conversas processadas pelos nossos chatbots.</li>
              <li>Dados de uso e navegação associados à sua conta.</li>
              <li>Quaisquer outros dados pessoais armazenados em nossos sistemas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Exceções</h2>
            <p>
              Alguns dados podem ser mantidos quando exigido por obrigação legal, regulatória ou
              para exercício de direitos em processos judiciais, conforme previsto na LGPD
              (Art. 16, incisos I a IV).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Contato</h2>
            <p>
              Em caso de dúvidas sobre o processo de exclusão:<br />
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

export default DataDeletion;
