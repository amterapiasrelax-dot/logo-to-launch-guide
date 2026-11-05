import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal — AKURA" },
      { name: "description", content: "Informações legais e condições de uso do site AKURA." },
      { property: "og:title", content: "Aviso Legal — AKURA" },
      { property: "og:description", content: "Informações legais e condições de uso do site AKURA." },
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
          <h1 className="display mt-8 text-4xl md:text-6xl">Aviso Legal</h1>
          <div className="gold-line my-10 w-40" />
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              Este site é propriedade da AKURA e tem caráter informativo, apresentando nossas
              especialidades, experiências de bem-estar e canais oficiais de contato.
            </p>
            <h2 className="pt-4 text-xl font-bold">Propriedade intelectual</h2>
            <p>
              Todo o conteúdo deste site — incluindo logotipo, textos, fotografias e identidade
              visual — é protegido por direitos autorais e não pode ser reproduzido sem autorização
              prévia da AKURA.
            </p>
            <h2 className="pt-4 text-xl font-bold">Responsabilidade</h2>
            <p>
              As informações publicadas têm fins descritivos e não substituem uma avaliação
              profissional individual. Para orientações personalizadas, entre em contato pelos
              nossos canais oficiais.
            </p>
            <p className="pt-4 text-sm opacity-80">Texto provisório, aguardando a versão oficial da AKURA.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
