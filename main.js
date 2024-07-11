import './css/main.css';
import './css/topbar.css'
import './css/tester.css'

console.log("Main JS Running");

class TesterBox
{
    constructor(id = "tester")
    {
        this.box = document.getElementById(id);

        this.createChildren();
        this.resetBox();
    }

    resetBox()
    {
        // Should only call after all elements created
        this.box.textContent = "";

        this.box.appendChild(this.button);
        this.box.appendChild(this.statsPanel);
    }

    createChildren()
    {
        this.createResetButton();
        this.createStatsPanel();
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

    createStatsPanel()
    {
        this.statsPanel = document.createElement("div");
        this.statsPanel.className = "testerStats";
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

function createTester()
{
    let testerBox = new TesterBox();
}

function main()
{
    createRangeSelector("lowerRangeSelect");
    createRangeSelector("upperRangeSelect");
}

main();
