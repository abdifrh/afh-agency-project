
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  // Use the translated service categories from the translations
  const serviceCategories = t("services.categories", { returnObjects: true });

  return (
    <div className="min-h-screen pt-24 bg-gradient-light dark:bg-gradient-dark">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="glass-card rounded-2xl overflow-hidden afh-glow p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <div className="inline-block glass px-3 py-1 rounded-full text-sm text-afh font-medium">
                  {t("services.hero.subtitle")}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  {t("services.hero.title")}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {t("services.hero.description")}
                </p>
                <Link to="/contact" className="btn-afh inline-flex items-center">
                  {t("services.hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="relative animate-slide-down hidden md:block">
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass-card p-5 rounded-xl rotate-3 afh-glow">
                    <div className="text-4xl mb-2">💡</div>
                    <h3 className="text-lg font-bold">{t("services.categories.0.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("services.categories.0.services.0")}</p>
                  </div>
                  <div className="glass-card p-5 rounded-xl -rotate-3 mt-8">
                    <div className="text-4xl mb-2">💻</div>
                    <h3 className="text-lg font-bold">{t("services.categories.1.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("services.categories.1.services.0")}</p>
                  </div>
                  <div className="glass-card p-5 rounded-xl -rotate-3">
                    <div className="text-4xl mb-2">🎨</div>
                    <h3 className="text-lg font-bold">{t("services.categories.2.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("services.categories.2.services.0")}</p>
                  </div>
                  <div className="glass-card p-5 rounded-xl rotate-3 mt-8">
                    <div className="text-4xl mb-2">📈</div>
                    <h3 className="text-lg font-bold">{t("services.categories.3.title")}</h3>
                    <p className="text-sm text-muted-foreground">{t("services.categories.3.services.0")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("services.title")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("services.description")}
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={index} className="glass-card rounded-xl p-8 hover:shadow-lg transition-all duration-300">
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
                      {t("services.learnMore")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  
                  <div className="glass rounded-xl p-6">
                    <h4 className="font-medium mb-4">{t("services.whatWeOffer")}</h4>
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
            <h2 className="text-3xl font-bold mb-4">{t("services.process.title")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("services.process.description")}
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8">
              {t("services.process.steps", { returnObjects: true }).map((step, index) => (
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
            <h2 className="text-3xl font-bold mb-6">{t("services.cta.title")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              {t("services.cta.description")}
            </p>
            <Link to="/contact" className="btn-afh inline-flex items-center">
              {t("services.cta.button")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
