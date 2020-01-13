let rawData;
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
            rawData = data;
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

window.confirm = confirm;

function confirm() {
    let mask = document.createElement('div');
    mask.setAttribute("class", "mask");

    let aWindow = document.createElement('div');
    aWindow.innerHTML = `
        <svg class="the-x" aria-hidden="true">
            <use xlink:href="#icon-guanbi"></use>
        </svg>
        <span class="question-icon icon-wenhao"></span>
        <span class="reminder-title">提示</span>
        <div class="reminder-message">确认删除该项目吗？</div>
        <input class="button-sure" type="button", value="确认" />
        <input class="button-cancle" type="button", value="取消" />
    `.trim();
    aWindow.setAttribute("class", "the-window");
    let sure = true;
    let cancel = false;

    mask.appendChild(aWindow);
    document.getElementsByTagName("body")[0].appendChild(mask);

      //点击确认事件，用回调函数
    document.getElementsByClassName("button-cancel")[0].onclick = function () {
        mask.parentNode.removeChild(mask);
        callback(cancel);
    };

    document.getElementsByClassName("button-sure")[0].onclick = function  () {
        var a = 'true';
        mask.parentNode.removeChild(mask);
        callback(sure);
    };
};

// confirm();

function increse(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

function decrese(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
}

function incrSort() {
    let sortedData = rawData.sort(increse);
    insertProjectItem(sortedData);
}
function decrSort() {
    let sortedData = rawData.sort(decrese);
    insertProjectItem(sortedData);
}

