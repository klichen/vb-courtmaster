"use strict"

const firstExample = document.getElementById('example1')
const court1 = new CourtGenerator(firstExample)
court1.createCourt()

court1.addPlayer(1, "OPP", "Yuji Nishida", "Opposite Hitter", "6'1")
court1.addPlayer(2, "P2", "Meilin Yuanfei", "Left side Hitter", "6'0 in heels")
court1.addPlayer(3, "M1", "Haku Lee", "Middle Blocker", "6'3")
court1.addPlayer(4, "S", "Masahiro Sekita", "Setter", "5'9")
court1.addPlayer(5, "P1", "Yuki Ishikawa", "Left side Hitter", "6'3")
court1.addPlayer(6, "M2", "Akihiro Yamauchi", "Middle BLocker", "6'8")

const secondExample = document.getElementById('example2')
const court2 = new CourtGenerator(secondExample)
court2.createCourt(false, false, true, 'court5', 1)

court2.addPlayer(1, "OPP", "Yuji Nishida", "Opposite Hitter", "6'1")
court2.addPlayer(2, "P2", "Ran Takahashi", "Left side Hitter", "6'2")
court2.addPlayer(3, "M1", "Haku Lee", "Middle Blocker", "6'3")
court2.addPlayer(4, "S", "Masahiro Sekita", "Setter", "5'9")
court2.addPlayer(5, "P1", "Yuki Ishikawa", "Left side Hitter", "6'3")
court2.addPlayer(6, "M2", "Akihiro Yamauchi", "Middle BLocker", "6'8")

const thirdExample = document.getElementById('example3')
const court3 = new CourtGenerator(thirdExample)
court3.createCourt(false, true, false, "court6", 1)

court3.addPlayer(1, "OPP", "Daichi Sawamura", "Opposite Hitter", "5'10")
court3.addPlayer(2, "P2", "Ryunosuke Tanaka", "Left side Hitter", "5'9")
court3.addPlayer(3, "M1", "Tsukishima Kei", "Middle Blocker", "6'3")
court3.addPlayer(4, "S", "Tobio Kageyama", "Setter", "6'1")
court3.addPlayer(5, "P1", "Asahi Azumane", "Left side Hitter", "6'2")
court3.addPlayer(6, "M2", "Shoyo Hinata", "Middle BLocker", "5'6")

const fourthExample = document.getElementById('example4')
const court4 = new CourtGenerator(fourthExample)
//usage - (bool: only for display? false = interactive court, 
//bool: show score?, string: id for this court, int: initial rotation *typically rotations are counted clock-wise with the first rotation being the one with the setter in position 1
//i.e if setter is in position 1, that's the first rotation
//if the setter is in position 6, that's the secon rotation
court4.createCourt(true, true, true, "court7", 1) 

court4.addPlayer(1, "S", "Micah Christenson", "Setter", "6'6 tall")
court4.addPlayer(2, "P1", "Taylor Sander", "Left side Hitter", "6'4 tall")
court4.addPlayer(3, "M2", "Mitch Stahl", "Middle Blocker", "6'9 tall")
court4.addPlayer(4, "OPP", "Matt Anderson", "Opposite Hitter", "6'10 tall")
court4.addPlayer(5, "P2", "TJ Defalco", "Left side Hitter", "6'5 tall")
court4.addPlayer(6, "M1", "Max Holt", "Middle Blocker", "6'11 tall")

court4.clickRotate.onclick = function() {
    court4.rotateOnce()
    setTimeout(() => {court4.resetTransition()}, 500)
}
court4.clickReset.onclick = function() {
    court4.resetToCurrent()
    setTimeout(() => {court4.resetTransition()}, 500)
}
court4.makeDraggable()


let tabs = document.querySelectorAll('.tabs__toggle'),
    contents = document.querySelectorAll('.tabs__content');

console.log(tabs)

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        
        let tab_siblings = getSiblings(tab);
        let content_siblings = getSiblings(tab.parentNode)

        for(let i = 0; i < content_siblings[0].children.length; i++)
        {
            content_siblings[0].children[i].classList.remove('is-active')
        }
        
        tab_siblings.forEach((tab) => {
            tab.classList.remove('is-active');
        });

        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    })
})

let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};