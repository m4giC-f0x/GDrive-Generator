function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Generator')
      .addItem('Generate Copies', 'makeFiles')
      .addItem('Generate Links', 'linkGen')
      .addSeparator()
      .addToUi();
}
