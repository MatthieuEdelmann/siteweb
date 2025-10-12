import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Heart, Leaf, Briefcase, Home, Globe } from "lucide-react";

const Program = () => {
  const programPoints = [
    {
      icon: GraduationCap,
      title: "Éducation et Formation",
      points: [
        "Investissement massif dans l'éducation nationale",
        "Réduction des effectifs par classe à 20 élèves maximum",
        "Formation professionnelle accessible à tous",
        "Revalorisation du métier d'enseignant",
      ],
    },
    {
      icon: Heart,
      title: "Santé et Protection Sociale",
      points: [
        "Renforcement du système de santé publique",
        "Création de 10 000 postes dans les hôpitaux",
        "Accès aux soins pour tous sur l'ensemble du territoire",
        "Remboursement intégral des soins essentiels",
      ],
    },
    {
      icon: Briefcase,
      title: "Emploi et Pouvoir d'Achat",
      points: [
        "Augmentation du SMIC à 1600€ net",
        "Encadrement des loyers dans les zones tendues",
        "Création d'emplois durables et de qualité",
        "Lutte contre la précarité et le travail précaire",
      ],
    },
    {
      icon: Leaf,
      title: "Transition Écologique",
      points: [
        "Plan d'investissement dans les énergies renouvelables",
        "Isolation thermique gratuite pour les ménages modestes",
        "Développement des transports en commun propres",
        "Agriculture locale et bio accessible à tous",
      ],
    },
    {
      icon: Home,
      title: "Logement et Urbanisme",
      points: [
        "Construction de 200 000 logements sociaux par an",
        "Lutte contre les passoires thermiques",
        "Encadrement strict des loyers",
        "Rénovation urbaine des quartiers populaires",
      ],
    },
    {
      icon: Globe,
      title: "Europe et International",
      points: [
        "Réforme démocratique des institutions européennes",
        "Harmonisation sociale et fiscale en Europe",
        "Politique d'accueil digne des migrants",
        "Coopération internationale renforcée",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Notre Programme</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des propositions concrètes pour transformer la France et améliorer le quotidien de tous les citoyens
            </p>
          </div>

          {/* Intro */}
          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold mb-4">Un Projet Ambitieux pour la France</h2>
            <p className="text-lg text-white/90">
              Notre programme repose sur six piliers fondamentaux qui visent à construire une société plus juste, 
              plus solidaire et plus durable. Chaque proposition a été pensée pour répondre aux défis de notre temps 
              et améliorer concrètement la vie des Français.
            </p>
          </div>

          {/* Program Points */}
          <div className="grid md:grid-cols-2 gap-8">
            {programPoints.map((section, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-[var(--shadow-elegant)] transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Download CTA */}
          <div className="mt-16 text-center bg-accent/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Téléchargez le programme complet
            </h3>
            <p className="text-muted-foreground mb-6">
              Retrouvez l'intégralité de nos propositions détaillées dans notre document de campagne
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-[var(--shadow-elegant)]">
              Télécharger le PDF
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Program;
