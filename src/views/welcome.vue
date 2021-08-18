<template>
    <div layout="row" class="main">
        <div class="nav-bar-wrap">
            <div class="nav-bar-list" layout="column">
                <a href="/base/" class="logo">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAFMN540AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHqADAAQAAAABAAAAHgAAAADpiRU/AAADdklEQVRIDc2WXWiOYRjH33e+GrNJvtKY8rEzHI4DsjOOHEgpUyPJgYOFrOWQTM2RRJKWHDC1EpokizQfW2SUEJKx+SqxtC02v//jvp7u3e/z7n0N5arfc933dV33fd3Pc389qVQoQ0NDRSCp0aMgnU73EtQMyxRcoAdSAqeiUvhIq51nrE9RPwCHIS2H+lChUpVhQsQ1MKkOneqmEHqgALohymXDUoNBOAdjYDZEMtbpB+gWmAD98BUGIA9RLk/eUp4VNaPQ7zmeeuXoAyqXyXMr8GHT/qhrcTTJaAG+02yx9p1XsZaRc2fsVQHDINyBd9Ck+rAAv4JTn1OBJpt9v5XjtEStsUicP2CGC3qDNpf0E2dP2RSovsIZ16Lvw1Fog9MwHkwWWSHObAb0FTgOytwNXXACKmGY+JltaepjtEIpyKaVvpLhxt8fWyRJmc2XEWwO037jcc74CF0Bk2A5DOgrkd1GhulfCYm2KJsTzffIr0BAmwvWagplHobGrIPF+SFs4eqlgX113AmO+sDpV+f7Fa/cR7nI78R8cykshnKoA9VbweSANfIXidm0stqhAXQEvgLJR5gWldzDn2ezaz47mdfdznDL6RoLMJ2UuZ6GS1zAPvRr0EbpcLZYJWWui72p1F6vnFFMapwRlM3w1xsXMie6JJaS8STsh62QsUSTPli1C1SDKaCD/iLMgWHiD1s3gKZJV4U6XQUDINsnuOzKnejRCa9TAodAl5UujQbQ9fnnQkcH4bxDu7EC2iGX3CVAh9DohMZ2LORK5Pu7qEyFDc74Bb0L7GRMHgwBC+Ei/K4o4UyoytHwAv4FcXYq90BHivGdcj7ymKBi8E/ZbO3Up/UvnbG1dY2GZ6H2yHTYBnvgOkyE7RD9oKHl2wEvIUniI8/eOGk/Jd1GZTQ45hp1cEB9o/c+1dHaVuZL4dNvoD7pM/mzib8XLSZjt+N4AYtBA7UOozjy6CJfqYToZpJWo9fDiJLPG5+hB+3TFvp+SMc6ECT6MpqWz2i9/Q3ogUYoh/2QVZLeOAzW6O3SCH21GNaFxnzq+SQO+0maijAmZz0pcdhxMb3ohrvpepvstOLk0//lWWfT4S4J+/hl9Z75zPF7i2c+oyJ6k9lMm4/6RkjaGRYa6aQ3DgfTRKRW7hHohSq4BPpbvg0mNW5l609EC/L/lJ/EcLVaJCsXJgAAAABJRU5ErkJggg=="
                        draggable="false">
                </a>
                <div class="menu-enter show-main-menu">
                    <span class="icon-nav"></span>
                </div>
                <a href="javascript:" class="menu-enter tips" target="content" draggable="false" style="display: none">
                    <span class="pop tips-pop"></span>
                    <span class="icon-message"></span>
                </a>
                <a href="javascript:" target="content" class="menu-enter todos" draggable="false" style="display: none">
                    <span class="pop todos-pop"></span>
                    <span class="icon-list"></span>
                </a>
                <div class="menu-enter show-other-menu">
                    <span class="icon-link"></span>
                </div>
                <div flex></div>
                <!-- <div class="menu-enter" style="margin-bottom: 20px">
                    <a href="http://oa.bacic5i5j.com/wiwj/ai/action/wiwjAiAuthAction.do?method=redirect&source=OAweb" target="view_window">
                        <img class="zhiduoxing zdx-icon" src="/base/static/resources/img/modify.png" onmouseover="showzdx()" onmouseout="hidezdx()">
                        <img class="zhiduoxing zdx-icon1" src="/base/static/resources/img/sayhi.png" onmouseover="showzdx()" onmouseout="hidezdx()" style="display: none" />
                    </a>
                </div> -->
                <div class="menu-enter">
                    <img class="user">
                </div>
                <div class="menu-enter exit" style="margin-bottom: 20px;">
                    <span class="icon-exit"></span>
                </div>
            </div>

            <!-- 系统菜单 -->
            <div class="nav-bar-details main-menu" layout="column">
                <div class="logo-title">
                    CBS V+ 二手核心系统
                </div>
                <div flex style="overflow-y:auto;overflow-x:hidden" class="menus-fill">
                    <ul class="menu-wrap"></ul>
                </div>
            </div>
            <!-- 其它外链菜单 -->
            <div class="nav-bar-details other-menu" layout="column">
                <div class="logo-title">
                    企业资源系统
                </div>
                <div flex style="overflow-y:auto;overflow-x:hidden" class="menus-fill">
                    <ul class="menu-wrap" style="margin-top: 20px;"></ul>
                </div>
            </div>

            <div class="user-details">
                <div class="info">
                    当前登录：<span class="comp-name"></span>
                </div>
                <div class="split"></div>
                <div class="info" layout="row">
                    <span class="user-name"></span>
                    <span class="post-name"></span>
                    <div flex></div>
                    <a href="/base/system/main/switchPostPage.htm" class="switch">
                        <span class="icon-link"></span>
                        切换岗位
                    </a>
                </div>
            </div>
        </div>
        <div flex>
            <div class="content" layout="column">
                <div class="breadcrumb-wrap" layout="row">
                    <div>
                        <a href="/base/">我的工作台</a>
                    </div>
                    <div flex class="breadcrumb"></div>
                    <div class="breadcrumb-tips"></div>
                </div>
                <div flex>
                    <iframe src="" frameborder="0" name="content" id="content" class="frame-fill"></iframe>
                </div>
            </div>
        </div>
    </div>

    <div class="message">
        <div class="message-title">
            <span class="icon-box"></span>
            <span class="info-type"></span>
            <span class="high-light">+1</span>
        </div>
        <div class="message-content">
            您当前有
            <span class="number-tip"></span>
            条待阅读的消息，请注意查收！
        </div>
        <div class="message-actions">
            <button type="button" class="btn ignore">暂时忽略</button>
            <button type="button" class="btn btn-default lookup">立即查看</button>
        </div>
        <span class="message-close">&times;</span>
    </div>
    <div class="user-info-layer">
        <div class="modal-dialog" layout="column">
            <div class="modal-header"></div>
            <div class="modal-body" style="height: 500px;">
                <iframe src="" scrolling="no" style="width: 100%;height: 100%;" frameborder="0"></iframe>
            </div>
            <a href="javascript:" class="modal-close icon-close"></a>
        </div>
    </div>
    <div class="welcome"></div>
    <div class="authentication"></div>
</template>
<script>
    import {
        onMounted,
        ref
    } from 'vue';
    import {
        get,
        post
    } from "../util"
    import {
        initTargetPage,
        initData
    } from '../jsresources/common/main';
    import {
        startToggleMenus,
        startBreadcrumbEvent,
        startMenuTarget,
        startLogoutEvent,
        startMenuEvent,
        startUserEvent,
        startMessageEvent
    } from '../jsresources/common/page-events'
    export default {
        setup() {
            let getUserInfo = async () => {

            }

            let mainMenuFlag = ref(false);

            let mainMenuClick = () => {
                console.log(111);
                mainMenuFlag.value = true;
            }

            onMounted(() => {
                getUserInfo();
                initTargetPage();
                initData();
                startToggleMenus();
                startBreadcrumbEvent();
                startMenuTarget();
                startLogoutEvent();
                startMenuEvent();
                startUserEvent();
                startMessageEvent();

            });
            return {
                mainMenuFlag,
                mainMenuClick
            }
        }
    }

</script>
<style>

</style>
