# js-library-lichenke

### Landing page: https://boiling-headland-10067.herokuapp.com/
### Documentation: https://boiling-headland-10067.herokuapp.com/docs/VBCourtMasterDocs.html 

---

### Getting started

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


