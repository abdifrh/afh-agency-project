
import { User, Code, Lightbulb, Target, Users, Award } from "lucide-react";

const About = () => {
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

  const testimonials = [
    {
      name: "Sophie Dupont",
      company: "Tech Innovate",
      testimonial: "L'équipe d'AFH Agency a complètement transformé notre présence en ligne. Notre trafic a augmenté de 150% en seulement trois mois !",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      name: "Thomas Martin",
      company: "EcoStart",
      testimonial: "Professionnalisme, créativité et réactivité. Trois mots qui définissent parfaitement l'expérience de travail avec AFH Agency.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Julie Legrand",
      company: "Mode & Style",
      testimonial: "Notre boutique en ligne a vu ses conversions augmenter de 75% après la refonte réalisée par AFH Agency. Un investissement qui a rapidement porté ses fruits.",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      name: "Maxime Durand",
      company: "Digital Solutions",
      testimonial: "Grâce au référencement naturel mis en place par AFH Agency, notre site web est maintenant en première page de Google. Notre visibilité a explosé et nos leads ont triplé !",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Claire Fontaine",
      company: "Artisan Créations",
      testimonial: "AFH Agency a su comprendre l'essence de notre marque artisanale et l'a parfaitement traduite dans notre site e-commerce. Nos ventes en ligne ont doublé !",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      name: "Pierre Moreau",
      company: "Consulting Group",
      testimonial: "Le développement de notre application web par AFH Agency a transformé notre façon de travailler. L'interface intuitive et la performance sont impressionnantes.",
      image: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
      name: "Nathalie Bernard",
      company: "Green Earth",
      testimonial: "Le travail de référencement SEO effectué par AFH Agency nous a permis d'atteindre une audience que nous n'aurions jamais pu toucher auparavant. Résultats exceptionnels !",
      image: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    {
      name: "Antoine Leroy",
      company: "StartupLab",
      testimonial: "En tant que startup, notre budget était limité mais AFH Agency a su nous proposer une solution évolutive qui s'adapte à notre croissance. Partenaire de confiance !",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    }
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
                Fondée en 2018, AFH Agency est née de ma passion pour le design et la technologie.
                Dès le départ, mon objectif était clair : aider les entreprises à se démarquer en ligne
                avec des expériences digitales uniques et impactantes.
                </p>
                <p className="text-muted-foreground">
                Au fil des années, l'agence s'est développée, rassemblant une équipe de talents créatifs,
                développeurs et stratèges partageant la même vision.
                Aujourd'hui, nous avons accompagné plus de 50 entreprises dans leur transformation digitale,
                en leur offrant des solutions sur mesure pour renforcer leur présence en ligne et atteindre leurs objectifs.
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

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez les expériences de ceux qui nous ont fait confiance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-20 w-20 rounded-full object-cover border-2 border-afh"
                  />
                </div>
                <p className="italic text-muted-foreground mb-4">"{testimonial.testimonial}"</p>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-afh">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
