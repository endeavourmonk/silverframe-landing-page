const Footer = () => {
  return (
    <footer className="border-t bg-background py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <span className="text-xl font-bold text-primary">Silverframe</span>
            <p className="mt-2 text-sm text-muted-foreground">
              Your ultimate destination for movies and entertainment.
            </p>
          </div>

          <div className="flex gap-8">
            <div>
              <h4 className="font-medium">Company</h4>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">Legal</h4>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Silverframe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
