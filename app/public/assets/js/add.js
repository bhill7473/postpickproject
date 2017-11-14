//*********************************************************************************/
// The code in add.js handles what happens when the user clicks the "Add " button. /
//*********************************************************************************/

//*************************/
// Click event for add-btn /
//*************************/
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  
  //*************************/
  // Make a fanRecord object /
  //*************************/
  var fanRecord = {
    lname: $("#lname").val().trim(),
    position: $("#position").val().trim(),
    gamedate: $("#gamedate").val().trim(),
    fanpoints: $("#fanpoints").val().trim(),
    minsplayed: $("#minsplayed").val().trim(),
    wongame: $("#wongame")[0].checked,
    injured: $("#injured")[0].checked,
    teamactpts: $("#teamactpoints").val().trim(),
    notes: $("#notes").val().trim(),
    oppactpts: $("#oppactpts").val().trim(),
    team: document.getElementById("team").value,
    opponent: document.getElementById("opponent").value,
    userid: sessionStorage.Email,
    entryid: $("#entryid").val().trim()
  };
  //***************************************/
  // Send an AJAX POST-request with jQuery /
  //***************************************/
 $.post("/api/new", fanRecord) 
    // On success, run the following code
    .done(function(data) {
      console.log("Help");
      showSuccessfullyAdded();
    });

  //*******************************************************************/
  // Empty all textboxes with an empty string and set boolean to false /
  //*******************************************************************/
  showSuccessfullyAdded();
  document.getElementById('addForm').reset();
});

function showSuccessfullyAdded() {
  $("#modal-success").append("<h3>Player Successfully Added! </h3>");
  $("#myModal").modal();
}

$("#close").click(function() {
  $("#modal-success").html("");
});
