'use strict';

Blockly.Blocks['led1'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("turn LED 1");
    this.appendValueInput("STATE")
      .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("RaspiBot LED 1 switch.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['led2'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("turn LED 2");
    this.appendValueInput("STATE")
      .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("RaspiBot LED 2 switch.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendValueInput("TIME_S")
      .setCheck("Number")
      .appendField("wait");
    this.appendDummyInput()
      .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("Wait for the specified amount of seconds.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['on_off'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "STATE");
    this.setOutput(true, "Number");
    this.setColour(270);
    this.setTooltip("A value to set a state on or off.");
    this.setHelpUrl("");
  }
};
