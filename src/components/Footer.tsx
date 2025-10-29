import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Chateauneuf à venir</h3>
            <p className="text-secondary-foreground/80">
              Construisons ensemble une France plus juste, plus solidaire et plus durable.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>Chateauneufà venir@hotmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>07 69 14 50 37</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>73 Plage du Jai 13220 Châteauneuf les martigues</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Chateauneuf à venir. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
