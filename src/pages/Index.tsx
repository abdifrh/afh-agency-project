
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
              <div className="inline-block">
                <div className="glass px-4 py-2 rounded-full text-sm md:text-base mb-6">
                  <span className="text-afh font-semibold">Agence Web Digitale</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transformez votre <span className="text-afh">présence digitale</span> avec créativité
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Nous créons des expériences web immersives qui captent l'attention 
                et convertissent les visiteurs en clients fidèles.
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
                  <div className="w-full h-full bg-gradient-to-tr from-afh/80 to-purple-600/80 flex items-center justify-center">
                    <span className="text-white text-xl md:text-2xl font-bold">Design Digital</span>
                  </div>
                </div>
              </div>
              <div className="glass-card p-6 md:p-8 rounded-2xl absolute -bottom-4 -left-4 -rotate-3 z-0">
                <div className="relative z-10 aspect-video rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-bl from-blue-500/80 to-purple-600/80 flex items-center justify-center">
                    <span className="text-white text-xl md:text-2xl font-bold">Développement Web</span>
                  </div>
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
              Des solutions digitales complètes pour tous vos besoins
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Conseil & Stratégie Digitale",
                description: "Audit digital, élaboration de stratégies sur mesure, planification de la transformation digitale.",
                icon: "💡",
                delay: "0ms"
              },
              {
                title: "Développement Web",
                description: "Sites web personnalisés, applications web, e-commerce, optimisés pour la performance et le référencement.",
                icon: "💻",
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

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-light dark:bg-gradient-dark">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-afh/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="glass-card rounded-2xl p-8 md:p-12 afh-glow text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre présence digitale ?</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Prenez contact avec notre équipe pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
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
