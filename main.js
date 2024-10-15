import './css/main.css';
import './css/topbar.css'
import './css/tester.css'

console.log("Main JS Running");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRangeSelector(id, rangeLimit = 60)
{
    let selector = document.getElementById(id);

    for (let i = 1; i <= rangeLimit; i++)
    {
        let option = document.createElement("option");

        option.value = i;
        option.text = i;

        selector.appendChild(option);
    }
}

function addButtonClickAnimation(button, duration = 200)
{
    button.addEventListener("click", function()
    {
        button.classList.add("clicked");
        setTimeout(function()
        {
            button.classList.remove("clicked");
        }, duration);
    });
}

function addStimulusMainloop(button, testerBox, colorPicker) 
{
    button.addEventListener("click", () => {
        console.log("Starting stimulus tests")

        // TODO: Add opacity animation to button
        // (temporary)
        button.style.display = "none";

        let lowerRange = document.getElementById("lowerRangeSelect").value;
        let upperRange = document.getElementById("upperRangeSelect").value;

        let lowerRangeInt = Number(lowerRange);
        let upperRangeInt = Number(upperRange);

        console.log("Lower range: " + lowerRangeInt);
        console.log("Upper range: " + upperRangeInt);

        let timeToWait = getRandomInt(lowerRangeInt, upperRangeInt);
        console.log("Waiting for " + timeToWait + " seconds");

        setTimeout(() => {
            console.log("Stimulus test completed");
            
            let color = colorPicker.value;

            testerBox.style.backgroundColor = color;
        }, timeToWait);
    })
}

function main()
{
    createRangeSelector("lowerRangeSelect");
    createRangeSelector("upperRangeSelect");

    let testerBox = document.getElementById("testerBox");
    let button = document.getElementById("startTestButton")
    let colorPicker = document.getElementById("stimulusColor");

    addButtonClickAnimation(button);
    addStimulusMainloop(button, testerBox, colorPicker);
}

document.addEventListener("DOMContentLoaded", main);
