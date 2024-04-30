import './style.css'

console.log("Main JavaScript is being run");

function createLowerRangeSelector(rangeLimit = 60)
{
    let selector = document.getElementById("lowerRangeSelect");

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
    createLowerRangeSelector();
}

main();
