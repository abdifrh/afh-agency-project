
import { User, Code, Lightbulb, Target, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  // Define values using the t function with returnObjects option
  const values = t("about.values.items", { returnObjects: true }) || [
    {
      icon: <Lightbulb className="h-6 w-6 text-afh" />,
      title: "Creativity",
      description: "We constantly push the boundaries of creativity to offer innovative solutions."
    },
    {
      icon: <Target className="h-6 w-6 text-afh" />,
      title: "Excellence",
      description: "We aim for excellence in every project, with meticulous attention to detail."
    },
    {
      icon: <Users className="h-6 w-6 text-afh" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their needs."
    },
    {
      icon: <Award className="h-6 w-6 text-afh" />,
      title: "Quality",
      description: "Quality is at the heart of our approach, in every line of code and every pixel."
    },
  ];

  // Fallback icons for values
  const valueIcons = [
    <Lightbulb key="lightbulb" className="h-6 w-6 text-afh" />,
    <Target key="target" className="h-6 w-6 text-afh" />,
    <Users key="users" className="h-6 w-6 text-afh" />,
    <Award key="award" className="h-6 w-6 text-afh" />
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
                  {t("about.story.subtitle")}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  {t("about.title")} <span className="text-afh">digital</span>
                </h1>
                <p className="text-muted-foreground">
                  {t("about.story.description1")}
                </p>
                <p className="text-muted-foreground">
                  {t("about.story.description2")}
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
            <h2 className="text-3xl font-bold mb-4">{t("about.values.title")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("about.values.description")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(Array.isArray(values) ? values : []).map((value, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-14 w-14 rounded-full glass flex items-center justify-center mb-4">
                  {valueIcons[index]}
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
            <h2 className="text-3xl font-bold mb-4">{t("about.testimonials.title")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("about.testimonials.description")}
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
