import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ensemble pour une France plus juste
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Construisons ensemble l'à venir que nous méritons tous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/program">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Découvrir le programme
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Nous rejoindre
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Solidarité</h3>
              <p className="text-muted-foreground">
                Une société où personne n'est laissé pour compte, où chacun peut compter sur le soutien collectif.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Égalité</h3>
              <p className="text-muted-foreground">
                Des chances égales pour tous, peu importe l'origine, le genre ou la condition sociale.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                Des solutions modernes et durables pour relever les défis de notre époque.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Rejoignez le Mouvement
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ensemble, nous pouvons faire la différence. Participez à nos événements, découvrez nos propositions et engagez-vous pour l'à venir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calendar">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Voir l'agenda
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
