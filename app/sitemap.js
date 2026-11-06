import { SITE_URL } from "./lib/site";

export const dynamic = "force-static";

// Update a page's date only when that page's content really changes.
const pages = [
  { path: "/", lastModified: "2026-11-06" },
  { path: "/privacy/", lastModified: "2026-11-06" },
  { path: "/terms/", lastModified: "2026-11-06" },
];

export default function sitemap() {
  return pages.map(({ path, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
