
import { User, Code, Lightbulb, Target, Users, Award } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Alex Dupont",
      role: "Directeur Créatif",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Sophie Martin",
      role: "Développeuse Senior",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Thomas Lefebvre",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Marie Dubois",
      role: "Responsable Marketing",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6 text-afh" />,
      title: "Créativité",
      description: "Nous repoussons constamment les limites de la créativité pour offrir des solutions innovantes."
    },
    {
      icon: <Target className="h-6 w-6 text-afh" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, avec une attention méticuleuse aux détails."
    },
    {
      icon: <Users className="h-6 w-6 text-afh" />,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins."
    },
    {
      icon: <Award className="h-6 w-6 text-afh" />,
      title: "Qualité",
      description: "La qualité est au cœur de notre approche, dans chaque ligne de code et chaque pixel."
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-light dark:bg-gradient-dark">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="glass-card rounded-2xl overflow-hidden p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <div className="inline-block glass px-3 py-1 rounded-full text-sm text-afh font-medium mb-2">
                  Notre Histoire
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Façonner l'avenir <span className="text-afh">digital</span>
                </h1>
                <p className="text-muted-foreground">
                  Fondée en 2018, AFH Agency est née de la passion commune de trois amis pour le design et la technologie. 
                  Notre mission est simple : créer des expériences digitales exceptionnelles qui connectent les marques à 
                  leur audience de manière authentique et mémorable.
                </p>
                <p className="text-muted-foreground">
                  Avec une équipe diversifiée de créatifs, développeurs et stratèges, nous avons aidé 
                  plus de 50 entreprises à transformer leur présence digitale et à atteindre leurs objectifs.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden afh-glow">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="AFH Team brainstorming" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Les principes fondamentaux qui guident chacune de nos actions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-14 w-14 rounded-full glass flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Parcours</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              L'évolution de AFH Agency à travers les années
            </p>
          </div>
          
          <div className="relative mx-auto max-w-3xl">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border"></div>
            
            {/* Timeline Items */}
            {[
              {
                year: "2018",
                title: "Fondation de AFH Agency",
                description: "Démarrage dans un petit bureau avec 3 fondateurs passionnés."
              },
              {
                year: "2019",
                title: "Premier client majeur",
                description: "Signature d'un contrat avec une entreprise du CAC 40."
              },
              {
                year: "2021",
                title: "Expansion de l'équipe",
                description: "L'équipe s'agrandit à 15 collaborateurs talentueux."
              },
              {
                year: "2023",
                title: "Nouveaux bureaux",
                description: "Déménagement dans des locaux plus grands au cœur de la ville."
              },
              {
                year: "2024",
                title: "Prix d'excellence",
                description: "Reconnaissance de l'industrie pour nos designs innovants."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className={`w-1/2 px-8 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="glass px-3 py-1 rounded-full text-sm font-medium text-afh inline-block mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-afh z-10"></div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des professionnels talentueux et passionnés
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-4 w-full">
                      <div className="flex justify-center gap-3">
                        {["twitter", "linkedin", "github"].map((social) => (
                          <a 
                            key={social} 
                            href="#" 
                            className="glass p-2 rounded-full hover:bg-afh/20 transition-colors"
                          >
                            <span className="sr-only">{social}</span>
                            <User className="h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
