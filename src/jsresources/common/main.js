import { changeLocations } from "./page-events.js";
import { $, $$, addClass, get, getCookie, setCookie, tmp } from "./utils.js";
import { initSocket } from "./socket.js";
import { data } from "../../menu.js"

// initTargetPage();
// initData();

// 查询菜单数据
export async function initData() {
    const host = location.host;
    const storage = localStorage;

    // 我可以使用缓存吗？ 在除 local、localhost 之外的环境都可以使用
    const iCanUseCache = !/^(local\.cbs|localhost)/.test(host);

    const key = "menuCache";
    const menuTime = getCookie("menu-time");
    const menuCacheStr = storage.getItem(key);

    let result;
    if (menuTime && menuCacheStr) {
        try {
            result = JSON.parse(menuCacheStr);
        } catch (e) {}
    }

    if (!result) {
        // 如果没有缓存过，或者缓存时间已经超过10分钟
        console.log(data);
        result = data;
        // if (iCanUseCache && +result.code === 0) {
        //     // 只缓存请求成功的数据，失败的数据将忽略
        //     storage.setItem(key, JSON.stringify(result));
        //     setCookie("menu-time", Date.now());
        // }
        // let resultAnnounce = await get('/base/system/getAnnounce.htm');
        // if (resultAnnounce.data.show == true){
        //     patchWelcome(resultAnnounce.data);
        // }
        // let resultgetAuthExam = await get('/base/system/getAuthExam.htm');
        // if (resultgetAuthExam.data.show == true){
        //     authenticationFn(resultgetAuthExam.data);
        // }
    }
    if (+result.code === 0) {
        // const { user, barTips, multiPost, otherUrl, tipsMenu, todosMenu, menus = [], showMsg, showTodo } = result.data;
        const menus = result.data.children;
        patchMenus(menus);
        // patchOtherMenu(otherUrl);
        // patchTipsAndTodos(tipsMenu, $(".menu-enter.tips"), showMsg);
        // patchTipsAndTodos(todosMenu, $(".menu-enter.todos"), showTodo);
        // patchUserInfo(user, multiPost);
        // $(".breadcrumb-tips").innerText = barTips;
        // $(".user-info-layer").setAttribute("userid", user.userId);

        // if (cbsToken) {
        //     const links = $$("a[href]");
        //     Array.from(links).forEach((link) => {
        //         link.href = addCbsToken(link.href);
        //     });
        // }
        // initSocket(user.userId);
        if (location.search) {
            const menuFill = $(".menus-fill");
            var topDistance = 0;
            try {
                topDistance = localStorage.getItem("topDistance");
                localStorage.removeItem("topDistance");
            } catch (error) {}
            menuFill.scrollTop = topDistance;
        }
    }
}

// 初始化连接页面
export function initTargetPage() {
    const frame = $("#content");
    if (location.search) {
        const sp = new URLSearchParams(location.search);

        const targetUrl = sp.get("target");
        const menuId = sp.get("menu-id");
        if (targetUrl) {
            frame.src = targetUrl;
            changeLocations(menuId, targetUrl);
            return;
        }
    }

    // 默认访问首页
    frame.src = "";
}

// 渲染菜单
function patchMenus(list) {
    const dom = $(".main-menu .menus-fill .menu-wrap");
    let curId;
    if (location.search) {
        const sp = new URLSearchParams(location.search);
        curId = sp.get("menu-id");
        document.title = sp.get("menu-name");
    }

    const parentIds = [];

    const tree = list2tree(list);

    dom.innerHTML = getHtml(tree);

    addClass($(".main-menu"), "init");

    function getHtml(list) {
        // list.sort((a, b) => a.seq - b.seq);

        return list.map((menu) => {
            const hasChild = menu.children.length;
            let child = "";
            const focusFlag = parentIds.includes(menu.id);
            if (hasChild) {
                const styleAdd = focusFlag ? "auto" : "0px";
                child = '<ul style="height: ' + styleAdd + ';">' + getHtml(menu.children) + "</ul>";
            }

            let template = "";
            if (menu.url && !hasChild) {
                template = `
                <li class="link">
                    <a href="${ menu.url }" menu-id="${ menu.id }"
                       target="${ menu.target }">${ menu.menuName }</a>
                </li>`;
            } else {
                const classAdd = focusFlag ? "active" : "";
                template = `
                <li class="menu-item ${classAdd}">
                    <div layout="row" layout-align="center center">
                        <div class="menu-icon ${ menu.menuIcon }"></div>
                        <% if(data.hasChild){ %>
                            <a href="javascript:" flex>${ menu.menuName }</a>
                            <span class="menu-icon icon-aleft"></span>
                        <% } else { %>
                            <a href="${ (menu.url || 'javascript:') }" menu-id="${ menu.id }" 
                               target="${ menu.target }" flex>
                                ${ menu.menuName }
                            </a>
                        <% } %>
                    </div>
                    ${child}
                </li>
                `;
            }
            // if (menu.url) {
            //     if (menu.url.includes("?")) {
            //         menu.url += "&menu-name=" + menu.name;
            //     } else {
            //         menu.url += "?menu-name=" + menu.name;
            //     }
            // }
            return tmp(template, { menu, hasChild });
        }).join("");
    }

    function getUrl(menu) {
        // const sp = new URLSearchParams();
        // // sp.append("target", menu.url);
        // // sp.append("menu-id", menu.id);
        console.log(menu.absoluteUrl + menu.url);
        return menu.absoluteUrl + menu.url;
    }

    function list2tree(list, pid) {
        // const result = list.filter((item) => item.children.length > 0);
        // console.log(result);

        list.forEach((menu) => {
            // menu.children = list2tree(list, menu.id);
            // if (+menu.newPage === 1) {
            // if(menu.children.length > 0) {

            // }
            if (menu.url && menu.id) {
                // if (cbsToken) {
                //     menu.url = addCbsToken(menu.url);
                // }
                menu.url = getUrl(menu);
            }
            menu.target = "_blank";
            // } else {
            //     menu.target = "content";
            // }
            // if (menu.id == curId && menu.pId) {
            //     curId = menu.pId;
            //     parentIds.push(curId);
            // }
        });

        return list;
    }
}

// function addCbsToken(url) {
//     if (url.endsWith("cbsToken=")) {
//         url += cbsToken;
//     }
//     return url;
// }

// 填充其它菜单
function patchOtherMenu(data) {
    const dom = $(".other-menu .menus-fill .menu-wrap");
    const html = data
        .map((menu) => {
            return `<li class="link">
            <a href="${menu.url}" target="_blank">${menu.name}</a>
        </li>`;
        })
        .join("");
    dom.innerHTML = html;

    addClass($(".other-menu"), "init");
}

// 设置 待办，和消息的链接
function patchTipsAndTodos(data, link, show) {
    if (show) {
        link.style.display = "";
    }
    link.href = data.url;
}

// 用户信息填充
function patchUserInfo(data, multiPost) {
    const userIcon = $(".menu-enter .user");
    const compName = $(".user-details .comp-name");
    const userName = $(".user-details .user-name");
    const postName = $(".user-details .post-name");
    const switchBtn = $(".user-details .switch");

    compName.innerText = data.compName;
    userName.innerText = data.userName;
    postName.innerText = data.postName;
    if (multiPost) {
        addClass(switchBtn, "show");
    }
    userIcon.src = data.icon || "/base/static/resources/img/rentou.jpg";
    addClass($(".user-details"), "init");
}