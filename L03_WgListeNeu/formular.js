"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var A03_Formular;
(function (A03_Formular) {
    console.log("Init");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            let taskDiv = document.querySelector("div#tasks");
            taskDiv.addEventListener("change", handleChange);
            let deleteButton = document.querySelector(".deleteButton");
            deleteButton.addEventListener("click", deleteTask);
            let addButton = document.querySelector(".addButton");
            addButton.addEventListener("click", addTask);
            let backButton = document.querySelector(".backButton");
            backButton.addEventListener("click", backTask);
            let skipButton = document.querySelector(".skipButton");
            skipButton.addEventListener("click", nextTask);
            let settingButton = document.querySelector(".settingButton");
            settingButton.addEventListener("click", settingTask);
            A03_Formular.data = yield getJson();
            showTask();
        });
    }
    let serverUrl = "https://7c8644f9-f81d-49cd-980b-1883574694b6.fr.bw-cloud-instance.org/mro41572/mingidb.php";
    let currentIndex = 0;
    function showTask() {
        let task = A03_Formular.data[currentIndex];
        let title = document.getElementById("infosTitle");
        let name = document.getElementById("infosFor");
        let date = document.getElementById("infosDate");
        let time = document.getElementById("infosTime");
        let comment = document.getElementById("infosComment");
        if (task.Status == "1") {
            let statusPending = document.getElementById("statusPending");
            statusPending.checked = true;
        }
        if (task.Status == "2") {
            let statusProgress = document.getElementById("statusProgress");
            statusProgress.checked = true;
        }
        if (task.Status == "3") {
            let statusCompleted = document.getElementById("statusCompleted");
            statusCompleted.checked = true;
        }
        title.value = task.Title;
        name.value = task.For;
        date.value = task.Date;
        time.value = task.Time;
        comment.value = task.Comment;
    }
    A03_Formular.showTask = showTask;
    function handleChange() {
        console.log(JSON.stringify(A03_Formular.data));
    }
    function getJson() {
        return __awaiter(this, void 0, void 0, function* () {
            // let response: Response = await fetch("data.json");
            // let data: Column[] = await response.json();
            // return data
            let query = new URLSearchParams(serverUrl);
            query.set("command", "find");
            query.set("collection", "organizerData");
            query.set("data", "{}");
            let response = yield fetch(serverUrl + "?" + query.toString());
            let responseJson = yield response.json();
            return responseJson.data;
        });
    }
    function deleteTask() {
        let userConfirmed = confirm("Do you really want to delete the task?");
        if (userConfirmed) {
            deleteCurrentTask(currentIndex);
            if (A03_Formular.data.length < 1)
                addTask();
            showTask();
        }
        else {
            console.log("Löschvorgang abgebrochen");
        }
    }
    function deleteCurrentTask(_currentIndex) {
        A03_Formular.data.splice(_currentIndex, 1);
    }
    function addTask() {
        console.log("Neues Task wird hinzugefügt");
        // Neues leeres Objekt im `data`-Array hinzufügen
        let newTask = {
            Title: "",
            For: "",
            Date: "",
            Time: "",
            Comment: "",
            Status: "1"
        };
        A03_Formular.data.push(newTask);
        currentIndex = A03_Formular.data.length - 1;
        showTask();
        console.log("Neues leeres Fieldset entsteht");
    }
    function backTask() {
        if (currentIndex > 0)
            currentIndex--;
        showTask();
    }
    function nextTask() {
        if (currentIndex < A03_Formular.data.length - 1)
            currentIndex++;
        showTask();
    }
    let isEditing = false;
    function settingTask() {
        console.log("Setting button gedrückt");
        let inputs = document.querySelectorAll("#tasks fieldset input, #tasks fieldset textarea");
        let backButton = document.querySelector(".backButton");
        let skipButton = document.querySelector(".skipButton");
        if (!isEditing) {
            inputs.forEach((input) => {
                input.disabled = false;
            });
            backButton.style.display = "none";
            skipButton.style.display = "none";
            console.log("Bearbeitungsmodus aktiviert: Felder sind bearbeitbar, Back- und Skip-Buttons ausgeblendet.");
        }
        else {
            inputs.forEach((input) => {
                input.disabled = true;
            });
            let title = document.getElementById("infosTitle");
            let name = document.getElementById("infosFor");
            let date = document.getElementById("infosDate");
            let time = document.getElementById("infosTime");
            let comment = document.getElementById("infosComment");
            let statusPending = document.getElementById("statusPending");
            let statusProgress = document.getElementById("statusProgress");
            let statusCompleted = document.getElementById("statusCompleted");
            A03_Formular.data[currentIndex].Title = title.value;
            A03_Formular.data[currentIndex].For = name.value;
            A03_Formular.data[currentIndex].Date = date.value;
            A03_Formular.data[currentIndex].Time = time.value;
            A03_Formular.data[currentIndex].Comment = comment.value;
            if (statusPending.checked)
                A03_Formular.data[currentIndex].Status = "1";
            if (statusProgress.checked)
                A03_Formular.data[currentIndex].Status = "2";
            if (statusCompleted.checked)
                A03_Formular.data[currentIndex].Status = "3";
            console.log(statusPending.value);
            backButton.style.display = "inline-block";
            skipButton.style.display = "inline-block";
            console.log("Bearbeitungsmodus deaktiviert: Felder sind wieder gesperrt, Back- und Skip-Buttons eingeblendet.");
        }
        isEditing = !isEditing;
    }
})(A03_Formular || (A03_Formular = {}));
