jQuery(document).ready(function ($) {
   $("#product_small").load("featured-products-items.html");
   $("#product-large").load("product-details.html");
  // $("div#product-listing").load("product-list.html");
   
   $('.scroll-pane').jScrollPane();
   
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

