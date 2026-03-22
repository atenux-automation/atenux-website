const Footer = () => (
  <footer className="border-t py-12 bg-background">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-sm font-bold tracking-tight text-primary">Atenux</span>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Atenux. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
