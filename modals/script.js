document.querySelector('#submitJob').addEventListener('click', submitJobPop);

function submitJobPop() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var TheURL = "modals/briefingForm.html";
    var PopWidth = w / 2;
    var PopHeight = h / 1.5;
    var PosTop = w / 2;
    var PosLeft = h / 2;

    var SettingSpopUpBox = "toolbar=no,menubar=no,scrollbars=no,resizable=yes,width=" + PopWidth + ",height=" + PopHeight + ",top=" + PosTop + ",left=" + PosLeft;
    var PopUp = open(TheURL, "box", SettingSpopUpBox);
}
