function Summon_Pipe_2(num: number) {
    strip.setMatrixColor(3, num, neopixel.colors(NeoPixelColors.Green))
    strip.setMatrixColor(4, num, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    Game_Override = false
    strip.clear()
    Clear_Neopixel()
    if (Menu == true) {
        if (Game_Toggle == 0) {
            strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Yellow))
            B.showColor(neopixel.colors(NeoPixelColors.Yellow))
            strip.setMatrixColor(4, 1, neopixel.colors(NeoPixelColors.Yellow))
            C.showColor(neopixel.colors(NeoPixelColors.Yellow))
            strip.setMatrixColor(4, 2, neopixel.colors(NeoPixelColors.Yellow))
            strip.setMatrixColor(2, 3, neopixel.colors(NeoPixelColors.Yellow))
            strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.Yellow))
            strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
            Game_Toggle += 1
        } else if (Game_Toggle == 1) {
            strip.setMatrixColor(1, 1, neopixel.colors(NeoPixelColors.Green))
            C.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.setMatrixColor(4, 3, neopixel.colors(NeoPixelColors.Green))
            strip.setMatrixColor(5, 4, neopixel.colors(NeoPixelColors.Green))
            strip.show()
            Game_Toggle += 1
        } else {
            strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.White))
            strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.White))
            strip.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.White))
            strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.White))
            strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.White))
            strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.White))
            strip.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.White))
            strip.show()
            Game_Toggle = 0
        }
        
    }
    
    if (Flappy_Bird == true && Game_Active == true) {
        if (Flapper > 0) {
            Flapper += -1
        }
        
    }
    
})
function Summon_Pipe_0(num2: number) {
    strip.setMatrixColor(0, num2, neopixel.colors(NeoPixelColors.Green))
    strip.setMatrixColor(1, num2, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}

function Clear_Neopixel() {
    A.clear()
    B.clear()
    C.clear()
    D.clear()
    E.clear()
    A.show()
    B.show()
    C.show()
    D.show()
    E.show()
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    while (input.buttonIsPressed(Button.AB)) {
        Menu_overide = false
        ABtimer = 0
        Frame(4)
        ABtimer += 1
        if (ABtimer == 3) {
            Menu_overide = true
        }
        
    }
    if (Menu_overide == false) {
        if (Menu == false && AB_Overide == false) {
            strip.clear()
            basic.clearScreen()
            Death = true
            X1 = 4
            X0 = 4
            Flappy_Bird = false
            Snake = false
            Pong = false
            Menu = true
            Game_Override = true
            Game_Toggle = 1
            Fscore = 0
            Gamemode = 0
            Frame(2)
            strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Yellow))
            B.showColor(neopixel.colors(NeoPixelColors.Yellow))
            strip.setMatrixColor(4, 1, neopixel.colors(NeoPixelColors.Yellow))
            C.showColor(neopixel.colors(NeoPixelColors.Yellow))
            strip.setMatrixColor(4, 2, neopixel.colors(NeoPixelColors.Yellow))
            strip.setMatrixColor(2, 3, neopixel.colors(NeoPixelColors.Yellow))
            strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.Yellow))
            strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
        }
        
    }
    
})
function Summon_Pipe_1(num3: number) {
    strip.setMatrixColor(0, num3, neopixel.colors(NeoPixelColors.Green))
    strip.setMatrixColor(4, num3, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (!input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        if (Gamemode == 0 && Menu == true) {
            Menu = false
            Gamemode = Game_Toggle + 1
            strip.clear()
            Clear_Neopixel()
            Frame(2)
            if (Gamemode == 2) {
                Flappy_Bird = true
            } else if (Gamemode == 3) {
                Snake = true
            } else if (Gamemode == 1) {
                Pong = true
            }
            
        }
        
        if (Flappy_Bird == true) {
            if (Game_Active == true) {
                
            } else {
                Game_Active = true
                while (Game_Active == true) {
                    if (Game_Active == true) {
                        Frame(1)
                        strip.clear()
                        if (Gravity_Tick >= 3) {
                            if (Flapper < 4) {
                                Gravity_Tick = 0
                                Flapper += 1
                            }
                            
                        }
                        
                        if (Counter == 5) {
                            FPS += -3
                            X1 = 4
                            X0 = 4
                            Counter = 0
                            Pipe_List = randint(0, 2)
                            Variable_Toggle += 1
                            if (Variable_Toggle == 1) {
                                Variable_Toggle = 0
                                X0 = 0
                                strip.clear()
                                strip.setMatrixColor(Flapper, 0, neopixel.colors(NeoPixelColors.Yellow))
                                strip.show()
                                if (Pipe_List == 0) {
                                    Summon_Pipe_0(X1)
                                    X1change = 1
                                } else if (Pipe_List == 1) {
                                    Summon_Pipe_1(X1)
                                    X1change = 2
                                } else if (Pipe_List == 2) {
                                    Summon_Pipe_2(X1)
                                    X1change = 3
                                }
                                
                            } else {
                                Variable_Toggle = 0
                                X1change = 0
                                strip.clear()
                                strip.setMatrixColor(Flapper, 0, neopixel.colors(NeoPixelColors.Yellow))
                                strip.show()
                                if (Pipe_List == 0) {
                                    Summon_Pipe_0(X0)
                                    XOchange = 1
                                } else if (Pipe_List == 1) {
                                    Summon_Pipe_1(X0)
                                    XOchange = 2
                                } else if (Pipe_List == 2) {
                                    Summon_Pipe_2(X0)
                                    XOchange = 3
                                }
                                
                            }
                            
                        } else {
                            if (X1change == 1) {
                                Summon_Pipe_0(X1)
                                if (X1 == 0) {
                                    if (Flapper == 0 || Flapper == 1) {
                                        Death = true
                                        Flapper = 2
                                        X0 = 0
                                        X1 = 0
                                        XOchange = 0
                                        X1change = 0
                                        Gravity_Tick = 0
                                    }
                                    
                                }
                                
                            } else if (X1change == 2) {
                                Summon_Pipe_1(X1)
                                if (X1 == 0) {
                                    if (Flapper == 0 || Flapper == 4) {
                                        Death = true
                                    }
                                    
                                }
                                
                            } else if (X1change == 3) {
                                Summon_Pipe_2(X1)
                                if (X1 == 0) {
                                    if (Flapper == 3 || Flapper == 4) {
                                        Death = true
                                    }
                                    
                                }
                                
                            }
                            
                            if (XOchange == 1) {
                                Summon_Pipe_0(X0)
                            } else if (XOchange == 2) {
                                Summon_Pipe_1(X0)
                            } else if (XOchange == 3) {
                                Summon_Pipe_2(X0)
                            }
                            
                        }
                        
                        strip.setMatrixColor(Flapper, 0, neopixel.colors(NeoPixelColors.Yellow))
                        strip.show()
                        Fscore += 1
                        Counter += 1
                        X0 += -1
                        X1 += -1
                        Gravity_Tick += 1
                        if (Death == true) {
                            Game_Active = false
                            Death = false
                            XOchange = 0
                            X1change = 0
                            X0 = 4
                            X1 = 4
                            Flapper = 2
                            if (FPS > 100) {
                                FPS = 250
                            }
                            
                            strip.clear()
                            strip.show()
                            basic.showNumber(Fscore)
                            if (Fscore > High_Fscore) {
                                High_Fscore = Fscore
                            }
                            
                            altframe(125)
                            basic.showString("Hi")
                            basic.showNumber(High_Fscore)
                            basic.clearScreen()
                            Fscore = 0
                            basic.showString("B")
                        }
                        
                    }
                    
                }
            }
            
        }
        
    }
    
})
input.onPinPressed(TouchPin.P1, function on_pin_pressed_p1() {
    if (input.pinIsPressed(TouchPin.P2)) {
        
    }
    
})
function Frame(num4: number) {
    for (let index = 0; index < num4; index++) {
        basic.pause(FPS)
    }
}

function altframe(num5: number) {
    basic.pause(num5)
}

let Pipe_List = 0
let X0 = 0
let X1 = 0
let ABtimer = 0
let Menu_overide = false
let E : neopixel.Strip = null
let D : neopixel.Strip = null
let C : neopixel.Strip = null
let B : neopixel.Strip = null
let A : neopixel.Strip = null
let FPS = 0
let Menu = false
let Game_Toggle = 0
let Gamemode = 0
let Game_Override = false
let Pong = false
let Snake = false
let Flappy_Bird = false
let AB_Overide = false
let Game_Active = false
let Flapper = 0
let Fscore = 0
let Counter = 0
let Variable_Toggle = 0
let Death = false
let XOchange = 0
let X1change = 0
let Gravity_Tick = 0
let strip : neopixel.Strip = null
let High_Fscore = 0
High_Fscore = 0
strip = neopixel.create(DigitalPin.P0, 25, NeoPixelMode.RGB_RGB)
strip.setBrightness(96)
Gravity_Tick = 0
X1change = 0
XOchange = 0
Death = false
Variable_Toggle = 0
Counter = 0
Fscore = 0
let Sscore = 0
let Pscore = 0
Flapper = 2
Game_Active = false
AB_Overide = true
Flappy_Bird = false
Snake = false
Pong = false
Game_Override = true
Gamemode = 0
Game_Toggle = 1
Menu = false
FPS = 250
strip.setMatrixWidth(5)
A = strip.range(0, 5)
B = strip.range(5, 5)
C = strip.range(10, 5)
D = strip.range(15, 5)
E = strip.range(20, 5)
Frame(2)
A.showColor(neopixel.colors(NeoPixelColors.Red))
E.showColor(neopixel.colors(NeoPixelColors.Red))
Frame(2)
B.showColor(neopixel.colors(NeoPixelColors.Red))
D.showColor(neopixel.colors(NeoPixelColors.Red))
Frame(2)
C.showColor(neopixel.colors(NeoPixelColors.Red))
Frame(2)
strip.clear()
Clear_Neopixel()
Menu = true
AB_Overide = false
Frame(2)
strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Yellow))
B.showColor(neopixel.colors(NeoPixelColors.Yellow))
strip.setMatrixColor(4, 1, neopixel.colors(NeoPixelColors.Yellow))
C.showColor(neopixel.colors(NeoPixelColors.Yellow))
strip.setMatrixColor(4, 2, neopixel.colors(NeoPixelColors.Yellow))
strip.setMatrixColor(2, 3, neopixel.colors(NeoPixelColors.Yellow))
strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.Yellow))
strip.setMatrixColor(1, 4, neopixel.colors(NeoPixelColors.Yellow))
strip.show()
basic.forever(function on_forever() {
    
})
