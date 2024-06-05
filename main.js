import './css/main.css';
import './css/topbar.css'
import './css/tester.css'

console.log("Main JS Running");

class TesterBox
{
    constructor(id = "tester")
    {
        this.box = document.getElementById(id);

        this.createResetButton();
        this.resetBox();
    }

    resetBox()
    {
        this.box.textContent = "";
        this.box.appendChild(this.button);
    }

    createResetButton()
    {
        this.button = document.createElement("button");
        let text = document.createTextNode("Reset");
        this.button.appendChild(text);
        this.button.textContent = "Start Test";
        this.button.className = "startTestButton";
        addButtonClickAnimation(this.button);
    }
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

function main()
{
    createRangeSelector("lowerRangeSelect");
    createRangeSelector("upperRangeSelect");

    let testerBox = new TesterBox();
}

main();
