import { Mail, Phone, User } from "lucide-react";
import logo from "@/assets/logo-atenux.png";

const Footer = () => (
  <footer className="border-t py-16 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Atenux" className="h-8 w-8" />
            <span className="text-lg font-bold tracking-tight text-primary">Atenux</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Tecnologia que conecta sua empresa aos seus clientes com inteligência e eficiência.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-foreground">Contato</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <User className="w-4 h-4 text-accent shrink-0" />
              Anderson Pimentel
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a href="tel:+5592993531716" className="hover:text-foreground transition-colors">(92) 99353-1716</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href="mailto:contato@atenux.com" className="hover:text-foreground transition-colors">contato@atenux.com</a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-foreground">Links</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a></li>
            <li><a href="#diferenciais" className="hover:text-foreground transition-colors">Diferenciais</a></li>
            <li><a href="#contato" className="hover:text-foreground transition-colors">Contato</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-12 pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Atenux. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
