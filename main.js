import './css/main.css';
import './css/topbar.css'
import './css/tester.css'

console.log("Main JS Running");

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

function main()
{
    createRangeSelector("lowerRangeSelect");
    createRangeSelector("upperRangeSelect");
}

main();
