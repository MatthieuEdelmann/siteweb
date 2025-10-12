import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Patrice TRUC</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez mon parcours, mes convictions et mon engagement pour une France plus juste
            </p>
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
                Depuis plus de 20 ans, je me bats pour défendre les valeurs républicaines et socialistes qui font la force de notre nation. Mon parcours est celui d'un engagement sans faille pour la justice sociale, l'égalité des chances et la solidarité.
              </p>
              <p className="text-lg text-muted-foreground">
                Issu d'une famille modeste, j'ai grandi avec la conviction que la politique doit être au service du bien commun. C'est cette conviction qui guide chacune de mes actions et chacune de mes décisions.
              </p>
            </div>
          </div>

          {/* Bio Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Parcours Professionnel</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span><strong>2018-Présent:</strong> Député de la 5ème circonscription</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span><strong>2014-2018:</strong> Conseiller municipal et adjoint au maire</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span><strong>2008-2014:</strong> Conseiller régional</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span><strong>2000-2008:</strong> Enseignant en lycée professionnel</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Mes Combats</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Défense des services publics et de l'éducation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Lutte contre les inégalités sociales et territoriales</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Transition écologique et développement durable</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Protection sociale et pouvoir d'achat</span>
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
