
import { ArrowRight, Sparkles, CheckCircle, Users, BarChart, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, language } = useLanguage();

  // Define service items using the t function with returnObjects option
  const serviceItems = t("homepage.services.items", { returnObjects: true });
  
  // Define why us items using the t function with returnObjects option
  const whyUsItems = t("homepage.whyUs.items", { returnObjects: true });
  
  // Define testimonial items using the t function with returnObjects option
  const testimonialItems = t("homepage.testimonials.items", { returnObjects: true });
  
  // Fallback testimonial data in case the translation isn't available
  const fallbackTestimonials = [
    {
      name: "Sophie Dupont",
      company: "Tech Innovate",
      text: "AFH Agency completely transformed our online presence. Our traffic increased by 150% in just three months!"
    },
    {
      name: "Thomas Martin",
      company: "EcoStart",
      text: "Professionalism, creativity and responsiveness. Three words that perfectly define the experience of working with AFH Agency."
    },
    {
      name: "Julie Legrand",
      company: "Mode & Style",
      text: "Our online store saw its conversions increase by 75% after the redesign by AFH Agency. An investment that quickly paid off."
    },
    {
      name: "Maxime Durand",
      company: "Digital Solutions",
      text: "Thanks to the SEO implemented by AFH Agency, our website is now on the first page of Google. Our visibility has exploded and our leads have tripled!"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AFH Agency | Développement Web et référencement SEO</title>
        <meta name="description" content="Transformez votre présence numérique avec l'agence AFH. Experts en développement web, SEO et stratégie digitale, optimisez votre visibilité en ligne." />
        <meta name="keywords" content="développement web, SEO, référencement naturel, site web, agence web, stratégie digitale, web design, strasbourg, alsace" />
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
                {t("homepage.hero.title")}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                {t("homepage.hero.description")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={`/${language}/contact`} className="btn-afh group">
                  {t("homepage.hero.startProject")}
                  <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to={`/${language}/portfolio`} className="btn-afh-outline">
                  {t("homepage.hero.seePortfolio")}
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-down">
              <div className="glass-card p-6 md:p-8 rounded-2xl rotate-3 z-10 afh-glow group">
                <div className="relative z-10 aspect-video rounded-lg overflow-hidden">
                  <img 
                    src="/img/web-development.webp"
                    alt="Web Development" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="glass-card p-6 md:p-8 rounded-2xl absolute -bottom-4 -left-4 -rotate-3 z-0">
                <div className="relative z-10 aspect-video rounded-lg overflow-hidden">
                  <img 
                    src="/img/web-design.webp"
                    alt="Design Digital Workspace" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("homepage.services.title")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("homepage.services.description")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(serviceItems) && serviceItems.map((service, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 hover:translate-y-[-5px] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link to={`/${language}/services`} className="text-afh font-medium hover:underline inline-flex items-center">
                  {t("homepage.services.learnMore")}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={`/${language}/services`} className="btn-afh inline-flex items-center">
              {t("homepage.services.allServices")}
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
                alt="Our team" 
                className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
              />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">{t("homepage.whyUs.title")}</h2>
              
              <div className="space-y-4">
                {Array.isArray(whyUsItems) && whyUsItems.map((item, index) => {
                  const icons = [
                    <Award key="award" className="h-6 w-6 text-afh" />,
                    <Users key="users" className="h-6 w-6 text-afh" />,
                    <BarChart key="chart" className="h-6 w-6 text-afh" />,
                    <Clock key="clock" className="h-6 w-6 text-afh" />
                  ];
                  
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="mt-1">{icons[index]}</div>
                      <div>
                        <h3 className="font-semibold text-xl">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Link to={`/${language}/about`} className="btn-afh inline-flex items-center">
                {t("homepage.whyUs.learnMore")}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("homepage.testimonials.title")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("homepage.testimonials.description")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(Array.isArray(testimonialItems) ? testimonialItems : fallbackTestimonials).map((testimonial, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${12 + index * 10}.jpg`} 
                    alt={testimonial.name} 
                    className="h-20 w-20 rounded-full object-cover border-2 border-afh"
                  />
                </div>
                <p className="italic text-muted-foreground mb-4">"{testimonial.text}"</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("homepage.cta.title")}</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("homepage.cta.description")}
            </p>
            <Link to={`/${language}/contact`} className="btn-afh inline-flex items-center">
              {t("homepage.cta.contact")}
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Index;
