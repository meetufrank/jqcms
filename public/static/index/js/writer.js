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
    
    if(valid){
        //alert(requestData.radioval);
    	if (requestData.radioval == "1") {
            $('#open-submit').modal({
                keyboard : false
            })
        }else{
            $('#not-open').modal()
        }
    }else{
    	new $.zui.Messager(tips, {
		    placement: 'center' // 定义显示位置
		}).show();
    }
})
// 返回按钮
$('#reset-button').on('click',function(){
	$(location).attr('href', 'http://localhost/army/mailbox.html');
})
// 公开信件提交确定按钮
$('#open-button').on('click',function(){
    $(location).attr('href', 'http://localhost/army/mailbox.html');
})
// 不公开信件提交确定按钮
$('#no-open-button').on('click',function(){
    $(location).attr('href', 'http://localhost/army/mailbox.html');
})
$('.mailbox-list>.mailbox-item').on('click',function(){
        console.log($(this));
        $(this).addClass('active').siblings().removeClass('active');
      })