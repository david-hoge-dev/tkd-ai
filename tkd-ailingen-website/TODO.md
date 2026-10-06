# TODO List

## Homepage Structure & Content
- [ ] Add a visually separate extra-program area for offers such as Zumba and deepWORK.
- [ ] Review and update trainer bios.

## Taekwondo Information
- [ ] Add a map for the Halle location with parking information.
- [ ] Add an image of the Halle to the upper Taekwondo information section.
- [ ] Add missing trainer photos where needed.

## Zumba
- [ ] Replace the Zumba image with a suitable image.

## deepWORK
- [ ] Add a trainer to the deepWORK section.

## Downloads
- [ ] Make all download tiles the same height.

## Navigation & Branding
- [x] Replace translation-key calls in all page and shared-component templates with their German text, including page headings, errors, empty states, form hints, navigation, footer, accessibility labels, and trainer photo alt text.
- [x] Replace dynamic translated values with German labels/maps: navigation item labels, schedule weekdays and filters, trainer programs/roles/special roles, news categories, and schedule/news date formatting (`de-DE`). Remove `labelKey` abstractions and preserve German search behavior.
- [x] Remove the language toggle component and its navigation-header markup/styles; retain the independent theme toggle with German accessibility labels.
- [x] Remove `TranslationService` injections and imports throughout the app, delete the service, and remove translation initialization/providers from `app.ts` and `app.config.ts`.
- [x] Delete both `src/assets/i18n/de.json` and `src/assets/i18n/en.json`; remove `@ngx-translate/core` and `@ngx-translate/http-loader` from `package.json` and regenerate `package-lock.json`.
- [x] Set the document language in `src/index.html` to German (`lang="de"`) and remove obsolete runtime translation comments/markers and unused imports/styles.
- [x] Update E2E helpers/tests and theme-toggle test notes: remove language-switch coverage and add German-only UI assertions while retaining theme-toggle coverage.
- [x] Audit README, active agent guidance, and test docs for runtime German/English translation claims; retain completed feature specs as historical records.
- [x] Verify source searches are clean and the production build/SSR prerender pass. Unit and E2E execution remain unverified: test execution was skipped and Playwright browsers are not installed in this environment.
- [ ] Replace the default Angular browser-tab icon with the club favicon.

## Images & Performance
- [ ] Minimize image sizes, especially trainer and hero images.
- [ ] Adjust the hero image overlay/filter for dark mode.
- [ ] Review and optimize bundle sizes.
