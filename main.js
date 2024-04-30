import './style.css'

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
