const InputBox = document.getElementById("textt");
const ListContainer = document.getElementById("list_items");
const Button = document.getElementById("button");

Button.addEventListener("click", () => {

    if (InputBox.value === '') {
        alert("You Have To Enter A Text");
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = InputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = '';
    DataSaving();
})

ListContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        DataSaving();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        DataSaving();
    }

})

// This function is used because of to save the data in the browser
function DataSaving() {
    localStorage.setItem("data",ListContainer.innerHTML);
}

// This function is used because of to show the data whenever we visit the page 
function ShowData(){
    ListContainer.innerHTML=localStorage.getItem("data");
}
ShowData();




