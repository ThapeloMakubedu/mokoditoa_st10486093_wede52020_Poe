# Thapelo_mokoditoa_ST10486093_wede52020_Poe
Good day Divine Delights  Website

A responsive website for Divine Delights, a home-based cake bakery in Pretoria West, South Africa. Built with plain HTML and CSS as part of a web development course assignment Part 2: CSS Styling and Responsive Design.

"Made with Love, Served with Honor"

Owner: Wanga Ndou · Built by: Thapelo Mokoditoa

 Pages
File	What's on it
index.html	Home — hero banner, offer highlights, why order from us
about_us.html	Our story, mission, vision, who we bake for, how ordering works
menu.html	Full price list for cakes, cupcakes and bento cakes, plus flavours
order.html	Custom cake order form
contact.html	Contact details and a message form
styles.css	The one external stylesheet used by every page
i did the following changes 
on design
Colours: soft pink and cream, matching the logo --pink-soft, --pink, --plum, --berry, --cream — all set once as CSS variables so the palette lives in one place
Fonts: Parisienne script-style heading, Playfair Display ubheadings, Karla body text — loaded via a single @import at the top of styles.css
Background: a soft pink-to-cream gradient behind the whole site instead of a flat colour
on part 2 what was implemented is 
External stylesheet: one styles.css linked from every page, with a consistent class naming convention (.hero, .card, .field, .button)
Base styles: a * reset for margin/padding/box-sizing, plus the colour variables above
Typography: a clear size scale across h1 → h2 → h3 → p
Layout: CSS Grid for the overall page structure and Flexbox for the header, nav, and card rows
Visual styles: colour, background, border, box-shadow, and :hover / :focus / :active states on links and buttons
Responsive breakpoints: media queries at 900px tablet and 600px mobile that collapse the 3-column card grid down to 2, then 1 column
Relative units: rem for spacing and type, % / ch for widths, so text reflows instead of breaking on smaller screens
Embedded CSS: small, page-specific <style> blocks in index.html and menu.html, layered on top of the external sheet, to show how the cascade lets one page override shared styles
 Testing notes
Tested in Chrome and Edge, and in Chrome's mobile device emulator
Checked that the nav, cards and form all reflow correctly at each breakpoint
Checked keyboard focus states (Tab key) on nav links, form fields and buttons
References
xneelo. (2026). Domain and Hosting Pricing. https://xneelo.co.za
Afrihost. (2026). Web Hosting Packages. https://www.afrihost.com
LaunchLlama. (2026). Hosting and .co.za Domains in South Africa, 2026 Guide. https://www.launchllama.co.za/blogs/hosting-domains-south-africa
WHTop. (2026). Afrihost vs domains.co.za Comparison. https://www.whtop.com/compare/afrihost,domains.co.za
Google Fonts. (n.d.). Parisienne, Playfair Display, Karla. https://fonts.google.com
