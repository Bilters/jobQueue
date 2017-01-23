// function nameSubmit() {
//
//     var newUser = document.getElementById('nameInput').value;
//     if (newUser.length == 0) {
//         alert('Please enter a real name');
//         return;
//     }
//
//     alert(newUser);
// }
// document.getElementById("nameInput")
// .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode == 13) {
//         document.getElementById("submitBtn").click();
//     }
// });


function checkForm(){
    function checkProjectNumber() {
        var dateGeneration = new Date();
        var loProjectNumber = 120000;
        var hiProjectNumber = dateGeneration.getYear() - 100 + "" + dateGeneration.getMonth() + 1 + "" + 99;
        var projectNumber = document.jobCreation.projectNumber.value;
        if (isNaN(projectNumber)) {
            alert("Project numbers are numbers not letters");
        } else {
            if (projectNumber < loProjectNumber || projectNumber > hiProjectNumber) {
                alert("This is not a project Number");
            }
        }
        return false;
    }

    function checkQuoteItem() {
        if (document.jobCreation.quoteItem.value < 1) {
            alert("A quote item should always be higher than one!");
        }
        return false;
    }
    return checkProjectNumber(), checkQuoteItem();
}


















document.querySelector('#submitJob').addEventListener('click', submitJobPop);
function submitJobPop() {
    var TheURL = "modals/briefingForm.html";
    var PopWidth = "900";
    var PopHeight = "600";
    var PosTop = "200";
    var PosLeft = "800";

    var SettingSpopUpBox = "toolbar=no,menubar=no,scrollbars=no,resizable=yes,width=" + PopWidth + ",height=" + PopHeight + ",top=" + PosTop + ",left=" + PosLeft;
    var PopUp = open(TheURL, "box", SettingSpopUpBox);
}
