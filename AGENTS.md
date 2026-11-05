<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep one French content source in `src/lib/i18n.tsx` with `fr-FR` on the root document; browser/Google translation replaces manually maintained language catalogs.
- Keep confirmed procedures/services in their owning specialty's shared data and render them on its existing detail route; this preserves area URLs and avoids country or service page duplication.
- Derive home carousel slides from confirmed service photography and link to the owning area plus service anchor; never infer a procedure name from an unlabeled area image.
- Specialty and service photos are optional; render text-only when absent and exclude imageless services from the carousel to preserve information without replacement photos.
- Keep the outgoing carousel photo opaque beneath the incoming fading photo until the transition completes; this avoids exposing the background during crossfades. Decode approved photos before starting autoplay.
- Render the header country strip from the single French country list with two identical repeated sequences; equal-width tracks ensure seamless motion without duplicate content sources.
- Serve approved photographs from checked-in `public/images` originals using `/images/` URLs; this keeps exports portable to Vercel without Lovable's internal asset gateway. Keep existing bundled logos and images as normal Vite imports.
