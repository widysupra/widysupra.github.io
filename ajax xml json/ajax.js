function loadPage(file)
{
    var xmlHttp;
    if(window.xmlHttpRequest)
    {
        //Instansiasi untuk IE7+, Firefox, Chrome, Safari
        xmlHttp = new XMLHttpRequest();
    }
    else
    {
        //Instansiasi untuk IES, IE6
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.onreadystatechange = function ()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status==200)
        {
            document.getElementById("page").innerHTML= xmlHttp.respomseText;
        }
    }
    xmlHttp.open ("GET",file,true);
    xmlHttp.send(" ");
}