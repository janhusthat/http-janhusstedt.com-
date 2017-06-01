
$( function() {
    $( "img" ).draggable();
   
    // $( "nav" ).draggable();  		// only blue nav circle draggable
    // $( ".arrow-up" ).draggable();  	// only yellow triangle draggable
    // $( ".arrow-up" ).draggable();  	// only red floating box draggable
    // $( ".content" ).draggable();		// only green content circle draggable
    // $( "#my-image" ).draggable();	// only cogwheel draggable

  
});

var the_images = [
                'assets/Illustration_Poster_Free_060.png',
                'assets/Illustration_Poster_Free_022.png',
                'assets/Illustration_Poster_Free_04.png',
                'assets/Illustration_Poster_Free_16.png',
                'assets/Illustration_Poster_Free_12.png',
                'assets/Illustration_Poster_Free_10.png',
                'assets/Illustration_Poster_Free_02.png',
                'assets/Illustration_Poster_Free_09.png',
                'assets/Illustration_Poster_Free_11.png',
                'assets/Illustration_Poster_Free_01.png',
                'assets/Illustration_Poster_Free_03.png',
                'assets/edenspiekermann_wave_water_03.png',
                'assets/edenspiekermann_wave_water_02.png',
                'assets/edenspiekermann_wave_water_01.png',
                'assets/edenspiekermann_typedesign_fraktur_01.png',
                'assets/Illustration_Poster_Free_08.png',
                'assets/Napoleon_Dynamite_BW.png',
                'assets/edenspiekermann_boulevard_01.png',
                'assets/edenspiekermann_cake_01.png',
                'assets/Illustration_Poster_Free_05.png',
                'assets/Illustration_Poster_012.png',
                'assets/Illustration_Poster_02.png',
                'assets/Illustration_Poster_Free_14.png',
                'assets/edenspiekermann_brave_flag.png',
                'assets/Illustration_Poster_Free_15.png',
                'assets/Illustration_Poster_Waregrafik_058.png',
                'assets/Illustration_Poster_Waregrafik_057.png',
                'assets/FBM_Poster_Proposal_alt.png',
                'assets/FBM_Poster_Proposal.png',
                'assets/Illustration_Poster_Free_19.png',
                'assets/Bronson_Poster_Free_01.png',


                
];

            var createImage = function(nr){
                var img = document.createElement('img');
                img.setAttribute("style", "width: 20%; position:absolute;");
                img.setAttribute("src", the_images[nr]);
                document.getElementById("container").appendChild(img);
                var xy = getRandomPosition(img);
                img.style.top = xy[1] + 'px';
                img.style.left = xy[0] + 'px';
            };


            for (var i=0;i<the_images.length;i++){
                createImage(i);
            };



function getRandomPosition(element) {
    // var width = document.body.offsetHeight-element.clientHeight;
    // var height = document.body.offsetWidth-element.clientWidth;
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - element.clientWidth;
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - element.clientHeight ;

    console.log(element.clientWidth)
    console.log(element.clientHeight)
    var randomX = Math.floor(Math.random()* w);
    var randomY = Math.floor(Math.random() * h);
    
    return [randomX,randomY];
}
