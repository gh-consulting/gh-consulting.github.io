jQuery.get('projects.txt', function(data) {
    var myText = data;

    const servizi = myText.match(/<servizi>.*?<servizi>/)[0].replaceAll('<servizi>','');
    const nome_servizio = myText.match(/<nome_servizio>.*?<nome_servizio>/g);
    const descriz_servizio = myText.match(/<descriz_servizio>.*?<descriz_servizio>/g);
    const servizi_simili = myText.match(/<servizi_simili>.*?<servizi_simili>/g);

    const about_1 = myText.match(/<about_1>.*?<about_1>/)[0].replaceAll('<about_1>','');
    const about_2 = myText.match(/<about_2>.*?<about_2>/)[0].replaceAll('<about_2>','');
    const about_3 = myText.match(/<about_3>.*?<about_3>/)[0].replaceAll('<about_3>','');

	const chiSiamo = myText.match(/<chisiamo>.*?<chisiamo>/)[0].replaceAll('<chisiamo>','');
	const chiSiamo_Gin = myText.match(/<chisiamo_Ginevra>.*?<chisiamo_Ginevra>/)[0].replaceAll('<chisiamo_Ginevra>','');
	const chiSiamo_Hai = myText.match(/<chisiamo_Haiat>.*?<chisiamo_Haiat>/)[0].replaceAll('<chisiamo_Haiat>','');

	const career = myText.match(/<career>.*?<career>/)[0].replaceAll('<career>','');
	const nome_posizione = myText.match(/<nome_posizione>.*?<nome_posizione>/g);
    const descriz_posizione = myText.match(/<descriz_posizione>.*?<descriz_posizione>/g);

    $(document).ready(function() {
    	$('#servizi > .text')[0].innerHTML = servizi;
    	for (i=0; i<nome_servizio.length; i++){
    		//console.log(nome_servizio[i], descriz_servizio[i], servizi_simili[i]);
    		var servizi_simili_array = servizi_simili[i].replaceAll('<servizi_simili>','').split(',');

    		$( "<div id='option_duo_"+i+"' class='option_duo'>"+
				"<div class='button' alt='"+nome_servizio[i]+"' onclick='openThisButton(this)'>"+nome_servizio[i]+"</div>"+
				"<div class='option_inside closed' alt='"+nome_servizio[i]+"'>"+
					"<ul id='moreoptions_"+i+"' class='option_moreoptions'></ul>"+
					"<div class='descript'>"+descriz_servizio[i]+"</div>"+
				"</div>"+
			"</div>" ).appendTo($('.option_buttons'));

			for (j=0; j<servizi_simili_array.length; j++){
	    		$( "<li>"+servizi_simili_array[j]+"</li>" ).appendTo($('#moreoptions_'+i));
	    	};
    	};

    	$('.about > .multiple_texts > #text_1')[0].innerHTML = about_1;
    	$('.about > .multiple_texts > #text_2')[0].innerHTML = about_2;
    	$('.about > .multiple_texts > #text_3')[0].innerHTML = about_3;

    	$('#chisiamo > .text')[0].innerHTML = chiSiamo;
    	$('#chisiamo > .figure_frame > .frame_ginevra > .info')[0].innerHTML = chiSiamo_Gin;
    	$('#chisiamo > .figure_frame > .frame_haiat > .info')[0].innerHTML = chiSiamo_Hai;

    	$('#career > .left > .text')[0].innerHTML = career;
    	$('#career > .right > .card > .top > .title')[0].innerHTML = nome_posizione[0].replaceAll('<nome_posizione>','');
    	$('.right > .card > a.sendCareerMail')[0].href = "mailto:google@google.com?subject=candidatura-"+nome_posizione[0].replaceAll('<nome_posizione>','').replaceAll(' ','-');


    	for (i=0; i<nome_posizione.length; i++){

    		var nome_posizione_noTags = nome_posizione[i].replaceAll('<nome_posizione>','').replaceAll(' ','-');
    		$( "<div id='descript_"+(i+1)+"' class='descript "+nome_posizione_noTags+"'>"+
    			descriz_posizione[i].replaceAll('<descriz_posizione>','')+
			"</div>" ).appendTo($('#career > .right > .card > .bottom'));

    	};
    	
    	/*for (i=0; i<projTitles.length; i++){
    		var images = projImages[i].replaceAll('<images>','').replaceAll('</>','').split(',');

    		$( "<div id='project_"+i+"' class='project_line'>"+
				"<div class='info' onclick='openImage(this)'>"+
	                "<div class='year'>"+projYears[i].replaceAll('<year>','')+"</div>"+
	                "<div class='category'>"+projCategories[i].replaceAll('<category>','')+"</div>"+
	                "<div class='title'>"+projTitles[i].replaceAll('<title>','')+"</div>"+
	            "</div>"+
	            "<div id='gallery_"+i+"' class='gallery'>"+
	            "</div>"+
			"</div>"+
			"<div id='lightbox_"+i+"' class='lightbox displayNone'>"+
				"<div class='closeButton' onclick='closeImage(this)'>close</div>"+
	            "<div class='lightbox_gallery'>"+
	            "</div>"+
	            "<div class='description'>"+projDescription[i]+"</div>"+
            "</div>" ).appendTo($('.projects_main'));

            for (j=0; j<images.length; j++){
            	var usedImages = $('#lightbox_'+i+' > .lightbox_gallery img[src="images/'+images[j]+'"');
    			//$( "<img loading='lazy' alt='project_"+i+"_"+j+"' onclick='openImage(this)' src='images/"+
    				//images[j]+"'>" ).appendTo($('#gallery_'+i));

    			if (usedImages.length === 0) {
    				$( "<img alt='"+images[j].split('.')[0]+"_"+j+"' onclick='openImage(this)' src='images_preview/"+
    				images[j]+"'>" ).appendTo($('#gallery_'+i));

    				$( "<figure>"+
	    				"<div class='imageArrowLeft'></div>"+
	    				"<img alt='"+images[j].split('.')[0]+"_"+j+"' class='insideImg' src='images/"+images[j]+"'>"+
	    				"<div class='imageArrowRight'></div>"+
	    				"</figure>" ).appendTo($('#lightbox_'+i+' > .lightbox_gallery'));
    			} else {
    				$( "<img alt='"+usedImages[0].alt+"' onclick='openImage(this)' src='images_preview/"+
    				images[j]+"'>" ).appendTo($('#gallery_'+i));
    			}
    		}
    	}

    	var rows = $('.project_line');

		$(".imageArrowLeft").on('click', function(event) {
			event.preventDefault();
			$(".lightbox > .lightbox_gallery > figure").css("scroll-snap-align", "none");
			$(".lightbox > .lightbox_gallery").css("overflow", "hidden");
			
			if ($(this).parent().is(':first-child')) {
				$(this).parent().parent().animate({
					scrollLeft: ($(this).parent().width() * $(this).parent().parent().children().length)
				}, 400);
				setTimeout(function() {
					$(".lightbox > .lightbox_gallery > figure").css("scroll-snap-align", "start");
					$(".lightbox > .lightbox_gallery").css("overflow", "scroll");
				}, 400);
				return
			}
			
			$(this).parent().parent().animate({
				scrollLeft: '-='+($(this).parent().width())
			}, 400);
			setTimeout(function() {
				$(".lightbox > .lightbox_gallery > figure").css("scroll-snap-align", "start");
				$(".lightbox > .lightbox_gallery").css("overflow", "scroll");
			}, 400);
			return
		});

		$(".imageArrowRight").on('click', function(event) {
			event.preventDefault();
			
			$(".lightbox > .lightbox_gallery > figure").css("scroll-snap-align", "none");
			$(".lightbox > .lightbox_gallery").css("overflow", "hidden");
			
			if ($(this).parent().is(':last-child')) {
				$(this).parent().parent().animate({
					scrollLeft: 0
				}, 400);
				setTimeout(function() {
					$(".lightbox > .lightbox_gallery > figure").css("scroll-snap-align", "start");
					$(".lightbox > .lightbox_gallery").css("overflow", "scroll");
				}, 400);
				return
			}

			$(this).parent().parent().animate({
				scrollLeft: '+='+($(this).parent().width())
			}, 400);
			setTimeout(function() {
				$(".lightbox > .lightbox_gallery > figure").css("scroll-snap-align", "start");
				$(".lightbox > .lightbox_gallery").css("overflow", "scroll");
			}, 400);
			return
		});*/
    });
});




function checkIfTextVisible() {
	var text_1 = document.querySelector('#text_1');
	var position_1 = text_1.getBoundingClientRect();
	var text_2 = document.querySelector('#text_2');
	var position_2 = text_2.getBoundingClientRect();
	var text_3 = document.querySelector('#text_3');
	var position_3 = text_3.getBoundingClientRect();

	const allSliders = document.querySelectorAll(".multiple_texts_slider > .slider");

	// checking whether fully visible
	if(position_1.left >= 0 && position_1.right <= window.innerWidth) {
		allSliders.forEach((el) => {el.classList.remove('active')});
		document.querySelector('.multiple_texts_slider > .slider_1').classList.add('active');
	}
	if(position_2.left >= 0 && position_2.right <= window.innerWidth) {
		allSliders.forEach((el) => {el.classList.remove('active')});
		document.querySelector('.multiple_texts_slider > .slider_2').classList.add('active');
	}
	if(position_3.left >= 0 && position_3.right <= window.innerWidth) {
		allSliders.forEach((el) => {el.classList.remove('active')});
		document.querySelector('.multiple_texts_slider > .slider_3').classList.add('active');
	}

	/* checking for partial visibility
	if(position.top < window.innerHeight && position.bottom >= 0) {
		console.log('Element is partially visible in screen');
	}*/
}

function checkIfDescriptVisible() {
	const allOpenJobs = document.querySelectorAll(".right > .card > .bottom > .descript");
	const openJobsSlider = document.querySelectorAll(".right > .card > .top > .sliders > a");
	var variableHolder = {};

	$(allOpenJobs).each(function( index ) {
		variableHolder["openJob-"+index] = $(allOpenJobs[index]);
	});

	$.each(variableHolder, function(key,valueObj){
		//console.log(variableHolder);
	    //console.log(key, valueObj)
	    if(($(valueObj)[0].getBoundingClientRect().right > $('.right > .card')[0].getBoundingClientRect().left+30) && ($(valueObj)[0].getBoundingClientRect().left < $('.right > .card')[0].getBoundingClientRect().right-30)) {
	    	//console.log('yay!', $(valueObj)[0]);
	    	//console.log(itemNumber);
	    	var itemNumber = key.replace('openJob-','');
	    	var jobName = valueObj[0].classList[1].replace('titolo_','').replaceAll('-',' ');
	    	$('.right > .card > .top > .title')[0].innerText = jobName;
	    	$('.right > .card > a.sendCareerMail')[0].href = "mailto:google@google.com?subject=candidatura-"+jobName.replaceAll(' ','-');
			openJobsSlider.forEach((el) => {el.classList.remove('active')});
			openJobsSlider[itemNumber].classList.add('active');
		}
	});
}



function openThisButton(e) {
	var thisAlt = $(e).attr('alt');
	var allOptions_inside = $('.option_inside');
	var thisOption_inside = $('.option_inside[alt="'+thisAlt+'"]');

	if(!$(thisOption_inside).hasClass('closed')){
		thisOption_inside[0].classList.add('closed');
	} else {
		allOptions_inside.each(function(){this.classList.add('closed')});
		thisOption_inside[0].classList.remove('closed');
	}
}

$( document ).ready(function() {
	//INTERACT WITH BUTTONS
	$('.option_buttons > .option_duo > .button').each(function( index ) {
		$(this).click(function(){
			var thisAlt = $(this).attr('alt');
			var allOptions_inside = $('.option_inside');
			var thisOption_inside = $('.option_inside[alt="'+thisAlt+'"]');

			if(!$(thisOption_inside).hasClass('closed')){
				thisOption_inside[0].classList.add('closed');
			} else {
				allOptions_inside.each(function(){this.classList.add('closed')});
				thisOption_inside[0].classList.remove('closed');
			}
	  	});
	});
	
});

function whichSectionIsVisible() {
	const allHeadersOptions = document.querySelectorAll("header > div > a:not(.plus)");
	var variableHolder = {};

	$(allHeadersOptions).each(function( index ) {
		variableHolder["sectionName-"+index] = $(allHeadersOptions[index]).attr('href');
	});

	$.each(variableHolder, function(key,valueObj){
	    //console.log(key)
	    //console.log(window.innerHeight);
	    //console.log(valueObj, $(valueObj)[0].getBoundingClientRect().top, $(valueObj)[0].getBoundingClientRect().bottom);
	    if($(valueObj)[0].getBoundingClientRect().top < window.innerHeight && $(valueObj)[0].getBoundingClientRect().bottom >= 0 ) {
	    	var itemNumber = key.replace('sectionName-','');
			allHeadersOptions.forEach((el) => {el.classList.remove('active')});
			allHeadersOptions[itemNumber].classList.add('active');
		}
	});

	//check if already changed to avoid multiple triggers
	if($('div.left_text')[0].innerText != 'Digital Strategy Consulting'){
		if($('div#servizi')[0].getBoundingClientRect().top < window.innerHeight && $('div#servizi')[0].getBoundingClientRect().bottom >= 0 ) {
			//change logo
			($('.logo_wrapper.desktop.first > figure > img').css('opacity','0'));

			//change side text
			($('div.left_text')).css('opacity','0');
			setTimeout(() => {
				($('div.left_text')[0]).innerText = 'Digital Strategy Consulting';
				($('div.left_text')[0]).classList.remove('before_change');
				($('div.left_text')).css('opacity','1');
			}, "400");
		}
	}
}

function showFrame(name) {
	name = name.classList[0].replace('dot_','');
	//console.log(name);
	//console.log($('.frame_'+name)[0]);
	$('.frame_'+name).css('display','block');
}
function hideFrame(name) {
	name = name.classList[0].replace('dot_','');
	$('.frame_'+name).css('display','none');
}
