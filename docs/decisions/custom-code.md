# Custom Code Notes

- **Calculator Experience** — No approved off-the-shelf calculator builder existed, so a bespoke component was built to map pricing plans, add-ons, and custom line items. Hooks + state keep it small and future tweaks are trivial.
- **Start Project multi-step form** — The catalog doesn't ship a wizard UI; implementing it manually keeps us within RHF/Zod while respecting the 4-step intake requirement.
- **Benefits marquee + scroll reveals** — Minor custom motion wrappers were created around Framer Motion because shadcn doesn't include marquee or reveal components out of the box. These are lightweight and reusable.
