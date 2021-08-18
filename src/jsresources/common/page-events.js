import { $, $$, addClass, animateStyle, get, on, removeClass, toggleClass } from "./utils.js";

// const resetMenu = startToggleMenus();
// startBreadcrumbEvent();
// startMenuTarget();
// startLogoutEvent();
// startMenuEvent();
// startUserEvent();
// startMessageEvent();

// 主菜单点击后，更新面包屑或者打开新链接
export function startMenuTarget() {
    const mainMenu = $('.main-menu');
    const menuFill = $('.menus-fill');
    on(mainMenu, 'mousedown', function(e) {
        const link = e.target;
        console.log(e);
        if (e.target.matches('a') && e.buttons === 1) {
            console.log(1111111111111);
            // 鼠标中键事件
            const href = link.href;
            if (!href.startsWith('javascript:')) {
                setTimeout(function() {
                    if (!href.includes('?target=')) {
                        const menuId = link.getAttribute('menu-id');
                        openNewWindow(href, menuId);
                    } else {
                        window.open(href);
                    }
                }, 150);
                // startToggleMenus()();
                e.preventDefault();
            }
        }
        if (e.target.matches('a') && (e.ctrlKey || e.metaKey || link.target === '_blank')) {
            localStorage.setItem('topDistance', menuFill.scrollTop);
        }
    })
    on(mainMenu, 'click', function(e) {
        if (e.target.matches('a')) {
            const link = e.target;
            if (link.href.startsWith('javascript:')) {
                return;
            }
            const isBlank = e.ctrlKey || e.metaKey || link.target === '_blank';
            const menuId = link.getAttribute('menu-id');
            if (isBlank) {
                if (!link.search) {
                    // 如果是没有 new-page = 1 的菜单，被ctrl强制新页面打开，则强行使用 target 覆盖到框架中
                    setTimeout(function() {
                        openNewWindow(link.href, menuId);
                    }, 100);
                    startToggleMenus()();
                    e.preventDefault();
                }
            } else {
                document.title = link.innerText;
                changeLocations(menuId)
            }
        }
    });

    function openNewWindow(href, menuId) {
        const sp = new URLSearchParams()
        sp.append('target', href);
        sp.append('menu-id', menuId);
        window.open(href);
    }

    const tipsBtns = $$('a.menu-enter.tips,a.menu-enter.todos');
    Array.from(tipsBtns).forEach(el => {
        on(el, 'click', function(e) {
            changeLocations(null, el.href);
        });
    });
}

// 查询当前的面包屑
export async function changeLocations(menuId, menuUrl) {
    if (menuUrl) {
        menuUrl = menuUrl.replace(location.origin, '');
    }
    const result = await get('/base/system/getLocations.htm', { menuId, menuUrl });
    if (+result.code === 0 && Array.isArray(result.data)) {
        const html = result.data.map(function(menu) {
            if (menu.url) {
                document.title = menu.name;
                return `/<a href="${menu.url}" menu-id="${menu.id}" target="content">${menu.name}</a>`
            }
            return `/<span>${menu.name}</span>`;
        }).join('');
        $('.breadcrumb').innerHTML = html;
    }
}

// 面包屑菜单点击事件
export function startBreadcrumbEvent() {
    const breadcrumbWrap = $('.breadcrumb-wrap');
    on(breadcrumbWrap, 'click', function(e) {
        if (e.target.matches('a')) {
            const link = e.target;
            const menuId = link.getAttribute('menu-id');
            const menuUrl = link.href;
            if (menuId) {
                changeLocations(menuId, menuUrl);
            }
        }
    });
}

export function startLogoutEvent() {
    const logoutBtn = $('.menu-enter.exit');
    on(logoutBtn, 'click', function() {
        localStorage.clear(); // 清空session缓存的菜单数据
        window.location.href = "/base/system/logout.htm";
    });
}

// 菜单展开关闭事件
export function startToggleMenus() {
    var mainMenu = $('.main-menu');
    var showMainMenuBtn = $('.show-main-menu');
    subEvent(showMainMenuBtn, mainMenu);

    function subEvent(el, target) {
        on(el, 'click', function() {
            const add = toggleClass(el, 'active');
            toggleClass(target, 'open', add);
        });
    }

    const navBarWrap = $('.nav-bar-wrap');
    let timer;
    on(navBarWrap, 'mouseenter', function() {
        console.log("mouseenter");
        clearTimeout(timer);
    });
    on(navBarWrap, 'mouseleave', function leave() {
        console.log("mouseleave");
        timer = setTimeout(cleanState, 300);
    });

    const tips = $('.menu-enter.tips');
    const todos = $('.menu-enter.todos');
    on(tips, 'click', cleanState);
    on(todos, 'click', cleanState);

    return cleanState;

    function cleanState() {
        removeClass(mainMenu, 'open');
        removeClass(showMainMenuBtn, 'active');
    }
}

// 三级菜单折叠事件代理
export function startMenuEvent() {
    const navBarWrap = $('.nav-bar-wrap');
    let animate = false; // 如果在动画中，停止另外动画的触发
    on(navBarWrap, 'click', function(e) {
        if (e.target.parentNode.matches('li.link')) {
            startToggleMenus()();
            return;
        }
        const menuItem = e.target.closest('li.menu-item');
        if (menuItem) { // 如果点击的是菜单对象

            if (animate) return;

            const siblings = Array.from(menuItem.parentNode.children);
            siblings.forEach(node => {
                if (node !== menuItem && node.matches('.menu-item.active')) {
                    removeClass(node, 'active');
                    const ul = $('ul', node);
                    if (ul) {
                        ul.style.height = ul.scrollHeight + 'px';
                        animateStyle(ul, function() {
                            ul.style.height = '0px';
                        }, true);
                    }
                }
            });

            // 是展开动作还是收起动作？
            const open = toggleClass(menuItem, 'active');
            const ul = $('ul', menuItem);

            if (ul) { // 找到是否有需要展开/收起的 UL对象
                ul.style.height = ul.scrollHeight + 'px';
                animate = true;
                animateStyle(ul, function() {
                    ul.style.height = open ? 'auto' : '0px';
                    animate = false;
                }, !open);
            }
        }
    });
}

// 查看用户信息
export function startUserEvent() {
    const user = $('.user');
    const userDetails = $('.user-details');
    let closeTimer;
    on(user, 'mouseenter', function(e) {
        clearTimeout(closeTimer);
        addClass(userDetails, 'open');
    });
    on(userDetails, 'mouseenter', function(e) {
        clearTimeout(closeTimer);
    });

    on(user, 'mouseleave', leaveEventHandle);
    on(userDetails, 'mouseleave', leaveEventHandle);

    function leaveEventHandle() {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(function() {
            removeClass(userDetails, 'open');
        }, 300);
    }

    const layer = $('.user-info-layer');
    const iframe = $('.user-info-layer iframe');
    on(user, 'click', function() {
        iframe.src = '/base/system/staff/manager.htm?usersid=' + layer.getAttribute('userid');
        addClass(layer, 'open');
    });
    on(layer, 'click', function(e) {
        if (e.target.matches('.modal-close,.close-btn')) {
            iframe.src = 'about:blank';
            removeClass(layer, 'open');
        }
    })
}

// 新消息事件
export function startMessageEvent() {
    const message = $('.message');
    const close = $('.message-close');
    const ignoreBtn = $('.message .ignore');
    const lookupBtn = $('.message .lookup');
    addClass(message, 'init');

    on(close, 'click', closeHandler);
    on(ignoreBtn, 'click', closeHandler);
    on(lookupBtn, 'click', function() {
        closeHandler();
        const openType = lookupBtn.getAttribute('open-type');
        if (+openType === 1) {
            $('.menu-enter.todos').click();
        } else {
            $('.menu-enter.tips').click();
        }
    });

    function closeHandler() {
        removeClass(message, 'open');
    }
}