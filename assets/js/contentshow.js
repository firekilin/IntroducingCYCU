function content_open() {
    document.getElementsByClassName("b showcontent")[0].style.width="calc(100% - 20px)";
    document.getElementsByClassName("b showcontent")[0].style.overflow="overlay";
	document.getElementsByClassName("b showcontent")[0].style.height="450px";
    document.getElementsByClassName("showall")[0].style.display="none";
}

function change_img(x) {
    document.getElementsByClassName("showing_img")[0].src=document.getElementsByClassName("content_imgs")[x].src;
}
function change_video(x) {
    document.getElementsByClassName("showing_video")[0].src=document.getElementsByClassName("content_imgs")[x].id;
}


var slid=0;
function change_box(x) {
    slid+=x;
    if(slid>=document.getElementsByClassName("content_imgs").length) {
        slid=0;
    }
    else if(slid<0) {
        slid=(document.getElementsByClassName("content_imgs").length-1);
    }
    box_go(slid);
}

var imgss=["zero",
"one",
"two",
"three",
"four",
"five"];
function box_go(slid) {
    for(var i=0;
    i<document.getElementsByClassName("content_imgs").length;
    i++) {
        document.getElementsByClassName("content_imgs")[i].className="content_imgs";
    }
    for(var i=0;
    i<6;
    i++) {
        if((slid+i)>=(document.getElementsByClassName("content_imgs").length)) {
            document.getElementsByClassName("content_imgs")[slid+i-document.getElementsByClassName("content_imgs").length].className="content_imgs "+imgss[i];
        }
        else {
            document.getElementsByClassName("content_imgs")[slid+i].className="content_imgs "+imgss[i];
        }
    }
}