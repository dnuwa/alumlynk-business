
// <!--   ./chatbox   -->

    function openChatbox(contact_id, receiver = null ) {
    window.location.href = 'chat-inbox.html';
    // alert('contact_id'+ contact_id);z
    window.localStorage.setItem('contactId', contact_id);
    window.localStorage.setItem("recId", receiver);

        openChatBoxPage();
    document.getElementById("chatBox").style.display = "block";
}

    function closeChatbox() {
    document.getElementById("chatBox").style.display = "none";
}

function openChatBoxPage(){
    var parameters = '';
    var url        = app_url+'messages-chat?id='+window.localStorage.getItem("loginuser")+'&loginuser='+window.localStorage.getItem("loginuser")+'&contact_id='+window.localStorage.getItem("contactId")+'&chatPersonId='+window.localStorage.getItem("recId");

    var method     = 'POST';
    var param      = CallMethod(method, url, onSuccessLogin, parameters);
    function onSuccessLogin(param){

        var messageHTML = '';
        var messageHeaderHTML ='';


        $.each(param, function (time, value){
            // messageHeaderHTML = '<div class="msg-header text-center"> <div><span class="pull-left"><i class="fa fa-arrow-left" onclick="closeChatbox()"></i></span> <img src="'+value.picture+'" class="img" alt="Photo"> <span class="pull-right"><i class="fa fa-times" onclick="closeChatbox()"></i></span></div> </div>';
            messageHeaderHTML = '<div class="bg-secondary _toned-grey-bg px-3 py-1 d-flex"> <span class="bg-light rounded-circle px-3 py-2" onclick="window.history.go(-1); return false;" > <i class="fa fa-chevron-left"></i> </span> <img src="'+ value.chatPersonPicture +'" class="rounded-circle ml-3" width="40" height="40" alt="" /> <span class="w-100 text-center"> <h4 class="my-0">'+( !isEmpty(value.chatPersonInfo.firstname)? value.chatPersonInfo.firstname: '' )+' '+ (!isEmpty(value.chatPersonInfo.lastname) ? value.chatPersonInfo.lastname : '' )+'</h4> </span> </div>';

            let className = 'justify-content-end';

            // alert(value.sender);

            if( parseInt(window.localStorage.getItem("loginuser")) === parseInt(value.sender)){
                className = '';
            }
            // messageHTML += '<div class="container darker msg-box-'+ className +'"> <div class="msg-box-container"><span class="message-text">'+ value.text +'</span> <span class="time-left">'+ value.time +'</span></div> </div>';
            messageHTML += '<div class="w-100 d-flex '+className+' my-1"> <div class="w-75 bg-light rounded p-2 position-relative"> <div class="w-100 d-flex justify-content-between"> <span>'+ (!isEmpty(value.senderinfo.firstname) ? value.senderinfo.firstname : '') +' '+ (!isEmpty(value.senderinfo.lastname)? value.senderinfo.lastname : '') +'</span> </div> <div class="w-100">'+ value.text +'</div> <div class=" w-100 d-flex justify-content-end position-absolute bottom-0 pr-3 " > <span class="my-0"> <small>'+ value.time +'</small> </span> </div> </div> </div>';

        });

        // alert(messageHTML);

        $('#message-container').html(messageHTML);
        $('#message-header').html(messageHeaderHTML);
        setTimeout(function() {
            $("#message-container").animate({ scrollTop: $('#message-container').prop("scrollHeight") }, 1000);
        }, 100);

    }
}



$('document').ready(function (){
     // alert('here');
    openChatBoxPage();
    var recentMessage = window.localStorage.getItem("recentMessage");
    var parameters = '';
    var url        = app_url+'messages?id='+window.localStorage.getItem("loginuser")+'&loginuser='+window.localStorage.getItem("loginuser")+'&recentMessage='+recentMessage;

    var method     = 'POST';
    var param      = CallMethod(method, url, onSuccessLogin, parameters);
    function onSuccessLogin(param) {
        window.localStorage.setItem("recentMessage" , "");

        if ( !isEmpty(param.data) && !isEmpty(param.data.login_error_status) && param.data.login_error_status === '1') {
            showExpireAlert('session-expire');
            session(param.data);
        } else {
            // SAVE FRIENDS SOBJECT TO RETRIEVE LATER
            window.localStorage.setItem("contactList" , JSON.stringify(param.contacts));

        var myFriendHTML = '';

            $.each(param.contacts, function (key, value) {
                // console.log(value);
                // <small className="text-white bg-primary p-1 rounded-circle"></small>
                myFriendHTML +=  '<a href="javascript:void(0);" class="d-flex bg-light border my-1 text-dark" onclick="openChatbox(\'' + value.id + '\',\'' + value.rcvid + '\')" > <span class="p-2"> <img class="rounded-circle" width="60" height="60" src="' + value.picture + '" /> </span> <span class="p-2 w-100"> <p class="my-1 d-flex justify-content-between w-100"> <strong>' + ( !isEmpty(value.first_name)? value.first_name : '' ) + ' ' +(!isEmpty(value.last_name)? value.last_name : '') + '</strong> <small class="text-primary mt-1">'+ (!isEmpty(value.latestMessage) && !isEmpty(value.latestMessage.date ) ? value.latestMessage.date : '' )+'</small> </p> <p class="my-1 d-flex justify-content-between w-100"> <small>'+(!isEmpty(value.latestMessage.text)? value.latestMessage.text : 'Create message')  +'</small>  </p> </span> </a>';
                // myFriendHTML +=  '<a href="javascript:void(0);" class="d-flex bg-light border my-1 text-dark"  onclick="openChatbox(\'' + value.id + '\',\'' + value.rcvid + '\')"> <span class="p-2"> <img class="rounded-circle" width="60" height="60" src="' + value.picture + '" /> </span> <span class="p-2"> <p class="my-1"> <strong>' + ( !isEmpty(value.first_name)? value.first_name : '' ) + '' +(!isEmpty(value.last_name)? value.last_name : '') + '</strong> </p> <p class="my-1"> <small>'+(!isEmpty(value.latestMessage.text)? value.latestMessage.text : '')  +'</small> </p>  </span> </a>';
                // myFriendHTML += '<li class="list-group-item message msg-list-group-item" onclick="openChatbox(\'' + value.id + '\',\'' + value.rcvid + '\')"> <div class="messages-body"> <div class="media"> <div class="media-left"> <img src="' + value.picture + '" class="media-object messager-img"> </div> <div class="media-body"> <h5 class="media-heading pl-2">' + value.first_name + '' + value.last_name + '</h5> <p></p> </div> </div> </div> </li>';

            });
            $('#my-friends').html(myFriendHTML);
        }


    }
    
});

    function sendMessage() {
    let message = $('#chatTextBox').val();
    if (message != '' && typeof message != 'undefined') {
    var parameters = '';
    var _url = app_url + 'send-message?id='+ window.localStorage.getItem("loginuser") +'&msg=' + message + '&tid=' + window.localStorage.getItem('contactId')+'&loginuser='+ window.localStorage.getItem("loginuser")+ '&recId='+window.localStorage.getItem("recId");

    var _method = 'POST';
    var response = CallMethod(_method, _url, onSuccess, parameters);

    function onSuccess(response) {

        // window.localStorage.setItem("tid" ,response.tid );
    $('#chatTextBox').val('');
    var messageHTML = '';
    messageHTML = '<div class="w-100 d-flex my-1"> <div class="w-75 bg-light rounded p-2 position-relative"> <div class="w-100 d-flex justify-content-between"> <span>'+ (!isEmpty(window.localStorage.getItem("firstname")) ? window.localStorage.getItem("firstname") : '') +' '+ (!isEmpty(window.localStorage.getItem("lastname"))? window.localStorage.getItem("lastname") : '') +'</span> </div> <div class="w-100">'+ response.text +'</div> <div class=" w-100 d-flex justify-content-end position-absolute bottom-0 pr-3 " > <span class="my-0"> <small>'+ response.date +'</small> </span> </div> </div> </div>';

    // messageHTML = '<div class="container darker msg-box-1"> <div class="msg-box-container"><span class="message-text">'+ response.text +'</span> <span class="time-left">'+ response.date +'</span></div> </div>'
    $('#message-container').append(messageHTML);

    setTimeout(function() {
    $("#message-container").animate({ scrollTop: $('#message-container').prop("scrollHeight") }, 1000);
}, 100);
       if(response.firstMessage === true){
           // alert('here');
           location.reload();
       }

}
}
}

function sendInviteMessage(reciver_id, sender_id, contact_id, message) {

    if (message != '' && typeof message != 'undefined') {
        var parameters = JSON.stringify({
            msg: message
        });
        var contentType = "application/json; charset=utf-8";
         if(!isEmpty(reciver_id)){
             var _url = app_url + 'send-message?id='+ window.localStorage.getItem("loginuser")  + '&tid=' + contact_id +'&loginuser='+ window.localStorage.getItem("loginuser")+ '&recId='+reciver_id;
             var _method = 'POST';
             var response = CallMethod(_method, _url, onSuccess, parameters, contentType);

             function onSuccess(response) {

                 // window.localStorage.setItem("tid" ,response.tid );
             }
         }

    }
}



