// wait for full page to load
document.addEventListener("DOMContentLoaded", function() { 
    eventListeners();
});




function eventListeners(){
    
    let startMovemenuitem = 1000;
    let timeInterval = 200;
    
    // disable submission from textbox
    // probaly should have used more direct tag
    
    console.log("fssdfsdfsdf"); 
    //move margin left to left side of screen   
    $("#sidebar").animate({ "margin-left": "0%" }, 1000);
    setTimeout(moveGithubLink,  startMovemenuitem);
    setTimeout(movelinkinLink,  startMovemenuitem + timeInterval);
    setTimeout(moveFacebooklink,  startMovemenuitem + (timeInterval*2));
   

    

    /*$("#Github-sidebarLink").animate({ "margin-left": "15%" }, "slow");    /*
    $("#Github-sidebarLink").hover(

        function () {
           $("#Github-sidebarLink").animate({ "margin-left": "15%" }, "slow");
           $("#Github-sidebarLink")

        }, 
		function () {
           $("#Github-sidebarLink").css("margin-left", "0%");
        }); 
    
*/
}

function moveGithubLink(){
    $("#Github-sidebarLink").animate({ "margin-left": "15%" }, "slow");
}
function movelinkinLink(){
    $("#Linkein-sidebarLink").animate({ "margin-left": "15%" }, "slow");
}
function moveFacebooklink(){
    $("#Facebook-sidebarLink").animate({ "margin-left": "15%" }, "slow");
}

