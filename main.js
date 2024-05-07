import './css/main.css';
import './css/topbar.css'

console.log("Main JavaScript is being run");

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
