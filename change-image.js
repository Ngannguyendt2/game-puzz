function changedImage(image) {
     image=document.getElementById('myimage');
    if(image.src.match("chibi1"))
    {
        image.src="image/chibi2.jpeg";
    }
    else {
        if (image.src.match("chibi2")) {
            image.src = "image/chibi3.jpeg";

        } else if (image.src.match("chibi3")) {
            image.src = "image/chibi4.jpeg";
        } else if (image.src.match("chibi4")) {
            image.src = "image/chibi1.jpeg";
        }
    }
}
function changedImage1(myImage) {
     myImage=document.getElementById('image');
    if(myImage.src.match("chibi1"))
    {
        myImage.src="image/chibi2.jpeg";
    }
    else {
        if (myImage.src.match("chibi2")) {
            myImage.src = "image/chibi3.jpeg";

        } else if (myImage.src.match("chibi3")) {
            myImage.src = "image/chibi4.jpeg";
        } else if (myImage.src.match("chibi4")) {
            myImage.src = "image/chibi1.jpeg";
        }
    }
}
function check() {


}