$(document).ready(function () {
   	$('.sideNav li').click(function () {
            // Set clicked tab's class to 'selectedTab'
            
            if(!$(this).hasClass('selectedTab')){
                var orgi_name = $("li.selectedTab").attr("name_ref");
                var orgi_image_src_change = '../images/side-nav/'+orgi_name+'.jpg';
                $(".sideNav li.selectedTab").find("a img").attr("src",orgi_image_src_change);
            } 
            
            
            $('.selectedTab').removeClass('selectedTab');
            $(this).addClass('selectedTab');

            /* Show Actual area. This involves getting the id of the clicked tab, **which is the same name as the class of the SummariesPageRightColumn it's associated with.** This SummariesPageRightColumn div is then given the class 'selectedSummariesPageRightColumn'.*/
            var v = $(this).attr("id");
            $('.selectedSummariesPageRightColumn').removeClass('selectedSummariesPageRightColumn');
            $('.' + v).addClass('selectedSummariesPageRightColumn');
   	   
             
             var name_ref = $(this).attr("name_ref");
             var image_src_change = '../images/side-nav/'+name_ref+'-arrow.png';
             $(this).find("a img").attr("src",image_src_change);
             
             
             
           
            
          });
	});	
	
	
	$(document).ready(function () {
		$('.paraZone a').click(function () {
   	
	     //General. Clicking on summary button displays the full article.
            // Set clicked tab's class to 'selectedTab'
           /*Hide SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').hide();
			$('#SummariesPageRightColumn').hide();
			var cur_id = $(this).attr('id');
			if(cur_id){
                            $("div#large-data."+cur_id).show();
			}
		});
	
	//Back functions for Eyes
		$('a#eyes_ins_back_1').click(function () {
            // hide myself' 
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
			$('#SummariesPageRightColumn').show();
			$('#eyes_summary_page1').show();
   		});
		
		$('a#eyes_qui_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#eyes_summary_page1').show();            
   		});
		
		$('a#eyes_ask_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#eyes_summary_page1').show();            
   		});

		$('a#eyes_diy_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#eyes_summary_page2').show();            
   		});
		
		$('a#eyes_vid_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#eyes_summary_page2').show();            
   		});
		
		//Go back when you're on the second page of the article:
		//Add similar code for articles in well-being, heart, nutrition and feet that have more than one page!!
		$('a#eyes_ins_back_2').click(function () {
            // hide myself' 
			$(this).parent().parent().parent().hide(); 
            
			/*hide SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').hide();
			$('#SummariesPageRightColumn').hide();
			$('.eyes_ins').show();
   		});
		
	//Back functions for well-being 
		$('a#well-being_ins_back_1').click(function () {
            // hide myself' 
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
			$('#SummariesPageRightColumn').show();
			$('#well-being_summary_page1').show();
   		});
		
		$('a#well-being_qui_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#well-being_summary_page1').show();            
   		});
		
		$('a#well-being_ask_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#well-being_summary_page1').show();            
   		});

		$('a#well-being_diy_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#well-being_summary_page2').show();            
   		});
		
		$('a#well-being_mys_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#well-being_summary_page2').show();            
   		});
   		
	//Back functions for heart
		$('a#heart_ins_back_1').click(function () {
            // hide myself' 
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
			$('#SummariesPageRightColumn').show();
			$('#heart_summary_page1').show();
   		});
		
		$('a#heart_kno_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#heart_summary_page1').show();            
   		});
   		
		$('a#heart_qui_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#heart_summary_page1').show();            
   		});
		
		$('a#heart_ask_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#heart_summary_page1').show();            
   		});

		$('a#heart_diyw_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#heart_summary_page2').show();            
   		});
		
		$('a#heart_diys_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#heart_summary_page2').show();            
   		});
   		
   		$('a#heart_mys_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#heart_summary_page2').show();            
   		});
		
		$('a#heart_knon_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#heart_summary_page2').show();            
   		});
	
		//Back functions for nutrition
		$('a#nutrition_ins_back_1').click(function () {
            // hide myself' 
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
			$('#SummariesPageRightColumn').show();
			$('#nutrition_summary_page1').show();
   		});
		
		$('a#nutrition_kno_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#nutrition_summary_page1').show();            
   		});
   		
		$('a#nutrition_qui_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#nutrition_summary_page1').show();            
   		});
		
		$('a#nutrition_ask_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#nutrition_summary_page1').show();            
   		});

		$('a#nutrition_rec_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#nutrition_summary_page2').show();            
   		});
		
		$('a#nutrition_diyf_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#nutrition_summary_page2').show();            
   		});
   		
   		$('a#nutrition_vid_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#nutrition_summary_page2').show();            
   		});
   		
   		$('a#nutrition_mys_back_1').click(function () {
   	        // hide myself'
			$(this).parent().parent().parent().hide(); 
            
			/*show SummariesPageLeftColumn and hide SummariesPageRightColumn*/
			$('#SummariesPageLeftColumn').show();
		    $('#SummariesPageRightColumn').show();
			$('#nutrition_summary_page2').show();            
   		});
		
		
	
	//General. Go to next page of an article.
		$('a.article_page_next').click(function () {
		 
		    var next_page_id = $(this).attr('id');
		 	$("div#large-data."+next_page_id).show();
		     // hide myself'
			$(this).parent().parent().parent().hide(); 
		});	 	 
	});	