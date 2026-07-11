# the plan

## the spine
"neurons that fire together, wire together."
life as a node map: tirupati → jaipur → lehigh → sf.
each place wired into who i am today.

## the vibe
ink on paper. calm colors, playful behavior.

light mode: warm paper white, ink-blue text, the brain as a living
scientific sketch — da vinci notebook meets neuroscience. dark mode:
the night lab — deep navy, glowing particles, the aleph energy. the
toggle isn't just light/dark, it's two moods of the same brain.

serif type (like the essay inspo), classic hyperlink blue as the
accent, photos treated like film prints. warm, analog, human —
a personal archive, not a portfolio. the playfulness comes from
motion and interaction, not loud color.

## locked decisions
- light/dark toggle everywhere, both modes first-class
- default mode: undecided — building both, choosing by looking
- palette: mine, not aleph's — calm blues and whites, no green
- brain: 2d particle cloud with zoom + activity, coded so a 3d
  upgrade later isn't a rewrite
- nav: simple menu always there + brain regions glow as clickable
  shortcuts. explorers get rewarded, nobody gets lost
- movies/books: one data file i edit, one line per title, map
  updates itself
- all pages built now with placeholders, real content added after
  (photos exist, everything else is in my head for now)

## inspo
- the aleph brain (alephneuro.com/brain) — THE reference for home.
  black bg, brain as a cloud of colorful particles (purple/orange/
  pink/blue), sparse serif text. scientific + alive. the colors ARE
  the playful part — dark doesn't mean dead.
- bookshelf world map — dark map, countries light up white as you
  read/watch your way through them. this but for my movies + books.
- 3d photo sphere controlled by hand gestures (webcam) — the photos
  page idea. spin the globe of pictures with your hand.
- film photo grid on white — clean, photos do the talking
- essay page with that serif font — writings should feel like this.
  personal, bookish, photos with little italic captions.
- inmyarchive.com — control the photos with your hands. and the
  whole aesthetic: warm paper bg, floating film photos, hand-drawn
  hand illustrations, serif type, classic hyperlink blue. a personal
  archive, not a portfolio.
- the pinterest read: warm, analog, nostalgic, human. film photos,
  old computers + messy desks, monks, cozy libraries, handwritten
  notes, funny tees. human > sleek. builder energy, not startup gloss.

## pages

### home — the brain
- the interactive brain (current index.html is the seed)
- zoom into it and see activity — neurons firing, pulses traveling
  along the connections
- computer vision control: webcam + hand gestures to play with the
  site. grab the brain, pinch to zoom, gesture to navigate.
  (mediapipe hands, runs fully in-browser, opt-in, mouse fallback)
- yes this is ambitious. building zoom + activity first, cv after.

### projects
- the work. tbd.

### photos
- pictures i've taken. tbd.

### movies & books — the world map
- world map that fills in as i watch movies from around the world
- the quest: a movie from every country
- books too (same map? a shelf? tbd)
- should feel like a game i'm playing, progress-bar energy

### writings
- essays / notes / thoughts
- markdown files so writing a post is just writing a file

### about
- the longer story
- the journey map — places that shaped me, each one a node you can
  tap for a photo and a few lines on what it wired into me:
  - tirupati — small temple town where it started
  - jaipur (JOIS) — boarding school. it's a palace. literally.
  - lehigh — cs + finance, math minor
  - sf — now, interning
- the map IS the "wire together" thesis

## parking lot
- brain passage game
- node map as the actual navigation

## tech
- astro — markdown writings for free, plain html/css/js pages,
  ships almost no javascript except the fun stuff
- canvas for the brain (webgl/three.js if 3d happens later)
- mediapipe hands for the cv stuff, opt-in with mouse fallback
- movies/books live in a single data file (json), map reads it

## how we're building this
1. inspo drop → lock the direction
2. live preview, iterate in the browser, ugly-fast then polish
3. one page at a time, home first
