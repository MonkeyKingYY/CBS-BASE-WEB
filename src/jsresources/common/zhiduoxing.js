function showzdx(){
    $('.zdx-icon').hide();
    $('.zdx-icon1').show()
}
function hidezdx(){
    $('.zdx-icon').show();
    $('.zdx-icon1').hide()
}
/*
function AiAuthActionFun(){
    layer.open({
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最小化按钮
        type: 2,
        title:['智多星','color:#666;background-color:#fff;'],
        area: ['400px', '70%'],
        anim: 2,
        content: ['http://oa.bacic5i5j.com/wiwj/ai/action/wiwjAiAuthAction.do?method=redirect&source=bangongapp', 'no'], //iframe的url，no代表不显示滚动条
        offset: 'rb', //右下角弹出
        success:function (){
            $('.layui-layer-max').hide();
            $('.zdx-icon').hide();
        },
        full: function() { //点击最大化后的回调函数
        },
        min: function() { //点击最小化后的回调函数
            $('.layui-layer-max').show();
            $('.zdx-icon').hide();
        },
        restore: function() { //点击还原后的回调函数
            $('.layui-layer-max').hide();
        },
        cancel: function(){
            $('.zdx-icon').show();
        }
    });
}*/
