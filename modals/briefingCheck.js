function validate() {
    return (checkProjectNumber() && checkQuoteItem());
}

function checkProjectNumber() {
    var isValid = true;
    var projectNumber = document.jobCreation.projectNumber.value;
    var dateGeneration = new Date();
    var loProjectNumber = 120000;
    var hiProjectNumber = dateGeneration.getYear() - 100 + "" + dateGeneration.getMonth() + 1 + "" + 99;

    if (isNaN(projectNumber)) {
        isValid = false;
        alert("Project numbers are numbers not letters");
    } else
    if (projectNumber < loProjectNumber || projectNumber > hiProjectNumber) {
        isValid = false;
        alert("This is not a project Number");
    }
    return isValid;
}

function checkQuoteItem() {
    var quoteItem = document.jobCreation.quoteItem.value;
    var isValid = true;

    if (quoteItem < 1) {
        isValid = false;
        alert("A quote item should always be higher than one!");

    } else
    if (isNaN(quoteItem)) {
        isValid = false;
        alert("QuoteItems are numbers not letters");
    }
    return isValid;
}
