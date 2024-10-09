## VBCourtMaster.js | https://vb-courtmaster.onrender.com
---

### About The Project

[![VBCourtMaster screenshot][main-screenshot]](https://vb-courtmaster.onrender.com)

**VBCourtMaster.js** is a Javascript library that allows developers to represent player positions of one team in a volleyball court, it also allows them to display animations of player rotations along with other
volleyball related functionality.

This library could be used by developers in many different ways such as a volleyball educational web app, a volleyball organization web app which helps coaches present information to their teams in a clearer manner, a web app that tracks live volleyball matches and displays information about team rosters and line-ups, among many others.


---

### Getting started (Developers)

- Start by including the jQuery script in your website
```html
<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```                    
                
- Then include VBCourtMaster's script
```html
<script defer type="text/javascript" src='/src/vb-court-master.js'></script>
```                    
                
- You are now ready to use the library and create your volleyball court representations, refer to the examples provided in our landing page.

- A basic set up for a court just used for displaying the players and their information is as follows:
```js                    
const firstExample = document.getElementById('example1')
const court1 = new CourtGenerator(firstExample)
court1.createCourt()

court1.addPlayer(1, "OPP", "Yuji Nishida", "Opposite Hitter", "6'1")
court1.addPlayer(2, "P2", "Meilin Yuanfei", "Left side Hitter", "6'0 in heels")
court1.addPlayer(3, "M1", "Haku Lee", "Middle Blocker", "6'3")
court1.addPlayer(4, "S", "Masahiro Sekita", "Setter", "5'9")
court1.addPlayer(5, "P1", "Yuki Ishikawa", "Left side Hitter", "6'3")
court1.addPlayer(6, "M2", "Akihiro Yamauchi", "Middle BLocker", "6'8")
```


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[main-screenshot]: images/landing-screenshot.png
