<?php
if ($_POST['submit']) {
    if (mail ($projectNumber, $quoteItem, $projectName, $projectManager, $designer, $sourceFiles, $deliveryFormat, $estimatedTime, $deadline, $briefing)) {
        echo '<p>Your message has been sent!</p>';
    } else {
        echo '<p>Something went wrong, go back and try again!</p>';
    }
}
?>

<html>

    <script src="js/briefingCheck.js"></script>
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <link rel="stylesheet" type="text/css" href="style/briefingForm.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="briefingContainer">
        <form onsubmit="return validate()" method="POST" name="jobCreation" action="index.php">
            <legend>Briefing form</legend>

            <label for="projectNumber">
        <input type="text" id="projectNumber" name="projectNumber" required maxlength="6" placeholder="Project number"/>
        <i class="fa fa-tasks input-icon" aria-hidden="true"></i>
    </label>
            <label for="quoteItem">
        <input type="number" id="quoteItem" name="quoteItem" required maxlength="2" placeholder="Quote item"/>
    </label>
            <label for="projectName">
        <input type="text" id="projectName" name="projectName" required autocomplete="on" placeholder="Project name"/>
    </label>
            <label for="projectManager">
        <select required id="projectManager" name="projectManager">
            <option value="" disabled hidden selected>Project manager</option>
            <option value="pm-MaKo">MK</option>
            <option value="pm-LvG">LvG</option>
            <option value="pm-MaNe">MN</option>
        </select>
    </label>
            <label for="designer">
        <select id="designer" name="designer">
            <option value="" disabled hidden selected>Designer</option>
            <option value="ds-SaNi">SaNi</option>
            <option value="ds-MoRa">MoRa</option>
            <option value="ds-RvG">RvG</option>
            <option value="ds-LdB">LdB</option>
        </select>
    </label>
            <label for="sourceFiles">
        <input type="text" id="sourceFiles" name="sourceFiles" required autocomplete="on" placeholder="Source files"/>
    </label>
            <label>
        <input type="text" id="deliveryFormat" name="deliveryFormat" required autocomplete="on" placeholder="Delivery format" />
    </label>
            <label for="estimatedTime">
        <input type="number" id="estimatedTime" name="estimatedTime" required min="0.25" step="0.25" placeholder="Estimated time"/>
    </label>
            <label for="deadline">
        <input type="text" id="deadline" name="deadline" required placeholder="Deadline"/>
    </label>
            <label for="briefing">
        <textarea id="briefing" name="briefing" rows="10" cols="34" required placeholder="Briefing"></textarea>
    </label>
            <!-- <label for="attachment">
        <input type="file" name="attachment"/>
    </label> -->
            <input type="submit" id="submitForm" />
        </form>
    </div>

</html>
