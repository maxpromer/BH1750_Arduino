Blockly.Blocks['bh1750_begin'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("BH1750 begin at")
			.appendField(new Blockly.FieldDropdown([["0x23","0x23"], ["0x5C","0x5C"]]), "address");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['bh1750_read'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("BH1750 read (lx)");
		this.setOutput(true, null);
		this.setColour(135);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
