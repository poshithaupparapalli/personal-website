# the plan (v3 — the journal)

## the idea
the site is my journal / scrapbook. cream paper, ink, red string.
every page is a spread in it. pulled straight from the pinterest
board: print editorial + taped-in photos + handwritten notes +
annotated maps.

## the vibe
- cream paper bg, near-black ink, one red accent (#b23a2f)
- instrument serif for big titles, newsreader for reading,
  caveat for handwriting, ibm plex mono for tiny labels
- photos look taped in. maps look hand-annotated. captions are
  numbered like (1) (2) (3)
- light only for now. dark mode is a later problem

## pages
- **home** — the magazine cover. clean about-me, not a lot
  happening on purpose. masthead, one photo, table of contents
- **food** — real leaflet map, pins in my handwriting. data in
  src/data/food.json
- **movies** — a film from every country. world map fills in from
  src/data/films.json
- **books** — same quest, slower medium. src/data/books.json
- **projects** — ledger list of things i build
- **photos** — drop images in public/photos/, they show up taped in

## cut (for now)
- facts generator — parked
- writings — parked, collection still exists if i want it back
- dark mode, hand gestures, brain stuff — v2 is stashed in git
  (`git stash list`) if i ever miss the ascii brain

## how to feed it
- food: add a row to src/data/food.json (name, city, note, lat, lng)
- movies/books: add to the json. new country? add its centroid to
  src/components/QuestMap.astro
- photos: drop files in public/photos/. filename becomes the caption
- cover photo: public/cover.jpg
