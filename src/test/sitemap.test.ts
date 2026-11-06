import { describe, expect, it } from "vitest";
import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { isSitemapRouteIncluded, sitemapPathForLocation, sitemapStaticPaths, sitemapXML } from "@/lib/sitemap";

function fixture() {
  const root = createRootRoute({ staticData: { sitemap: false } });
  const home = createRoute({ getParentRoute: () => root, path: "/", staticData: { sitemap: true } });
  const about = createRoute({ getParentRoute: () => root, path: "/sobre", staticData: { sitemap: true } });
  const detail = createRoute({ getParentRoute: () => root, path: "/especialidades/$slug", staticData: { sitemap: true } });
  const sitemap = createRoute({ getParentRoute: () => root, path: "/sitemap.xml", staticData: { sitemap: false } });
  const privateRoute = createRoute({ getParentRoute: () => root, path: "/private", staticData: { sitemap: "exclude-subtree" } });
  const child = createRoute({ getParentRoute: () => privateRoute, path: "/child", staticData: { sitemap: true } });
  const router = createRouter({ routeTree: root.addChildren([home, about, detail, sitemap, privateRoute.addChildren([child])]) });
  return { router, child };
}

describe("public sitemap", () => {
  it("uses the exact AKURA public domain and omits invented dates", () => {
    const xml = sitemapXML("https://www.akurawellbeing.com/", [{ path: "/" }, { path: "/sobre" }]);
    expect(xml).toContain("<loc>https://www.akurawellbeing.com/</loc>");
    expect(xml).toContain("<loc>https://www.akurawellbeing.com/sobre</loc>");
    expect(xml).not.toContain("<lastmod>");
  });
  it("derives static pages and excludes endpoint and private subtrees", () => {
    const { router, child } = fixture();
    expect(sitemapStaticPaths(router)).toEqual(["/", "/sobre"]);
    expect(isSitemapRouteIncluded(child)).toBe(false);
  });
  it("accepts valid dynamic destinations without fragments or unknown pages", () => {
    const { router } = fixture();
    const location = router.buildLocation({ to: "/especialidades/$slug", params: { slug: "akura-touch" } });
    expect(sitemapPathForLocation(router, location, "/especialidades/$slug")).toBe("/especialidades/akura-touch");
    expect(sitemapPathForLocation(router, { pathname: "/missing", publicHref: "/missing" }, "/especialidades/$slug")).toBeUndefined();
    expect(() => sitemapXML("https://www.akurawellbeing.com", [{ path: "/#service" }])).toThrow();
  });
  it("deduplicates locations and preserves supplied authoritative dates", () => {
    const xml = sitemapXML("https://www.akurawellbeing.com", [{ path: "/sobre", lastmod: "2026-10-01" }, { path: "/sobre" }]);
    expect(xml.match(/<url>/g)).toHaveLength(1);
    expect(xml).toContain("<lastmod>2026-10-01</lastmod>");
  });
});