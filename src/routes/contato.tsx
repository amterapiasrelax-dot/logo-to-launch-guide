import { createFileRoute } from "@tanstack/react-router";
const salaSpa = "/images/sala-spa-akura.png";
import { useI18n } from "@/lib/i18n";
import { ContactBlock, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contact — AKURA" },
      { name: "description", content: "Réservez votre expérience AKURA par WhatsApp." },
      { property: "og:title", content: "Contact — AKURA" },
      { property: "og:description", content: "Réservez votre expérience par WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

function Contato() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t.nav.contact} title={t.contactTitle} text={t.contactText} image={salaSpa} />
      <ContactBlock />
    </>
  );
}
