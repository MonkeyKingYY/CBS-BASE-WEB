export function on(dom, event, handler) {
    dom.addEventListener(event, handler);
}

export function once(dom, event, handler) {
    dom.addEventListener(event, function fn(e) {
        handler(e);
        dom.removeEventListener(event, fn);
    })
}

export function addClass(dom, ...cls) {
    dom.classList.add(...cls);
}

export function removeClass(dom, ...cls) {
    dom.classList.remove(...cls);
}

export function toggleClass(dom, cls, focus) {
    return dom.classList.toggle(cls, focus);
}

export function $(selector, ctx = document) {
    return ctx.querySelector(selector);
}

export function $$(selector, ctx = document) {
    return ctx.querySelectorAll(selector);
}

export function animateStyle(dom, handler, focus) {
    if (focus) {
        setTimeout(handler);
    } else {
        once(dom, 'transitionend', handler);
    }
}

/**
 * @param url
 * @param body
 * @param method
 * @returns {Promise<{msg ,data,code}>}
 */
export async function ajax(url, body, method = 'get') {
    const config = {
        credentials: 'same-origin', // same-origin , include 自动发送 cookie
        method,
        body,
        headers: { 'Content-Type': 'application/json' },
        cache: 'reload'
    };
    if (body && body instanceof FormData) {
        config.headers = {}; // 文件上传不需要手动设置 header
    } else if (body && /post/i.test(method)) {
        config.body = JSON.stringify(body);
    }
    const response = await fetch(url, config);
    if (response.status !== 200) {
        throw response;
    }
    const text = await response.text();
    try {
        return JSON.parse(text);
    } catch (e) {
        const div = document.createElement('div');
        div.innerHTML = text;
        const script = div.querySelector('script');
        if (script) {
            Function(script.textContent)(); // 执行页面脚本，如果session失效，则会跳转到登录页面或者session失效提示页面
        }
    }
}


export function post(url, body) {
    return ajax(url, body, 'post');
}

export function get(url, params) {
    if (params) {
        const search = Object.keys(params).map(name => name + '=' + (params[name] || '')).join('&');
        url += (url.includes('?') ? '&' : '?') + search;
    }
    return ajax(url);
}

// 文档的显示状态监听
export function documentVisibilityChange(fn) {
    on(window, 'visibilitychange', function() {
        fn(!document.hidden);
    });
    fn(!document.hidden);
}

// 写cookie
export function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + '; path=/base'
}

export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}

/**
 * 模板引擎
 * @example
 *   const html = tmp('<div> <% data.name %> </div>' , {name : 'aaa'});
 *   console.log(html); // => <div> aaa </div>
 * @param html
 * @param options
 * @return {*}
 */
export function tmp(html, options) {
    if (tmp[html]) {
        return tmp[html](options);
    }
    var re = /<%([^%>]+)?%>/g,
        reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
        code = 'var r=[];\n',
        index = 0,
        match;
    var add = function(line, js) {
        js ? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
            (code += line !== '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
    }
    while (match = re.exec(html)) {
        add(html.slice(index, match.index))(match[1], true);
        index = match.index + match[0].length;
    }
    add(html.slice(index));
    code += 'return r.join("");';
    const fn = new Function('data', code.replace(/[\r\t\n]/g, ''));
    tmp[html] = fn;
    return fn(options);
}