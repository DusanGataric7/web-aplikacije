// Put all your folders, subitems, and text snippets here!
const dataStructure = {
    "B1": [
        {
            name: "index.html", content:
                `<html>
<body>
<title>Foto galerija</title>
<head>
<link rel="stylesheet" href="stylesheet.css">
<h1>Foto galerija</h1>
</head>

<ul>
  <li><a href="index.html">Pocetna</a></li>
  <li><a href="autor.html">O autoru</a></li>
  <li><a href="uputstvo.html">Uputstvo</a></li>
  <li><a href="">Zavrsni ispit</a></li>
</ul>
<br><br><br><br><br><br>
<div id="galerija">
    <img id="glavna" src="img/slika1.jpg" alt="Glavna slika">
    <div id="male-slike">
      <img src="img/slika1.jpg" onclick="document.getElementById('glavna').src=this.src"><img src="img/slika2.jpg" onclick="document.getElementById('glavna').src=this.src"><img src="img/slika3.jpg" onclick="document.getElementById('glavna').src=this.src"><img src="img/slika4.jpg" onclick="document.getElementById('glavna').src=this.src"><img src="img/slika5.jpg" onclick="document.getElementById('glavna').src=this.src"><img src="img/slika6.jpg" onclick="document.getElementById('glavna').src=this.src"><img src="img/slika7.jpg" onclick="document.getElementById('glavna').src=this.src"><img src="img/slika8.jpg" onclick="document.getElementById('glavna').src=this.src"><img src="img/slika9.jpg" onclick="document.getElementById('glavna').src=this.src"><img src="img/slika10.jpg" onclick="document.getElementById('glavna').src=this.src">
    </div>
  </div>

</body>
</html>`
        },
        {
            name: "autor.html", content: ""
        },
        {
            name: "uputstvo.html", content: ""
        },
        {
            name: "stylesheet.css", content: `body {
  background-color: lightblue;
  font-family: Arial, Helvetica, sans-serif;
}
h1 {
	color: #003262;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #003262;
}

ul li {
  float: left;
}

ul li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

ul li a:hover {
  background-color: #5D8AA8;
  color: black;
}

#galerija {
  border: 4px solid white;
  margin:auto;
  display: grid;
  width:640px;
  background: #5D8AA8;
}

#glavna {
  width: 640px;
  height: 480px;
  margin: 0 auto 10px auto;
  object-fit: cover;
}

#male-slike {
  display:block;
}

#male-slike img {
  width: 64px;
  height: 40px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s;
}

#male-slike img:hover {
  transform: scale(1.1);
}` },
    ],
    "B2": [
        {
            name: "index.html", content: `<html>
<title>Domace zivotinje</title>
<head>
<link rel="stylesheet" href="stylesheet.css">
<br><br><br><br><br><br>
</head>
<body>
<h1><center>Domace zivotinje</center></h1>
<ul>
  <li><a href="index.html">Pocetna</a></li>
  <li><a href="autor.html">O autoru</a></li>
  <li><a href="uputstvo.html">Uputstvo</a></li>
</ul>
<br><br><br><br><br><br>
<div class="slike">
<a href="pas.html" onClick="window.open('pas.html','Pas','height=300,width=500'); return false;"><img src="img/pas.jpg"></a>
<a href="pace.html" onClick="window.open('pace.html','Pace','height=300,width=500'); return false;"><img src="img/pace.jpg"></a>
<a href="macka.html" onClick="window.open('macka.html','Macka','height=300,width=500'); return false;"><img src="img/macka.jpg"></a>
<a href="pile.html" onClick="window.open('pile.html','Pile','height=300,width=500'); return false;"><img src="img/pile.jpg"></a>
<a href="krava.html" onClick="window.open('krava.html','Krava','height=300,width=500'); return false;"><img src="img/krava.jpg"></a>
</div>
<script src="java.js"></script>
</body>
<footer>wadwadawdwa</footer>
</html>` },
        { name: "autor.html", content: "" },
        { name: "upustvo.html", content: "" },
        {
            name: "stylesheet.css", content: `body {
  background-image: url("img/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  justify-items: center;
}
h1 {
	color: #fac000;
	text-shadow: 2px 2px 4px black;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffd138;
}

ul li {
  float: left;
  border-right: 1px solid #941600;
}

ul li a {
  display: block;
  color: #941600;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

ul li a:hover {
  background-color: #941600;
  color: #ffd138;
}

.slike {
}
img {
  border: 8px solid #ffd138;
  border-radius: 50%;
  width: 250px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
}

footer{
	position: absolute;
	bottom: 0px;
	left: 0px;
	right: 0px;
	height: 40px;
	text-align: center;
	color: #ffd138;
	background-color: #941600;
}` },
        {
            name: "java.js", content: `function zvukovi(zv)
{
var zvuk;
zvuk = new Audio('audio/' +zv+ '.wav);
zvuk.play();
}` },
        {
            name: "krava.html", content: `<html>
<head>
<h2><center>КРАВА</center></h2>
</head>
<p>Крава је крупна домаћа животиња. Даје млеко и служи човеку вековима.  
Оглашава се мукањем.</p>
</html>`
        },
        {
            name: "macka.html", content: `<html>
<head>
<h2><center>МАЧКА</center></h2>
</head>
<p>Мачка је омиљена домаћа животиња. Вешта је у лову на мишеве.  
Оглашава се мјаукањем.</p>
</html>`
        },
        {
            name: "pace.html", content: `<html>
<head>
<h2><center>ПАЧЕ</center></h2>
</head>
<p>Паче је младунче патке. Воли воду и уме да плива одмах по рођењу.  
Оглашава се пијањем.</p>
</html>`
        },
        {
            name: "pas.html", content: `<html>
<head>
<h2><center>ПАС</center></h2>
</head>
<p>Пас је најстарија домаћа животиња. Одан је човеку.  
Има добро развијено памћење и чуло мириса. Оглашава се лајањем.</p>
</html>`
        },
        {
            name: "pile.html", content: `<html>
<head>
<h2><center>ПИЛЕ</center></h2>
</head>
<p>Пиле је младунче кокошке. Брзо расте и покривено је жутим перјем.  
Оглашава се пијукањем.</p>
</html>`
        }
    ],
    "B3": [
        {
            name: "index.html", content: `<html>
<body>
<title>Geografija</title>
<head>
<link rel="stylesheet" href="stylesheet.css">
<h1><center>Osnovna skola "Sonja Marinkovic"</center></h1>
</head>

<ul>
  <li><a href="index.html">Pocetna</a></li>
  <li><a href="autor.html">O autoru</a></li>
  <li><a href="uputstvo.html">Uputstvo</a></li>
</ul>
<h2><center>Srbija i njeni susedi</center></h2>
<img id="karta" src="img/mapa.png">
<div id="srbijaslika">
	<img src="img/srbija.png" onmouseover="zvukovi('himna_srbije')" style="width:100%">
	<a href="srbija.html" target="popup" onClick="window.open('srbija.html','Srbija','height=300,width=500');">Srbija</a>
</div>
<div id="hrvatskaslika">
	<img src="img/hrvatska.png" onmouseover="zvukovi('himna_hrvatske')" style="width:100%">
	<a href="hrvatska.html" target="popup" onClick="window.open('hrvatska.html','Hrvatska','height=300,width=500');">Hrvatska</a>
</div>
<div id="madjarskaslika">
	<img src="img/madjarska.png" onmouseover="zvukovi('himna_madjarske')" style="width:100%">
	<a href="hrvatska.html" target="popup" onClick="window.open('madjarska.html','Madjarska','height=300,width=500');">Madjarska</a>
</div>
<div id="rumunijaslika">
	<img src="img/rumunija.png" onmouseover="zvukovi('himna_rumunije')" style="width:100%">
	<a href="hrvatska.html" target="popup" onClick="window.open('rumunija.html','Rumunija','height=300,width=500');">Rumunija</a>
</div>
<div id="bugarskaslika">
	<img src="img/bugarska.png" onmouseover="zvukovi('himna_bugarske')" style="width:100%">
	<a href="bugarska.html" target="popup" onClick="window.open('bugarska.html','Bugarska','height=300,width=500');">Bugarska</a>
</div>
<div id="makedonijaslika">
	<img src="img/makedonija.png" onmouseover="zvukovi('himna_makedonije')" style="width:100%">
	<a href="makedonija.html" target="popup" onClick="window.open('makedonija.html','Makedonija','height=300,width=500');">Makedonija</a>
</div>
<div id="crnagoraslika">
	<img src="img/crna gora.png" onmouseover="zvukovi('himna_crne_gore')" style="width:100%">
	<a href="crnagora.html" target="popup" onClick="window.open('crnagora.html','Crna Gora','height=300,width=500');">Crna Gora</a>
</div>
<div id="albanijaslika">
	<img src="img/albanija.png" onmouseover="zvukovi('himna_albanije')" style="width:100%">
	<a href="albanija.html" target="popup" onClick="window.open('albanija.html','Albanija','height=300,width=500');">Albanija</a>
</div>
<div id="bosnaslika">
	<img src="img/bosna.png" onmouseover="zvukovi('himna_bosne')" style="width:100%">
	<a href="bosna.html" target="popup" onClick="window.open('bosna.html','Bosna','height=300,width=500');">Bosna i Hercegovina</a>
</div>
<script src=java.js></script>
</body>
<footer>Copyright © IV2</footer>
</html>` },
        {
            name: "autor.html", content: `<html>
<body>
<title>Geografija</title>
<head>
<link rel="stylesheet" href="stylesheet.css">
<h1><center>Osnovna skola "Sonja Marinkovic"</center></h1>
</head>

<ul>
  <li><a href="index.html">Pocetna</a></li>
  <li><a href="autor.html">O autoru</a></li>
  <li><a href="uputstvo.html">Uputstvo</a></li>
</ul>
<h2>Autor je dobar covek.<h2>
</body>
<footer>Copyright © IV2</footer>
</html>` },
        {
            name: "uputstvo.html", content: `<html>
<body>
<title>Geografija</title>
<head>
<link rel="stylesheet" href="stylesheet.css">
<h1><center>Osnovna skola "Sonja Marinkovic"</center></h1>
</head>

<ul>
  <li><a href="index.html">Pocetna</a></li>
  <li><a href="autor.html">O autoru</a></li>
  <li><a href="uputstvo.html">Uputstvo</a></li>
</ul>
<h2>Uputstvo trenutno ne postoji :/<h2>
</body>
<footer>Copyright © IV2</footer>
</html>` },
        {
            name: "stylesheet.css", content: `body {
  background-color: yellow;
  font-family: Arial, Helvetica, sans-serif;
  justify-items: center;
}
h1 {
	color: #1E4D2B;
}
h2 {
	color: #1E4D2B;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ACE1AF;
}

ul li {
  float: left;
}

ul li a {
  display: block;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
}

ul li a:hover {
  background-color: #1E4D2B;
  color: #ACE1AF;
}

footer{
	position: absolute;
	bottom: 0px;
	left: 0px;
	right: 0px;
	height: 40px;
	text-align: center;
	color: #ACE1AF;
	background-color: #1E4D2B;
}

#karta{
	display: block;
	position: absolute;
	left: 680px;
	height: 700px;
	width: 550px;
}

#srbijaslika {
  display:block;
  position: absolute;
  width: 48px;
  height: 32px;
  top: 400px;
  left: 900px;
}
#hrvatskaslika {
  display:block;
  position: absolute;
  width: 48px;
  height: 32px;
  top: 290px;
  left: 700px;
}
#madjarskaslika {
  display:block;
  position: absolute;
  width: 48px;
  height: 32px;
  top: 190px;
  left: 700px;
}
#rumunijaslika {
  display:block;
  position: absolute;
  width: 48px;
  height: 32px;
  top: 300px;
  left: 1100px;
}
#bugarskaslika {
  display:block;
  position: absolute;
  width: 48px;
  height: 32px;
  top: 650px;
  left: 1150px;
}
#makedonijaslika {
  display:block;
  position: absolute;
  width: 48px;
  height: 32px;
  top: 820px;
  left: 970px;
}
#crnagoraslika {
  display:block;
  position: absolute;
  width: 48px;
  height: 32px;
  top: 650px;
  left: 750px;
}
#albanijaslika {
  display:block;
  position: absolute;
  width: 48px;
  height: 32px;
  top: 780px;
  left: 820px;
}
#bosnaslika {
  display:block;
  position: absolute;
  width: 48px;
  height: 32px;
  top: 450px;
  left: 700px;
}` },
        { name: "albanija.html", content: `Albanija` },
        { name: "bosna.html", content: `Bosna` },
        { name: "bugarska.html", content: `Bugarska` },
        { name: "crnagora.html", content: `Crna Gora` },
        { name: "hrvatska.html", content: `Hrvatska` },
        { name: "madjarska.html", content: `Madjarska` },
        { name: "makedonija.html", content: `Makedonija` },
        { name: "rumunija.html", content: `Rumunija` },
        { name: "srbija.html", content: `Srbija` },
        {
            name: "java.js", content: `function zvukovi(zv)
{
var zvuk;
zvuk = new Audio('audio/' +zv+ '.wav');
zvuk.play();
}` }
    ],
    "B4": [
        {
            name: "index.html", content: `<html>
<title>Pikaso</title>
<head>
<link rel="stylesheet" href="stylesheet.css">
<h1><center>Osnovna skola "Sonja Marinkovic"</center></h1>
</head>
<body>
<header>
<nav>
<ul>
  <li><a href="index.html">Pocetna</a></li>
  <li><a href="autor.html">O autoru</a></li>
  <li><a href="uputstvo.html">Uputstvo</a></li>
</ul>
</nav>
</header>
<main>
<br><br>
<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 5</div>
  <img src="img/slika1.jpg" style="width:50%">
  <div class="text">"Жена која плаче"<br><br>Жена која плаче из 1937. године представља неку врсту наставка "Гернике". Док "Герника" осликава погром у тренутку док се страдање догађа, "Жена која плаче" истражује емотивне последице рата, из угла једне од жена насликаних у "Герници".</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 5</div>
  <img src="img/slika2.jpg" style="width:50%">
  <div class="text">"Гертруда Стајн"<br><br>Портрет америчке књижевнице Гертруде Стајн из 1905-06. године  представља дело које хронолошки припада завршетку Пикасове ружичасте фазе.</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 5</div>
  <img src="img/slika3.jpg" style="width:50%">
  <div class="text">"Стари гитариста" (1903-04)<br><br>Настала у техници уља на платну, слика припада Пикасовој такозваној "плавој фази", названој по уметниковој техници да користи искључиво нијансе плаве боје, како би што боље осликао теме људског сиромаштва и патње.</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">4 / 5</div>
  <img src="img/slika4.jpg" style="width:50%">
  <div class="text">"Девојка пред огледалом"<br><br>Ако за неко дело може да се каже да је типично "пикасовско" онда је то "Девојка пред огледалом" из 1932. године, са својим живахним колоритом, дахом еротицизма и заводљивим облицима који кубизам претварају у екстрем.</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">5 / 5</div>
  <img src="img/slika5.jpg" style="width:50%">
  <div class="text">"Портрет Амброаза Волара" (1910)<br><br>Слика је приказ утицајног трговца уметнинама Амброаза Волара, који је одиграо важну улогу у Пикасовој раној уметничкој каријери.</div>
</div>

</div>
<div style="text-align:left"><h2>Pikaso</h2></div>
<br><br>

<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>
</main>
<br>
<footer><br>Copyright © IV2</footer>
<script src="java.js"></script>
</body>
</html>` },
        {
            name: "autor.html", content: `<html>
<title>Pikaso</title>
<head>
<link rel="stylesheet" href="stylesheet.css">
<h1><center>Osnovna skola "Sonja Marinkovic"</center></h1>
</head>
<body>
<header>
<nav>
<ul>
  <li><a href="index.html">Pocetna</a></li>
  <li><a href="autor.html">O autoru</a></li>
  <li><a href="uputstvo.html">Uputstvo</a></li>
</ul>
</nav>
</header>
<main>
<div style="text-align:left"><h2>O autoru</h2></div>
<div style="text-align:center"><h1>Autor je dobar covek :)</h1></div>
<br><br>
</main>
<br>
<footer><br>Copyright © IV2</footer>
<script src="java.js"></script>
</body>
</html>` },
        {
            name: "uputstvo.html", content: `<html>
<title>Pikaso</title>
<head>
<link rel="stylesheet" href="stylesheet.css">
<h1><center>Osnovna skola "Sonja Marinkovic"</center></h1>
</head>
<body>
<header>
<nav>
<ul>
  <li><a href="index.html">Pocetna</a></li>
  <li><a href="autor.html">O autoru</a></li>
  <li><a href="uputstvo.html">Uputstvo</a></li>
</ul>
</nav>
</header>
<main>
<div style="text-align:left"><h2>Uputstvo</h2></div>
<div style="text-align:center"><h1>Uputstvo je veoma korisno :)</h1></div>
<br><br>
</main>
<br>
<footer><br>Copyright © IV2</footer>
<script src="java.js"></script>
</body>
</html>` },
        {
            name: "stylesheet.css", content: `body {
  background-color: yellow;
  font-family: Arial, Helvetica, sans-serif;
}
h1 {
	color: #1E4D2B;
}
h2 {
	writing-mode: vertical-rl;
	text-orientation: upright;
	color: #1E4D2B;
	text-shadow: 2px 2px 7px black;
	font-size: 60px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ACE1AF;
}

ul li {
  float: left;
}

ul li a {
  display: block;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
}

ul li a:hover {
  background-color: #1E4D2B;
  color: #ACE1AF;
}

header
{
	justify-items: center;
}

footer{
	position: fixed;
	bottom: 0px;
	left: 0px;
	right: 0px;
	height: 40px;
	text-align: center;
	color: #ACE1AF;
	background-color: #1E4D2B;
}

* {box-sizing: border-box;}
body {font-family: Verdana, sans-serif;}
.mySlides {display: none;}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  width: 750px;
  position: absolute;
  margin-left: 29%;
  background-color: #1E4D2B;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  width: 50%;
  float: right;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
	background-color: #1E4D2B;
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}` },
        {
            name: "java.js", content: `let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}` }
    ],
    "B5": [
        { name: "MySQL Connection String", content: "Server=localhost;Database=piggy;Uid=root;Pwd=;" },
        { name: "Select All Query", content: "SELECT * FROM users ORDER BY id DESC;" }
    ],
    "B9": [
        { name: "MySQL Connection String", content: "Server=localhost;Database=piggy;Uid=root;Pwd=;" },
        { name: "Select All Query", content: "SELECT * FROM users ORDER BY id DESC;" }
    ],
    "B13": [
        { name: "MySQL Connection String", content: "Server=localhost;Database=piggy;Uid=root;Pwd=;" },
        { name: "Select All Query", content: "SELECT * FROM users ORDER BY id DESC;" }
    ],
};