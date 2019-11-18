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
        var addapp = $(".app-choose")[0];
        var oriservers = $(".server-choose").next();
        //当服务和服务器都被选中时才进行添加
        if( addapp!=null && oriservers.is("div")){
            //获取添加服务的内容
            var str = addapp.innerText;
            var first = oriservers.children("div");
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
            //当两个服务器都添加了同一个app时将左边的app删去
            if(isBothAdd(str)){
                $("#app-content")[0].removeChild(addapp);
            }
        }else{
            // var newSpan = document.createElement("span");
            // newSpan.innerText = str;
            alert("没有选择服务或服务器");
        }
    });

    // $("#add").click(function(){
    //     // 获取选中的app的内容
    //     var span = $(".app-choose")[0];
    //     if(span != null){
    //         var str = span.innerText;
    //     }
    //     var oriservers = $(".server-choose").next();
    //     //当服务和服务器都被选中时才进行添加
    //     if( span!=null && oriservers.is("div")){
    //         var first = oriservers.children("div");
    //         // 判断服务是否被添加
    //         var i = 0
    //         while(i<first.length){
    //             if(first[i].innerHTML==str){
    //                 alert("此服务已经被添加");
    //                 return;
    //             }
    //             i++;
    //         }
    //         var newApp = '<div class="app">'+str+'</div>';
    //         oriservers.append(newApp);
            
    //     }else{
    //         // var newSpan = document.createElement("span");
    //         // newSpan.innerText = str;
    //         alert("没有选择服务或服务器");
    //     }
    // });

    //两个服务器都添加了同一个服务则将左边的服务中的app删去
    var isBothAdd = function(str){
        // 获取所有已经添加的app
        var apps = $(".oriservers").children(".app");
        var isboth = false;
        var count = 0;
        var i = 0;
        while(i<apps.length){
            // 依次比较添加的app的内容是否有相同的
            if(apps[i].innerHTML==str){
                count++;
            }
            i++;
        }
        if(count>1){
            isboth = true;
        }
        return isboth;
    }

    $("#del").click(function(){
        // //删除每个oriserver中选中的服务
        // var oriservers = $(".oriservers");
        // var i = 0;
        // while(i<oriservers.length){
        //     // alert(oriservers[i].innerHTML);
        //     var toremove = oriservers.children(".app-choose");
        //     // alert(toremove.length);
        //     // alert(oriservers.length+","+i);
        //     var j = 0;
        //     while(j<toremove.length){
        //         alert(toremove[toremove.length-1].innerHTML);
        //         //不能直接删除
        //         var choose = oriservers[i].children(".app-choose");
        //         alert(choose[0].innerHTML);
        //         if(innerchoose!=null){
        //             oriservers[i].removeChild(toremove[j]);
        //         }
        //         j++;
        //         alert("oriservers "+i+"\r\ntoremove "+j);
        //     }
        //     alert("oriservers"+i);
        //     i++;
        // }
        //依次删除两个oriserver中的服务
        var oriservers = $("#oriservers1");
        var toremove = oriservers.children(".app-choose");
        var j = 0;
        while(j<toremove.length){
            oriservers[0].removeChild(toremove[j]);
            var str = toremove[j].innerHTML;
            if(isBothDelete(str)){
                var newApp = '<div class="app">'+str+'</div>';
                $("#app-content")[0].append(newApp);
            }
        }
        var oriservers = $("#oriservers2");
        var toremove = oriservers.children(".app-choose");
        var j = 0;
        while(j<toremove.length){
            oriservers[0].removeChild(toremove[j]);
            var str = toremove[j].innerHTML;
            if(isBothDelete(str)){
                var newApp = '<div class="app">'+str+'</div>';
                $("#app-content")[0].append(newApp);
            }
        }
        
    });

    //判断app在两个oriserver中是否被彻底删除
    var isBothDelete = function(str){
        var isDelete = false;
        var apps = $(".oriservers").children(".app");
        var count = 0;
        var i = 0;
        while(i<apps.length){
            if(apps[i].innerHTML==str){
                count++;
            }
            i++;
        }
        if(count==0){
            isDelete = true;
        }
        return isDelete;
    }

});