"use strict";

const firstRotation = document.getElementById('rotation1')
const courtGen = new CourtGenerator(firstRotation)
courtGen.createCourt()

courtGen.addPlayer(1, "S")
courtGen.addPlayer(2, "P1")
courtGen.addPlayer(3, "M2")
courtGen.addPlayer(4, "OPP")
courtGen.addPlayer(5, "P2")
courtGen.addPlayer(6, "M1")


const secondRotation = document.getElementById('rotation2')
const courtGen2 = new CourtGenerator(secondRotation)
courtGen2.createCourt()

courtGen2.addPlayer(1, "P1")
courtGen2.addPlayer(2, "M2")
courtGen2.addPlayer(3, "OPP")
courtGen2.addPlayer(4, "P2")
courtGen2.addPlayer(5, "M1")
courtGen2.addPlayer(6, "S")


const thirdRotation = document.getElementById('rotation3')
const courtGen3 = new CourtGenerator(thirdRotation)
courtGen3.createCourt()


courtGen3.addPlayer(1, "M2")
courtGen3.addPlayer(2, "OPP")
courtGen3.addPlayer(3, "P2")
courtGen3.addPlayer(4, "M1")
courtGen3.addPlayer(5, "S")
courtGen3.addPlayer(6, "P1")


const fourthRotation = document.getElementById('rotation4')
const courtGen4 = new CourtGenerator(fourthRotation)
courtGen4.createCourt()

courtGen4.addPlayer(1, "OPP")
courtGen4.addPlayer(2, "P2")
courtGen4.addPlayer(3, "M1")
courtGen4.addPlayer(4, "S")
courtGen4.addPlayer(5, "P1")
courtGen4.addPlayer(6, "M2")


const fifthRotation = document.getElementById('rotation5')
const courtGen5 = new CourtGenerator(fifthRotation)
courtGen5.createCourt(false, false, true, 'court5', 1)

courtGen5.clickRotate.onclick = function() {
    courtGen5.rotateOnce()
    setTimeout(() => {courtGen5.resetTransition()}, 500)
}
courtGen5.clickReset.onclick = function() {
    courtGen5.resetToCurrent()
    setTimeout(() => {courtGen5.resetTransition()}, 500)
}

courtGen5.addPlayer(1, "P2")
courtGen5.addPlayer(2, "M1")
courtGen5.addPlayer(3, "S")
courtGen5.addPlayer(4, "P1")
courtGen5.addPlayer(5, "M2")
courtGen5.addPlayer(6, "OPP")



const sixthRotation = document.getElementById('rotation6')
const courtGen6 = new CourtGenerator(sixthRotation)
courtGen6.createCourt(false, true, false, "court6", 1)

courtGen6.addPlayer(1, "M1")
courtGen6.addPlayer(2, "S")
courtGen6.addPlayer(3, "P1")
courtGen6.addPlayer(4, "M2")
courtGen6.addPlayer(5, "OPP")
courtGen6.addPlayer(6, "P2")



const interactiveCourt = document.getElementById('rotation7')
const courtGen7 = new CourtGenerator(interactiveCourt)
//usage - (bool: only for display? false = interactive court, 
//bool: show score?, string: id for this court, int: initial rotation *typically rotations are counted clock-wise with the first rotation being the one with the setter in position 1
//i.e if setter is in position 1, that's the first rotation
//if the setter is in position 6, that's the secon rotation
courtGen7.createCourt(true, true, true, "court7", 1) 

courtGen7.addPlayer(1, "S", "Micah Christenson", "Setter", "6'6 tall")
courtGen7.addPlayer(2, "P1", "Taylor Sander", "Left side Hitter", "6'4 tall")
courtGen7.addPlayer(3, "M2", "Mitch Stahl", "Middle Blocker", "6'9 tall")
courtGen7.addPlayer(4, "OPP", "Matt Anderson", "Opposite Hitter", "6'10 tall")
courtGen7.addPlayer(5, "P2", "TJ Defalco", "Left side Hitter", "6'5 tall")
courtGen7.addPlayer(6, "M1", "Max Holt", "Middle Blocker", "6'11 tall")

courtGen7.clickRotate.onclick = function() {
    courtGen7.rotateOnce()
    setTimeout(() => {courtGen7.resetTransition()}, 500)
}
courtGen7.clickReset.onclick = function() {
    courtGen7.resetToCurrent()
    setTimeout(() => {courtGen7.resetTransition()}, 500)
}
courtGen7.makeDraggable()