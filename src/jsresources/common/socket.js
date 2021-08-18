import {$, addClass, documentVisibilityChange, on} from "./utils.js";

let socket;

export function initSocket(userId) {
    documentVisibilityChange(function (show) {
        if (show) {
            console.log('[socket] 页面显示，准备连接')
            connect(userId);
        } else {
            console.log('[socket] 页面隐藏，暂时断开')
            socket && socket.close();
            socket = null;
        }
    });
}

// 连接 socket
function connect(userId) {
    console.log('[socket] 开始连接')
    // socket = new WebSocket(`ws://${location.host}/socket-server/websck?userId=${userId}`);
    socket = new WebSocket(`ws://uat.cbs.bacic5i5j.com/socket-server/websck?userId=${userId}`);
    on(socket, 'open', function () {
        console.log('[socket] 连接成功')
    });
    on(socket, 'message', function (e) {
        if (e.data) {
            try {
                const {type, new: _new, count} = JSON.parse(e.data);
                $(+type === 0 ? '.tips-pop' : '.todos-pop').innerText = count > 99 ? '99+' : +count || '';
                if (+_new === 1) {
                    openMsgModal(type, count);
                }
            } catch (e) {
            }
        }
    });

    on(socket, 'close', reconnect);
    on(socket, 'error', reconnect);

    let timer;

    function reconnect(e) {
        clearTimeout(timer);
        console.log('[socket] 断开');

        if (socket) {
            console.log('[socket] 异常断开，20s后重连socket');
        }

        timer = setTimeout(function () {
            // 主动关闭的scope 该对象为null，被动关闭如网络波动，连接不稳定等情况，尝试重连
            if (socket) {
                connect(userId)
            }
        }, 1000 * 20);
    }
}

// 打开消息框
function openMsgModal(type, count) {
    const msg = $('.message');
    const iconBbox = $('.icon-box');
    addClass(msg, 'open');
    if (+type) {
        $('.info-type').innerText = '新任务';
        addClass(iconBbox, 'icon-list');
    } else {
        $('.info-type').innerText = '新消息';
        addClass(iconBbox, 'icon-message');
    }
    $('.number-tip').innerText = count;

    $('.message .lookup').setAttribute('open-type', type);
    setTimeout(function () {
        $('.message .ignore').click();
    }, 5000);
}
