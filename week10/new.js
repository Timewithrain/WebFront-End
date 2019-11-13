$(function(){
    
    // 设置app被选中的效果,并且将其绑定在document上使后添加的app也能使用
    $(document).on("click",".app",function(){
        if($(this).hasClass("app-choose")){
            $(this).removeClass("app-choose");
        }else{
            $(this).addClass("app-choose");
        }
    });

    // 设施服务器被选中的效果
    $(".server-check").click(function(){
        if($(this).parent().hasClass("server-choose")){
            $(this).parent().removeClass("server-choose");
        }else{
            $(this).parent().addClass("server-choose");
        }
    });

    $("#add").click(function(){
        // 获取选中的app的内容
        var span = $(".app-choose > span")[0];
        if(span != null){
            var str = span.innerText;
        }

        var oriservers = $(".server-choose").next();
        if( span!=null && oriservers.is("div")){
            var first = oriservers.children("tr:first-child");
            var last = oriservers.children("tr:last-child");
            alert(first.innerHTML);
            while(first != last){
                console.log(first.children().innerText);
                if(first.children().innerText==str){
                    alert("此服务已经被添加！");
                    return;
                }
                first = first.next();
            }

            var newApp = '<div class="app"><span>'+str+'</span></div>';
            oriservers.append(newApp);
        }else{
            // var newSpan = document.createElement("span");
            // newSpan.innerText = str;
            alert("没有选择服务或服务器");
        }
    });

});