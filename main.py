def Summon_Pipe_2(num: number):
    strip.set_matrix_color(3, num, neopixel.colors(NeoPixelColors.GREEN))
    strip.set_matrix_color(4, num, neopixel.colors(NeoPixelColors.GREEN))
    strip.show()

def on_button_pressed_a():
    global Game_Override, Game_Toggle, Flapper
    Game_Override = False
    strip.clear()
    Clear_Neopixel()
    if Menu == True:
        if Game_Toggle == 0:
            strip.set_matrix_color(1, 0, neopixel.colors(NeoPixelColors.YELLOW))
            B.show_color(neopixel.colors(NeoPixelColors.YELLOW))
            strip.set_matrix_color(4, 1, neopixel.colors(NeoPixelColors.YELLOW))
            C.show_color(neopixel.colors(NeoPixelColors.YELLOW))
            strip.set_matrix_color(4, 2, neopixel.colors(NeoPixelColors.YELLOW))
            strip.set_matrix_color(2, 3, neopixel.colors(NeoPixelColors.YELLOW))
            strip.set_matrix_color(3, 3, neopixel.colors(NeoPixelColors.YELLOW))
            strip.set_matrix_color(1, 4, neopixel.colors(NeoPixelColors.YELLOW))
            strip.show()
            Game_Toggle += 1
        elif Game_Toggle == 1:
            strip.set_matrix_color(1, 1, neopixel.colors(NeoPixelColors.GREEN))
            C.show_color(neopixel.colors(NeoPixelColors.GREEN))
            strip.set_matrix_color(4, 3, neopixel.colors(NeoPixelColors.GREEN))
            strip.set_matrix_color(5, 4, neopixel.colors(NeoPixelColors.GREEN))
            strip.show()
            Game_Toggle += 1
        else:
            strip.set_matrix_color(1, 0, neopixel.colors(NeoPixelColors.WHITE))
            strip.set_matrix_color(2, 0, neopixel.colors(NeoPixelColors.WHITE))
            strip.set_matrix_color(3, 0, neopixel.colors(NeoPixelColors.WHITE))
            strip.set_matrix_color(2, 2, neopixel.colors(NeoPixelColors.WHITE))
            strip.set_matrix_color(1, 4, neopixel.colors(NeoPixelColors.WHITE))
            strip.set_matrix_color(2, 4, neopixel.colors(NeoPixelColors.WHITE))
            strip.set_matrix_color(3, 4, neopixel.colors(NeoPixelColors.WHITE))
            strip.show()
            Game_Toggle = 0
    if Flappy_Bird == True and Game_Active == True:
        if Flapper > 0:
            Flapper += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def Summon_Pipe_0(num2: number):
    strip.set_matrix_color(0, num2, neopixel.colors(NeoPixelColors.GREEN))
    strip.set_matrix_color(1, num2, neopixel.colors(NeoPixelColors.GREEN))
    strip.show()
def Clear_Neopixel():
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

def on_button_pressed_ab():
    global Menu_overide, ABtimer, Death, X1, X0, Flappy_Bird, Snake, Pong, Menu, Game_Override, Game_Toggle, Fscore, Gamemode
    while input.button_is_pressed(Button.AB):
        Menu_overide = False
        ABtimer = 0
        Frame(4)
        ABtimer += 1
        if ABtimer == 3:
            Menu_overide = True
    if Menu_overide == False:
        if Menu == False and AB_Overide == False:
            strip.clear()
            basic.clear_screen()
            Death = True
            X1 = 4
            X0 = 4
            Flappy_Bird = False
            Snake = False
            Pong = False
            Menu = True
            Game_Override = True
            Game_Toggle = 1
            Fscore = 0
            Gamemode = 0
            Frame(2)
            strip.set_matrix_color(1, 0, neopixel.colors(NeoPixelColors.YELLOW))
            B.show_color(neopixel.colors(NeoPixelColors.YELLOW))
            strip.set_matrix_color(4, 1, neopixel.colors(NeoPixelColors.YELLOW))
            C.show_color(neopixel.colors(NeoPixelColors.YELLOW))
            strip.set_matrix_color(4, 2, neopixel.colors(NeoPixelColors.YELLOW))
            strip.set_matrix_color(2, 3, neopixel.colors(NeoPixelColors.YELLOW))
            strip.set_matrix_color(3, 3, neopixel.colors(NeoPixelColors.YELLOW))
            strip.set_matrix_color(1, 4, neopixel.colors(NeoPixelColors.YELLOW))
            strip.show()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def Summon_Pipe_1(num3: number):
    strip.set_matrix_color(0, num3, neopixel.colors(NeoPixelColors.GREEN))
    strip.set_matrix_color(4, num3, neopixel.colors(NeoPixelColors.GREEN))
    strip.show()

def on_button_pressed_b():
    global Menu, Gamemode, Flappy_Bird, Snake, Pong, Game_Active, Gravity_Tick, Flapper, FPS, X1, X0, Counter, Pipe_List, Variable_Toggle, X1change, XOchange, Death, Fscore, High_Fscore
    if not (input.button_is_pressed(Button.A)):
        basic.clear_screen()
        if Gamemode == 0 and Menu == True:
            Menu = False
            Gamemode = Game_Toggle + 1
            strip.clear()
            Clear_Neopixel()
            Frame(2)
            if Gamemode == 2:
                Flappy_Bird = True
            elif Gamemode == 3:
                Snake = True
            elif Gamemode == 1:
                Pong = True
        if Flappy_Bird == True:
            if Game_Active == True:
                pass
            else:
                Game_Active = True
                while Game_Active == True:
                    if Game_Active == True:
                        Frame(1)
                        strip.clear()
                        if Gravity_Tick >= 3:
                            if Flapper < 4:
                                Gravity_Tick = 0
                                Flapper += 1
                        if Counter == 5:
                            FPS += -3
                            X1 = 4
                            X0 = 4
                            Counter = 0
                            Pipe_List = randint(0, 2)
                            Variable_Toggle += 1
                            if Variable_Toggle == 1:
                                Variable_Toggle = 0
                                X0 = 0
                                strip.clear()
                                strip.set_matrix_color(Flapper, 0, neopixel.colors(NeoPixelColors.YELLOW))
                                strip.show()
                                if Pipe_List == 0:
                                    Summon_Pipe_0(X1)
                                    X1change = 1
                                elif Pipe_List == 1:
                                    Summon_Pipe_1(X1)
                                    X1change = 2
                                elif Pipe_List == 2:
                                    Summon_Pipe_2(X1)
                                    X1change = 3
                            else:
                                Variable_Toggle = 0
                                X1change = 0
                                strip.clear()
                                strip.set_matrix_color(Flapper, 0, neopixel.colors(NeoPixelColors.YELLOW))
                                strip.show()
                                if Pipe_List == 0:
                                    Summon_Pipe_0(X0)
                                    XOchange = 1
                                elif Pipe_List == 1:
                                    Summon_Pipe_1(X0)
                                    XOchange = 2
                                elif Pipe_List == 2:
                                    Summon_Pipe_2(X0)
                                    XOchange = 3
                        else:
                            if X1change == 1:
                                Summon_Pipe_0(X1)
                                if X1 == 0:
                                    if Flapper == 0 or Flapper == 1:
                                        Death = True
                                        Flapper = 2
                                        X0 = 0
                                        X1 = 0
                                        XOchange = 0
                                        X1change = 0
                                        Gravity_Tick = 0
                            elif X1change == 2:
                                Summon_Pipe_1(X1)
                                if X1 == 0:
                                    if Flapper == 0 or Flapper == 4:
                                        Death = True
                            elif X1change == 3:
                                Summon_Pipe_2(X1)
                                if X1 == 0:
                                    if Flapper == 3 or Flapper == 4:
                                        Death = True
                            if XOchange == 1:
                                Summon_Pipe_0(X0)
                            elif XOchange == 2:
                                Summon_Pipe_1(X0)
                            elif XOchange == 3:
                                Summon_Pipe_2(X0)
                        strip.set_matrix_color(Flapper, 0, neopixel.colors(NeoPixelColors.YELLOW))
                        strip.show()
                        Fscore += 1
                        Counter += 1
                        X0 += -1
                        X1 += -1
                        Gravity_Tick += 1
                        if Death == True:
                            Game_Active = False
                            Death = False
                            XOchange = 0
                            X1change = 0
                            X0 = 4
                            X1 = 4
                            Flapper = 2
                            if FPS > 100:
                                FPS = 250
                            strip.clear()
                            strip.show()
                            basic.show_number(Fscore)
                            if Fscore > High_Fscore:
                                High_Fscore = Fscore
                            altframe(125)
                            basic.show_string("Hi")
                            basic.show_number(High_Fscore)
                            basic.clear_screen()
                            Fscore = 0
                            basic.show_string("B")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    if input.pin_is_pressed(TouchPin.P2):
        pass
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def Frame(num4: number):
    for index in range(num4):
        basic.pause(FPS)
def altframe(num5: number):
    basic.pause(num5)
Pipe_List = 0
X0 = 0
X1 = 0
ABtimer = 0
Menu_overide = False
E: neopixel.Strip = None
D: neopixel.Strip = None
C: neopixel.Strip = None
B: neopixel.Strip = None
A: neopixel.Strip = None
FPS = 0
Menu = False
Game_Toggle = 0
Gamemode = 0
Game_Override = False
Pong = False
Snake = False
Flappy_Bird = False
AB_Overide = False
Game_Active = False
Flapper = 0
Fscore = 0
Counter = 0
Variable_Toggle = 0
Death = False
XOchange = 0
X1change = 0
Gravity_Tick = 0
strip: neopixel.Strip = None
High_Fscore = 0
High_Fscore = 0
strip = neopixel.create(DigitalPin.P0, 25, NeoPixelMode.RGB_RGB)
strip.set_brightness(96)
Gravity_Tick = 0
X1change = 0
XOchange = 0
Death = False
Variable_Toggle = 0
Counter = 0
Fscore = 0
Sscore = 0
Pscore = 0
Flapper = 2
Game_Active = False
AB_Overide = True
Flappy_Bird = False
Snake = False
Pong = False
Game_Override = True
Gamemode = 0
Game_Toggle = 1
Menu = False
FPS = 250
strip.set_matrix_width(5)
A = strip.range(0, 5)
B = strip.range(5, 5)
C = strip.range(10, 5)
D = strip.range(15, 5)
E = strip.range(20, 5)
Frame(2)
A.show_color(neopixel.colors(NeoPixelColors.RED))
E.show_color(neopixel.colors(NeoPixelColors.RED))
Frame(2)
B.show_color(neopixel.colors(NeoPixelColors.RED))
D.show_color(neopixel.colors(NeoPixelColors.RED))
Frame(2)
C.show_color(neopixel.colors(NeoPixelColors.RED))
Frame(2)
strip.clear()
Clear_Neopixel()
Menu = True
AB_Overide = False
Frame(2)
strip.set_matrix_color(1, 0, neopixel.colors(NeoPixelColors.YELLOW))
B.show_color(neopixel.colors(NeoPixelColors.YELLOW))
strip.set_matrix_color(4, 1, neopixel.colors(NeoPixelColors.YELLOW))
C.show_color(neopixel.colors(NeoPixelColors.YELLOW))
strip.set_matrix_color(4, 2, neopixel.colors(NeoPixelColors.YELLOW))
strip.set_matrix_color(2, 3, neopixel.colors(NeoPixelColors.YELLOW))
strip.set_matrix_color(3, 3, neopixel.colors(NeoPixelColors.YELLOW))
strip.set_matrix_color(1, 4, neopixel.colors(NeoPixelColors.YELLOW))
strip.show()

def on_forever():
    pass
basic.forever(on_forever)
