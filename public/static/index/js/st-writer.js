// 写信提交
$('#submit-letter').on('click',function(){

	var requestData = {
		writetitle:$('#write-title').val(),
		lettertype:$('#letter-type').val(),
		headerid:$('#headerid').val(),
		content:$('#content').val(),
		writename:$('#write-name').val(),
		writetall:$('#write-tall').val(),
        radioval:$('input[type="radio"]:checked').val()
	}
	console.log(requestData);
	var valid = true
    if(valid && requestData.writetitle.length <= 0){
        valid = false;
        var tips = "信件标题不能为空";
        $("#write-title").focus();
    }
    if(valid && requestData.lettertype.length <= 0){
        valid = false;
        var tips = "请选择信件类型";
        $("#letter-type").focus();
    }
    if(valid && requestData.headerid.length <= 0){
        valid = false;
        var tips = "请选择首长";
        $("#headerid").focus();
    }
    if(valid && requestData.content.length <= 0){
        valid = false;
        var tips = "请输入信件内容";
        $("#content").focus();
    }
    if(valid && requestData.content.length <= 0){
        valid = false;
        var tips = "请输入信件内容";
        $("#content").focus();
    }
    if(valid && requestData.radioval.val <= 0){
        valid = false;
        var tips = "请选择是否公开";
    }


    var name = $(".name").val();
    var type = $(".type").val();
    var department = $(".department").val();
    var content = $(".content").val();
    var username = $(".username").val();
    var tel = $(".tel").val();
    var filename = $(".filename").val();
    var pwd = $(".bgkpwd").val();
    var isgk = $("input[name='radioOptionsExample3']:checked").val();

    $.ajax({
        type:"post",
        url:window._wriurl_,
        dataType: "json",
        data:{"name":name,"type":type,"department":department,"content":content,"username":username,"tel":tel,"filename":filename,"pwd":pwd,"isgk":isgk},
        success: function(data){
            var num = data;
            $(".num").text(num);

            if(valid){
                //alert(requestData.radioval);
                if (requestData.radioval == "1") {

                    $('#open-submit').modal({
                        keyboard : false
                    })
                    $('body').click(function(e){
                        if($(e.target).closest('#gongkait').length==0){
                            window.location.href = window._head;
                        }

                    })
                }else{
                    $('#not-open').modal();
                    $('body').click(function(e){
                        if($(e.target).closest('#bugongkai').length==0){
                            window.location.href = window._head;
                        }

                    })
                }
            }else{
                new $.zui.Messager(tips, {
                    placement: 'center' // 定义显示位置
                }).show();
            }
        }
    });












})

// 不公开显示密码框
$('.gongkai').click(function(){
    $('#bgk').hide();
    $('.anniu').css('paddingTop','20px');
})

$('.bugongkai').click(function(){
    $('#bgk').show();
    $('.anniu').css('paddingTop','50px');
})

// 返回按钮
$('#reset-button').on('click',function(){
	$(location).attr('href', 'http://localhost/army/st-mailbox.html');
})
// 公开信件提交确定按钮
$('#open-button').on('click',function(){
    $(location).attr('href', 'http://localhost/army/st-mailbox.html');
})
// 不公开信件提交确定按钮
$('#no-open-button').on('click',function(){

    var id = $(".gkid").text();
    var pwd = $("#inputpassword").val();

    $.ajax({
        type:"post",
        url:"Stwriter/bgk",
        dataType: "json",
        data:{"name":name,"id":id,"pwd":pwd},
        success: function(data){


        }
    });


    //$(location).attr('href', 'http://localhost/army/st-mailbox.html');
})
$('.mailbox-list>.mailbox-item').on('click',function(){
        console.log($(this));
        $(this).addClass('active').siblings().removeClass('active');
      })