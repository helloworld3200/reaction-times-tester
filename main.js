import './style.css'

console.log("Main JavaScript is being run");

function createLowerRangeSelector()
{
    let selector = document.getElementById("lowerRangeSelect");

    for (let i = 1; i <= 60; i++)
    {
        let option = document.createElement("option");

        option.value = i;
        option.text = i;

        selector.appendChild(option);
    }
}
