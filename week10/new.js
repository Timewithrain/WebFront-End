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
        //当服务和服务器都被选中时才进行添加
        if( span!=null && oriservers.is("div")){
            var first = oriservers.children("div");
            // alert(first[0].innerHTML);
            // alert(str)
            // alert(first[0].innerHTML==str);
            // alert(first.length);
            // 判断服务是否被添加
            var i = 0
            while(i<first.length){
                if(first[i].innerHTML==str){
                    alert("此服务已经被添加");
                    return;
                }
                i++;
            }

            var newApp = '<div class="app">'+str+'</div>';
            oriservers.append(newApp);
        }else{
            // var newSpan = document.createElement("span");
            // newSpan.innerText = str;
            alert("没有选择服务或服务器");
        }
    });

    $("#del").click(function(){
        //删除每个oriserver中选中的服务
        // var oriservers = $(".oriservers");
        // var i = 0;
        // while(i<oriservers.length){
        //     alert(oriservers[i].innerHTML);
        //     var toremove = oriservers.children(".app-choose");
        //     alert(toremove.length);
        //     alert(oriservers.length+","+i);
        //     var j = 0;
        //     while(j<toremove.length){
        //         // alert(toremove[toremove.length-1].innerHTML);
        //         oriservers[i].removeChild(toremove[j]);
        //         j++;
        //         alert("oriservers "+i+"\r\ntoremove "+j);
        //     }
        //     alert("oriservers"+i);
        //     i++;
        // }
        var oriservers = $(".oriservers");
        var toremove = oriservers.children(".app-choose");
        var j = 0;
        while(j<toremove.length){
            // alert(toremove[toremove.length-1].innerHTML);
            // oriservers[0].remo   veChild(toremove[j]);
            oriservers[1].removeChild(toremove[j]);
            j += 1;
            alert(j);
        }
        
    });

});