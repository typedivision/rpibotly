'use strict';

Blockly.Python['led1'] = function(block) {
  var value_state = Blockly.Python.valueToCode(block, 'STATE', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_rrb3'] = 'import rrb3';
  Blockly.Python.definitions_['variable_rrb'] = 'rrb = rrb3.RRB3(6, 3)';
  var code = 'rrb.set_led1(' + (value_state || 0) + ')\n';
  return code;
};

Blockly.Python['led2'] = function(block) {
  var value_state = Blockly.Python.valueToCode(block, 'STATE', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_rrb3'] = 'import rrb3';
  Blockly.Python.definitions_['variable_rrb'] = 'rrb = rrb3.RRB3(6, 3)';
  var code = 'rrb.set_led2(' + (value_state || 0) + ')\n';
  return code;
};

Blockly.Python['wait'] = function(block) {
  var value_time_s = Blockly.Python.valueToCode(block, 'TIME_S', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.sleep(' + (value_time_s || 0) + ')\n';
  return code;
};

Blockly.Python['on_off'] = function(block) {
  var dropdown_state = block.getFieldValue('STATE');
  return [dropdown_state, Blockly.Python.ORDER_ATOMIC];
};
