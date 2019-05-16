
var linksInsideBody = [...document.body.getElementsByTagName('*')];
var imagesInsideBody = [...document.body.getElementsByTagName('*')];

function findLink(){
    linksInsideBody.forEach(element =>{
        replaceUrl(element.attributes.getNamedItem("href"));
    });
  }

function findImage(){
    imagesInsideBody.forEach(element =>{
        replaceUrl(element.attributes.getNamedItem("src"));
    });
  }

function replaceUrl (url) {
    if (url == undefined || null) {
    }
    else if (url.nodeValue == undefined || null) {
    }
    else {
      let value = url.nodeValue;
    value = value.replace(/(jpg.*)/gi, "jpg");
    value = value.replace(/(png.*)/gi, "png");
    value = value.replace(/(gif.*)/gi, "gif");
    url.nodeValue = value;
    }
  }
  
findImage();
findLink();
