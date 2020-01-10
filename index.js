// const axios = require("axios");

// axios.get ("http://localhost:3000/projects")
//     .then(resp => {
//       let data = resp.data;
//           console.log(typeof data);
//           console.log(data[0]);
//         data.forEach(element => {
//             insertProjectItem(element);
//         });
//       })
//     .catch(error => {
//       console.log(error);
//     });

    // const data = {
    //     "projects": [
    //       {
    //         "id": 1,
    //         "name": "react-native",
    //         "endTime": "2018-12-01",
    //         "description": "这个是 Facebook 在 React.js Conf 2015 大会上推出的基于 JavaScript 的开源框架 React Native, 该框架结合了 Web 应用和 Native 应用的优势, 可以使用 JavaScript 来开发 iOS 和 Android 原生应用",
    //         "status": "ACTIVE"
    //       },
    //       {
    //         "id": 2,
    //         "name": "Android-Universal-Image-Loader",
    //         "endTime": "2018-12-02",
    //         "description": "ImageLoader 是最早开源的 Android 图片缓存库, 强大的缓存机制, 早期被广泛 Android 应用使用, 至今仍然有很多 Android 开发者在使用",
    //         "status": "ACTIVE"
    //       },
    //       {
    //         "id": 3,
    //         "name": "RxJava",
    //         "endTime": "2018-12-03",
    //         "description": "RxJava 是一个在 Java VM 上使用可观测的序列来组成异步的, 基于事件的程序的库, 简单来说它就是一个实现异步操作的库, RxJava 的优点在于一个词 '简洁', 使用它就算你程序逻辑有多么复杂, 它依然能够保持简洁易懂",
    //         "status": "PENDING"
    //       },
    //       {
    //         "id": 4,
    //         "name": "retrofit",
    //         "endTime": "2018-12-04",
    //         "description": "Retrofit 是 Square 公司出品的 HTTP 请求库, 同时是 Square 是最早开源项目之一, Retrofit 是目前 Android 最流行的 Http Client 库之一, 目前版本是 Retrofit2.0 Beta4, 越来越多 Android 开发者开始使用这个请求库了",
    //         "status": "ACTIVE"
    //       },
    //       {
    //         "id": 5,
    //         "name": "okhttp",
    //         "endTime": "2018-12-05",
    //         "description": "OkHttp 是 Square 公司出品的 HTTP 另一个请求库, Google 不推荐人们使用 HttpClient, 可是 HttpURLConnection 实在是太难用了, 因此很多人使用了 OkHttp 来解决这问题, 据说 Android4.4 的源码中可以看到 HttpURLConnection 已经替换成 OkHttp 实现呢",
    //         "status": "ACTIVE"
    //       },
    //       {
    //         "id": 6,
    //         "name": "picasso",
    //         "endTime": "2018-12-06",
    //         "description": "Picasso 是 Square 公司出品的一款图片缓存库, 主导者是 JakeWharton 大神",
    //         "status": "CLOSED"
    //       },
    //       {
    //         "id": 7,
    //         "name": "SlidingMenu(不建议使用)",
    //         "endTime": "2018-12-07",
    //         "description": "一个侧滑菜单开源库, 在 Google 自己原生态的侧滑菜单 NavigationDrawer 没有出现之前, 这个库就已经被广泛使用, 可是到现在这个库已经被放弃了",
    //         "status": "ACTIVE"
    //       },
    //       {
    //         "id": 8,
    //         "name": "android-best-practices",
    //         "endTime": "2018-12-08",
    //         "description": "Android 开发最佳实践, 里面所介绍的经验都是来自于 Futurice 公司 Android 开发者, 介绍内容有 Android 开发规范, 架构, 布局技巧, 以及使用一些有助于快速开发相关工具等等, 非常适合新手去学习",
    //         "status": "CLOSED"
    //       },
    //       {
    //         "id": 9,
    //         "name": "EventBus",
    //         "endTime": "2018-12-09",
    //         "description": "EventBus 是 Android 事件管理总线, 使用它可以替带 Android BroadCast, BroadCastReceiver, Handler 在 Activity, Fragment, Service, 线程之间传递消息, 大大简化了事件传递逻辑",
    //         "status": "PENDING"
    //       },
    //       {
    //         "id": 10,
    //         "name": "android-async-http",
    //         "endTime": "2018-12-10",
    //         "description": "Android-Async-Http 是 Android 一款老牌异步请求库, 专门对 Android 在 Apache 的 HttpClient 基础上构建的异步 http 连接, 该库有很多特征, 例如: 库的 size 小, 支持文件上传不需使用第三方库支持, 内部使用线程池来处理并发, 等等",
    //         "status": "PENDING"
    //       },
    //       {
    //         "id": 11,
    //         "name": "fresco",
    //         "endTime": "2018-12-11",
    //         "description": "Fresco 是 FaceBook 公司出品的一款图片缓存库, Fresco 是一个强大的图片加载组件, 支持加载 Gif 图和 WebP 格式, 支持 Android2.3(API level 9) 及其以上系统, Fresco 中设计了 Image pipeline 和 Drawees 两个模块各施其职, 使得图片完美加载出来, 想知道更多 image pipeline 和 Drawees 有关于它的特性, 可以到它官方平台看介绍",
    //         "status": "ACTIVE"
    //       },
    //       {
    //         "id": 12,
    //         "name": "leakcanary",
    //         "endTime": "2018-12-12",
    //         "description": "LeakCanary 是 Square 公司出的一款检测内存泄露工具, 该工具能帮助你在开发阶段方便的检测出内存泄露的问题, 使用起来非常简单方便",
    //         "status": "PENDING"
    //       },
    //       {
    //         "id": 13,
    //         "name": "AFNetworking",
    //         "endTime": "2018-12-13",
    //         "description": "作者是 NSHipster 的博主， iOS 开发界的大神级人物， 毕业于卡内基·梅隆大学， 开源了许多牛逼的项目， 这个便是其中之一， AFNetworking 采用 NSURLConnection + NSOperation, 主要方便与服务端 API 进行数据交换， 操作简单， 功能强大， 现在许多人都用它取代 ASIHTTPRequest",
    //         "status": "CLOSED"
    //       },
    //       {
    //         "id": 14,
    //         "name": "GPUImage",
    //         "endTime": "2018-12-14",
    //         "description": "一款强大的图片滤镜工具， 支持自定义滤镜， 可用来实时处理图片和视频流， 作者是 SonoPlot 公司的 CTO, 在很小的时候便开始接触编程， 他在 SO 上面的回答也有很多值得阅读， GPUImage 这个项目从 2012 年开始， 使用 OpenGL 图形程序接口编写， 性能非常好， 现在很多 iOS 程序员都用它来实现 iOS 的模糊效果",
    //         "status": "PENDING"
    //       },
    //       {
    //         "id": 15,
    //         "name": "three20",
    //         "endTime": "2018-12-15",
    //         "description": "由 Facebook iOS 客户端衍生出的一款 iPhone 框架， 内置许多丰富的功能， 有丰富的界面， 对底层的操作便捷， 为开发者省下了很多时间， 但现在已经停止了更新， 一个 PR 把代码删得干干净净， 不要好奇去点开 Files changed, 我点开后该页面直接卡死， three20 当中的一位作者创建了 Nimbus, 算是 three20 的一个替代品",
    //         "status": "ACTIVE"
    //       },
    //       {
    //         "id": 16,
    //         "name": "SDWebImage",
    //         "endTime": "2018-12-16",
    //         "description": "作者 Olivier Poitrey 是 Dailymotion 的 CTO, 拥有多个不错的开源项目， 此项目常用于对从 Web 端接受到的图片进行缓存， 是 UIImageView 的扩展， 应用起来比较简单",
    //         "status": "CLOSED"
    //       },
    //       {
    //         "id": 17,
    //         "name": "ReactiveCocoa",
    //         "endTime": "2018-12-17",
    //         "description": "由 GitHub 工程师们开发的一个应用于 iOS 和 OS X 开发的函数响应式编程新框架， Matt 称其为 'An open source project that exemplifies this brave new era for Objective-C'， 也有人说它是 Cocoa 的未来， 具体可看唐巧写的这篇文章",
    //         "status": "ACTIVE"
    //       },
    //       {
    //         "id": 18,
    //         "name": " MBProgressHUD",
    //         "endTime": "2018-12-18",
    //         "description": "作者 Matej Bukovinski 是一位全栈工程师， UI/UX 设计师， 此项目是一款提示框第三方库， 帮助开发者快速应用到项目中)",
    //         "status": "PENDING"
    //       },
    //       {
    //         "id": 19,
    //         "name": "MagicalRecord",
    //         "endTime": "2018-12-19",
    //         "description": "作者是 Coursera 的 iOS 工程师， 该项目创作灵感来自于 Ruby on Rails 的 Active Record, 主要为方便操作 CoreData 而生， 帮助清除 CoreData 引用的代码， 协助方便 CoreData 的工作",
    //         "status": "CLOSED"
    //       },
    //       {
    //         "id": 20,
    //         "name": "ASIHTTPRequest",
    //         "endTime": "2018-12-20",
    //         "description": "一个轻量级的 iOS 网络通信类库， 基于 CFNetwork 框架开发， 但现在已经停止更新， 多数开发者改用 AFNetworking 替代)",
    //         "status": "ACTIVE"
    //       }
    //     ]
    //   }

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