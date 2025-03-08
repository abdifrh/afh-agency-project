
import { useState } from "react";
import { Check, MapPin, Phone, Mail, Send, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Footer from "../components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message envoyé ! ✅",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      // Reset form after toast
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 1000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-afh" />,
      title: "Notre adresse",
      details: "123 Avenue Digitale, 75001 Paris, France",
    },
    {
      icon: <Phone className="h-5 w-5 text-afh" />,
      title: "Téléphone",
      details: "+33 1 23 45 67 89",
    },
    {
      icon: <Mail className="h-5 w-5 text-afh" />,
      title: "Email",
      details: "contact@afh-agency.com",
    },
  ];

  const socialIcons = [
    { icon: <Instagram className="h-5 w-5" />, name: "instagram" },
    { icon: <Facebook className="h-5 w-5" />, name: "facebook" },
    { icon: <Twitter className="h-5 w-5" />, name: "twitter" },
    { icon: <Linkedin className="h-5 w-5" />, name: "linkedin" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-0 bg-gradient-light dark:bg-gradient-dark flex flex-col">
      <div className="container mx-auto px-4 md:px-6 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous ✉️</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discutons de votre projet et voyons comment nous pouvons vous aider à atteindre vos objectifs 🚀
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <div className="glass-card rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Contact Form */}
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message 📝</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="glass-input w-full px-4 py-2 rounded-lg placeholder:text-muted-foreground/50"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="glass-input w-full px-4 py-2 rounded-lg placeholder:text-muted-foreground/50"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="glass-input w-full px-4 py-2 rounded-lg"
                    >
                      <option value="" disabled>Sélectionnez un sujet</option>
                      <option value="projet">Nouveau projet</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="information">Demande d'information</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="glass-input w-full px-4 py-2 rounded-lg placeholder:text-muted-foreground/50"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="btn-afh w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                        Envoi en cours...
                      </span>
                    ) : isSubmitted ? (
                      <span className="inline-flex items-center">
                        <Check className="mr-2 h-4 w-4" />
                        Message envoyé ! ✅
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </span>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-afh/90 to-afh-dark p-8 md:p-10 text-white">
                <h2 className="text-2xl font-bold mb-6">Informations de contact 📞</h2>
                
                <div className="space-y-6 mb-10">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex">
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-white/90">{info.title}</h3>
                        <p className="text-white/70">{info.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h3 className="font-medium text-white/90 mb-3">Horaires d'ouverture ⏰</h3>
                  <div className="text-white/70 space-y-2">
                    <p>Lundi - Vendredi: 9h00 - 18h00</p>
                    <p>Weekend: Fermé</p>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-medium text-white/90 mb-3">Suivez-nous</h3>
                  <div className="flex space-x-3">
                    {socialIcons.map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <span className="sr-only">{social.name}</span>
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-20">
          <div className="glass-card rounded-2xl overflow-hidden p-1 afh-glow">
            <div className="aspect-[16/9] rounded-xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292288776538312!3d48.85836947124266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5m2!1s1fr!2sfr"
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Google Maps"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
