# personal-website

[poshithaupparapalli.com](https://www.poshithaupparapalli.com/)

the glowing brain on the homepage uses two real medical
scans of a human brain, redrawn live as thousands of tiny glowing particles.

- one is an **mri** (the soft tissue)
- the other is an **angiogram** (the blood vessels, which is the part that
  makes it look alive)

the code reads those images pixel by pixel and drops a particle wherever a
pixel is bright enough. bright arteries become big warm dots, faint tissue
becomes small cool ones. it shimmers, follows your cursor, and drifts on its
own. both scans are public-domain, from wikimedia commons.

i've always been fascinated by the mind and the machine, and thought it'd be
cool to experiment.

## built with

[astro](https://astro.build), a plain html canvas for the brain, and
[leaflet](https://leafletjs.com) for the maps.
