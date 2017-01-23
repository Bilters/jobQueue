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
