/*jQuery.get('projects.txt', function(data) {
    var myText = data;

    const rule_speaker  = /<speaker>.*?<speaker>/g;
	const aboutText = myText.match(/<about>.*?<about>/)[0].replaceAll('<about>','');
	const projTitles = myText.match(/<title>.*?<\/>/g);
	const projYears = myText.match(/<year>.*?<\/>/g);
	const projCategories = myText.match(/<category>.*?<\/>/g);
	const projDescription = myText.match(/<description>.*?<\/>/g);
	const projImages = myText.match(/<images>.*?<\/>/g);

	//console.log(myText);
	//console.log(aboutText);
	//console.log(projTitles);
	//console.log(projYears);
	//console.log(projCategories);

    $(document).ready(function() {
    	$('.about_text')[0].innerHTML = aboutText;
    	
    	for (i=0; i<projTitles.length; i++){
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
		});
    });
});*/




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
			openJobsSlider.forEach((el) => {el.classList.remove('active')});
			openJobsSlider[itemNumber].classList.add('active');
		}
	});
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
	    	//console.log('yay!', $(valueObj)[0]);
	    	var itemNumber = key.replace('sectionName-','');
			allHeadersOptions.forEach((el) => {el.classList.remove('active')});
			allHeadersOptions[itemNumber].classList.add('active');
		}
	});
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
