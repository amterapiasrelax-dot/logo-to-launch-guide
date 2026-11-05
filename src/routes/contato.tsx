import { createFileRoute } from "@tanstack/react-router";
import stillLife from "@/assets/still-life.jpg";
import { useI18n } from "@/lib/i18n";
import { ContactBlock, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — AKURA" },
      { name: "description", content: "Agende sua experiência AKURA pelo WhatsApp." },
      { property: "og:title", content: "Contato — AKURA" },
      { property: "og:description", content: "Agende sua experiência pelo WhatsApp." },
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
      <PageHero eyebrow={t.nav.contact} title={t.contactTitle} text={t.contactText} image={stillLife} />
      <ContactBlock />
    </>
  );
}
