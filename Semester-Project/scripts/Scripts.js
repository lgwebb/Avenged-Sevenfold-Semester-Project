// Semester Project - Lucas Webb //>

function startShow()
{
    intNumber=setInterval("showSlides()", 2000);
}
           

function stopInterval()
{
    clearInterval(intNumber);
}

function showSlides()
{
    var startImg = 1;
    var range = 10;
    var RandomNumero
        RandomNumero = Math.floor(Math.random() * range) + startImg;
    document.getElementById("ImgShow").src="images/therev/therev"+RandomNumero+".jpg";
        
}

function Reset()
{
    document.getElementById("FormS").reset();
}

function confirmFavorites()
{
    var Name_entered = document.getElementById("name").value;
    var member_entered = document.getElementById("FavMember").value;
    var instrument_entered = document.getElementById("instrument").value;
    var email_entered = document.getElementById("EnterEmail").value;
    var song_entered = document.getElementById("SongListed").value;
    
    document.getElementById('divConfirm').innerHTML = "Name:" + Name_entered + " " + "<br />" + "Favorite Band Member:"+ " " + member_entered + "<br />" + "Favorite Instrument:" + instrument_entered + "<br />" + "Email:" + email_entered + " " + "<br />" + "Favorite Song:" + " " + song_entered;
}

function EmailOpen()
{
    window.open("email.htm", "", "scrollbars=0, resizable=1, width=500px, height=250px, top=300px, left=400px")
}

function Email()
{
    var timer;
    
    timer = setTimeout("EmailOpen()", 3000)
}
    
