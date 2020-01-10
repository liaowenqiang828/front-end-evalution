// 入口函数
function main() {
    // 获取数据
    // let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 
    //为什么在node环境里面需要require这一步操作
    let ajax = new XMLHttpRequest(); // 在浏览器环境下，即chrome console环境中请求服务器数据

    ajax.open('GET', "http://localhost:3000/projects");
    ajax.send();
    ajax.onload = function () {

        if (ajax.status != 200) {
            console.log(`Error ${ajax.status}: ${ajax.statusText}`); 
        } else {
            // 这里已经获得数据，responseText, 数组类型
            console.log(JSON.parse(ajax.responseText)); 
            // projects items insert
            let data = JSON.parse(ajax.responseText);
            data.forEach(
                insertProjectItem
            );
            // calculate  the number
            // change the head list
        }
    };
    ajax.onerror = function () {
        console.log('Request failed');
    };
}
main();

    // const projectData = data.projects;
    // console.log(projectData);

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
        <input type="button" value="删除" class="delete-button" />
        </td>
    `.trim();

    projectTable.appendChild(aNewItem);
}

// projectData.forEach(
//     insertProjectItem
// );

function calculate(data) {
    let [sum, number, percent] = [0, 0, 0];
    sum = data.length;
    number = calculateNumber(data);
    floatPercent = number / sum;
    percent = toPercent(floatPercent);
}

function toPercent(number) {
    let str = Number(number*100).toFixed(0);
    str = str + "%";
    return str;
}

function calculateNumber(data) {
    let [active, pending, closed] = [0, 0, 0];

}