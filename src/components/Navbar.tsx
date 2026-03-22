import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="text-xl font-bold tracking-tight text-primary">
          Atenux
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Serviços</a>
          <a href="#diferenciais" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Diferenciais</a>
          <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</a>
          <Button size="sm">Fale Conosco</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background px-6 py-4 flex flex-col gap-3">
          <a href="#servicos" className="text-sm py-2" onClick={() => setOpen(false)}>Serviços</a>
          <a href="#diferenciais" className="text-sm py-2" onClick={() => setOpen(false)}>Diferenciais</a>
          <a href="#contato" className="text-sm py-2" onClick={() => setOpen(false)}>Contato</a>
          <Button size="sm" className="w-full">Fale Conosco</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
