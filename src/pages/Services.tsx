
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      id: "strategy",
      title: "Conseil & Stratégie Digitale",
      description: "Nous vous accompagnons dans l'élaboration de votre stratégie digitale pour transformer votre vision en résultats concrets.",
      icon: "💡",
      services: [
        "Audit digital approfondi",
        "Élaboration de stratégies sur mesure",
        "Planification de la transformation digitale",
        "Conseil en expérience utilisateur",
        "Analyse de la concurrence"
      ]
    },
    {
      id: "web",
      title: "Développement Web",
      description: "Des solutions web performantes, accessibles et optimisées pour offrir une expérience utilisateur exceptionnelle.",
      icon: "💻",
      services: [
        "Sites web corporate et vitrines",
        "Applications web personnalisées",
        "Solutions e-commerce",
        "Intranets et plateformes collaboratives",
        "Optimisation des performances"
      ]
    },
    {
      id: "design",
      title: "Design Graphique",
      description: "Des créations visuelles impactantes qui renforcent votre identité de marque et captent l'attention de votre audience.",
      icon: "🎨",
      services: [
        "Identité visuelle et branding",
        "Design d'interfaces utilisateur (UI)",
        "Expérience utilisateur (UX)",
        "Motion design et animations",
        "Supports de communication print et web"
      ]
    },
    {
      id: "marketing",
      title: "Marketing Digital",
      description: "Des stratégies marketing ciblées pour augmenter votre visibilité en ligne et générer des leads qualifiés.",
      icon: "📈",
      services: [
        "Référencement naturel (SEO)",
        "Campagnes publicitaires (SEA, Social Ads)",
        "Marketing de contenu",
        "Gestion des réseaux sociaux",
        "Email marketing"
      ]
    },
    {
      id: "training",
      title: "Formation & Support",
      description: "Un accompagnement personnalisé pour vous rendre autonome dans la gestion de vos outils digitaux.",
      icon: "🛠️",
      services: [
        "Formations sur mesure",
        "Accompagnement à la prise en main",
        "Support technique continu",
        "Documentation personnalisée",
        "Ateliers de montée en compétences"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-light dark:bg-gradient-dark">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="glass-card rounded-2xl overflow-hidden afh-glow p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <div className="inline-block glass px-3 py-1 rounded-full text-sm text-afh font-medium">
                  Nos Expertises
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Des services digitaux <span className="text-afh">complets</span> pour votre succès en ligne
                </h1>
                <p className="text-muted-foreground text-lg">
                  Nous combinons expertise technique, créativité et stratégie pour vous accompagner dans chaque étape de votre développement digital.
                </p>
                <Link to="/contact" className="btn-afh inline-flex items-center">
                  Parlons de votre projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="relative animate-slide-down hidden md:block">
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass-card p-5 rounded-xl rotate-3 afh-glow">
                    <div className="text-4xl mb-2">💡</div>
                    <h3 className="text-lg font-bold">Stratégie</h3>
                    <p className="text-sm text-muted-foreground">Vision et planification</p>
                  </div>
                  <div className="glass-card p-5 rounded-xl -rotate-3 mt-8">
                    <div className="text-4xl mb-2">💻</div>
                    <h3 className="text-lg font-bold">Développement</h3>
                    <p className="text-sm text-muted-foreground">Solutions sur mesure</p>
                  </div>
                  <div className="glass-card p-5 rounded-xl -rotate-3">
                    <div className="text-4xl mb-2">🎨</div>
                    <h3 className="text-lg font-bold">Design</h3>
                    <p className="text-sm text-muted-foreground">Créations visuelles</p>
                  </div>
                  <div className="glass-card p-5 rounded-xl rotate-3 mt-8">
                    <div className="text-4xl mb-2">📈</div>
                    <h3 className="text-lg font-bold">Marketing</h3>
                    <p className="text-sm text-muted-foreground">Croissance digitale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins digitaux
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={category.id} className="glass-card rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <div className="glass h-16 w-16 rounded-full flex items-center justify-center text-3xl">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                    <Link to="/contact" className="inline-flex items-center text-afh font-medium hover:underline">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  
                  <div className="glass rounded-xl p-6">
                    <h4 className="font-medium mb-4">Ce que nous proposons:</h4>
                    <ul className="space-y-3">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="bg-afh/10 dark:bg-afh/20 text-afh p-1 rounded-full mr-3 mt-0.5">
                            <Check className="h-4 w-4" />
                          </span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Processus</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une approche méthodique pour des résultats optimaux
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Découverte",
                  description: "Nous analysons vos besoins, objectifs et l'écosystème dans lequel vous évoluez."
                },
                {
                  step: "02",
                  title: "Stratégie",
                  description: "Nous élaborons une approche personnalisée pour atteindre vos objectifs business."
                },
                {
                  step: "03",
                  title: "Création",
                  description: "Nous concevons et développons des solutions sur mesure avec un souci du détail."
                },
                {
                  step: "04",
                  title: "Optimisation",
                  description: "Nous mesurons, analysons et améliorons continuellement pour maximiser les performances."
                }
              ].map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="glass h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4 afh-glow">
                    <span className="text-2xl font-bold text-afh">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-20">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center afh-glow">
            <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre présence digitale ?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrir comment nos services peuvent vous aider à atteindre vos objectifs.
            </p>
            <Link to="/contact" className="btn-afh inline-flex items-center">
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
