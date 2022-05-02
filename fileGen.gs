function makeFiles(){

//Get array of filenames (variable)
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  var ui = SpreadsheetApp.getUi();
  var fixedResult = ui.prompt('Name your file: \n This will be appended to the names listed in column A.');

  var fixedName = fixedResult.getResponseText();
  var bottomRow = sheet.getMaxRows()-2;
  var variableNames = sheet.getRange(2, 1, bottomRow, 1).getValues();

  var ui = SpreadsheetApp.getUi();
  var urlResult = SpreadsheetApp.getUi().prompt('Enter the file URL');

  var fileUrl = urlResult.getResponseText();
  var fileId = fileUrl.match(/[-\w]{25,}/);
  var fileToCopy = DriveApp.getFileById(fileId);
  
//Copy file from URL in dialog box n times and rename each copy with the variable name (names in column A) fixed (asked in prompt)
//stops at first blank cell
  for (n=0;n<bottomRow;n++){
    if(variableNames[n] == ""){break;}
                                
  var makeCopy = fileToCopy.makeCopy( variableNames[n] + fixedName);
  }
  ss.toast("Your files have been made! :)","Finished",3);
  }
