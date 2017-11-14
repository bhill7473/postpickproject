//*********************************/
// Click events for search buttons /
//*********************************/
var basketballAudio = new Audio("basketball-sound.wav");
basketballAudio.loop = true;

//***********/
// Last Name /
//***********/
$("#lname-search-btn").on("click", function(event) {
  event.preventDefault();
  //**************************************************/
  // Save the lastName they typed into the text input /
  //**************************************************/
  var lastNameS = $("#lname-search").val().trim();
  var email = sessionStorage.Email;
  //***************************************************/
  // Make an AJAX get request passing lname in the url /
  //***************************************************/
  $.get("/api/lname/" + lastNameS + "/" + email, function(data) {
    //***********************************************************/
    // Call our showFanRecord function to add record to the page /
    //***********************************************************/
    basketballAudio.play();
    showFanRecord(data);
  });
});
//******/
// Team /
//******/
$("#team-search-btn").on("click", function(event) {
  event.preventDefault();
  //**********************************************/
  // Save the team they typed into the text input /
  //**********************************************/
  var teamS = $("#team-search option:selected" ).val();
  //**************************************************/
  // Make an AJAX get request passing team in the url /
  //**************************************************/
  $.get("/api/team/" + teamS + "/" + sessionStorage.Email , function(data) {
    //***********************************************************/
    // Call our showFanRecord function to add record to the page /
    //***********************************************************/
    basketballAudio.play();
    showFanRecord(data);
  });
});

//**********/
// Position /
//**********/
$("#position-search-btn").on("click", function(event) {
  event.preventDefault();
  //**********************************************/
  // Save the team they typed into the text input /
  //**********************************************/
  var positionS = $("#position-search option:selected" ).val(); 
  //******************************************************/
  // Make an AJAX get request passing position in the url /
  //******************************************************/
  $.get("/api/position/" + positionS + "/" + sessionStorage.Email, function(data) {
    //***********************************************************/
    // Call our showFanRecord function to add record to the page /
    //***********************************************************/
    basketballAudio.play();
    showFanRecord(data);
  });
});

//****************/
// Fantasy Points /
//****************/
$("#fanpts-search-btn").on("click", function(event) {
  event.preventDefault();
  //**********************************************/
  // Save the team they typed into the text input /
  //**********************************************/
  var fanptsS = $("#fanpts-search").val().trim();
  //*******************************************/
  // Figure out which radio button is selected /
  //*******************************************/
  var op = "";
    if ($('input[id="greaterthan"]:checked').length > 0) {
      op = "greaterthan";
    } else {
      op = "lessthan";
    }
  //**************************************************************/
  // Make an AJAX get request passing fanpts and email in the url /
  //**************************************************************/
  $.get("/api/fanptsop/" + fanptsS + "/" + op + "/" + sessionStorage.Email, function(data) {
    //***********************************************************/
    // Call our showFanRecord function to add record to the page /
    //***********************************************************/
    basketballAudio.play();
    showFanRecord(data);
  });
});

//************************/
// Last Name and Opponent /
//************************/
$("#lnameOpp-search-btn").on("click", function(event) {
  event.preventDefault();
  //************************************************************/
  // Save the lname and opponent they typed into the text input /
  //************************************************************/
  var lname = $("#lnameOpp-search").val().trim();
  var opponent = $("#lnameOpp2-search option:selected" ).val();  
  //**************************************************************************/
  // Make an AJAX get request passing lname and opponent and email in the url /
  //**************************************************************************/
  $.get("/api/lnameOpp/" + lname + "/" + opponent + "/" + sessionStorage.Email, function(data) {
    console.log(data);
    //***********************************************************/
    // Call our showFanRecord function to add record to the page /
    //***********************************************************/
    basketballAudio.play();
    showFanRecord(data);
  });
});

//*******************/
// Team and Opponent /
//*******************/
$("#teamOpp-search-btn").on("click", function(event) {
  event.preventDefault();
  //***********************************************************/
  // Save the team and opponent they typed into the text input /
  //***********************************************************/
  var team = $("#teamOpp-search").val().trim();
  var opponent = $("#teamOpp2-search option:selected" ).val();  
  //*************************************************************************/
  // Make an AJAX get request passing team and opponent and email in the url /
  //*************************************************************************/
  $.get("/api/teamOpp/" + team + "/" + opponent + "/" + sessionStorage.Email, function(data) {
    //***********************************************************/
    // Call our showFanRecord function to add record to the page /
    //***********************************************************/
    basketballAudio.play();
    showFanRecord(data);
  });
});

//***********************/
// Position and Opponent /
//***********************/
$("#positionOpp-search-btn").on("click", function(event) {
  event.preventDefault();
  //***********************************************************/
  // Save the team and opponent they typed into the text input /
  //***********************************************************/
  var position = $("#positionOpp-search option:selected" ).val(); 
  var opponent = $("#positionOpp2-search option:selected" ).val(); 
  //*****************************************************************************/
  // Make an AJAX get request passing position and opponent and email in the url /
  //*****************************************************************************/
  $.get("/api/positionOpp/" + position + "/" + opponent + "/" + sessionStorage.Email, function(data) {
    //***********************************************************/
    // Call our showFanRecord function to add record to the page /
    //***********************************************************/
    basketballAudio.play();
    showFanRecord(data);
  });
});

//*****************************/
// Fantasy Points and Opponent /
//*****************************/
$("#fanptsOpp-search-btn").on("click", function(event) {
  event.preventDefault();
  //***********************************************************/
  // Save the team and opponent they typed into the text input /
  //***********************************************************/
  var fanpts = $("#fanptsOpp-search").val().trim();
  var opponent = $("#fanptsOpp2-search option:selected" ).val();  
  //*******************************************/
  // Figure out which radio button is selected /
  //*******************************************/
  var op = "";
    if ($('input[id="greaterthan2"]:checked').length > 0) {
      op = "greaterthan";
    } else {
      op = "lessthan";
    }
  //***************************************************************************/
  // Make an AJAX get request passing fanpts and opponent and email in the url /
  //***************************************************************************/
  $.get("/api/fanptsOpp/" + fanpts + "/" + opponent + "/" + op + "/" + sessionStorage.Email, function(data) {
    //***********************************************************/
    // Call our showFanRecord function to add record to the page /
    //***********************************************************/
    basketballAudio.play();
    showFanRecord(data);
  });
});

$("#close").on("click", function(event) {
  $("#modal-data").empty();
});

//************************************/
// Display records on the modal popup /
//************************************/
function showFanRecord(data) {
  var ctr = 0;
  if (data.length !== 0) {
    $("#stats").empty();
    $("#stats").show();
    var seperator = "***************";
    for (var i = 0; i < data.length; i++) {
      //**************************/
      // validate null notes here /
      //**************************/
      var notes = ""
      if (data[i].notes == null) {
        notes = "";
      } else {
        notes = data[i].notes;
      }
      if (ctr > 0) {
        $("#modal-data").append("<h2>" + seperator + "</h2>");
      }
      $("#modal-data").append("<p><b>Last Name:</b> " + data[i].lname + "</p>");
      $("#modal-data").append("<p><b>Position:</b> " + data[i].position + "</p>");
      $("#modal-data").append("<p><b>Game Date:</b> " + data[i].gamedate + "</p>");
      $("#modal-data").append("<p><b>Minutes Played:</b> " + data[i].minsplayed + "</p>");
      $("#modal-data").append("<p><b>Fantasy Points:</b> " + data[i].fanpoints + "</p>");
      $("#modal-data").append("<p><b>Won Game:</b> " + data[i].wongame + "</p>");
      $("#modal-data").append("<p><b>Injured:</b> " + data[i].injured + "</p>");
      $("#modal-data").append("<p><b>Team Actual Points:</b> " + data[i].teamactpts + "</p>");
      $("#modal-data").append("<p><b>Opponent Actual Points:</b> " + data[i].oppactpts + "</p>");
      $("#modal-data").append("<p><b>Opponent:</b> " + data[i].opponent + "</p>");
      $("#modal-data").append("<p><b>Notes:</b> " + notes + "</p>");
      $("#modal-data").append("<p><b>Entry ID:</b> " + data[i].entryid + "</p>");
      $("#myModal").modal();
      ctr++;
    }
  } else {
    $("#modal-data").append("<p>No results found</p>");
    $("#myModal").modal();
  }
} 

//*********************/
// Clear search fields /
//*********************/
function clearSearchFields() {
  $("#lname-search").val("");
  $("#fanpts-search").val("");
  $("#lnameOpp-search").val("");
  $("#fanptsOpp-search").val("");
}

//*************************************/
// Clear Search fields and pause audio /
//*************************************/
$("#close").click(function() {
  clearSearchFields();
  basketballAudio.pause();
});


