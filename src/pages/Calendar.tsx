import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";

const Calendar = () => {
  const events = [
    {
      date: "15 Novembre 2024",
      time: "19h00",
      title: "Grand Meeting Public",
      location: "Palais des Congrès, Paris",
      description: "Venez découvrir nos propositions pour l'à venir de la France",
      type: "meeting",
    },
    {
      date: "22 Novembre 2024",
      time: "18h30",
      title: "Débat: Transition Écologique",
      location: "Mairie du 11ème, Paris",
      description: "Échangeons sur les enjeux climatiques et nos solutions concrètes",
      type: "debate",
    },
    {
      date: "28 Novembre 2024",
      time: "14h00",
      title: "Porte-à-porte Citoyen",
      location: "Quartier de Belleville, Paris",
      description: "Rencontrons les habitants et écoutons leurs préoccupations",
      type: "field",
    },
    {
      date: "5 Décembre 2024",
      time: "20h00",
      title: "Conférence: L'à venir du Travail",
      location: "Bourse du Travail, Paris",
      description: "Discutons des mutations du monde du travail et de nos propositions",
      type: "conference",
    },
    {
      date: "12 Décembre 2024",
      time: "17h00",
      title: "Meeting de Quartier",
      location: "Place de la République, Paris",
      description: "Un moment d'échange direct avec les citoyens",
      type: "meeting",
    },
    {
      date: "18 Décembre 2024",
      time: "19h00",
      title: "Soirée Thématique: Éducation",
      location: "Salle municipale, Paris 20e",
      description: "Focus sur notre programme éducatif et nos ambitions pour l'école",
      type: "conference",
    },
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "bg-primary/10 border-primary text-primary";
      case "debate":
        return "bg-secondary/10 border-secondary text-secondary";
      case "conference":
        return "bg-accent border-accent-foreground/30 text-accent-foreground";
      default:
        return "bg-muted border-muted-foreground/30 text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Agenda</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Retrouvez tous nos événements à venir et venez nous rencontrer
            </p>
          </div>

          {/* Events List */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-[var(--shadow-elegant)] transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Date */}
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-lg p-4 text-center min-w-[120px]">
                      <CalendarIcon className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-bold text-sm">{event.date}</div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-foreground">{event.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getEventColor(event.type)}`}>
                        {event.type === "meeting" && "Meeting"}
                        {event.type === "debate" && "Débat"}
                        {event.type === "conference" && "Conférence"}
                        {event.type === "field" && "Terrain"}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">{event.description}</p>
                    
                    <button className="mt-4 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                      S'inscrire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Restez informé de nos événements</h3>
            <p className="text-lg text-white/90 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir toutes les informations sur nos prochaines rencontres
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="flex-grow px-4 py-3 rounded-lg text-foreground"
              />
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Calendar;
