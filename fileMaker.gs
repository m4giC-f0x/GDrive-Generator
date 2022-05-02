function makeFiles(){

//Get array of filenames (fixed & variable)
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  var ui = SpreadsheetApp.getUi();
  var fixedResult = ui.prompt('Name your file:');


  var fixedName = fixedResult.getResponseText();
  var bottomRow = sheet.getMaxRows()-2;
  var variableNames = sheet.getRange(2, 1, bottomRow, 1).getValues();
  
//If fixed name cell is blank it throws up an alert and stops    
  if (fixedName === "") {
     SpreadsheetApp.getUi().alert('Cell A3 is blank.');
  }

  var ui = SpreadsheetApp.getUi();
  var urlResult = SpreadsheetApp.getUi().prompt('Enter the file URL');

  var fileUrl = urlResult.getResponseText();
  var fileId = fileUrl.match(/[-\w]{25,}/);
  var fileToCopy = DriveApp.getFileById(fileId);
  
//Copy master n times and rename each copy with the fixed and variable name
//stops when it comes to a blank cell
  for (n=0;n<bottomRow;n++){
    if(variableNames[n] == ""){break;}
                                
  var makeCopy = fileToCopy.makeCopy( variableNames[n] + fixedName);
  }
  ss.toast("Your files have been made! :)","Finished",3);
  }

//   //
