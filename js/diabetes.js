jQuery(document).ready(function ($) {
       $("div#SummariesPageRightColumn").load('eyes/eyes-summary.html');
    
       /* Left nav click process */
       $('.sideNav li').live('click',function () {
            // Set clicked tab's class to 'selectedTab'
            
            if(!$(this).hasClass('selectedTab')){
                var orgi_name = $("li.selectedTab").attr("name_ref");
                var orgi_image_src_change = '../images/side-nav/'+orgi_name+'.jpg';
                $(".sideNav li.selectedTab").find("a img").attr("src",orgi_image_src_change);
                
                var old_tab_id = $("li.selectedTab").attr("id");
                $("img.person").removeClass(old_tab_id);
                var new_tab_id = $(this).attr("id");
                $("img.person").addClass(new_tab_id);
            } 
            
            $('.selectedTab').removeClass('selectedTab');
            $(this).addClass('selectedTab');
            var name_ref = $(this).attr("name_ref");
            var image_src_change = '../images/side-nav/'+name_ref+'-arrow.png';
            $(this).find("a img").attr("src",image_src_change);
             
             
            /* Show SummariesPageRightColumn div .*/
            var new_summary_page = ''+name_ref+'/'+name_ref+'-summary.html';
            $("div#SummariesPageRightColumn").empty().load(new_summary_page);
             
          });
	
    	
        $('.paraZone a.more').live('click', function (){
            $('#SummariesPageLeftColumn').hide();
            $('#SummariesPageRightColumn').hide();
            $("div#ArticlePageRightColumn").show();

            var article_id =  $(this).attr('id');
            var article_root = $(this).attr('root');

            if(article_id){
                 var file_name =  ''+article_root+'/'+article_id+'.html';
                 $("div#ArticlePageRightColumn").load(file_name);
            }
        });
	
	//Back functions for Eyes
	$('div a#back').live('click',function () {
            // hide myself' 
			$("div#ArticlePageRightColumn").hide();
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
			$('#SummariesPageRightColumn').show();
                        
                        var root = $(this).attr('root');
                        var new_summary_page = ''+root+'/'+root+'-summary.html';
                        $("div#SummariesPageRightColumn").empty().load(new_summary_page);
        
   	});		 	 
});	