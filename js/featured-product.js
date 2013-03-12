
jQuery(document).ready(function ($) {
   var host_home_url = config.host; 
   
   function clean_image_src(div_id){
     $('#'+div_id+" img").each(function(i, obj) {
               image_src   = $(this).attr('src');
               img_src_arr = image_src.split('images');
               image_src = host_home_url+'images'+ img_src_arr[1];
               $("#"+div_id+" img:eq("+i+")").attr("src",image_src);
     });             
   }
   
   $("#product_small").load(host_home_url+"featured-products/featured-products-items.html" ,function(){
       clean_image_src("product_small");
   });
   $("#product-large").load(host_home_url+"featured-products/detail-products-items.html",function(){
        clean_image_src("product-large");
   });
   
   $("div#product-listing").load(host_home_url+"featured-products/product-list.html",function(result){
        clean_image_src("product-listing");
        $('.scroll-pane').jScrollPane();
   })
   
  
   
   $("#product-listing ul li.product, div#product_contents .products-footer .rel-product").live('click',function(){
      $("div#product-listing").hide();
      $("div#product_detail").show();
      var product_id = $(this).attr("ref"); 
      
      //put deail product top information
      $("div#product_contents").show();
      var clone_object = $("#hidden-data #"+product_id).clone();
      $("div#product_contents div.product-detail").empty().append(clone_object);
      
      
      //put proudct refer information 
      var ref_list = $("div#product_contents #"+product_id).attr("ref");
      var ref_list_arr =  $.trim(ref_list).split(',');
      
      var ref_product_id, ref_product_object;
      
      $("div#product_contents div.products-footer .related-products2up").empty()
      $.each(ref_list_arr, function(index, value){
         ref_product_id = $.trim(value);
         ref_product_object = $("#hidden-data #product_small #"+ref_product_id).clone();
         $("div#product_contents .related-products2up").append(ref_product_object);
      });
   })
   
   $(".product-go-back a").live("click",function(e){
        $("div#product_contents").hide(); 
        $("div#product-listing").show(); 
        e.preventDefault();        
   })
   
   
    
})

