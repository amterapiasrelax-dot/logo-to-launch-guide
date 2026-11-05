import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — AKURA" },
      { name: "description", content: "Como a AKURA trata e protege os dados pessoais de seus clientes e visitantes." },
      { property: "og:title", content: "Política de Privacidade — AKURA" },
      { property: "og:description", content: "Como a AKURA trata e protege os dados pessoais de seus clientes e visitantes." },
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
          <h1 className="display mt-8 text-4xl md:text-6xl">Política de Privacidade</h1>
          <div className="gold-line my-10 w-40" />
          <div className="space-y-6 text-base leading-relaxed">
            <p>
              A AKURA valoriza a privacidade de seus clientes e visitantes. Esta página descreve,
              de forma clara, como as informações compartilhadas conosco são tratadas e protegidas.
            </p>
            <h2 className="pt-4 text-xl font-bold">Dados que coletamos</h2>
            <p>
              Ao entrar em contato pelos nossos canais oficiais (WhatsApp, Instagram, TikTok ou e-mail),
              podemos receber informações como nome, contato e preferências de atendimento, sempre
              fornecidas voluntariamente por você.
            </p>
            <h2 className="pt-4 text-xl font-bold">Uso das informações</h2>
            <p>
              As informações são utilizadas exclusivamente para responder solicitações, organizar
              agendamentos e personalizar a experiência de atendimento. Não vendemos nem compartilhamos
              dados pessoais com terceiros para fins comerciais.
            </p>
            <h2 className="pt-4 text-xl font-bold">Seus direitos</h2>
            <p>
              Você pode solicitar a qualquer momento a correção ou a exclusão dos seus dados pessoais
              pelo e-mail <a href="mailto:akurawellbeing@gmail.com" className="font-bold hover:underline">akurawellbeing@gmail.com</a>.
            </p>
            <p className="pt-4 text-sm opacity-80">Texto provisório, aguardando a versão oficial da AKURA.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
