import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutPortrait from "@/assets/IMG_20251024_010424.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Patrice PHILIP</h1>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={aboutPortrait} 
                alt="Portrait" 
                className="rounded-lg shadow-[var(--shadow-elegant)] w-full"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Un engagement au service du peuple</h2>
              <p className="text-lg text-muted-foreground">
                A REMPLIR Depuis plus de 20 ans, je me bats pour défendre les valeurs républicaines et socialistes qui font la force de notre nation. Mon parcours est celui d'un engagement sans faille pour la justice sociale, l'égalité des chances et la solidarité.
              </p>
              <p className="text-lg text-muted-foreground">
                A REMPLIR Issu d'une famille modeste, j'ai grandi avec la conviction que la politique doit être au service du bien commun. C'est cette conviction qui guide chacune de mes actions et chacune de mes décisions.
              </p>
            </div>
          </div>

          {/* Bio Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Parcours Professionnel et Associatif</h3>
              <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span><strong>2024-Présent:</strong> Retraité de la fonction territoriale</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span><strong>2006-2024:</strong> President de l'association "la BD galopins" et éducateur spécialisé permanent bénévole</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span><strong>2018-2024:</strong> Mise a disposition du CDG13 agent du service environnement</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span><strong>2018-2021:</strong> Referent et organisateur "les virades des garigues", la Ciotat</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span><strong>2018-2021:</strong> Bénévole dans l'association "Vaincre la Muco"</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span><strong>2017-2018:</strong> Vice-Président du Secours populaire de Châteauneuf</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span><strong>2014:</strong> Diplome d'état d'éducateur spécialisé</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span><strong>2009-2014:</strong> Président du comité des fetes de la Mède</span>
              </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Mon Engagement</h3>
              <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Mettre l’humain au cœur de chaque action</span>
              </li>
              <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Favoriser l’écoute, la disponibilité et l’accompagnement</span>
              </li>
              <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Soutenir le monde associatif</span>
              </li>
              <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Développer l'activité économique et commerciale</span>
              </li>
              </ul>
            </div>
            </div>

          {/* Quote Section */}
          <div className="bg-accent/30 rounded-lg p-8 md:p-12 text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic mb-4">
              "La politique n'est pas une carrière, c'est un engagement. C'est le choix de consacrer sa vie à améliorer celle des autres."
            </blockquote>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
