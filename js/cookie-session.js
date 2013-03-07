
//Get cookie routine by Shelley Powers 
jQuery(document).ready(function ($) {
    function get_session_cookie(Name) {
        var search = Name + "="
        var returnvalue = "";
        if (document.cookie.length > 0) {
            offset = document.cookie.indexOf(search)
            // if cookie exists
            if (offset != -1) { 
                offset += search.length
                // set index of beginning of value
                end = document.cookie.indexOf(";", offset);
                // set index of end of cookie value
                if (end == -1) end = document.cookie.length;
                returnvalue=unescape(document.cookie.substring(offset, end))
            }
        }
        return returnvalue;
    }

    function set_session_cookie(what){  
        document.cookie="my-diabetes-session="+what
    }
    
    if(config.cookie =='yes'){
        var session_id= get_session_cookie("my-diabetes-session");
        if (!session_id){
            set_session_cookie('i-am-here-now');
            if($.cookie('diabetes-profile-select')){
               link_redirect = $.cookie('diabetes-profile-select');
               window.location.href =  config.host+'diabetes-and-you'+'/intro/'+link_redirect+'.html'; 
            }               
        }
    }
    
   
})

