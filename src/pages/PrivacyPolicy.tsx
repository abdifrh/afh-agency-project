
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Helmet>
        <title>Politique de Confidentialité | AFH Agency</title>
        <meta name="description" content="Politique de confidentialité de AFH Agency" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-afh">Politique de Confidentialité</h1>
        
        <div className="space-y-8">
          <section>
            <p className="mb-4">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="mb-4">
              Chez AFH Agency, nous accordons une grande importance à la protection de vos données personnelles. 
              Cette politique de confidentialité vous informe sur la façon dont nous recueillons, utilisons et 
              protégeons vos informations lorsque vous utilisez notre site web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Collecte des données</h2>
            <p className="mb-4">
              Nous collectons les informations que vous nous fournissez volontairement lorsque vous utilisez notre 
              formulaire de contact, vous inscrivez à notre newsletter ou interagissez avec notre site.
            </p>
            <p className="mb-4">
              Ces informations peuvent inclure :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Votre nom et prénom</li>
              <li>Votre adresse e-mail</li>
              <li>Votre numéro de téléphone</li>
              <li>Le nom de votre entreprise</li>
              <li>Toute autre information que vous choisissez de nous communiquer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Utilisation des données</h2>
            <p className="mb-4">
              Les informations que nous collectons sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Répondre à vos demandes et questions</li>
              <li>Vous fournir les services que vous avez demandés</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Vous envoyer des communications marketing si vous y avez consenti</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies et technologies similaires</h2>
            <p className="mb-4">
              Notre site utilise des cookies et des technologies similaires pour améliorer votre expérience, 
              analyser l'utilisation du site et personnaliser le contenu.
            </p>
            <p className="mb-4">
              Vous pouvez configurer votre navigateur pour qu'il refuse tous les cookies ou vous avertisse lorsqu'un 
              cookie est envoyé. Veuillez noter que certaines fonctionnalités du site peuvent ne pas fonctionner 
              correctement si vous désactivez les cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Partage des données</h2>
            <p className="mb-4">
              Nous ne vendons pas, n'échangeons pas et ne transférons pas vos informations personnelles à des tiers, 
              sauf dans les cas suivants :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Avec des prestataires de services qui nous aident à exploiter notre site ou à vous fournir nos services</li>
              <li>Pour respecter une obligation légale ou répondre à une demande des autorités</li>
              <li>Pour protéger nos droits, notre propriété ou notre sécurité</li>
              <li>Avec votre consentement explicite</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Durée de conservation</h2>
            <p className="mb-4">
              Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux fins pour lesquelles 
              elles ont été collectées, ou pour respecter nos obligations légales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
            <p className="mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données personnelles</li>
              <li>Droit à l'effacement de vos données personnelles</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="mb-4">
              Pour exercer ces droits, veuillez nous contacter à contact@afh-agency.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Modifications de cette politique</h2>
            <p className="mb-4">
              Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. La version la plus 
              récente sera toujours disponible sur cette page, avec la date de la dernière mise à jour.
            </p>
            <p className="mb-4">
              Nous vous encourageons à consulter régulièrement cette page pour rester informé de toute modification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="mb-4">
              Si vous avez des questions concernant cette politique de confidentialité, 
              veuillez nous contacter à :
            </p>
            <p className="mb-2"><strong>Email :</strong> contact@afh-agency.com</p>
            <p className="mb-2"><strong>Téléphone :</strong> +33 7 50 01 58 96</p>
            <p className="mb-2"><strong>Adresse :</strong> Strasbourg, France</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
