function main() {
    // let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 

    let ajax = new XMLHttpRequest(); 
    ajax.open('GET', "http://localhost:3000/projects");
    ajax.send();
    ajax.onload = function () {
        if (ajax.status != 200) {
            console.log(`Error ${ajax.status}: ${ajax.statusText}`); 
        } else {
            let data = JSON.parse(ajax.responseText);
            data.forEach(insertProjectItem);

            let headListArray = calculate(data);

            updateHeadList(headListArray);
        }
    };
    ajax.onerror = function () {
        console.log('Request failed');
    };
}
main();

function insertProjectItem(item) {
    let projectTable = document.getElementsByTagName("tbody")[0];
    let aNewItem = document.createElement("tr");
    aNewItem.setAttribute("id", `projectItem-${item.id}`);
    aNewItem.setAttribute("class", "project-list-item")

    aNewItem.innerHTML = `
        <td class="project-name">${item.name}</td>
        <td class="project-describe">
        <div class="describe">${item.description}</div>
        </td>
        <td class="project-endtime">${item.endTime}</td>
        <td class="project-status-${item.status}">${item.status}</td>
        <td class="project-operation">
        <input type="button" onclick="deleteItem()" value="删除" class="delete-button" />
        </td>
    `.trim();

    projectTable.appendChild(aNewItem);
}

function calculate(data) {
    let [sum, numberArray, activePercent, pendingPercent, closedPercent] = [0];
    sum = data.length;
    // console.log("sum:" + sum);
    numberArray = calculateNumber(data);
    // console.log("numberArray:" + numberArray);

    activePercent = toPercent(numberArray[0] / sum);
    // console.log("numberArray[0]:" + numberArray[0]);
    // console.log("floatnum:" + numberArray[0] / sum);
    // console.log("toPercent:" + toPercent(numberArray[0] / sum));
    // console.log("activePercent:" + activePercent);
    pendingPercent = toPercent(numberArray[1] / sum);
    closedPercent = toPercent(numberArray[2] / sum);

    return [sum, numberArray[0], activePercent, numberArray[1], pendingPercent,numberArray[2], closedPercent];
}

function toPercent(number) {
    let str = Number(number*100).toFixed(0);
    str = str + "%";
    return str;
}

function calculateNumber(data) {
    let [active, pending, closed] = [0, 0, 0];
    data.forEach(statusJudgment);

    function statusJudgment(element) {
        if (element.status === "ACTIVE") {
            active = active + 1;
        } else if (element.status === "PENDING") {
            pending = pending + 1;
        } else {
            closed = closed + 1;
        }
    }

    return [active, pending, closed];
}

function updateHeadList(headListArray) {
    document.getElementById("all-missions-number").innerText = `${headListArray[0]}`;
    document.getElementById("active-number").innerText = `${headListArray[1]}`;
    document.getElementById("active-percent").innerText = `${headListArray[2]}`;
    document.getElementById("pending-number").innerText = `${headListArray[3]}`;
    document.getElementById("pending-percent").innerText = `${headListArray[4]}`;
    document.getElementById("closed-number").innerText = `${headListArray[5]}`;
    document.getElementById("closed-percent").innerText = `${headListArray[6]}`;
}

function deleteItem() {
    let body = document.getElementsByTagName("body")[0];
    body.setAttribute("class", "masklayer");

    confirm("确认删除该项目吗？")
    // let openWindow = window.open("", "newwindow", "height=170px, width=340px, top=calc(50% - 85px), left= calc(50% - 170px), toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")  
}