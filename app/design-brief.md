# Design brief — Vantum Intelligence

## Design read
A growth-marketing and AI-automation agency for local/regional businesses (home
services, medical, real estate, automotive, law, e-commerce); premium,
confident, high-stakes-but-approachable B2B register.

## Concept spine
The site is a monument: a single gold-lit monolithic "V" landmark that recurs
as the hero centerpiece, the nav mark, and the closing sunrise-over-mountains
CTA, framing the agency as a fixed point of stability a business builds
growth around.

## Delivery tier
cinema (Lenis+GSAP scroll reveals, Tier-1 hero mechanic, motivated micro-motion)
per the Non-animated intake choice; no mandatory scroll-scrub camera journey.

## Locked palette
User supplied an exact reference screenshot to replicate faithfully: deep
near-black ground (#0b0906 / #141210) with a single warm-gold accent
(#c9a24b / #e3bd6c), off-white text (#f5f1e8). This sits in the
graphite+amber banned family, overridden per the user's explicit,
image-supplied brand colors (design-recipe.md section 2 override clause):
the user asked for an exact copy of this specific design.

## Locked type
Display: Space Grotesk (geometric, matches the reference's bold tight
headline). Body/UI: Inter. Mono (eyebrows/labels): IBM Plex Mono.

## Animation mode
non-animated — user picked "Non-animated" at intake. Tier-1 mechanic: hero
visual (generated monolith artwork) with scroll-parallax + staggered
headline build on mount + magnetic hero CTA (GSAP + Lenis). No passive
autoplay loop as the sole mechanic.

## Section plan
1. Nav (fixed, single line)
2. Hero — split, generated monolith visual right, copy left
3. Trust strip — logo marquee/grid (real brand SVGs)
4. Services — 2-col zigzag cards
5. Process — 4-step horizontal rail
6. Results — 3-card outcome bento (qualitative, no invented stats)
7. About — split text + statement panel
8. Industries — chip/pill row
9. CTA — full-bleed image band
10. Contact — split form + info
Footer.
10 sections; eyebrows on Hero/Services/Process/CTA only (4 <= ceil(10/3)=4).

## Asset plan
- Hero monolith visual (2 candidates, generated)
- CTA/footer mountain-sunburst plate (generated)
- Gold V logomark (generated, background-removed, derives favicon/touch-icon)
- Interior photo for the ad-mockup laptop screen (generated)
- Custom icon set: megaphone, gear, bar-chart, bolt, people, chat, target, play
  (one generated sheet, sliced + background-removed)
- Real brand SVGs (hand-authored accurate marks): Meta, Google, TikTok,
  GoHighLevel, Zapier, OpenAI — trust-strip only, logos only, no captions
- OG/marketplace cover via app-cover.md pipeline

## CTA inventory (bespoke chrome, garments rationed)
- Nav "Book a Strategy Call": compact rounded-md button, hover brightness lift
- Hero primary "Book a Strategy Call": larger button, arrow slides on hover
- Hero secondary "See How It Works": outline + play-disc, fills gold on hover,
  scrolls to Process
- Services "Learn More" (x2, same intent): drawing-underline arrow link — the
  ONE rationed garment used on this page
- CTA band "Get Your Free Audit": stamp/press button, skews + insets on
  :active, gold glow on hover
- Contact "Send Message": corner-bracket viewfinder button, brackets slide in
  on hover/focus, real idle/loading/success/error states

Corner language: all-soft (12-16px) radius scale, sharp full-bleed images.
