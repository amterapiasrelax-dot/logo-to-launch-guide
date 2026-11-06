import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/aviso-legal")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Mentions légales — AKURA" },
      { name: "description", content: "Informations légales et conditions d’utilisation du site AKURA." },
      { property: "og:title", content: "Mentions légales — AKURA" },
      { property: "og:description", content: "Informations légales et conditions d’utilisation du site AKURA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AvisoLegal,
});

function AvisoLegal() {
  return (
    <section className="px-6 pt-40 pb-24 md:pt-48">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Eyebrow>AKURA</Eyebrow>
          <h1 className="display mt-8 text-4xl md:text-6xl">Mentions légales</h1>
          <div className="gold-line my-10 w-40" />
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              Ce site appartient à AKURA et a une vocation informative. Il présente nos
              spécialités, nos expériences de bien-être et nos canaux officiels de contact.
            </p>
            <h2 className="pt-4 text-xl font-bold">Propriété intellectuelle</h2>
            <p>
              Tout le contenu de ce site — notamment le logo, les textes, les photographies et l’identité
              visuelle — est protégé par le droit d’auteur et ne peut être reproduit sans l’autorisation
              préalable d’AKURA.
            </p>
            <h2 className="pt-4 text-xl font-bold">Responsabilité</h2>
            <p>
              Les informations publiées sont descriptives et ne remplacent pas une évaluation
              professionnelle individuelle. Pour des conseils personnalisés, contactez-nous via
              nos canaux officiels.
            </p>
            <p className="pt-4 text-sm opacity-80">Texte provisoire, en attente de la version officielle d’AKURA.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
