import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const images = [
    {
      src: gallery1,
      title: "Meeting de campagne",
      description: "Rassemblement populaire à Paris - Mars 2024",
    },
    {
      src: gallery2,
      title: "Rencontre citoyenne",
      description: "Échange avec les habitants - Février 2024",
    },
    {
      src: gallery3,
      title: "Équipe de campagne",
      description: "Nos militants engagés - Janvier 2024",
    },
    {
      src: gallery4,
      title: "Débat public",
      description: "Conférence sur la transition écologique - Décembre 2023",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Galerie</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Retour en images sur nos rencontres, nos événements et notre mobilisation citoyenne
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-white/90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-accent/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Participez à nos prochains événements
            </h3>
            <p className="text-muted-foreground mb-6">
              Rejoignez-nous lors de nos meetings, débats et rencontres citoyennes
            </p>
            <a 
              href="/calendar"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-[var(--shadow-elegant)]"
            >
              Voir l'agenda
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
