var config = {
     'cookie':'yes',
     //'host':'http://sdmstage.stjosephmedia.com/glow/' 
     'host':'http://localhost/glow/'     
}

jQuery(document).ready(function ($) {
      inner_header_inject();
      var host_home_url = config.host;
      
     if($("div#SummariesPageRightColumn").length>0){
        $("div#SummariesPageRightColumn").load('eyes/eyes-summary.html');
     }

     function inner_header_inject(){
          var header_html = '<div id="banner"></div>';	
          header_html +='<nav id="nav_header">';
          header_html += '<ul id="topNav"><li><a ref="diabetes-and-you" class="DandY">Diabetes & You</a></li><li><a ref="diabetes-basics" class="DB">Diabetes Basics</a></li><li><a ref="pharmacy-services" class="PS">Pharmacy Services</a></li><li><a ref="featured-products" class="FP">Featured Products</a></li></ul>';
          header_html +='</nav>';
          $("#inner-header").html(header_html) 
          
          var cur_url = window.location.href;
          if(cur_url.indexOf('diabetes-and-you')>=0){
              $("#topNav a[ref='diabetes-and-you']").addClass('top_nav_selected')
              
          } else if(cur_url.indexOf('diabetes-basics')>=0){
               $("#topNav a[ref='diabetes-basics']").addClass('top_nav_selected')
              
          } else if(cur_url.indexOf('pharmacy-services')>=0){
               $("#topNav a[ref='pharmacy-services']").addClass('top_nav_selected')
              
          } else if(cur_url.indexOf('featured-products')>=0){
               $("#topNav a[ref='featured-products']").addClass('top_nav_selected')
          }  
     } 
    
    
      /*For Diabetes to You*/
       $("#topNav li a").live('click', function(){
         var link_redirect =  $(this).attr('ref');
         window.location.href =  host_home_url+link_redirect+'/';
       }) 
    
       
       
       $("li a.profile_type").click(function(e){
          if(config.cookie=='yes'){         
            var rel_link =  $(this).attr("rel");
            $.cookie('diabetes-profile-select', rel_link, {expires : 30,path:'/'});
          }
          window.location.href =  host_home_url+'diabetes-and-you'+'/intro/'+rel_link +'.html';
          e.preventDefault();  
           
       })
       
       
    
       /* Left nav click process */
       $('.sideNav li').live('click',function () {
            // Set clicked tab's class to 'selectedTab'
            
            if(!$(this).hasClass('selectedTab')){
                var orgi_name = $("li.selectedTab").attr("name_ref");
                var orgi_image_src_change = '../../images/side-nav/'+orgi_name+'.jpg';
                $(".sideNav li.selectedTab").find("a img").attr("src",orgi_image_src_change);
                
                var old_tab_id = $("li.selectedTab").attr("id");
                $("img.person").removeClass(old_tab_id);
                var new_tab_id = $(this).attr("id");
                $("img.person").addClass(new_tab_id);
            } 
            
            $('.selectedTab').removeClass('selectedTab');
            $(this).addClass('selectedTab');
            var name_ref = $(this).attr("name_ref");
            var image_src_change = '../../images/side-nav/'+name_ref+'-arrow.png';
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
        
        //For Diabetes to You End 
        
});	