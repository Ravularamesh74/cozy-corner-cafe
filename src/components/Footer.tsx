import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card">
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold text-foreground tracking-tight">
            Dark Cafe
          </h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-xs">
            Premium brews and curated bites in the heart of Secunderabad. Where
            taste meets your expectations.
          </p>
          <a
            href="https://www.instagram.com/dark_cafe____"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:brightness-110 transition-all"
          >
            <Instagram size={16} />
            @dark_cafe____
          </a>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <MapPin size={14} className="mt-0.5 shrink-0 text-primary/60" />
              <span>Walker Town, Padmarao Nagar, Secunderabad, Telangana 500025</span>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <Phone size={14} className="shrink-0 text-primary/60" />
              <a href="tel:07989899673" className="hover:text-foreground transition-colors">
                079898 99673
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <Phone size={14} className="shrink-0 text-primary/60" />
              <a href="tel:08555933516" className="hover:text-foreground transition-colors">
                855 593 3516
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Hours</h4>
          <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <Clock size={14} className="mt-0.5 shrink-0 text-primary/60" />
            <div>
              <p>Monday – Sunday</p>
              <p className="text-foreground font-medium mt-0.5">Open until 11:30 PM</p>
            </div>
          </div>
          <div className="mt-4 px-3 py-2 rounded-lg bg-secondary inline-flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-foreground font-medium">Currently Open</span>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">
          © 2026 Dark Cafe. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Beside Secret Kitchen, Padmarao Nagar
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
