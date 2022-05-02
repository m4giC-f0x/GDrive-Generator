//List of file links will be created in whatever cell is currently selected

function linkGen() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getActiveSheet();
  var c=s.getActiveCell();

  var ui = SpreadsheetApp.getUi();
  var urlResult = SpreadsheetApp.getUi().prompt('Enter the Folder URL');

  var fldrUrl = urlResult.getResponseText();
  var fldrId = fldrUrl.match(/[-\w]{25,}/);
  var fldr = DriveApp.getFolderById(fldrId);
  
  
  var files=fldr.getFiles();
  var names=[],f,str;
  while (files.hasNext()) {
    f=files.next();
    str='=hyperlink("' + f.getUrl() + '","' + f.getName() + '")';
    names.push([str]);
  }
  s.getRange(c.getRow(),c.getColumn(),names.length).setFormulas(names);
}
