import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/politica-de-privacidade")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — AKURA" },
      { name: "description", content: "Comment AKURA traite et protège les données personnelles de ses clients et visiteurs." },
      { property: "og:title", content: "Politique de confidentialité — AKURA" },
      { property: "og:description", content: "Comment AKURA traite et protège les données personnelles de ses clients et visiteurs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PoliticaDePrivacidade,
});

function PoliticaDePrivacidade() {
  return (
    <section className="px-6 pt-40 pb-24 md:pt-48">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Eyebrow>AKURA</Eyebrow>
          <h1 className="display mt-8 text-4xl md:text-6xl">Politique de confidentialité</h1>
          <div className="gold-line my-10 w-40" />
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              AKURA respecte la vie privée de ses clients et visiteurs. Cette page décrit
              clairement la manière dont les informations que vous nous communiquez sont traitées et protégées.
            </p>
            <h2 className="pt-4 text-xl font-bold">Données que nous recueillons</h2>
            <p>
              Lorsque vous nous contactez via nos canaux officiels (WhatsApp, Instagram, TikTok ou e-mail),
              nous pouvons recevoir votre nom, vos coordonnées et vos préférences de soins,
              toujours communiqués volontairement par vous.
            </p>
            <h2 className="pt-4 text-xl font-bold">Utilisation des informations</h2>
            <p>
              Les informations sont utilisées exclusivement pour répondre aux demandes, organiser
              les rendez-vous et personnaliser les soins. Nous ne vendons ni ne partageons
              de données personnelles avec des tiers à des fins commerciales.
            </p>
            <h2 className="pt-4 text-xl font-bold">Vos droits</h2>
            <p>
              Vous pouvez demander à tout moment la rectification ou la suppression de vos données personnelles
              par e-mail à <a href="mailto:akurawellbeing@gmail.com" className="font-bold hover:underline">akurawellbeing@gmail.com</a>.
            </p>
            <p className="pt-4 text-sm opacity-80">Texte provisoire, en attente de la version officielle d’AKURA.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
