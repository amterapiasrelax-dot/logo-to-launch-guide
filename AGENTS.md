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

- Keep one Portuguese content source in `src/lib/i18n.tsx` with `pt-BR` on the root document; browser/Google translation replaces manually maintained language catalogs.
- Keep confirmed procedures/services in their owning specialty's shared data and render them on its existing detail route; this preserves area URLs and avoids country or service page duplication.
- Derive home carousel slides from confirmed service photography and link to the owning area plus service anchor; never infer a procedure name from an unlabeled area image.
