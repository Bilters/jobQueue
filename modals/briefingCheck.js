function checkForm() {
    function checkProjectNumber() {
        var dateGeneration = new Date();
        var loProjectNumber = 120000;
        var hiProjectNumber = dateGeneration.getYear() - 100 + "" + dateGeneration.getMonth() + 1 + "" + 99;
        var projectNumber = document.jobCreation.projectNumber.value;
        if (isNaN(projectNumber)) {
            alert("Project numbers are numbers not letters");
            return false;
        } else {
            if (projectNumber < loProjectNumber || projectNumber > hiProjectNumber) {
                alert("This is not a project Number");
                return false;
            }
        }
        return;
    }

    function checkQuoteItem() {
        if (document.jobCreation.quoteItem.value < 1) {
            alert("A quote item should always be higher than one!");
            return false;
        } else if(isNaN(document.jobCreation.quoteItem.value)) {
            alert("QuoteItems are numbers");
            return false;
        }
        return;
    }

    checkProjectNumber();
    checkQuoteItem();
}
