WINDOW_SPEED = 6;

/**
 * Game_Message
 */
let Game_Message_clear = Game_Message.prototype.clear;
Game_Message.prototype.clear = function() {
    Game_Message_clear.call(this);
    this._floating = true;
    this._event = null;
};

Game_Message.prototype.event = function() {
    return this._event;
};

Game_Message.prototype.setEvent = function(event) {
    this._event = event;
};

Game_Message.prototype.needFloating = function() {
    return this._floating && !!this._event;
};

Game_Message.prototype.setFloating = function(floating) {
    this._floating = floating;
};

/**
 * Game_Interpreter
 */
let Game_Interpreter_command101 = Game_Interpreter.prototype.command101;
Game_Interpreter.prototype.command101 = function() {
    if (!$gameMessage.isBusy()) {
        let event = $gameMap.event(this._eventId);
        $gameMessage.setEvent(event);
    }
    return Game_Interpreter_command101.call(this);
};

/**
 * Window
 */

Object.defineProperty(Window.prototype, 'openness', {
    get: function() {
        return this._openness;
    },
    set: function(value) {
        if (this._openness !== value) {
            this._openness = value.clamp(0, 255);
            this._windowSpriteContainer.scale.x = this._openness / 255;
            this._windowSpriteContainer.x = this.width / 2 * (1 - this._openness / 255);
        }
    },
    configurable: true
});

Window.prototype.isOpen = function() {
    return Math.round(255 - this._openness) <= 0;
};

Window.prototype.isClosed = function() {
    return Math.round(this._openness - 0) <= 0;
};


/**
 * Window_Base
 */

Window_Base.prototype.standardFontFace = function() {
    return 'GameFont';
};

Window_Base.prototype.standardFontSize = function() {
    return 36;
};

Window_Base.prototype.updateOpen = function() {
    if (this._opening) {
        this.openness += (255 - this.openness) / WINDOW_SPEED;
        this.opacity = this.openness;
        if (this.isOpen()) {
            this._opening = false;
        }
    }
};

Window_Base.prototype.updateClose = function() {
    if (this._closing) {
        this.openness -= (this.openness - 0) / WINDOW_SPEED;
        this.opacity = this.openness;
        if (this.isClosed()) {
            this._closing = false;
        }
    }
};

/**
 * Window_Message
 */

Window_Message.prototype.standardFontSize = function() {
    return 32;
};

Window_Message.prototype.standardPadding = function() {
    return 12;
};

Window_Message.prototype.lineHeight = function() {
    return 40;
};

Window_Message.prototype.standardBackOpacity = function() {
    return 255;
};

Window_Message.prototype.resetFontSettings = function() {
    Window_Base.prototype.resetFontSettings.call(this);
    this.contents.outlineWidth = 0;
};

Window_Message.prototype.loadWindowskin = function() {
    this.windowskin = ImageManager.loadSystem('Dialog');
};

let _Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
Window_Message.prototype.updatePlacement = function() {
    if ($gameMessage.needFloating()) {
        let event = $gameMessage.event();
        let texts = this._textState.text.split("\n");
        this.width = texts.reduce((width, line)=>Math.max(this.textWidth(line), width), 0) + this.standardPadding() * 2;
        this.height = this.fittingHeight(texts.length);
        this.x = event.screenX() - this.width / 2;
        this.y = event.screenY() - $gameMap.tileHeight() - this.height;
    }
    else {
        _Window_Message_updatePlacement.call(this);
    }
};

/**
 * Window_ChoiceList
 */

Window_ChoiceList.prototype.standardFontSize = Window_Message.prototype.standardFontSize;
Window_ChoiceList.prototype.standardPadding = Window_Message.prototype.standardPadding;
Window_ChoiceList.prototype.lineHeight = Window_Message.prototype.lineHeight;
Window_ChoiceList.prototype.standardBackOpacity = Window_Message.prototype.standardBackOpacity;
Window_ChoiceList.prototype.loadWindowskin = Window_Message.prototype.loadWindowskin;
Window_ChoiceList.prototype.resetFontSettings = Window_Message.prototype.resetFontSettings;

let _Window_ChoiceList_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
Window_ChoiceList.prototype.updatePlacement = function() {
    if ($gameMessage.needFloating()) {
        this.width = this.windowWidth();
        this.height = this.windowHeight();
        this.x = this._messageWindow.x + this._messageWindow.width - this.width;
        this.y = this._messageWindow.y + this._messageWindow.height + 4;
    }
    else {
        _Window_ChoiceList_updatePlacement.call(this);
    }
};

Window_ChoiceList.prototype.maxChoiceWidth = function() {
    var maxWidth = 0;
    var choices = $gameMessage.choices();
    for (var i = 0; i < choices.length; i++) {
        var choiceWidth = this.textWidthEx(choices[i]) + this.textPadding() * 2;
        if (maxWidth < choiceWidth) {
            maxWidth = choiceWidth;
        }
    }
    return maxWidth;
};
