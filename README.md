# Civic Constructions & Developments Ltd

A static construction and decorating website. Open `index.html` to preview it locally. The website uses relative paths and works at a GitHub Pages project URL or at the root of a custom domain.

## Publish on GitHub Pages

1. Extract the ZIP. Add its contents, including the empty `.nojekyll` file, to the root of the GitHub repository on the `main` branch.
2. In the repository, go to **Settings → Pages**. Choose **Deploy from a branch**, then **main** and **/ (root)**.
3. Open the GitHub Pages address shown in Settings and check the navigation, photos and enquiry flow.

[GitHub Pages publishing help](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Connect the domain from Cloudflare

1. Once you own the domain, verify it with GitHub and set the custom domain in **Settings → Pages** before pointing DNS at GitHub.
2. In Cloudflare DNS, add the records specified by GitHub for the domain you chose. For a `www` or other subdomain, point a CNAME record to the GitHub account’s Pages hostname, without the repository path. For an apex domain, use the apex records in the GitHub guide. Start with DNS-only records.
3. Once GitHub verifies DNS and issues its certificate, enable **Enforce HTTPS**. Confirm that the domain and its intended www variant resolve.
4. To move search traffic from the old domain, set up redirects on the old host once the new site is live. The source includes fallback pages for the legacy project, quote and contact paths.

[GitHub Pages custom domain help](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Enquiries and content

- The form prepares an email to `info@civicconstructions.co.uk` in the visitor’s email app and offers a copyable draft. The visitor sends the message and can attach tender drawings or photos in their email app. Phone and direct email links are available on the page.
- The contact information and selected photographs were recovered from the live Civic WordPress site. Verify that the public contact details and portfolio descriptions are still current before launch.
- The header SVG is a web redraw of the supplied horizontal logo. Replace `assets/civic-logo.svg` with the original vector artwork when available.

## Multi-page edition
Open index.html to preview. Upload the extracted contents to the existing repository root. Keep the directory structure and accept updates to existing site files. The new pages use local assets and explicit relative links.
The project portfolio uses the four original Civic project photographs.

## Changes in v16
- Homepage gallery now shows only the four completed Civic projects (Slough, London, Banbury, Maidenhead). The five blurry "project idea" photos were removed from the homepage: those files are small images that were enlarged to 1920px, so they cannot be made sharp. They still appear as small thumbnails on the projects page.
- Homepage photos are served as WebP in two sizes (`srcset`): phones download the 960px version and desktops the full-size version. Pages load faster and images stay sharp.
- Public email changed to info@civicconstructions.co.uk on every page and in the enquiry form.
- Postcode labels fixed on the projects page (e.g. Farnborough GU14, Woking GU21, Bracknell RG12, which were cut short).
- Added a canonical URL, a share image (`assets/og-image.jpg`) and a large share-card tag to every page, so links shared on WhatsApp and social media show a photo.
- Removed the duplicate "Send a tender enquiry" link from the homepage services box (the "Invite us to tender" button directly below it remains).

## Changes in v17
- Homepage gallery shows the four projects as equal-sized tiles: four in a row on desktop, two on tablets, and a swipeable row on phones. The arrows appear only when some tiles are off screen.
- Office address updated to: Mount Batter House, Fairacres Industrial Estate, Dedworth Rd, Windsor SL4 4LE.
- Phone number updated on every page.

## Changes in v18
- Fixed the "A home shaped around you" photos on the homepage, which were showing as tall, zoomed-in strips. They are now equal 3:2 tiles showing the whole photo, on desktop and mobile.

## Changes in v19
- On phones, the separate "Home" link next to the Menu button was removed. Home now sits inside the menu with the other pages, on every page.

## Changes in v20
- Added 20 new photos in `assets/work/` (trimmed, sharpened, WebP, with a 640px version for small screens).
- Homepage gallery: 8 equal tiles across homes, interiors, outdoors, places of worship and commercial work (two rows of four on desktop, swipeable on phones).
- New "Places of worship" specialism: homepage section, new service page (`places-of-worship/`), services page card, enquiry form option, and a Places of worship section on the projects page covering mosques, churches and other places of prayer.
- Projects page: new Interiors and Design ideas sections. Computer-generated visuals are labelled as design ideas, not completed projects.
- Phone number changed to the free 0800 274 0240 on every page.

## Changes in v21
- All homepage project photos are equal square tiles (gallery and "A home shaped around you"). The square shape is set on each image as well as in the stylesheet, so a cached or older stylesheet cannot stretch them.
- Homepage gallery: 12 square tiles of Civic work. Top banner photos and the "A home shaped around you" photos replaced with Civic's own photos.
- Photos re-processed for the web: screenshot borders trimmed, levels and colour corrected, noise reduced on the small ones, sharpened, and saved as one WebP each (max 1280px).
- Removed the brick house with the fountain (not a Civic job).
- Service pages (new builds, loft conversions, extensions, garden, kitchen, decorating) and the services page now use Civic photos. The Painting & decorating page has a new "Decor upgrades and renovations" section.
- Removed unused stock images so the whole site is 79 files, under GitHub's 100-file upload limit.

## Uploading to GitHub (important)
GitHub's "Upload files" page accepts at most 100 files at once and drops the rest. Upload the contents of this folder (not the folder itself) to the repository root in one go, commit to `main`, wait a minute, then hard-refresh the site (Cmd+Shift+R).

## Changes in v22
- Removed the cloakroom (WC) photo from the homepage, projects page and decorating page.
- New "Complex staircases" specialism: homepage section with three square staircase tiles, new service page (`staircases/`), services page card, homepage services link and an enquiry form option. The projects page has a new Staircases section.
- New projects: two large homes in Northwood (HA6) and a resin-bound driveway in Richmond, London. Both are in the homepage gallery and on the projects page.
- Northwood photo tidied: the person on the right was cropped out, and the child's chair, bag and ball were removed from the patio.
- Site is 85 files, under GitHub's 100-file upload limit.

## Changes in v23
- Homepage top photos ("From new homes to major builds") restored to the original three.
- Homepage gallery: the Herringbone cloakroom is back, cropped to the herringbone floor and brass trims with no WC in shot. It takes the place of the staircase tile, as staircases have their own homepage section.
- New church renovation project in Oxford. It replaces the mosque photo in the gallery so no photo is repeated on the homepage. It is also on the projects page and the places of worship page, and the places of worship text now covers renovations.
- Site is 93 files, under GitHub's 100-file upload limit.

## Changes in v24
- Homepage gallery: the Herringbone cloakroom tile is replaced by a staircase tile (suspended rod staircase), linking to the Complex staircases page.

## Changes in v25
- The 0800 274 0240 number is now a "Freephone" call button: a copper pill with a phone icon and larger digits. It appears in the top bar (compact version), the homepage "Talk through your project" section, the contact page and the footer on every page. Tapping it on a phone starts a call.

## Changes in v26
- Google Tag Manager (container GTM-MBCS86LN) installed on every page, using Google's official snippet in the <head> plus the <noscript> fallback after <body>.
- Google Consent Mode v2: advertising and analytics cookies default to "denied" until the visitor accepts. A cookie banner (Accept / Reject) appears on the first visit and the choice is remembered. A "Cookie settings" link in every footer reopens it.
- Phone call tracking: every tap on the 0800 number pushes a `phone_call_click` event to the dataLayer, with `phone_number` and `link_location` (topbar, page or footer).

### Setting up the Google Ads phone-call conversion in Tag Manager
1. In Google Ads, create a conversion action: Goals → Conversions → New → Website → "Calls from a website" / "Phone call lead". Copy its Conversion ID and Conversion label.
2. In Tag Manager, create a Trigger: Custom Event, event name `phone_call_click`.
3. Create a Tag: Google Ads Conversion Tracking, paste the ID and label, and use the trigger from step 2.
4. Add a "Conversion Linker" tag firing on All Pages.
5. Preview to test, then Submit / Publish the container.

## Changes in v27
- New **Customer reviews** section at the bottom of the homepage (nothing else on the page changed), plus a new **Reviews** page at `reviews/` with every review and a "Write a review" form.
- The star average, the review count and the 5★–1★ breakdown are calculated automatically from the published reviews. Until the first review is added, the section shows an invitation to write one.
- Names are always shown as first initial + surname (e.g. "S. Khan"). The form shows the reviewer how their name will appear before they send it.

### How a review gets published
1. A customer fills in the form at /reviews/#write. It opens their email app with the review addressed to info@civicconstructions.co.uk.
2. Check the review against your project records.
3. The email ends with a ready-made line, for example:
   {"name":"S. Khan","town":"Slough","service":"House extension","rating":5,"text":"...","date":"2026-11-25"}
4. Paste that line into `assets/reviews.json`, between the square brackets, with a comma between entries:
   [
     {"name":"S. Khan", ...},
     {"name":"J. Smith", ...}
   ]
5. Upload `assets/reviews.json` to GitHub and purge the Cloudflare cache. The review and the updated average appear on the homepage and the Reviews page.

## Changes in v28
- Google Ads tag AW-18594508387 added to every page (after the Consent Mode defaults, before Tag Manager). It records the ad click ID (gclid) from ad visits so later calls can be credited to the ad. `url_passthrough` keeps the click ID working for visitors who reject cookies.
- Every tap on the 0800 number sends the Google Ads **Click to call** conversion (send_to AW-18594508387/tYEwCJuMmsAdEOPcxqJF, value £1). The phone then dials as soon as Google confirms, or after 0.7 seconds at most, so calls still work when Google is blocked.
- The `phone_call_click` event is still sent to Tag Manager.
- **Don't** also create a Google Ads conversion tag for this call in Tag Manager, or every call will be counted twice.
