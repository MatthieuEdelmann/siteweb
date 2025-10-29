import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre message a été envoyé avec succès !");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Contact</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une question, une suggestion ? N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Nos coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                    <p className="text-muted-foreground">Chateauneufà venir@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Téléphone</h3>
                    <p className="text-muted-foreground">07 69 14 50 37</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Adresse</h3>
                    <p className="text-muted-foreground">
                      73 Plage du Jai<br />
                      13220 Châteauneuf les martigues<br />
                      France
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/30 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">Horaires d'ouverture</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span className="font-semibold">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi:</span>
                    <span className="font-semibold">10h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche:</span>
                    <span className="font-semibold">Fermé</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-3">Rejoignez-nous !</h3>
                <p className="text-white/90 mb-4">
                  Devenez bénévole ou adhérent pour participer activement à notre mouvement
                </p>
                <button className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
