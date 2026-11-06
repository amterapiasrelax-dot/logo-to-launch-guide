import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { isSitemapRouteIncluded, sitemapPathForLocation, sitemapStaticPaths, sitemapXML, type SitemapEntry } from "@/lib/sitemap";
import { specialties } from "@/lib/specialties";

const BASE_URL = "https://www.akurawellbeing.com";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));
        const routeId = "/especialidades/$slug";
        if (isSitemapRouteIncluded(router.routesById[routeId])) {
          for (const specialty of specialties) {
            const location = router.buildLocation({
              to: "/especialidades/$slug", params: { slug: specialty.slug }, search: () => ({}), hash: "",
            });
            const path = sitemapPathForLocation(router, location, routeId);
            if (path) entries.push({ path });
          }
        }
        if (entries.length === 0) {
          return new Response("No public pages are included in the sitemap", {
            status: 404, headers: { "Cache-Control": "no-store" },
          });
        }
        // No authoritative per-page modification dates exist; do not invent lastmod.
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});