
import { ArrowRight, Sparkles, CheckCircle, Users, BarChart, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AFH Agency | Développement Web et Référencement SEO</title>
        <meta name="description" content="Transformez votre présence digitale avec AFH Agency. Experts en développement web, SEO et stratégie digitale. Boostez votre visibilité en ligne." />
        <meta name="keywords" content="développement web, SEO, référencement naturel, site internet, agence web, stratégie digitale, web design" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-light dark:bg-gradient-dark pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-afh/20 dark:bg-afh/10 blur-3xl"></div>
          <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transformez votre <span className="text-afh">présence digitale</span> avec créativité ✨
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Nous créons des expériences web immersives qui captent l'attention 
                et convertissent les visiteurs en clients fidèles 🚀
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-afh group">
                  Démarrer un projet
                  <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/portfolio" className="btn-afh-outline">
                  Voir nos réalisations
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-down">
              <div className="glass-card p-6 md:p-8 rounded-2xl rotate-3 z-10 afh-glow group">
                <div className="relative z-10 aspect-video rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop"
                    alt="Design Digital Workspace" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="glass-card p-6 md:p-8 rounded-2xl absolute -bottom-4 -left-4 -rotate-3 z-0">
                <div className="relative z-10 aspect-video rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
                    alt="Développement Web" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-light dark:bg-gradient-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des solutions digitales complètes pour tous vos besoins 🛠️
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Développement Web",
                description: "Sites web personnalisés, applications web, e-commerce, optimisés pour la performance et le référencement.",
                icon: "💻",
                delay: "0ms"
              },
              {
                title: "SEO / Référencement Naturel",
                description: "Stratégies d'optimisation pour les moteurs de recherche, analyse de mots-clés, et amélioration du classement organique.",
                icon: "🔍",
                delay: "100ms"
              },
              {
                title: "Design Graphique",
                description: "Conception d'identités visuelles, logos, UI/UX design et supports de communication.",
                icon: "🎨",
                delay: "200ms"
              },
              {
                title: "Marketing Digital",
                description: "SEO/SEA, campagnes publicitaires en ligne, gestion des réseaux sociaux, content marketing.",
                icon: "📈",
                delay: "300ms"
              },
              {
                title: "Formation & Support",
                description: "Sessions de formation personnalisées, support technique et accompagnement continu.",
                icon: "🛠️",
                delay: "400ms"
              },
              {
                title: "Maintenance & Évolution",
                description: "Maintenance préventive, mise à jour, sécurité et amélioration continue de vos solutions digitales.",
                icon: "⚙️",
                delay: "500ms"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 hover:translate-y-[-5px] transition-all duration-300"
                style={{ animationDelay: service.delay }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link to="/services" className="text-afh font-medium hover:underline inline-flex items-center">
                  En savoir plus
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-afh inline-flex items-center">
              Tous nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir Section */}
      <section className="py-20 bg-gradient-light dark:bg-gradient-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Notre équipe" 
                className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
              />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Pourquoi Choisir <span className="text-afh">AFH Agency</span> ?</h2>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Expertise reconnue",
                    description: "Notre équipe de professionnels cumule plus de 15 ans d'expérience dans le digital.",
                    icon: <Award className="h-6 w-6 text-afh" />
                  },
                  {
                    title: "Approche personnalisée",
                    description: "Chaque projet est unique et mérite une stratégie sur mesure adaptée à vos objectifs.",
                    icon: <Users className="h-6 w-6 text-afh" />
                  },
                  {
                    title: "Résultats mesurables",
                    description: "Nous nous concentrons sur des KPIs concrets pour mesurer l'impact de nos interventions.",
                    icon: <BarChart className="h-6 w-6 text-afh" />
                  },
                  {
                    title: "Accompagnement continu",
                    description: "Au-delà de la livraison, nous vous accompagnons dans l'évolution de votre présence digitale.",
                    icon: <Clock className="h-6 w-6 text-afh" />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-xl">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/about" className="btn-afh inline-flex items-center">
                En savoir plus sur nous
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-20 bg-gradient-light dark:bg-gradient-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              La satisfaction de nos clients est notre priorité absolue
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-light dark:bg-gradient-dark">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-afh/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="glass-card rounded-2xl p-8 md:p-12 afh-glow text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre présence digitale ? ✨</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Prenez contact avec notre équipe pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs 🚀
            </p>
            <Link to="/contact" className="btn-afh inline-flex items-center">
              Contactez-nous
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Index;
