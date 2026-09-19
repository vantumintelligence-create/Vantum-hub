import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
import { FloatingCta } from "../components/site/floating-cta";
import appMetaJson from "../app-meta.json";

declare const __HF_DESIGN_INSPECTOR__: boolean;

const DEFAULT_TITLE = "Vantum Intelligence";
const DEFAULT_DESCRIPTION = "The #1 Client Acquisition System for Growing Businesses.";

type AppMeta = {
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  favicon_url?: string | null;
  og_video_url?: string | null;
};

const appMeta = appMetaJson as AppMeta;
const APP_HOST_ZONES = ["higgsfield.app", "higgsfield-dev.app"];

function toOwnAssetUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("/")) return value;
  try {
    const u = new URL(value);
    const isAppHost = APP_HOST_ZONES.some(
      (zone) => u.hostname === zone || u.hostname.endsWith(`.${zone}`),
    );
    if (isAppHost) return u.pathname + u.search;
    return value;
  } catch {
    return value;
  }
}

function buildHead(meta: AppMeta) {
  const title = meta.og_title ?? DEFAULT_TITLE;
  const description = meta.og_description ?? DEFAULT_DESCRIPTION;
  const ogImage = toOwnAssetUrl(meta.og_image_url);
  const favicon = toOwnAssetUrl(meta.favicon_url);
  const ogVideo = toOwnAssetUrl(meta.og_video_url);

  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "author", content: DEFAULT_TITLE },
      { name: "theme-color", content: "#0e0d0c" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: DEFAULT_TITLE },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: ogImage ? "summary_large_image" : "summary" },
      ...(ogImage
        ? [
            { property: "og:image", content: ogImage },
            { name: "twitter:image", content: ogImage },
          ]
        : []),
      ...(ogVideo ? [{ property: "og:video", content: ogVideo }] : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap",
      },
      ...(favicon ? [{ rel: "icon", href: favicon }] : []),
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicon-16.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/assets/icon-192.png" },
      { rel: "shortcut icon", href: "/assets/favicon.ico" },
      { rel: "apple-touch-icon", href: "/assets/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  };
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-[#0e0d0c] px-4 text-center text-[#f5f1e8]">
      <span className="font-mono-vt text-xs uppercase tracking-[0.2em] text-[#c9a24b]">404</span>
      <h1 className="font-display text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-sm text-sm text-[#f5f1e8]/60">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-2 rounded-md bg-[#c9a24b] px-5 py-2.5 text-sm font-medium text-[#0e0d0c] transition-colors hover:bg-[#e3bd6c]"
      >
        Go home
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportHiggsfieldError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-[#0e0d0c] px-4 text-center text-[#f5f1e8]">
      <h1 className="font-display text-2xl font-semibold tracking-tight">This page did not load</h1>
      <p className="max-w-sm text-sm text-[#f5f1e8]/60">
        Something went wrong on our end. You can try refreshing or head back home.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="rounded-md bg-[#c9a24b] px-5 py-2.5 text-sm font-medium text-[#0e0d0c] transition-colors hover:bg-[#e3bd6c]"
        >
          Try again
        </button>
        <a
          href="/"
          className="rounded-md border border-[#f5f1e8]/25 px-5 py-2.5 text-sm font-medium text-[#f5f1e8] transition-colors hover:border-[#f5f1e8]/50"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#0e0d0c] text-[#f5f1e8] antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (!__HF_DESIGN_INSPECTOR__) {
      return;
    }
    void import("../module/design-inspector/runtime")
      .then(({ installHiggsfieldDesignInspector }) => {
        installHiggsfieldDesignInspector();
      })
      .catch((error) => {
        reportHiggsfieldError(
          error instanceof Error ? error : new Error("Failed to load design inspector"),
          { boundary: "higgsfield_design_inspector_import" },
        );
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <FloatingCta />
      <Outlet />
    </QueryClientProvider>
  );
}
