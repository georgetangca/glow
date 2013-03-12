var config = {
     'cookie':'yes',
     'host':'http://sdmstage.stjosephmedia.com/glow/' 
    // 'host':'http://localhost/glow/'     
}



jQuery(document).ready(function ($) {
      var host_home_url = config.host;
      inner_header_inject();
      
      $("div#contentArea").append("<div id='data-buf'></div>");
      $("div#contentArea").append("<div class='detail-parts'></div>");
      
      
     if($("div#SummariesPageRightColumn").length>0){
        $("div#SummariesPageRightColumn").load('eyes/eyes-summary.html');
     }

     function inner_header_inject(){
          $("#inner-header").load(host_home_url+'header/header.html',function(){
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
          });
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
	
        
        
    function clean_data_buf_image_src(){
     $('#data-buf img').each(function(i, obj) {
               image_src   = $(this).attr('src');
               img_src_arr = image_src.split('images');
               image_src = host_home_url+'images'+ img_src_arr[1];
               $("#data-buf img:eq("+i+")").attr("src",image_src);
     });             
   }
        
        /******************************Article Parts****************************************/
        
        //loading the related products
        function load_article_realted_product(){
         var ref_list =  $("#large-data").attr("ref");
         if(ref_list){
              var ref_list_arr =  $.trim(ref_list).split(',');
              var ref_product_id, ref_product_object;
              
              var ref_featured_product_id, ref_detail_product_id, overlay_id;
              var split_arr;
              var image_src,img_src_arr;
              
              $("#large-data .paragraph-area").append("<div id='product_contents'><div class='products-footer'></div></div>");
              
              $.each(ref_list_arr, function(index, value){
                 ref_featured_product_id = $.trim(value);
                  $("#data-buf").load(host_home_url+'featured-products/featured-products-items.html #'+ref_featured_product_id,function(result){
                 // $("#data-buf").load('../related-products/featured-products-items.html #'+ref_featured_product_id,function(result){
                     clean_data_buf_image_src();
                     var variable = $("#data-buf").html(); 
                     $("div.products-footer").append(variable);                   
                 });
                 
                 split_arr = ref_featured_product_id.split('-');
                     ref_detail_product_id = split_arr[0]+'-large';
                     $("#data-buf").load(host_home_url+'featured-products/detail-products-items.html #'+ref_detail_product_id,function(result){
                         $("#data-buf .product-detail").append("<a class='close'></a>");
                         clean_data_buf_image_src();
                         var variable = $("#data-buf").html(); 
                         $("div.detail-parts").append(variable); 
                     //    $(".rel-product[ref]").overlay();
                  });
                 
              });
         }
        }
       
       //display the detail product for the article
       $("#large-data .products-footer .rel-product").live('click',function(){
           var detail_product_id = $(this).attr('ref');
         //  var id_arr =  detail_product_id.split('#');
         //  var real_detail_product_id = id_arr[1];
         //  $(".detail-parts #"+real_detail_product_id).toggle();
           $(".detail-parts #"+detail_product_id).toggle();
           
       })
       
       //close the detail product for the article
       $("a.close").live('click',function(){
           $(this).parent().hide();
       })
      
        
        
    	//click article more 
        $('.paraZone a.more').live('click', function (){
            $('#SummariesPageLeftColumn').hide();
            $('#SummariesPageRightColumn').hide();
            $("div#ArticlePageRightColumn").show();
            var article_id =  $(this).attr('id');
            var article_root = $(this).attr('root');

            if(article_id){
                 var file_name =  ''+article_root+'/'+article_id+'.html';
                 
                 $("#data-buf").load(file_name,function(result){
                     var variable = $("#data-buf").html(); 
                     $("div#ArticlePageRightColumn").empty().append(variable);
                     
                     var cur_tab_name = $("li.selectedTab").attr("name_ref");
                     var go_back_button = '<div class="paraZone pages previous">';
                     
                     go_back_button += '<a root="'+cur_tab_name+'" id="back"  href="#">';
                     go_back_button += '<img alt="../../images/go back to previous page" src="../../images/go_back_to_previous_page.jpg"></a>';
                     go_back_button += '</div>'
                     
                     
                     $("div#large-data").append(go_back_button);                   
                     load_article_realted_product();
                 });
            }
        });
	
	//click Back functions for article
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
        
        //For Article Parts End
        
        /* For phamacy service */
        if($("#Pharmacy_Services #large-data").length >0 ){
            load_article_realted_product();
        }
        
        
        
        /*For phamacy service end */
        
        
        
});	