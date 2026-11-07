# MZYS Youth Week Photo Maker
A static, browser-local photo maker for 2026 MZYS Youth Week. Serve dist/ with any static web server. No accounts, database, photo uploads or API keys. Original church artwork remains a local immutable JPEG; only the countdown footprint is covered by a canvas photo slot. The original portraits are never regenerated.

Upload JPG/PNG/WEBP/AVIF, optional name, optional local background removal, zoom/position or drag, PNG download and supported device file sharing. Background removal lazy-loads @imgly/background-removal 1.7.0 and its model from the provider/CDN. A connection is required on first use, and device performance varies. Errors preserve the original image and keep download available.

Source is available at /source.zip. Application code is offered under AGPL-3.0-or-later, matching the background-removal dependency’s open-source terms. User-provided church artwork is excluded from this code licence and remains its owner’s property. See dist/THIRD_PARTY_NOTICES.txt.

## Youth Week invitation
/experience/ is a separate responsive invitation with a real 60-second introduction without a skip button, a Christ-centred reveal, original programme flyer and daily schedule. Saturday kickoff is updated to 3 p.m.; picnic/session 5:30 p.m. The QR asset points to https://mzysyouthweek-dist.vercel.app/experience/. Countdown and sharing run locally; there are no third-party advertisements or trackers.
