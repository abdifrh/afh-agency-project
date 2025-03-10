
import { Helmet } from "react-helmet";

const LegalMentions = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Helmet>
        <title>Mentions Légales | AFH Agency</title>
        <meta name="description" content="Mentions légales de AFH Agency" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-afh">Mentions Légales</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
            <p className="mb-2"><strong>Nom de l'entreprise :</strong> AFH Agency</p>
            <p className="mb-2"><strong>Forme juridique :</strong> Entreprise Individuelle</p>
            <p className="mb-2"><strong>Adresse :</strong> Strasbourg, France</p>
            <p className="mb-2"><strong>Téléphone :</strong> +33 7 50 01 58 96</p>
            <p className="mb-2"><strong>Email :</strong> contact@afh-agency.com</p>
            <p className="mb-2"><strong>SIRET :</strong> 84149095600015</p>
            <p className="mb-2"><strong>Directeur de la publication :</strong> Abdi FARAH</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
            <p className="mb-2"><strong>Nom de l'hébergeur :</strong> IONOS by 1&1</p>
            <p className="mb-2"><strong>Adresse :</strong> 7 PLACE DE LA GARE, 57200 SARREGUEMINES</p>
            <p className="mb-2"><strong>Téléphone :</strong> +33 9 70 80 89 11</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble du contenu du site (textes, images, logos, graphismes, vidéos, etc.) est la propriété exclusive 
              de AFH Agency ou de ses partenaires et est protégé par les lois françaises et internationales relatives 
              à la propriété intellectuelle.
            </p>
            <p className="mb-4">
              Toute reproduction totale ou partielle du contenu du site sans autorisation préalable est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation de responsabilité</h2>
            <p className="mb-4">
              AFH Agency s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur son site.
              Cependant, AFH Agency ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations 
              mises à disposition sur ce site et ne saurait être tenue responsable d'éventuelles erreurs ou omissions.
            </p>
            <p className="mb-4">
              AFH Agency se réserve le droit de modifier le contenu du site à tout moment et sans préavis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Liens hypertextes</h2>
            <p className="mb-4">
              Le site peut contenir des liens vers d'autres sites. AFH Agency n'exerce aucun contrôle sur ces sites 
              et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Droit applicable</h2>
            <p className="mb-4">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français 
              seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalMentions;
