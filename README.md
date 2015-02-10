# Voodoo Donuts Project README

### Project Documentation:

* My project is rough but functional according to the assignment parameters. I modeled the table attributes for each location provided in the google docs link in a craptastically unstyled table which gets written to the html on the page.

* All locations are represented in my code as instances of the Voodoo object.

* The hourly and daily total donut requirements for each location are outputted to the console log.

* Other factors I might include to make the model more accurate could be properties such as:
  * weather, because fewer people would be walking past during a torrential downpour.
  * type of donuts purchased, in order to better predict what types are most likely to be in demand.

### Sources and collaborators:

I would like to thank **Nick Peters** for taking time during his lunch break to help me determine why my JS was not writing to HTML the way I intended. I'd also like to thank **Ryan Sobol** for walking me through numerous sticking points as I worked through this assignment.

### Results of one test-run:

* Here is the part that wrote to HTML. Its not formatted the same as how it displayed on the page.

Voodoo Donuts Model

Location  Hours Hourly foot traffic Percent entering  Donuts per entrant
Location: Downtown  Capitol Hill  South Lake Union  Wedgewood Ballard
Hours:  7,18  7,18  7,18  7,18  7,18
Traffic:  80,220  5,45  180,250 20,60 25,175
Entered:  0.1 0.45  0.05  0.2 0.33
Ordered:  4 2 6 1.5 1

* And here is the part that wrote to the console log.

At 700 hrs, Downtown needed 20 donuts.
script.js:9 At 800 hrs, Downtown needed 64 donuts.
script.js:9 At 900 hrs, Downtown needed 44 donuts.
script.js:9 At 1000 hrs, Downtown needed 81 donuts.
script.js:9 At 1100 hrs, Downtown needed 2 donuts.
script.js:9 At 1200 hrs, Downtown needed 82 donuts.
script.js:9 At 1300 hrs, Downtown needed 80 donuts.
script.js:9 At 1400 hrs, Downtown needed 39 donuts.
script.js:9 At 1500 hrs, Downtown needed 47 donuts.
script.js:9 At 1600 hrs, Downtown needed 79 donuts.
script.js:9 At 1700 hrs, Downtown needed 71 donuts.
script.js:9 At 1800 hrs, Downtown needed 72 donuts.
script.js:25 Total donuts for Downtown today was: 684
script.js:9 At 700 hrs, Capitol Hill needed 22 donuts.
script.js:9 At 800 hrs, Capitol Hill needed 18 donuts.
script.js:9 At 900 hrs, Capitol Hill needed 22 donuts.
script.js:9 At 1000 hrs, Capitol Hill needed 33 donuts.
script.js:9 At 1100 hrs, Capitol Hill needed 32 donuts.
script.js:9 At 1200 hrs, Capitol Hill needed 20 donuts.
script.js:9 At 1300 hrs, Capitol Hill needed 29 donuts.
script.js:9 At 1400 hrs, Capitol Hill needed 40 donuts.
script.js:9 At 1500 hrs, Capitol Hill needed 8 donuts.
script.js:9 At 1600 hrs, Capitol Hill needed 37 donuts.
script.js:9 At 1700 hrs, Capitol Hill needed 1 donuts.
script.js:9 At 1800 hrs, Capitol Hill needed 36 donuts.
script.js:25 Total donuts for Capitol Hill today was: 299
script.js:9 At 700 hrs, South Lake Union needed 12 donuts.
script.js:9 At 800 hrs, South Lake Union needed 51 donuts.
script.js:9 At 900 hrs, South Lake Union needed 14 donuts.
script.js:9 At 1000 hrs, South Lake Union needed 21 donuts.
script.js:9 At 1100 hrs, South Lake Union needed 47 donuts.
script.js:9 At 1200 hrs, South Lake Union needed 64 donuts.
script.js:9 At 1300 hrs, South Lake Union needed 62 donuts.
script.js:9 At 1400 hrs, South Lake Union needed 12 donuts.
script.js:9 At 1500 hrs, South Lake Union needed 30 donuts.
script.js:9 At 1600 hrs, South Lake Union needed 57 donuts.
script.js:9 At 1700 hrs, South Lake Union needed 67 donuts.
script.js:9 At 1800 hrs, South Lake Union needed 65 donuts.
script.js:25 Total donuts for South Lake Union today was: 502
script.js:9 At 700 hrs, Wedgewood needed 4 donuts.
script.js:9 At 800 hrs, Wedgewood needed 16 donuts.
script.js:9 At 900 hrs, Wedgewood needed 12 donuts.
script.js:9 At 1000 hrs, Wedgewood needed 11 donuts.
script.js:9 At 1100 hrs, Wedgewood needed 11 donuts.
script.js:9 At 1200 hrs, Wedgewood needed 9 donuts.
script.js:9 At 1300 hrs, Wedgewood needed 17 donuts.
script.js:9 At 1400 hrs, Wedgewood needed 3 donuts.
script.js:9 At 1500 hrs, Wedgewood needed 17 donuts.
script.js:9 At 1600 hrs, Wedgewood needed 3 donuts.
script.js:9 At 1700 hrs, Wedgewood needed 4 donuts.
script.js:9 At 1800 hrs, Wedgewood needed 8 donuts.
script.js:25 Total donuts for Wedgewood today was: 115
script.js:9 At 700 hrs, Ballard needed 24 donuts.
script.js:9 At 800 hrs, Ballard needed 21 donuts.
script.js:9 At 900 hrs, Ballard needed 48 donuts.
script.js:9 At 1000 hrs, Ballard needed 28 donuts.
script.js:9 At 1100 hrs, Ballard needed 28 donuts.
script.js:9 At 1200 hrs, Ballard needed 51 donuts.
script.js:9 At 1300 hrs, Ballard needed 54 donuts.
script.js:9 At 1400 hrs, Ballard needed 51 donuts.
script.js:9 At 1500 hrs, Ballard needed 8 donuts.
script.js:9 At 1600 hrs, Ballard needed 26 donuts.
script.js:9 At 1700 hrs, Ballard needed 50 donuts.
script.js:9 At 1800 hrs, Ballard needed 1 donuts.
script.js:25 Total donuts for Ballard today was: 389

#### Woot! That was fun!
