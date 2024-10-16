"use strict";
/**
 * Anonymous function
 * @namespace VBCourtMasterDocs
 */
(function (global, document, $) {
    //Developers should only be creating one court with each new CourtGenerator
    /**
     * Creates an object that handles access to functions and (court) objects for an individual court representation
     * @param {*} htmlElmt - The document object that you wish to append a court representation to 
     * @memberof VBCourtMasterDocs
     */
    function CourtGenerator(htmlElmt) {
        this.players = []
        this.playerInfo = null
        this.court = null
        this.clickRotate = null
        this.clickReset = null
        this.htmlEl = htmlElmt
        this.id = null
        this.scoreBoard = null
    }

    CourtGenerator.prototype = {
        /**
         * Creates a court representation with specified features from parameters
         * @param {boolean} showRotationBtns - Display the rotate/reset bars at the top, use with functions rotateOnce, resetToCurrent, and resetTransition to allow animations (refer to JS code of the fourth example in our landing website)
         * @param {boolean} showScore - Display the scoreboard feature, allow scorekeeping 
         * @param {boolean} canDraw - Display the "Draw" option, allows users to sketch on the court representation
         * @param {string} id - Please provide an id of your choice for the created court 
         * @param {number} initRotation - A number between 1 and 6, how to count rotations is up to the developer (typically rotations are counted clock-wise with the first rotation being the one with the setter in position 1)
         * @memberof VBCourtMasterDocs
         */
        createCourt: function (showRotationBtns, showScore, canDraw, id, initRotation) {
            let cid = id
            let myScore = 0
            let theirScore = 0
            let curRotation = initRotation
            let rotationsInfo = [
                { pointsEarned: 0, pointsLost: 0 },
                { pointsEarned: 0, pointsLost: 0 },
                { pointsEarned: 0, pointsLost: 0 },
                { pointsEarned: 0, pointsLost: 0 },
                { pointsEarned: 0, pointsLost: 0 },
                { pointsEarned: 0, pointsLost: 0 },
            ]

            function nextRotation() {
                curRotation = (curRotation + 1) % 7
                if (curRotation == 0) {
                    curRotation++
                }
                $(`#stat${cid}`).html(`STATS (rotation #${curRotation}) <br/> Points earned: ${rotationsInfo[curRotation - 1].pointsEarned} <br/> Points lost: ${rotationsInfo[curRotation - 1].pointsLost}`)
                console.log(curRotation)
            }

            function addToHome() {
                myScore++
                rotationsInfo[curRotation - 1].pointsEarned++
                //console.log(rotationsInfo[curRotation-1].pointsEarned)
                $(`#score${cid}`).html(`HOME - AWAY <br/> ${myScore} &nbsp ${theirScore}`)
                $(`#stat${cid}`).html(`STATS (rotation #${curRotation})<br/> Points earned: ${rotationsInfo[curRotation - 1].pointsEarned} <br/> Points lost: ${rotationsInfo[curRotation - 1].pointsLost}`)
            }
            function removeFromHome() {
                if (myScore > 0) {
                    myScore--
                    rotationsInfo[curRotation - 1].pointsEarned--
                    $(`#score${cid}`).html(`HOME - AWAY <br/> ${myScore} &nbsp ${theirScore}`)
                    $(`#stat${cid}`).html(`STATS (rotation #${curRotation})<br/> Points earned: ${rotationsInfo[curRotation - 1].pointsEarned} <br/> Points lost: ${rotationsInfo[curRotation - 1].pointsLost}`)
                }

            }
            function addToAway() {
                theirScore++
                rotationsInfo[curRotation - 1].pointsLost++
                $(`#score${cid}`).html(`HOME - AWAY <br/> ${myScore} &nbsp ${theirScore}`)
                $(`#stat${cid}`).html(`STATS (rotation #${curRotation})<br/> Points earned: ${rotationsInfo[curRotation - 1].pointsEarned} <br/> Points lost: ${rotationsInfo[curRotation - 1].pointsLost}`)
            }
            function removeFromAway() {
                if (theirScore > 0) {
                    theirScore--
                    rotationsInfo[curRotation - 1].pointsLost--
                    $(`#score${cid}`).html(`HOME - AWAY <br/> ${myScore} &nbsp ${theirScore}`)
                    $(`#stat${cid}`).html(`STATS (rotation #${curRotation})<br/> Points earned: ${rotationsInfo[curRotation - 1].pointsEarned} <br/> Points lost: ${rotationsInfo[curRotation - 1].pointsLost}`)
                }

            }


            const newCourtBg = document.createElement('div')
            newCourtBg.setAttribute('id', `${id}`)
            this.id = id
            newCourtBg.style = 'width: 480px; height: 440px; background-color: #0eadb0'

            const rotateDiv = document.createElement('div')
            rotateDiv.style = 'position: relative; left: 60:px; top: 10px width: 360px; height: 40px; background-color: #7f0000; color: white; text-align: center; font-size: 20px'
            rotateDiv.innerText = "ROTATE"

            const resetDiv = document.createElement('div')
            resetDiv.style = 'position: relative; left: 60:px; top: 40px width: 360px; height: 40px; background-color: #d89b5c; color: white; text-align: center; font-size: 20px'
            resetDiv.innerText = "RESET"

            const newCourt = document.createElement('div')
            newCourt.style = 'position: relative; left: 60px; top: 40px; width: 360px; height: 360px; background-color: #d89b5c; outline: 5px solid white'

            const attackLine = document.createElement('div')
            attackLine.style = 'position: relative; top: 120px; width: 360px; height: 5px; background-color: white'

            const scoreBoard = document.createElement('div')
            scoreBoard.style = 'position: relative; left: 20px; top: 20px; width: 210px; height: 100px; background-color: white; font-size: 25px; text-align: center; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

            const scoreBoardText = document.createElement('div')
            scoreBoardText.style = 'position: relative; width: 210px; height: 100px; background-color: white; font-size: 25px; text-align: center; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            scoreBoardText.setAttribute('id', `score${id}`)

            const statsBoard = document.createElement('div')
            statsBoard.style = 'position: relative; left: 230px; bottom: 100px; width: 210px; height: 100px; background-color: white; font-size: 25px; text-align: center; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            statsBoard.setAttribute('id', `stat${id}`)

            const addHome = document.createElement('div')
            addHome.style = 'position: absolute; left: 65px; top: 65px; width: 30px; height: 30px; border-radius: 50%; color: black; text-align: center; font-size: 30px; z-index: 1000; cursor: pointer'
            addHome.innerHTML = '+'
            const removeHome = document.createElement('div')
            removeHome.style = 'position: absolute; left: 25px; top: 65px; width: 30px; height: 30px; border-radius: 50%; color: black; text-align: center; font-size: 30px; z-index: 1000; cursor: pointer'
            removeHome.innerHTML = '–'
            const addAway = document.createElement('div')
            addAway.style = 'position: absolute; left: 165px; top: 65px; width: 30px; height: 30px; border-radius: 50%; color: black; text-align: center; font-size: 30px; z-index: 1000; cursor: pointer'
            addAway.innerHTML = '+'
            const removeAway = document.createElement('div')
            removeAway.style = 'position: absolute; left: 125px; top: 65px; width: 30px; height: 30px; border-radius: 50%; color: black; text-align: center; font-size: 30px; z-index: 1000; cursor: pointer'
            removeAway.innerHTML = '–'

            const drawMode = document.createElement('div')
            drawMode.style = 'position: relative; left: 60px; top: 50px; width: 80px; height: 20px; background-color: #7f0000; color: white; text-align: center; font-size: 15px; z-index: 1000; cursor: pointer; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            drawMode.innerHTML = 'DRAW'
            drawMode.setAttribute('id', 'drawBtn')

            const clearDrawing = document.createElement('div')
            clearDrawing.style = 'position: absolute; left: 100px; top: 0px; width: 90px; height: 25px; background-color: #7f0000; color: white; text-align: center; font-size: 20px; z-index: 1000; cursor: pointer'
            clearDrawing.innerHTML = 'CLEAR'

            const canvas = document.createElement('canvas')
            canvas.style = "display: none; position:absolute; z-index: 2000; cursor: crosshair; " //border: 2px solid black; for debugging 
            let w = canvas.width = 480;
            let h = canvas.height = 580;;
            canvas.setAttribute('id', `can${id}`)

            let ctx = canvas.getContext('2d');
            //resize();
            //drawing on canvas code inspired from https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse
            // last known position
            let pos = { x: 0, y: 0 };

            window.addEventListener('resize', resize);
            document.addEventListener('mousemove', draw);
            document.addEventListener('mousedown', setPosition);
            document.addEventListener('mouseenter', setPosition);

            // new position from mouse event
            function setPosition(e) {
                const { x, y } = canvas.getBoundingClientRect();
                pos.x = e.clientX - x;
                pos.y = e.clientY - y;
            }

            // resize canvas
            function resize() {
                let can_height = 580 //base height with !showRotationBtns and showScore
                ctx.canvas.width = 480;
                if (!showRotationBtns) {
                    can_height -= 80
                }
                if (!showScore) {
                    can_height -= 100
                }
                ctx.canvas.height = can_height;
            }

            function draw(e) {
                // mouse left button must be pressed
                if (e.buttons !== 1) return;

                ctx.beginPath(); // begin

                ctx.lineWidth = 5;
                ctx.lineCap = 'round';
                ctx.strokeStyle = '#c0392b';

                ctx.moveTo(pos.x, pos.y); // from
                setPosition(e);
                ctx.lineTo(pos.x, pos.y); // to

                ctx.stroke(); // draw it!
            }

            function erase() {
                ctx.clearRect(0, 0, w, h);
            }

            addHome.addEventListener("click", addToHome)
            removeHome.addEventListener("click", removeFromHome)
            addAway.addEventListener("click", addToAway)
            removeAway.addEventListener("click", removeFromAway)
            rotateDiv.addEventListener("click", nextRotation)

            if (canDraw) {
                let drawClicked = false;
                drawMode.addEventListener('mouseover', function (event) {
                    if (event.target.id == 'drawBtn') {
                        event.target.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
                        event.target.style.width = "90px";
                        event.target.style.height = "25px";
                        event.target.style.fontSize = "20px";
                        event.target.style.zIndex = "1000";
                    }

                })

                drawMode.addEventListener('mouseout', function (event) {
                    if (event.target.id == 'drawBtn') {
                        if (!drawClicked) {
                            event.target.style.boxShadow = ""
                            event.target.style.width = "80px";
                            event.target.style.height = "20px";
                            event.target.style.fontSize = "15px";
                            event.target.style.zIndex = "5"
                        }
                    }
                })

                drawMode.addEventListener('click', function (event) {
                    if (event.target.id == 'drawBtn') {
                        if (!drawClicked) {
                            event.target.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
                            event.target.style.width = "90px";
                            event.target.style.height = "25px";
                            event.target.style.fontSize = "20px";
                            event.target.style.zIndex = "1000";
                            erase()
                            $(`#can${id}`).css("display", "block")
                            drawMode.appendChild(clearDrawing)
                        }
                        else if (drawClicked) {
                            event.target.style.boxShadow = ""
                            event.target.style.width = "80px";
                            event.target.style.height = "20px";
                            event.target.style.fontSize = "15px";
                            event.target.style.zIndex = "5"
                            $(`#can${id}`).css("display", "none")
                            drawMode.removeChild(clearDrawing)
                        }
                        drawClicked = !drawClicked;
                    }

                })
                clearDrawing.addEventListener("click", erase)
            }
            newCourt.append(attackLine)

            if (canDraw) {
                newCourtBg.appendChild(canvas)
            }
            if (showRotationBtns) {

                newCourtBg.style.height = "520px"
                rotateDiv.style.cursor = 'pointer';
                resetDiv.style.cursor = 'pointer';
                newCourtBg.append(rotateDiv)
                newCourtBg.append(resetDiv)
                newCourtBg.style.boxShadow = "0 0 10px 10px rgb(75,181,67)"

            }
            if (showScore) {
                if (showRotationBtns) { newCourtBg.style.height = "620px" }
                else if (!showRotationBtns) { newCourtBg.style.height = "540px" }


                scoreBoardText.innerHTML = `HOME - AWAY <br/> ${myScore} &nbsp ${theirScore}`
                statsBoard.innerHTML = `STATS (rotation #${curRotation})<br/> Points earned: ${rotationsInfo[curRotation - 1].pointsEarned} <br/> Points lost: ${rotationsInfo[curRotation - 1].pointsLost}`
                scoreBoard.append(scoreBoardText)
                scoreBoard.append(addHome)
                scoreBoard.append(removeHome)
                scoreBoard.append(addAway)
                scoreBoard.append(removeAway)
                scoreBoard.append(statsBoard)
                newCourtBg.append(scoreBoard)

            }
            newCourtBg.append(newCourt)
            if (canDraw) {
                newCourtBg.appendChild(drawMode)
                resize()
            }


            //const body = $('body') //use id or class so that developer is able to create the court anywhere on the html document (after alpha release)


            this.htmlEl.appendChild(newCourtBg)


            this.court = newCourt
            this.clickRotate = rotateDiv
            this.clickReset = resetDiv
        },

        /**
         * Creates a player representation and adds it on the court at the specified position (only add one player per position)
         * @param {number} position - A number between 1 and 6 signifying where to add the player (according to volleyball positioning - 1 is right back, 6 is middle back, etc.)
         * @param {string} tag - A tag to display on top of the player representation
         * @param {string} name - Name of the player 
         * @param {string} role - Role of the player (Wing spiker, setter, middle blocker, etc.)
         * @param {string} description - Quick description of the player (could be height, weight, spike touch, fun facts, etc.)
         * @memberof VBCourtMasterDocs
         */
        addPlayer: function (position, tag, name, role, description) {
            const playerElement = document.createElement('div')
            const tagElement = document.createTextNode(tag)

            const playerInfo = document.createElement('div')
            playerInfo.style = 'font-size: 20px; display: block; position: relative; left: 70px; top: 60px; width: 180px; height: 120px; background-color: #0eadb0; outline: 5px solid gray; zIndex: 1000; text-align: left; overflow: auto;'

            if (!name) {
                name = "N/A"
            }
            if (!role) {
                role = "N/A"
            }
            if (!description) {
                description = "N/A"
            }
            playerInfo.innerHTML = `NAME: ${name} <br/> ROLE: ${role} <br/> INFO: ${description}`

            playerElement.classList.add("hoverable")
            playerElement.addEventListener('mouseover', function (event) {
                event.target.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
                event.target.style.width = "90px";
                event.target.style.height = "90px";
                event.target.style.zIndex = "1000";
                playerElement.appendChild(playerInfo);
            })
            playerElement.addEventListener('mouseout', function (event) {
                event.target.style.boxShadow = ""
                event.target.style.width = "80px";
                event.target.style.height = "80px";
                event.target.style.zIndex = "5"
                playerElement.removeChild(playerInfo)
            })

            playerElement.addEventListener('drag', this.checkLegal)


            //playerElement.classList.add("draggable")

            playerElement.appendChild(tagElement)
            //these position values are with respect to actual volleyball positions where 1 is the serving position, etc. Developers using this library are assumed to have vb knowledge
            switch (position) {
                case 1:
                    playerElement.style = 'position: absolute; left: 260px; top: 220px; width: 80px; height: 80px; border-radius: 50%; background-color: #7f0000; color: white; text-align: center; transition: 0s'
                    break;
                case 2:
                    playerElement.style = 'position: absolute; left: 260px; top: 20px; width: 80px; height: 80px; border-radius: 50%; background-color: #7f0000; color: white; text-align: center; transition: 0s'
                    break;
                case 3:
                    playerElement.style = 'position: absolute; left: 140px; top: 20px; width: 80px; height: 80px; border-radius: 50%; background-color: #7f0000; color: white; text-align: center; transition: 0s'
                    break;
                case 4:
                    playerElement.style = 'position: absolute; left: 20px; top: 20px; width: 80px; height: 80px; border-radius: 50%; background-color: #7f0000; color: white; text-align: center; transition: 0s'
                    break;
                case 5:
                    playerElement.style = 'position: absolute; left: 20px; top: 220px; width: 80px; height: 80px; border-radius: 50%; background-color: #7f0000; color: white; text-align: center; transition: 0s'
                    break;
                case 6:
                    playerElement.style = 'position: absolute; left: 140px; top: 220px; width: 80px; height: 80px; border-radius: 50%; background-color: #7f0000; color: white; text-align: center; transition: 0s'
            }
            this.court.append(playerElement)


            const newPlayer = { curPos: position, nameTag: tag, playerEl: playerElement, courtId: this.id }
            this.players.push(newPlayer)
            //console.log(this.players)
        },

        /**
         * Animates the player representations back to their current positions (visible after players are dragged to a new position on the court)
         * @memberof VBCourtMasterDocs
         */
        resetToCurrent: function () {
            for (let i = 0; i < this.players.length; i++) {
                const pos = this.players[i].curPos
                this.players[i].playerEl.style["transition"] = 'all 0.5s ease-out'
                switch (pos) {
                    case 6:

                        this.players[i].playerEl.style.left = '140px'
                        this.players[i].playerEl.style.top = '220px'
                        break;
                    case 1:
                        this.players[i].playerEl.style.left = '260px'
                        this.players[i].playerEl.style.top = '220px'
                        break;
                    case 2:
                        this.players[i].playerEl.style.left = '260px'
                        this.players[i].playerEl.style.top = '20px'
                        break;
                    case 3:
                        this.players[i].playerEl.style.left = '140px'
                        this.players[i].playerEl.style.top = '20px'
                        break;
                    case 4:
                        this.players[i].playerEl.style.left = '20px'
                        this.players[i].playerEl.style.top = '20px'
                        break;
                    case 5:
                        this.players[i].playerEl.style.left = '20px'
                        this.players[i].playerEl.style.top = '220px'
                        break;
                }
            }
            $(`#${this.players[0].courtId}`).css("box-shadow", "0 0 10px 10px rgb(75,181,67)") //success halo around court
            return 1
        },

        /**
         * Animates the player representations to their next positions (according to volleyball rules)
         * @memberof VBCourtMasterDocs
         */
        rotateOnce: function () {
            for (let i = 0; i < this.players.length; i++) {
                const pos = this.players[i].curPos
                this.players[i].playerEl.style["transition"] = 'all 0.5s ease-out'

                switch (pos) {
                    case 1:

                        this.players[i].playerEl.style.left = '140px'
                        this.players[i].playerEl.style.top = '220px'
                        this.players[i].curPos = 6
                        break;
                    case 2:
                        this.players[i].playerEl.style.left = '260px'
                        this.players[i].playerEl.style.top = '220px'
                        this.players[i].curPos = 1
                        break;
                    case 3:
                        this.players[i].playerEl.style.left = '260px'
                        this.players[i].playerEl.style.top = '20px'
                        this.players[i].curPos = 2
                        break;
                    case 4:
                        this.players[i].playerEl.style.left = '140px'
                        this.players[i].playerEl.style.top = '20px'
                        this.players[i].curPos = 3
                        break;
                    case 5:
                        this.players[i].playerEl.style.left = '20px'
                        this.players[i].playerEl.style.top = '20px'
                        this.players[i].curPos = 4
                        break;
                    case 6:
                        this.players[i].playerEl.style.left = '20px'
                        this.players[i].playerEl.style.top = '220px'
                        this.players[i].curPos = 5
                        break;
                }
            }
            for (let i = 0; i < this.players.length; i++) {
                dragElement(this.players[i].playerEl, this.players)
            }
            $(`#${this.players[0].courtId}`).css("box-shadow", "0 0 10px 10px rgb(75,181,67)") //success halo around court
            return 1
        },

        /**
         * Resets players' transition attribute, please call with setTimeout after rotateOnce/resetToCurrent (as shown in examples)
         * @memberof VBCourtMasterDocs
         */
        resetTransition: function () {
            for (let j = 0; j < this.players.length; j++) {
                this.players[j].playerEl.style["transition"] = '0s'
            }
        },

        /**
         * Makes player representations draggable, indicates whether current player positioning is legal or not via a green/red hue around the court
         * @memberof VBCourtMasterDocs
         */
        makeDraggable: function () {
            const dragEls = this.players.map(player => player.playerEl)
            for (let i = 0; i < dragEls.length; i++) {
                dragEls[i].style.cursor = 'move';
                dragElement(dragEls[i], this.players)
                //console.log(dragEls[i])
            }
        }
    }

    //source: https://www.w3schools.com/howto/howto_js_draggable.asp
    /**
     * Allow players to be dragged
     * @param {*} elmnt 
     * @param {*} players 
     */
    function dragElement(elmnt, players) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        let cur_player = null
        let playerIn1 = null
        let playerIn2 = null
        let playerIn3 = null
        let playerIn4 = null
        let playerIn5 = null
        let playerIn6 = null
        elmnt.onmousedown = dragMouseDown;

        for (let i = 0; i < players.length; i++) {
            if (players[i].playerEl === elmnt) {
                cur_player = players[i]
            }
            if (players[i].curPos == 1) {
                playerIn1 = players[i]
            }
            if (players[i].curPos == 2) {
                playerIn2 = players[i]
            }
            if (players[i].curPos == 3) {
                playerIn3 = players[i]
            }
            if (players[i].curPos == 4) {
                playerIn4 = players[i]
            }
            if (players[i].curPos == 5) {
                playerIn5 = players[i]
            }
            if (players[i].curPos == 6) {
                playerIn6 = players[i]
            }
        }

        //checks overlap rules and changes color of border to indicate legality (green for legal, red for illegal)
        function checkLegal() {
            switch (cur_player.curPos) {
                case 1:
                    if (cur_player.playerEl.offsetTop < playerIn2.playerEl.offsetTop || cur_player.playerEl.offsetLeft < playerIn6.playerEl.offsetLeft) {
                        $(`#${cur_player.courtId}`).css("box-shadow", "0 0 10px 10px red") //error halo around court
                    }
                    else {
                        $(`#${cur_player.courtId}`).css("box-shadow", "0 0 10px 10px rgb(75,181,67)") //success halo around court
                    }
                    break;
                case 2:
                    if (cur_player.playerEl.offsetTop > playerIn1.playerEl.offsetTop || cur_player.playerEl.offsetLeft < playerIn3.playerEl.offsetLeft) {
                        $(`#${cur_player.courtId}`).css("box-shadow", "0 0 10px 10px red") //error halo around court
                    }
                    else {
                        $(`#${cur_player.courtId}`).css("box-shadow", "0 0 10px 10px rgb(75,181,67)") //success halo around court
                    }
                    break;
                case 3:
                    if (cur_player.playerEl.offsetTop > playerIn6.playerEl.offsetTop || cur_player.playerEl.offsetLeft < playerIn4.playerEl.offsetLeft || cur_player.playerEl.offsetLeft > playerIn2.playerEl.offsetLeft) {
                        $(`#${cur_player.courtId}`).css("box-shadow", "0 0 10px 10px red") //error halo around court
                    }
                    else {
                        $(`#${cur_player.courtId}`).css("box-shadow", "0 0 10px 10px rgb(75,181,67)") //success halo around court
                    }
                    break;
                case 4:
                    if (cur_player.playerEl.offsetTop > playerIn5.playerEl.offsetTop || cur_player.playerEl.offsetLeft > playerIn3.playerEl.offsetLeft) {
                        $(`#${cur_player.courtId}`).css("box-shadow", "0 0 10px 10px red") //error halo around court
                    }
                    else {
                        $(`#${cur_player.courtId}`).css("box-shadow", "0 0 10px 10px rgb(75,181,67)") //success halo around court
                    }
                    break;
                case 5:
                    if (cur_player.playerEl.offsetTop < playerIn4.playerEl.offsetTop || cur_player.playerEl.offsetLeft > playerIn6.playerEl.offsetLeft) {
                        $(`#${cur_player.courtId}`).css("box-shadow", "0 0 10px 10px red") //error halo around court
                    }
                    else {
                        $(`#${cur_player.courtId}`).css("box-shadow", "0 0 10px 10px rgb(75,181,67)") //success halo around court
                    }
                    break;
                case 6:
                    if (cur_player.playerEl.offsetTop < playerIn3.playerEl.offsetTop || cur_player.playerEl.offsetLeft < playerIn5.playerEl.offsetLeft || cur_player.playerEl.offsetLeft > playerIn1.playerEl.offsetLeft) {
                        $(`#${cur_player.courtId}`).css("box-shadow", "0 0 10px 10px red") //error halo around court
                    }
                    else {
                        $(`#${cur_player.courtId}`).css("box-shadow", "0 0 10px 10px rgb(75,181,67)") //success halo around court
                    }
                    break;
            }
        }

        function dragMouseDown(e) {
            e = e || window.event;
            pos3 = parseInt(e.clientX);
            pos4 = parseInt(e.clientY);
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            return false;
        }

        function elementDrag(e) {
            e = e || window.event;
            pos1 = pos3 - parseInt(e.clientX);
            pos2 = pos4 - parseInt(e.clientY);
            pos3 = parseInt(e.clientX);
            pos4 = parseInt(e.clientY);
            if (elmnt.offsetTop > -130 && elmnt.offsetTop <= 330) {
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                if (elmnt.offsetTop <= -130) {
                    elmnt.style.top = (elmnt.offsetTop - pos2 + 25) + "px";
                    closeDragElement();
                }
                if (elmnt.offsetTop >= 330) {
                    elmnt.style.top = (elmnt.offsetTop - pos2 - 25) + "px";
                    closeDragElement();
                }
            }

            if (elmnt.offsetLeft > -80 && elmnt.offsetLeft <= 350) {
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                if (elmnt.offsetLeft <= -80) {
                    elmnt.style.left = (elmnt.offsetLeft - pos1 + 25) + "px";
                    closeDragElement();
                }
                if (elmnt.offsetLeft >= 350) {
                    elmnt.style.left = (elmnt.offsetLeft - pos1 - 25) + "px";
                    closeDragElement();
                }
            }
            checkLegal()
        }

        function closeDragElement() {

            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
    global.CourtGenerator = global.CourtGenerator || CourtGenerator

})(window, window.document, $);
