var slids=0;
	function slid(page){
		slids+=page;
		if(slids <0){
			slids=document.getElementsByClassName("main_images").length-1;
		}else if(slids >=document.getElementsByClassName("main_images").length){
			slids=0;
		}
		for(var i=0;i<document.getElementsByClassName("main_images").length;i++ ){
			document.getElementsByClassName("main_images")[i].className="main_images";
		}
		document.getElementsByClassName("main_images")[slids].className="main_images show";
	}
	function autoslid(){
		slid(1);
		setTimeout('autoslid()',5000);
	}
	setTimeout('autoslid()',5000);
function videoss(){
	document.getElementsByClassName("videoss")[0].style.height="500px";
	document.getElementsByClassName("videos")[0].style.display="none";
}