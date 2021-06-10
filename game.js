//hangok
var	hanghatterzene = document.getElementById('hatterzene');
hanghatterzene.volume = 0.1;
hanghatterzene.loop = true;
var	hangujrekord = document.getElementById('ujrekord');
hangujrekord.volume = 0.24;
var	hangdollarelkap = document.getElementById('dollarelkap');
hangdollarelkap.volume = 0.24;
var	hangpontelkap = document.getElementById('dollarelkap');
hangpontelkap.volume = 0.24;

var	hangszuperzene = document.getElementById('szuperzene');
hangszuperzene.volume = 0.12;
var	hangnyertes = document.getElementById('nyertes');
hangnyertes.volume = 0.24;
var	hangvesztes = document.getElementById('vesztes');
hangvesztes.volume = 0.29;
var	hangtalalat = document.getElementById('talalat');
hangtalalat.volume = 0.1;

var	hangleesik = document.getElementById('leesik');
hangleesik.volume = 0.24;

//-----------------------------

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var x=244;
var xuto=244;
var yuto=440;
//var utohossz=72;
var utohossz=120;
var pontszamkiir=0;
var y=441;
var dx=2;
var dy=3;
var dyorig=3;
var speed= 5;
var mehet=-1;
var vanmeg=0;
var vanmeg=0;
var pontszam=0;
var cnt=0;
var eletok=1;
var xtb=0;
var xtj=0;
var ytf=0;
var yta=0;
var pattanmehet=1;
var pattanstop=1;
var szint=0;
var szintekszama=25;
var inditgolyo=0;
var jatekvege=0;
var nyert=0;
cnt=0;
var elet=5;
var eletmaradt=5;
var golyovan=1;
var leesettok=0;
var szupergolyo=0;
var szupertime=0;

var szog=0;
var szogmehet=0;
var xszog=xuto+24;
var yszog=yuto-10;

var megfogta=0;

var xdollar=30;
var ydollar=60;
var dollaresik=0;
var dollarertek=50;
var dollarido=10000;
var dollartime=0;

var xdollar2=100;
var ydollar2=60;
var dollaresik2=0;
var dollarertek2=100;
var dollarido2=20000;
var dollartime2=0;

var xdollar3=200;
var ydollar3=60;
var dollaresik3=0;
var dollarertek3=150;
var dollarido3=30000;
var dollartime3=0;
var voltrekordhang=0;

var xpont=30;
var ypont=60;
var pontesik=0;
var pontertek=10;
var pontido=1000;
var ponttime=0;

var xpont2=100;
var ypont2=60;
var pontesik2=0;
var pontertek2=15;
var pontido2=5000;
var ponttime2=0;

var xpont3=300;
var ypont3=60;
var pontesik3=0;
var pontertek3=25;
var pontido3=10000;
var ponttime3=0;

var xpont4=200;
var ypont4=60;
var pontesik4=0;
var pontertek4=30;
var pontido4=20000;
var ponttime4=0;

szintido=22;
szinttime=0;
szintszorzo1=1;
szintszorzo2=2;
szintszorzo3=3;

pontszorzo=szintszorzo1;

var prevfps=0;
var fps=0;
var megyahatterzene=0;

var penz=0;

var nehezsegiszint=1;
var pause_=0;
var sugoaktiv=0;
var bezarsugo=0

var onmouseover_szint=0;
var onmouseover_start=0;
var onmouseover_sugo=0;
var onmouseover_bezarsugo=0;
var menu=1;

var szupergolyodb=0;
var szogdb=0;
var szupergolyoara=800;
var szogara=1000;
var golyoara=1200;

var  startx=324;
var  starty=214;
var  sugox=339;
var  sugoy=372;
var  szintx=339;
var  szinty=301;
var  bezarsugox=130;
var  bezarsugoy=2;

var kellzene=1;
var zenegombx=723;
var zenegomby=212;

		
//képek--------------------------
var menuhatter=new Image();
menuhatter.src="menuhatterbeta3.png" ;
var sugogomb=new Image();
sugogomb.src="sugogomb.png" ;
var sugogombhover=new Image();
sugogombhover.src="sugogombhover.png" ;
var szintgomb=new Image();
szintgomb.src="szintgomb.png" ;
var szintgombhover=new Image();
szintgombhover.src="szintgombhover.png" ;
var startgombhover=new Image();
startgombhover.src="startgombhover.png" ;
var startgomb=new Image();
startgomb.src="startgomb.png" ;
var bezarsugo=new Image();
bezarsugo.src="bezarsugo.png";
var sugo=new Image();
sugo.src="sugo.png" ;

var dollar=new Image();
dollar.src="dollar16.png" ;
var dollar2=new Image();
dollar2.src="dollar16sarga.png" ;
var dollar3=new Image();
dollar3.src="dollar16piros.png" ;

var pontkep=new Image();
pontkep.src="pont1.png" ;
var pontkep2=new Image();
pontkep2.src="pont2.png" ;
var pontkep3=new Image();
pontkep3.src="pont3.png" ;
var pontkep4=new Image();
pontkep4.src="pont4.png" ;



var infotorol=new Image();
infotorol.src="infotorol.jpg" ;
var uto=new Image();
uto.src="uto3hossz.png" ;
var hatter= new Image();
hatter.src="hatterbeta8.png";
var jatekter= new Image();
jatekter.src="jatekter4.png";
var yballok= 465;
var ball= new Image();
ball.src="golyosmall.png";
//ball.src="szupergolyo.png";
var szuperball= new Image();
szuperball.src="szupergolyo.png";
var tegla1= new Image();
tegla1.src="tegla1.png";
var szog= new Image();
szog.src="szog.png";
var tegla2= new Image();
tegla2.src="tegla2.png";
var tegla3= new Image();
tegla3.src="tegla3.png";
var tegla5= new Image();
tegla5.src="tegla5.png";
var nyertes= new Image();
nyertes.src="nyertes.png";
var vesztes= new Image();
vesztes.src="vesztes.png";

var tegla5x1= new Image();
tegla5x1.src="tegla5x1.png";
var tegla5x2= new Image();
tegla5x2.src="tegla5x2.png";
var tegla5x3= new Image();
tegla5x3.src="tegla5x3.png";


var zenebe= new Image();
zenebe.src="sound.png";
var zeneki= new Image();
zeneki.src="soundoff.png";
//--------------------------------

var highscore=0;

if ( is_html5_storage() != false )
{
	if(localStorage.getItem("highscore") !== null)
	{
			highscore = localStorage["highscore"];
	}
	
}


var teglabal_x=30;
var teglabal_y=60;
var teglatomb=new Array(8);

teglatomb[0] = new Array('0','0','0','0','0','0','0','0','0');
teglatomb[1] = new Array('0','0','0','0','0','0','0','0','0');
teglatomb[2] = new Array('0','0','0','0','0','0','0','0','0');
teglatomb[3] = new Array('0','0','0','0','0','0','0','0','0');
teglatomb[4] = new Array('0','0','0','0','0','0','0','0','0');
teglatomb[5] = new Array('0','0','0','0','0','0','0','0','0');
teglatomb[6] = new Array('0','0','0','0','0','0','0','0','0');
teglatomb[7] = new Array('0','0','0','0','0','0','0','0','0');
teglatomb[8] = new Array('0','0','0','0','0','0','0','0','0');

//szintek
var szint1=new Array(8);

szint1[0] = new Array('1','0','0','0','0','0','0','0','1');
szint1[1] = new Array('0','1','0','0','0','0','0','1','0');
szint1[2] = new Array('0','0','1','0','0','0','1','0','0');
szint1[3] = new Array('0','0','0','1','0','1','0','0','0');
szint1[4] = new Array('0','0','0','0','2','0','0','0','0');
szint1[5] = new Array('0','0','0','1','0','1','0','0','0');
szint1[6] = new Array('0','0','1','0','0','0','1','0','0');
szint1[7] = new Array('0','1','0','0','0','0','0','1','0');
szint1[8] = new Array('1','0','0','0','20','0','0','0','1');

var szint2=new Array(8);
szint2[0] = new Array('0','0','0','1','1','1','0','0','0');
szint2[1] = new Array('0','0','1','0','2','0','1','0','0');
szint2[2] = new Array('0','1','0','0','2','0','0','1','0');
szint2[3] = new Array('0','1','0','0','2','0','0','1','0');
szint2[4] = new Array('0','1','2','2','3','2','2','1','0');
szint2[5] = new Array('0','1','0','0','2','0','0','1','0');
szint2[6] = new Array('0','1','0','0','2','0','0','1','0');
szint2[7] = new Array('0','0','1','0','2','0','1','0','0');
szint2[8] = new Array('0','0','0','1','1','1','0','0','0');

var szint3=new Array(8);
szint3[0] = new Array('0','0','0','0','1','0','0','0','0');
szint3[1] = new Array('0','0','0','0','0','1','0','0','0');
szint3[2] = new Array('0','5','0','0','0','0','1','0','0');
szint3[3] = new Array('0','0','0','0','0','0','1','0','0');
szint3[4] = new Array('0','0','0','0','0','0','1','0','0');
szint3[5] = new Array('0','5','0','0','0','0','1','0','0');
szint3[6] = new Array('0','0','0','0','0','1','0','0','0');
szint3[7] = new Array('0','0','0','0','1','0','0','0','0');
szint3[8] = new Array('0','0','0','0','0','0','0','0','0');

var szint4=new Array(8);
szint4[0] = new Array('0','0','0','0','0','0','0','0','0');
szint4[1] = new Array('0','0','5','0','0','0','5','0','0');
szint4[2] = new Array('0','0','0','0','0','0','0','0','0');
szint4[3] = new Array('0','1','1','1','1','1','1','1','0');
szint4[4] = new Array('0','2','0','0','0','0','0','2','0');
szint4[5] = new Array('0','0','3','0','20','0','3','0','0');
szint4[6] = new Array('0','0','0','3','3','3','0','0','0');
szint4[7] = new Array('0','0','0','0','0','0','0','0','0');
szint4[8] = new Array('0','0','0','0','0','0','0','0','0');

var szint5=new Array(8);
szint5[0] = new Array('0','0','0','0','0','0','0','0','0');
szint5[1] = new Array('1','0','0','0','0','0','1','0','0');
szint5[2] = new Array('1','0','0','2','2','0','1','0','0');
szint5[3] = new Array('1','0','2','5','5','2','1','0','0');
szint5[4] = new Array('1','0','2','5','5','2','1','0','0');
szint5[5] = new Array('1','0','2','5','5','2','1','0','0');
szint5[6] = new Array('1','0','2','5','5','2','1','0','0');
szint5[7] = new Array('1','1','1','2','2','0','1','1','1');
szint5[8] = new Array('0','0','0','0','0','0','0','0','0');

var szint6=new Array(8);
szint6[0] = new Array('1','1','0','0','0','0','0','1','1');
szint6[1] = new Array('2','2','0','0','1','0','0','2','2');
szint6[2] = new Array('2','2','5','0','1','0','5','2','2');
szint6[3] = new Array('2','2','0','0','1','0','0','2','2');
szint6[4] = new Array('2','2','0','0','1','0','0','2','2');
szint6[5] = new Array('2','2','0','0','1','0','0','2','2');
szint6[6] = new Array('1','3','1','3','1','3','1','3','1');
szint6[7] = new Array('1','1','1','1','1','1','1','1','1');
szint6[8] = new Array('3','3','3','3','3','3','3','3','3');

var szint7=new Array(8);
szint7[0] = new Array('5','5','5','5','5','5','5','5','5');
szint7[1] = new Array('5','0','0','0','0','0','0','0','5');
szint7[2] = new Array('5','0','1','0','0','0','1','0','5');
szint7[3] = new Array('5','0','0','0','0','0','0','0','5');
szint7[4] = new Array('5','0','0','0','2','0','0','0','5');
szint7[5] = new Array('5','0','0','0','0','0','0','0','5');
szint7[6] = new Array('5','0','0','0','0','0','0','0','5');
szint7[7] = new Array('5','3','0','0','0','0','0','3','5');
szint7[8] = new Array('5','0','3','3','3','3','3','0','5');

var szint8=new Array(8);
szint8[0] = new Array('0','0','0','0','0','0','0','0','0');
szint8[1] = new Array('0','0','0','0','3','0','0','0','0');
szint8[2] = new Array('0','0','0','3','1','3','0','0','0');
szint8[3] = new Array('0','0','3','3','1','3','3','0','0');
szint8[4] = new Array('0','3','2','2','2','2','2','3','0');
szint8[5] = new Array('3','5','3','0','0','0','3','5','3');
szint8[6] = new Array('0','0','0','0','0','0','0','0','0');
szint8[7] = new Array('0','0','0','0','0','0','0','0','0');
szint8[8] = new Array('5','0','5','0','5','0','5','0','5');

var szint9=new Array(8);
szint9[0] = new Array('0','3','0','0','0','0','0','3','0');
szint9[1] = new Array('3','0','3','0','1','0','3','0','3');
szint9[2] = new Array('0','3','0','0','1','0','0','3','0');
szint9[3] = new Array('0','0','1','1','2','1','1','0','0');
szint9[4] = new Array('0','3','0','0','1','0','0','3','0');
szint9[5] = new Array('3','0','3','0','1','0','3','0','3');
szint9[6] = new Array('0','3','0','0','1','0','0','3','0');
szint9[7] = new Array('0','0','0','0','1','0','0','0','0');
szint9[8] = new Array('0','5','0','0','5','0','0','5','0');

var szint10=new Array(8);
szint10[0] = new Array('0','0','0','3','0','0','3','3','0');
szint10[1] = new Array('0','0','3','3','0','3','2','2','3');
szint10[2] = new Array('0','3','0','3','0','3','2','2','3');
szint10[3] = new Array('0','0','0','3','0','3','2','2','3');
szint10[4] = new Array('0','0','0','3','0','3','2','2','3');
szint10[5] = new Array('0','0','0','3','0','3','2','2','3');
szint10[6] = new Array('0','0','0','3','0','3','2','2','3');
szint10[7] = new Array('0','0','0','3','0','3','2','2','3');
szint10[8] = new Array('0','0','0','3','0','0','3','3','0');
//-------------------------------------------------------------


var szint11=new Array(8);
szint11[0] = new Array('5','5','0','0','0','0','0','5','5');
szint11[1] = new Array('0','0','0','0','0','0','0','0','0');
szint11[2] = new Array('0','0','0','1','1','0','0','0','0');
szint11[3] = new Array('0','0','1','1','1','1','0','0','0');
szint11[4] = new Array('0','1','1','1','1','1','1','1','0');
szint11[5] = new Array('1','1','1','1','1','1','1','1','0');
szint11[6] = new Array('0','1','1','1','1','1','0','0','0');
szint11[7] = new Array('0','0','1','1','1','0','0','0','0');
szint11[8] = new Array('0','0','0','1','1','0','0','0','0');
//-------------------------------------------------------------
var szint12=new Array(8);
szint12[0] = new Array('0','0','0','0','0','0','0','0','0');
szint12[1] = new Array('3','0','0','0','0','0','0','0','3');
szint12[2] = new Array('3','0','2','0','0','0','2','0','3');
szint12[3] = new Array('3','0','0','0','0','0','0','0','3');
szint12[4] = new Array('0','3','0','0','1','0','0','3','0');
szint12[5] = new Array('0','0','3','0','0','0','3','0','0');
szint12[6] = new Array('0','0','0','3','3','3','0','0','0');
szint12[7] = new Array('0','0','0','0','0','0','0','0','0');
szint12[8] = new Array('0','0','0','5','5','5','0','0','0');
//-------------------------------------------------------------
var szint13=new Array(8);

szint13[0] = new Array('0','0','5','5','5','5','5','0','0');
szint13[1] = new Array('0','0','5','0','3','0','5','0','0');
szint13[2] = new Array('0','0','5','3','3','3','5','0','0');
szint13[3] = new Array('0','0','5','3','3','3','5','0','0');
szint13[4] = new Array('0','0','5','0','3','0','5','0','0');
szint13[5] = new Array('3','0','5','5','0','5','5','0','3');
szint13[6] = new Array('2','2','3','3','3','3','3','2','2');
szint13[7] = new Array('2','0','0','0','0','0','0','0','2');
szint13[8] = new Array('3','0','0','0','0','0','0','0','3');
//-------------------------------------------------------------
var szint14=new Array(8);
szint14[0] = new Array('0','0','0','0','0','0','0','0','0');
szint14[1] = new Array('1','0','0','3','3','0','0','0','1');
szint14[2] = new Array('2','0','0','0','0','0','0','0','2');
szint14[3] = new Array('0','0','1','0','0','0','1','0','0');
szint14[4] = new Array('2','0','5','0','0','0','5','0','2');
szint14[5] = new Array('0','0','1','3','0','3','1','0','0');
szint14[6] = new Array('2','0','5','0','3','0','5','0','2');
szint14[7] = new Array('0','0','1','0','0','0','1','0','0');
szint14[8] = new Array('2','0','0','0','0','0','0','0','2');
//-------------------------------------------------------------
var szint15=new Array(8);
szint15[0] = new Array('0','0','0','0','0','0','0','0','0');
szint15[1] = new Array('0','0','0','0','0','0','0','0','0');
szint15[2] = new Array('10','0','1','1','1','1','1','0','10');
szint15[3] = new Array('0','1','0','0','0','0','0','1','0');
szint15[4] = new Array('0','1','2','2','2','2','2','1','0');
szint15[5] = new Array('1','0','0','5','5','5','0','0','1');
szint15[6] = new Array('0','0','0','0','0','0','0','0','0');
szint15[7] = new Array('0','0','0','0','0','0','0','0','0');
szint15[8] = new Array('0','20','20','20','20','20','20','20','0');
//-------------------------------------------------------------
var szint16=new Array(8);
szint16[0] = new Array('0','0','0','0','0','0','0','0','0');
szint16[1] = new Array('0','0','0','0','0','0','0','0','0');
szint16[2] = new Array('0','0','0','0','0','0','0','0','0');
szint16[3] = new Array('0','0','0','0','1','0','0','0','0');
szint16[4] = new Array('0','0','0','1','15','1','0','0','0');
szint16[5] = new Array('0','0','1','15','15','15','1','0','0');
szint16[6] = new Array('0','1','0','0','0','0','0','1','0');
szint16[7] = new Array('1','5','1','5','1','5','1','5','1');
szint16[8] = new Array('3','3','3','3','3','3','3','3','3');
//-------------------------------------------------------------
var szint17=new Array(8);
szint17[0] = new Array('0','0','0','0','0','0','0','0','0');
szint17[1] = new Array('1','0','0','20','20','20','0','0','1');
szint17[2] = new Array('0','1','0','0','0','0','0','1','0');
szint17[3] = new Array('0','0','1','0','0','1','1','0','0');
szint17[4] = new Array('5','0','0','2','1','0','0','0','5');
szint17[5] = new Array('5','0','0','1','2','0','0','0','5');
szint17[6] = new Array('0','0','1','3','3','2','0','0','0');
szint17[7] = new Array('0','1','3','3','3','3','2','1','1');
szint17[8] = new Array('2','2','2','2','2','2','2','2','2');
//-------------------------------------------------------------
var szint18=new Array(8);
szint18[0] = new Array('0','0','0','0','3','0','0','0','0');
szint18[1] = new Array('0','0','0','3','2','3','0','0','0');
szint18[2] = new Array('0','0','3','2','2','2','3','0','0');
szint18[3] = new Array('0','3','2','2','2','2','2','3','0');
szint18[4] = new Array('3','2','2','2','1','2','2','2','3');
szint18[5] = new Array('0','3','2','2','2','2','2','3','0');
szint18[6] = new Array('0','0','1','1','2','1','1','0','0');
szint18[7] = new Array('0','0','0','1','2','1','0','0','0');
szint18[8] = new Array('0','5','0','5','3','5','0','5','0');
//-------------------------------------------------------------
var szint19=new Array(8);
szint19[0] = new Array('0','0','0','0','0','0','0','0','0');
szint19[1] = new Array('0','0','0','0','0','0','0','0','0');
szint19[2] = new Array('1','0','3','3','3','3','3','0','1');
szint19[3] = new Array('1','0','3','2','2','2','3','0','1');
szint19[4] = new Array('1','0','3','2','2','2','3','0','1');
szint19[5] = new Array('0','0','3','15','5','15','3','0','0');
szint19[6] = new Array('0','0','3','1','1','1','3','0','0');
szint19[7] = new Array('0','0','0','0','0','0','0','0','0');
szint19[8] = new Array('0','0','0','0','0','0','0','0','0');
//-------------------------------------------------------------
var szint20=new Array(8);
szint20[0] = new Array('0','3','3','0','0','0','1','1','0');
szint20[1] = new Array('3','0','0','3','0','1','2','2','1');
szint20[2] = new Array('0','0','3','0','0','1','3','3','1');
szint20[3] = new Array('0','3','0','0','0','1','5','5','1');
szint20[4] = new Array('3','0','0','0','0','1','3','3','1');
szint20[5] = new Array('3','3','3','3','0','0','1','1','0');
szint20[6] = new Array('0','0','0','0','0','0','0','0','0');
szint20[7] = new Array('0','0','0','0','0','0','0','0','0');
szint20[8] = new Array('0','0','0','0','0','0','0','0','0');
var szint21=new Array(8);
szint21[0] = new Array('20','20','20','20','20','20','20','20','20');
szint21[1] = new Array('0','0','1','0','0','0','1','0','0');
szint21[2] = new Array('1','0','1','5','5','5','1','0','1');
szint21[3] = new Array('1','0','0','0','0','0','0','0','1');
szint21[4] = new Array('0','0','2','3','3','3','2','0','0');
szint21[5] = new Array('1','0','1','0','0','0','1','0','1');
szint21[6] = new Array('1','0','1','0','0','0','1','0','1');
szint21[7] = new Array('2','0','1','0','0','0','1','0','2');
szint21[8] = new Array('1','0','1','0','0','0','1','0','1');
var szint22=new Array(8);
szint22[0] = new Array('20','0','20','20','20','20','20','0','20');
szint22[1] = new Array('0','0','3','0','0','0','3','0','0');
szint22[2] = new Array('0','3','10','3','0','3','10','3','0');
szint22[3] = new Array('0','0','3','0','0','0','3','0','0');
szint22[4] = new Array('0','0','0','0','5','0','0','0','0');
szint22[5] = new Array('0','0','3','3','3','3','3','0','0');
szint22[6] = new Array('0','5','0','20','20','20','0','5','0');
szint22[7] = new Array('0','0','1','1','1','1','1','0','0');
szint22[8] = new Array('0','0','0','0','0','0','0','0','0');
var szint23=new Array(8);
szint23[0] = new Array('0','0','0','0','0','0','0','0','0');
szint23[1] = new Array('3','1','3','1','3','1','3','1','3');
szint23[2] = new Array('5','5','5','5','5','5','5','5','5');
szint23[3] = new Array('1','3','1','3','1','3','1','3','1');
szint23[4] = new Array('0','0','0','0','0','0','0','0','0');
szint23[5] = new Array('20','2','20','20','2','20','20','2','20');
szint23[6] = new Array('0','0','0','0','0','0','0','0','0');
szint23[7] = new Array('0','0','0','0','0','0','0','0','0');
szint23[8] = new Array('0','1','0','1','0','1','0','1','0');
var szint24=new Array(8);
szint24[0] = new Array('0','0','0','0','0','0','0','0','0');
szint24[1] = new Array('3','3','3','0','3','0','0','2','0');
szint24[2] = new Array('0','3','0','3','0','3','2','1','2');
szint24[3] = new Array('0','3','0','3','3','0','2','1','2');
szint24[4] = new Array('0','3','0','3','0','3','0','2','0');
szint24[5] = new Array('0','3','0','3','0','3','0','3','0');
szint24[6] = new Array('0','0','0','3','0','0','0','3','0');
szint24[7] = new Array('0','0','0','0','0','0','0','3','3');
szint24[8] = new Array('0','0','0','0','0','0','0','0','0');
var szint25=new Array(8);
szint25[0] = new Array('0','0','5','0','0','1','1','1','1');
szint25[1] = new Array('5','5','5','5','0','1','1','1','1');
szint25[2] = new Array('0','5','5','0','1','3','3','3','1');
szint25[3] = new Array('0','0','0','1','3','3','3','3','1');
szint25[4] = new Array('1','1','1','3','3','3','3','3','1');
szint25[5] = new Array('1','2','3','3','3','3','3','2','1');
szint25[6] = new Array('1','3','1','1','1','1','1','3','1');
szint25[7] = new Array('2','2','2','0','0','0','2','2','2');
szint25[8] = new Array('0','2','0','0','0','0','0','2','0');

//-------------------------------------------------------------

var startingtime = 0;
var prevtime = startingtime;
var deltat = 0;
var now = 0;
var breaktime=0;
var drawId=1;


drawId=setInterval(draw,speed);
document.body.style.cursor = "none";


context.fillStyle = "black";
context.font = "bold 10pt Verdana";


function draw()
{



if(kellzene==0)
{
	hanghatterzene.pause();		
	hangszuperzene.pause();		
} 
 
if(golyovan==1 && szupergolyo==0 && megyahatterzene==0 && kellzene==1)
{
	
	hanghatterzene.play();
	
	megyahatterzene==1;
}

 
 if(sugoaktiv==1)
 {
	document.body.style.cursor = "pointer";
 	context.drawImage(sugo,100,0);
	context.drawImage(bezarsugo,bezarsugox,bezarsugoy);
 }

 if(menu==0)
 {
 if (pause_==0)
 {
		now = new Date().getTime();
		deltat = now - prevtime;
		prevtime = now;
		
		//fps = 0.1*1000/deltat + 0.9*prevfps;
		
		//prevfps = fps;

		if (szupergolyo==0)
		{
	
			tegla1.src="tegla1.png";
			tegla2.src="tegla2.png";
			tegla3.src="tegla3.png";

			ball.src="golyosmall.png";
			hangszuperzene.pause();
			megyahatterzene=0;
			if(kellzene==1)
			hanghatterzene.play();		
		}
		else
		{
			tegla1.src="tegla1s.png";
			tegla2.src="tegla2s.png";
			tegla3.src="tegla3s.png";

			ball.src="szupergolyo.png";
			hanghatterzene.pause();
			megyahatterzene=1;
			if(kellzene==1)
			hangszuperzene.play();
		}

		
	szinttime += deltat;
	if(szinttime >= szintido)
	{
		szinttime=0;
				
	
		if(cnt<=50)
		{
			
			context.drawImage(hatter,0,0);
			
			info();
			cnt=cnt+1; 
		}
		
		
		if(x>=xuto && x<=xuto+utohossz) //ha a golyó pozíciója beleesik az ütõ pozíciójába vagyis ráesett az ütõre
		{
			
			yballok=yuto-5;
			if((x+4)>(xuto+60-12) && (x+4)<=(xuto+utohossz-60+12) && (y+4)>=yuto)
			{
				if(szupergolyo==1)
				{
				megfogta=1;
				dy=0;
				}
				else
				{
				//megfogta=0;
				
				}
				dx=0;
				
				
			}
			if((x+4)>=(xuto) && (x+4)<=(xuto+24) && (y+4)>=yuto)
			{
				
				dx=-2;
			}
			if((x+4)>(xuto+24) && (x+4)<=(xuto+60-12) && (y+4)>=yuto)
			{
				
				dx=-1;
			}
			if((x+4)>(xuto+60+12) && (x+4)<=(xuto+60+12+24) && (y+4)>=yuto)
			{
				
				dx=1;
			}
			if((x+4)>(xuto+60+12+24) && (x+4)<=(xuto+utohossz) && (y+4)>=yuto)
			{
				
				dx=2;
			}
		}
		else 
		{
			yballok=465;
			
			
		}
		if(megfogta==1)
		x=xuto+Math.floor(utohossz/2-4);

		if(y>(yuto+4)) //leesett a labda
		{
			if(elet>=1 && eletok>0)
			{
				eletok=0;
				elet=elet-1;
				golyovan=0;
				if(elet==1)
					{
						szupergolyo=1;
					}
					else
					{
						szupergolyo=0;
					}
				
				if(leesettok==1)
				{
					leesettok=0;
					if(megfogta==0)
					{
					if(kellzene==1)
					hangleesik.play();
					}
				}
			}
			else
			{

			//hangleesik.play();	
				//szint=1;
				//szintinit();
			}
			info();
			mehet=0;
			//cnt=0;
			inditgolyo=0;
			
		}
		else
		{
			if (inditgolyo==1 )
			golyovan=1;
			
		}
	  if(jatekvege==0)
	  {
		context.drawImage(jatekter,0,0);
	  }
	  
	  
	  
	  /*
	  context.clearRect(0,0, 600,400);
	  context.beginPath();
	  context.fillStyle="#0000ff";
	  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
	  
	  context.arc(x,y,4,0,Math.PI*2,true);
	  context.closePath();
	  context.fill();
	  */
	  

	  //golyó--------------------------
	  if(mehet>0 && elet>0 && inditgolyo==1)
	  {

	  
	  pattanstop=1;
					for(k=0;k<9;k++)
					{
						for(i=0;i<9;i++)
						{
							
							if(x>=(30+i*60) && x<=(30+i*60+40) && y>=(60+k*30) && y<=(60+k*30+16) && pattanstop>0)
							{
							pattan(i,k);
							switch(teglatomb[k][i])
									{
										case '1': teglatomb[k][i]='0'; if(szupergolyo==1) {pontszam=pontszam+5*pontszorzo} else  {pontszam=pontszam+1*pontszorzo} ; info(); break;
										case '2': teglatomb[k][i]='1'; if(szupergolyo==1) {pontszam=pontszam+10*pontszorzo} else  {pontszam=pontszam+2*pontszorzo};info(); break;
										case '3': teglatomb[k][i]='2'; if(szupergolyo==1) {pontszam=pontszam+15*pontszorzo} else  {pontszam=pontszam+3*pontszorzo};info(); break;
										
										
									}
							if (parseInt(teglatomb[k][i])>=5)
							{
								if(teglatomb[k][i]=='5')
								{
									teglatomb[k][i]='0';
								}
								teglatomb[k][i]=(parseInt(teglatomb[k][i])-1).toString();
							}
							pattanstop=0;
							}					

							if((x+8)>=(30+i*60) && (x+8)<=(30+i*60+40) && (y+8)>=(60+k*30) && (y+8)<=(60+k*30+16) && pattanstop>0 )
							{
							pattan(i,k);	
							switch(teglatomb[k][i])
									{
										case '1': teglatomb[k][i]='0';if(szupergolyo==1) {pontszam=pontszam+5*pontszorzo} else  {pontszam=pontszam+1*pontszorzo};info(); break;
										case '2': teglatomb[k][i]='1';if(szupergolyo==1) {pontszam=pontszam+10*pontszorzo} else  {pontszam=pontszam+2*pontszorzo};info(); break;
										case '3': teglatomb[k][i]='2';if(szupergolyo==1) {pontszam=pontszam+15*pontszorzo} else  {pontszam=pontszam+3*pontszorzo};info(); break;
									}
							if (parseInt(teglatomb[k][i])>=5)
							{
								if(teglatomb[k][i]=='5')
								{
									teglatomb[k][i]='0';
								}
								teglatomb[k][i]=(parseInt(teglatomb[k][i])-1).toString();
							}									
							pattanstop=0;
							}					
							if((x)>=(30+i*60) && (x)<=(30+i*60+40) && (y+8)>=(60+k*30) && (y+8)<=(60+k*30+16)  && pattanstop>0)
							{
							pattan(i,k);
							switch(teglatomb[k][i])
									{
										case '1': teglatomb[k][i]='0';if(szupergolyo==1) {pontszam=pontszam+5*pontszorzo} else  {pontszam=pontszam+1*pontszorzo};info(); break;
										case '2': teglatomb[k][i]='1';if(szupergolyo==1) {pontszam=pontszam+10*pontszorzo} else  {pontszam=pontszam+2*pontszorzo};info(); break;
										case '3': teglatomb[k][i]='2';if(szupergolyo==1) {pontszam=pontszam+15*pontszorzo} else  {pontszam=pontszam+3*pontszorzo};info(); break;
									}
							if (parseInt(teglatomb[k][i])>=5)
							{
								if(teglatomb[k][i]=='5')
								{
									teglatomb[k][i]='0';
								}
								teglatomb[k][i]=(parseInt(teglatomb[k][i])-1).toString();
							}									
							pattanstop=0;
							}					
							if((x+8)>=(30+i*60) && (x+8)<=(30+i*60+40) && (y)>=(60+k*30) && (y)<=(60+k*30+16)  && pattanstop>0)
							{
							pattan(i,k);
							switch(teglatomb[k][i])
									{
										case '1': teglatomb[k][i]='0';if(szupergolyo==1) {pontszam=pontszam+5*pontszorzo} else  {pontszam=pontszam+1*pontszorzo};info(); break;
										case '2': teglatomb[k][i]='1';if(szupergolyo==1) {pontszam=pontszam+10*pontszorzo} else  {pontszam=pontszam+2*pontszorzo};info(); break;
										case '3': teglatomb[k][i]='2';if(szupergolyo==1) {pontszam=pontszam+15*pontszorzo} else  {pontszam=pontszam+3*pontszorzo};info(); break;
									}
							if (parseInt(teglatomb[k][i])>=5)
							{
								if(teglatomb[k][i]=='5')
								{
									teglatomb[k][i]='0';
								}
								teglatomb[k][i]=(parseInt(teglatomb[k][i])-1).toString();
							}									
							pattanstop=0;
							}					
							
							

						}
							
						
					}
		info();
		
		context.drawImage(ball,x,y);

		if( x<12 || x>561) 
		{
			if(szupergolyo==0)
			{
			hangtalalat.pause();
			hangtalalat.currentTime=0;
			if(kellzene==1)
			hangtalalat.play();
			}
			dx=-dx;
		}
		if( y<35 || y>yballok) 
		{   dy=-dy; 		
			if(megfogta==0)
			{
				if(szupergolyo==0)
				{

				hangtalalat.pause();
				hangtalalat.currentTime=0;
				if(kellzene==1)
				hangtalalat.play();
				}
			}
		}
		
		x+=dx;
		y+=dy;
		
	  }

	  vanmeg=0;
		for(k=0;k<9;k++)
		{
			for(i=0;i<9;i++)
				{
							
					switch(teglatomb[k][i])
						{
							case '1':  vanmeg=1;
										
							case '2':  vanmeg=1;
										
							case '3':  vanmeg=1;
						}

							
				}					
		}
	//	jatekvege=0;
		if (vanmeg>0)
		{
			mehet=1;
			if(elet==0)
			{
			
				elet=5;
				eletmaradt=5;
				szint=1;
				pontszam=0;
				szintinit();
				info();
				jatekvege=1;
				penz=0;
				nyert=0;
				szogmehet=0;
				yszog=yuto-10;
				xszog=xuto+24;
			}

		}
		else
		{
			inditgolyo=0;
			mehet=0;

			if(szint<szintekszama)
			{
				szint=szint+1;
				golyovan=0;
				szogmehet=0;
				yszog=yuto-10;
				xszog=xuto+24;			
			}
			else
			{
				elet=5;
				eletmaradt=5;
				szint=1;
				nyert=1;
				pontszamkiir=pontszam
				jatekvege=1;
				penz=0;
				pontszam=0;
				szogmehet=0;
				yszog=yuto-10;
				xszog=xuto+24;
			}
			if(elet==0)
			{
				elet=5;
				eletmaradt=5;
				szint=1;
				pontszam=0;
				jatekvege=1;
				penz=0;
				nyert=0;
				szogmehet=0;
				yszog=yuto-10;
				xszog=xuto+24;			
			}
			szintinit();
			info();
			
			
		}

		if(szogmehet>0 && jatekvege==0)
		{
			szogindit();
			yszog=yszog-5;
			if(yszog<60)
			{
				szogmehet=0;
				yszog=yuto-10;
				xszog=xuto+24;
			}
			
			for(k=0;k<9;k++)
					{
						for(i=0;i<9;i++)
						{
							
							for(szogciklus=0;szogciklus<72;szogciklus++)
							{
								if((xszog+szogciklus)>=(30+i*60) && (xszog+szogciklus)<=(30+i*60+40) && yszog>=(60+k*30) && yszog<=(60+k*30+16))
								{
								switch(teglatomb[k][i])
										{
											case '1': teglatomb[k][i]='0'; pontszam=pontszam+5*pontszorzo; info(); break;
											case '2': teglatomb[k][i]='0'; pontszam=pontszam+10*pontszorzo;info(); break;
											case '3': teglatomb[k][i]='0'; pontszam=pontszam+15*pontszorzo;info(); break;
											//case '5': teglatomb[k][i]='0'; pontszam=pontszam+20;info(); break;
										}
									if (parseInt(teglatomb[k][i])>=5)
									{
										teglatomb[k][i]='0'; pontszam=pontszam+20*pontszorzo;info();
									}
								}					
	/*
								if((xszog+72-szogciklus)>=(30+i*60) && (xszog+72-szogciklus)<=(30+i*60+40) && (yszog+16)>=(60+k*30) && (yszog+16)<=(60+k*30+16))
								{	
								switch(teglatomb[k][i])
										{
											case '1': teglatomb[k][i]='0'; pontszam=pontszam+2; info(); break;
											case '2': teglatomb[k][i]='0'; pontszam=pontszam+2;info(); break;
											case '3': teglatomb[k][i]='0'; pontszam=pontszam+2;info(); break;
											case '5': teglatomb[k][i]='0'; pontszam=pontszam+2;info(); break;
										}
								}					
								if((xszog+szogciklus)>=(30+i*60) && ((xszog+szogciklus))<=(30+i*60+40) && (yszog+16)>=(60+k*30) && (yszog+16)<=(60+k*30+16))
								{
								switch(teglatomb[k][i])
										{
											case '1': teglatomb[k][i]='0'; pontszam=pontszam+2; info(); break;
											case '2': teglatomb[k][i]='0'; pontszam=pontszam+2;info(); break;
											case '3': teglatomb[k][i]='0'; pontszam=pontszam+2;info(); break;
											case '5': teglatomb[k][i]='0'; pontszam=pontszam+2;info(); break;
										}
								}	*/				
								if((xszog+72-szogciklus)>=(30+i*60) && (xszog+72-szogciklus)<=(30+i*60+40) && (yszog)>=(60+k*30) && (yszog)<=(60+k*30+16))
								{
								switch(teglatomb[k][i])
										{
											case '1': teglatomb[k][i]='0'; pontszam=pontszam+5*pontszorzo; info(); break;
											case '2': teglatomb[k][i]='0'; pontszam=pontszam+10*pontszorzo;info(); break;
											case '3': teglatomb[k][i]='0'; pontszam=pontszam+15*pontszorzo;info(); break;
											//case '5': teglatomb[k][i]='0'; pontszam=pontszam+20;info(); break;
										}
									if (parseInt(teglatomb[k][i])>=5)
									{
										teglatomb[k][i]='0'; pontszam=pontszam+20*pontszorzo;info();
									}										
								}					
							
							}

						}
							
						
					}
		}
				
		if(jatekvege==0)
		{
		
			drawtegla();  
			drawuto(xuto,yuto);
			
		}

		if(dollaresik<1 && golyovan>0 )
		{
			
			dollartime += deltat;
			if(dollartime >= dollarido)
			{
			
				dollaresik=1;
				dollartime=0;
				
			}
		}
		
		if(dollaresik>0 )
		{
			dollarindit();
			ydollar=ydollar+5;
			if(xdollar>=xuto && xdollar<=xuto+utohossz && (ydollar)>=yuto)
			{
				dollaresik=0;
				ydollar=60;
				//pontszam=pontszam+dollarertek;
				penz=penz+dollarertek;
				
				info();
				//dollarido=(Math.random()+1)*100000;
				dollarido=Math.floor((Math.random()+1)*10000);
				xdollar=30+Math.floor(Math.random()*400);
				hangdollarelkap.pause();
				hangdollarelkap.currentTime=0;
				if(kellzene==1)
				hangdollarelkap.play();
			}
			else
			{
				//dollarido=(Math.random()+1)*100000;
				
			}
			if (ydollar>yuto)
			{
				ydollar=60;
				dollaresik=0;
			}
		}

		if(dollaresik2<1 && golyovan>0 )
		{
			
			dollartime2 += deltat;
			if(dollartime2 >= dollarido2)
			{
			
				dollaresik2=1;
				dollartime2=0;
				
			}
		}
		
		if(dollaresik2>0 )
		{
			dollarindit2();
			ydollar2=ydollar2+7;
			if(xdollar2>=xuto && xdollar2<=xuto+utohossz && (ydollar2)>=yuto)
			{
				dollaresik2=0;
				ydollar2=60;
				//pontszam=pontszam+dollarertek2;
				penz=penz+dollarertek2;
				info();
				//dollarido=(Math.random()+1)*100000;
				dollarido2=Math.floor((Math.random()+1)*20000);
				xdollar2=30+Math.floor(Math.random()*400);
				hangdollarelkap.pause();
				hangdollarelkap.currentTime=0;
				if(kellzene==1)
				hangdollarelkap.play();
			}
			else
			{
				//dollarido=(Math.random()+1)*100000;
				
			}
			if (ydollar2>yuto)
			{
				ydollar2=60;
				dollaresik2=0;
			}
		}

		if(dollaresik3<1 && golyovan>0 )
		{
			
			dollartime3 += deltat;
			if(dollartime3 >= dollarido3)
			{
			
				dollaresik3=1;
				dollartime3=0;
				
			}
		}
		
		if(dollaresik3>0 )
		{
			dollarindit3();
			ydollar3=ydollar3+9;
			if(xdollar3>=xuto && xdollar3<=xuto+utohossz && (ydollar3)>=yuto)
			{
				dollaresik3=0;
				ydollar3=60;
				//pontszam=pontszam+dollarertek3;
				penz=penz+dollarertek3;
				info();
				//dollarido=(Math.random()+1)*100000;
				dollarido3=Math.floor((Math.random()+1)*30000);
				xdollar3=30+Math.floor(Math.random()*400);
				hangdollarelkap.pause();
				hangdollarelkap.currentTime=0;
				if(kellzene==1)
				hangdollarelkap.play();
			}
			else
			{
				//dollarido=(Math.random()+1)*100000;
				
			}
			if (ydollar3>yuto)
			{
				ydollar3=60;
				dollaresik3=0;
			}
		}

		//hulló pontok
		if(pontesik<1 && golyovan>0 )
			{
				
				ponttime += deltat;
				if(ponttime >= pontido)
				{
				
					pontesik=1;
					ponttime=0;
					
				}
			}
			
			if(pontesik>0 )
			{
				pontindit();
				ypont=ypont+3;
				if(xpont>=xuto && xpont<=xuto+utohossz && (ypont)>=yuto)
				{
					pontesik=0;
					ypont=60;
					pontszam=pontszam+pontertek;
					info();
					pontido=Math.floor((Math.random()+1)*10000);
					xpont=30+Math.floor(Math.random()*400);
					hangpontelkap.pause();
					hangpontelkap.currentTime=0;
					if(kellzene==1)
					hangpontelkap.play();
				}
				else
				{
					//dollarido=(Math.random()+1)*100000;
					
				}
				if (ypont>yuto)
				{
					ypont=60;
					pontesik=0;
				}
			}
		if(pontesik2<1 && golyovan>0 )
			{
				
				ponttime2 += deltat;
				if(ponttime2 >= pontido2)
				{
				
					pontesik2=1;
					ponttime2=0;
					
				}
			}
			
			if(pontesik2>0 )
			{
				pontindit2();
				ypont2=ypont2+4;
				if(xpont2>=xuto && xpont2<=xuto+utohossz && (ypont2)>=yuto)
				{
					pontesik2=0;
					ypont2=60;
					pontszam=pontszam+pontertek2;
					info();
					pontido2=Math.floor((Math.random()+1)*20000);
					xpont2=30+Math.floor(Math.random()*400);
					hangpontelkap.pause();
					hangpontelkap.currentTime=0;
					if(kellzene==1)
					hangpontelkap.play();
				}
				else
				{
					//dollarido=(Math.random()+1)*100000;
					
				}
				if (ypont2>yuto)
				{
					ypont2=60;
					pontesik2=0;
				}
			}

		if(pontesik3<1 && golyovan>0 )
			{
				
				ponttime3 += deltat;
				if(ponttime3 >= pontido3)
				{
				
					pontesik3=1;
					ponttime3=0;
					
				}
			}
			
			if(pontesik3>0 )
			{
				pontindit3();
				ypont3=ypont3+6;
				if(xpont3>=xuto && xpont3<=xuto+utohossz && (ypont3)>=yuto)
				{
					pontesik3=0;
					ypont3=60;
					pontszam=pontszam+pontertek3;
					info();
					pontido3=Math.floor((Math.random()+1)*30000);
					xpont3=30+Math.floor(Math.random()*400);
					hangpontelkap.pause();
					hangpontelkap.currentTime=0;
					if(kellzene==1)
					hangpontelkap.play();
				}
				else
				{
					//dollarido=(Math.random()+1)*100000;
					
				}
				if (ypont3>yuto)
				{
					ypont3=60;
					pontesik3=0;
				}
			}

			if(pontesik4<1 && golyovan>0 )
			{
				
				ponttime4 += deltat;
				if(ponttime4 >= pontido4)
				{
				
					pontesik4=1;
					ponttime4=0;
					
				}
			}
			
			if(pontesik4>0 )
			{
				pontindit4();
				ypont4=ypont4+8;
				if(xpont4>=xuto && xpont4<=xuto+utohossz && (ypont4)>=yuto)
				{
					pontesik4=0;
					ypont4=60;
					pontszam=pontszam+pontertek4;
					info();
					pontido4=Math.floor((Math.random()+1)*35000);
					xpont4=30+Math.floor(Math.random()*400);
					hangpontelkap.pause();
					hangpontelkap.currentTime=0;
					if(kellzene==1)
					hangpontelkap.play();
				}
				else
				{
					//dollarido=(Math.random()+1)*100000;
					
				}
				if (ypont4>yuto)
				{
					ypont4=60;
					pontesik4=0;
				}
			}

		
		//hulló pontok vége
		
		if(jatekvege > 0)
		{
			voltrekordhang=0;
			szupergolyo=0;
			//context.fillText("vége "+breaktime,610,440);
			breaktime += deltat;
			
			inditgolyo=0;
			golyovan=0;

			szogmehet=0;
			yszog=yuto-10;
			xszog=xuto+24;

				
			if(nyert == 1)
			{
				if(kellzene==1)
				hangnyertes.play();
				context.drawImage(nyertes,255,182);
				context.fillStyle = "white";
				context.font= "bold 10pt Verdana";
				context.fillText("Elért pontszám: "+pontszamkiir,255+63,182+118);
				context.fillStyle = "black";
			}
			
			if(nyert == 0)
			{
				if(kellzene==1);
				hangvesztes.play();
				context.drawImage(vesztes,255,182);
			}
			
			if(breaktime >= 5000)
			{
					jatekvege=0;
					context.drawImage(jatekter,0,0);
					szintinit();
					
				
				breaktime = 0;
			}
			
		}
		else
		{
			//context.fillText("nincs vége ",610,400);
		}

		if(szupergolyo == 1)
		{
			szupertime += deltat;
			
			
			if(szupertime >= 20000)
			{
				szupergolyo=0;
				szupertime = 0;
				if(megfogta==1)
				{
					dy=-1*dyorig;
					y=y-8;
					megfogta=0;
				}
			}
			
		}
		
		if(golyovan==0 && elet>=1 && jatekvege==0 )
		{
			context.drawImage(ball,(xuto+Math.floor(utohossz/2)-4),yuto-8);
		}

	}	
 }//pause
 }//menu

 if(menu==1 && sugoaktiv==0)
	{
	context.fillStyle = "white";
	context.font= "bold 10pt Verdana";

	context.drawImage(menuhatter,0,0);
	
		(onmouseover_szint==0)?context.drawImage(szintgomb,szintx,szinty):context.drawImage(szintgombhover,szintx,szinty);
		(onmouseover_sugo==0)?context.drawImage(sugogomb,sugox,sugoy):context.drawImage(sugogombhover,sugox,sugoy);
		(onmouseover_start==0)?context.drawImage(startgomb,startx,starty):context.drawImage(startgombhover,startx,starty);

		if(nehezsegiszint==1)
		{
			context.fillText("Könnyû",szintx+25,szinty+45);
			pontszorzo=szintszorzo1;
		}
		if(nehezsegiszint==2)
		{
			context.fillText("Közepes",szintx+25,szinty+45);
			pontszorzo=szintszorzo2;
		}
		if(nehezsegiszint==3)
		{
			context.fillText("Nehéz",szintx+25,szinty+45);
			pontszorzo=szintszorzo3;
			
		}		
		
	}

}

function szogindit()
{

	context.drawImage(szog,xszog,yszog);
}
function dollarindit()
{
	
	context.drawImage(dollar,xdollar,ydollar);
}
function dollarindit2()
{
	
	context.drawImage(dollar2,xdollar2,ydollar2);
}
function dollarindit3()
{
	
	context.drawImage(dollar3,xdollar3,ydollar3);
}
function pontindit()
{
	
	context.drawImage(pontkep,xpont,ypont);
}
function pontindit2()
{
	
	context.drawImage(pontkep2,xpont2,ypont2);
}
function pontindit3()
{
	
	context.drawImage(pontkep3,xpont3,ypont3);
}
function pontindit4()
{
	
	context.drawImage(pontkep4,xpont4,ypont4);
}

function pattan(ivar,kvar)
{
//if(szupergolyo==0)
//{
xtb=30+ivar*60;
xtj=30+ivar*60+40;
ytf=60+kvar*30;
yta=60+kvar*30+16;
pattanmehet=1;
var varseged=4;
						

						//if( ((parseInt(teglatomb[kvar][ivar])>0) && szupergolyo==0) || (szupergolyo==1 && parseInt(teglatomb[kvar][ivar])>=5 ))
						if( ((parseInt(teglatomb[kvar][ivar])>0) && szupergolyo==0) || (szupergolyo==1 && parseInt(teglatomb[kvar][ivar])>5 ))
						{
						//balról jobbra fentrõl le
							if((x+8)>=xtb  && (y+varseged)>ytf && pattanmehet>0)
							{
								if(dx>0 && dy>0)	
								{
									dx=-1*dx;
									pattanmehet=0;
								}

							}

							if((y+8)>=ytf && (x+varseged)>xtb && pattanmehet>0)
							{
								if(dx>0 && dy>0)	
								{
									dy=-1*dy;
									pattanmehet=0;
								}

							}

							//jobbról balra lentrõl fel
							if((x)<=xtj && (y+varseged)<yta && pattanmehet>0)
							{
							
								if(dx<0 && dy<0)	
								{
									
									dx=-1*dx;
									pattanmehet=0;
								}
							
							}

							if((y)<=yta && (x+varseged)<xtj && pattanmehet>0)
							{
							
								if(dx<0 && dy<0)	
								{
									
									dy=-1*dy;
									pattanmehet=0;
								}
							
							}
							
							//balról jobbra lentrõl fel
							if((x+8)>=xtb && (y+varseged)<yta && pattanmehet>0)
							{
								if(dx>0 && dy<0)	
								{
									
									dx=-1*dx;
									pattanmehet=0;
								}

							}

							if(y<=yta && (x+varseged)>xtb && pattanmehet>0)
							{
								if(dx>0 && dy<0)	
								{
									
									dy=-1*dy;
									pattanmehet=0;
								}

							}

							//fentrõl le jobbról balra
							if(x<=xtj && (y+varseged)>ytf && pattanmehet>0)
							{
								if(dx<0 && dy>0)	
								{
									
									dx=-1*dx;
									pattanmehet=0;
								}

							}

							if((y+8)>=ytf && (x+varseged)<xtj && pattanmehet>0)
							{
								if(dx<0 && dy>0)	
								{
									
									dy=-1*dy;
									pattanmehet=0;
								}

							}
							
							//ha a sarkára pattanna
							if( pattanmehet==1)
							{
									
									dx=-1*dx;
									dy=-1*dy;
									pattanmehet=0;

							}
			
						if(szupergolyo==0)
						{

						hangtalalat.pause();
						hangtalalat.currentTime=0;
						if(kellzene==1)		
						hangtalalat.play();
						}
						
						}
pattanmehet=1;
//}
}
function info()
{



	context.drawImage(infotorol,608,58);
	context.fillStyle = "black";
	context.font= "bold 10pt Verdana";
	context.fillText("Szint : "+szint+" / "+szintekszama,610,70);

	context.fillText("Vásárolható : ",610,200);
	if(penz>=szupergolyoara)
	{
		context.drawImage(szuperball,612,218);
	}
	else
	{
//		context.drawImage(infotorol,608,58);

	}
	if(penz>=szogara)
	{
		context.drawImage(szog,632,206);
	}
	else
	{
//		context.drawImage(infotorol,608,58);

	}
	if(penz>=golyoara && elet<5)
	{
		context.drawImage(ball,612,207);
	}
	else
	{
//		context.drawImage(infotorol,608,58);

	}
	
	
	context.fillText("Pontszám: "+pontszam,610,90);
	context.fillText("Pénz: "+penz,610,105);
	
	context.fillText("Maradék golyó : "+eletmaradt,610,120);
	if(szupergolyo==1)
	context.fillText("Szuper idõ : "+(20-Math.floor(szupertime/1000))+" mp",610,150);
	
	//context.fillText(" "+dollartime+" : "+dollarido,610,180);	

	 if(nehezsegiszint==1)
	 {
	  context.fillText("Nehézség : Könnyû",610,180);
	 }
	 if(nehezsegiszint==2)
	 {
	  context.fillText("Nehézség : Közepes",610,180);
	 }
	 if(nehezsegiszint==3)
	 {
	  context.fillText("Nehézség : Nehéz",610,180);
	 }
	//context.fillText("FPS :"+Math.round(fps),610,165);    

	 
	if(highscore<pontszam)
	{
	  localStorage["highscore"]=pontszam;
	  highscore=pontszam;
	  if(voltrekordhang==0)
	  {
		if(kellzene==1)
		hangujrekord.play();
		voltrekordhang=1;
	  }
    }
	context.fillText("Rekord: "+highscore,610,240);

	if (kellzene==1)
	{
		context.drawImage(zenebe,zenegombx,zenegomby);	
	}
	else
	{
		context.drawImage(zeneki,zenegombx,zenegomby);	
	} 
	
	
/*	context.fillStyle = "white";
	context.font = "bold 8pt Verdana";
	context.fillText("Súgó = 's' billentyû",200,30);
*/
	
	//context.fillText(cnt,650,20);
}
function drawuto(xuto,yuto)
{
	context.drawImage(uto,xuto,yuto);
	
}

function szintinit()
{
	
	switch(szint)
		{
			//elsõ szint
			case 1: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint1[i-1][k-1];
					}
					
				}
//				mehet=0;
				break;
			//második szint
			case 2: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint2[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			//harmadik szint
			case 3: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint3[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 4: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint4[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 5: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint5[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 6: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint6[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 7: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint7[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 8: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint8[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 9: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint9[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 10: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint10[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 11: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint11[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 12: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint12[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 13: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint13[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 14: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint14[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 15: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint15[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 16: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint16[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 17: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint17[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 18: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint18[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 19: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint19[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 20: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint20[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 21: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint21[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 22: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint22[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 23: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint23[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 24: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint24[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;
			case 25: 	

				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
						teglatomb[i-1][k-1]=szint25[i-1][k-1];
					}
					
				}
	//			mehet=0;
				break;

		}
}

function drawtegla()
{
			
				var xtegla=teglabal_x;
				var ytegla=teglabal_y;
				for(k=1;k<10;k++)
				{
					for(i=1;i<10;i++)
					{
								switch(teglatomb[k-1][i-1])
								{
									case '1': context.drawImage(tegla1,xtegla,ytegla); break;
									case '2': context.drawImage(tegla2,xtegla,ytegla); break;
									case '3': context.drawImage(tegla3,xtegla,ytegla); break;
									//case '5': context.drawImage(tegla5,xtegla,ytegla); break;
								}
						if (parseInt(teglatomb[k-1][i-1])==20)
						{
							context.drawImage(tegla5,xtegla,ytegla); 
						}
						if (parseInt(teglatomb[k-1][i-1])<20 && parseInt(teglatomb[k-1][i-1])>=15)
						{
							context.drawImage(tegla5x1,xtegla,ytegla); 
						}
						if (parseInt(teglatomb[k-1][i-1])<15 && parseInt(teglatomb[k-1][i-1])>=10)
						{
							context.drawImage(tegla5x2,xtegla,ytegla); 
						}
						if (parseInt(teglatomb[k-1][i-1])<10 && parseInt(teglatomb[k-1][i-1])>=5)
						{
							context.drawImage(tegla5x3,xtegla,ytegla); 
						}

						xtegla=xtegla+60;
					}
						ytegla=ytegla+30;
						xtegla=teglabal_x;
					
				}
	
}

document.onclick = function(event) 
{
	event = event || window.event;

	//zene ki/bekapcsolása
	if((event.pageX - canvas.offsetLeft)>=zenegombx && (event.pageX - canvas.offsetLeft)<=(zenegombx+32) && (event.pageY - canvas.offsetTop)>=zenegomby && (event.pageY - canvas.offsetTop)<=(zenegomby+30)  )
	{
		if(kellzene==1)
		{
			kellzene=0;
			info();
		}
		else
		{
			kellzene=1;
			info();
		}
	}

	//----------------------
	
	//nehezségiszint váltás
	if((event.pageX - canvas.offsetLeft)>=szintx && (event.pageX - canvas.offsetLeft)<=(szintx+120) && (event.pageY - canvas.offsetTop)>=szinty && (event.pageY - canvas.offsetTop)<=(szinty+60) && menu==1)
	{
		if(nehezsegiszint==3)
		nehezsegiszint=1;
		else
		nehezsegiszint=nehezsegiszint+1;
		
		if(nehezsegiszint==1)
		{
			//speed=30;
			szintido=22;
			pontszorzo=szintszorzo1;
		}
		if(nehezsegiszint==2)
		{
			//speed=20;	
			szintido=16;			
			pontszorzo=szintszorzo2;
		}
		if(nehezsegiszint==3)
		{
			//speed=10;	
			szintido=13;			
			pontszorzo=szintszorzo3;
		}
		//clearInterval ( drawId );
		//drawId=setInterval(draw,speed);
		/////info();
	
	}
	
	if((event.pageX - canvas.offsetLeft)>=startx && (event.pageX - canvas.offsetLeft)<=(startx+150) && (event.pageY - canvas.offsetTop)>=starty && (event.pageY - canvas.offsetTop)<=(starty+70) && menu==1 )
	{
		menu=0;
			
	}
	if((event.pageX - canvas.offsetLeft)>=sugox && (event.pageX - canvas.offsetLeft)<=(sugox+120) && (event.pageY - canvas.offsetTop)>=sugoy && (event.pageY - canvas.offsetTop)<=(sugoy+60) && menu==1)
	{
		//context.drawImage(sugo,0,0);
		
		sugoaktiv=1;
		
	}
	if((event.pageX - canvas.offsetLeft)>=bezarsugox && (event.pageX - canvas.offsetLeft)<=(bezarsugox+111) && (event.pageY - canvas.offsetTop)>=bezarsugoy && (event.pageY - canvas.offsetTop)<=(bezarsugoy+31) && sugoaktiv==1 )
	{
		//context.drawImage(sugo,0,0);
		
		if(menu==0)
		context.drawImage(hatter,0,0);
		
		sugoaktiv=0;
		pause_=0;
		
	}
	if(megfogta==1 && (event.pageX - canvas.offsetLeft)<568)
	{
		x=xuto+Math.floor(utohossz/2-4);
		y=yuto-10;
		dx=0;
		dy=-1*dyorig;
		megfogta=0;

	}

	if((event.pageX - canvas.offsetLeft)<568 && golyovan==0)
	{
		jatekvege=0;
		nyert=0;
		x=xuto+Math.floor(utohossz/2-4);
		y=yuto-10;
		//dx=-1*Math.abs(dx);
		dx=0;
		//dy=-1*Math.abs(dy);
		dy=-1*dyorig;
		mehet=1;
		eletok=1;
		inditgolyo=1;
		eletmaradt=elet-1;
		leesettok=1;
		
		dollarido=Math.floor((Math.random()+1)*10000);
		pontido=Math.floor((Math.random()+1)*10000);
	}
}

canvas.onmousemove = function (event)
{
	event = event || window.event;
	xuto = event.pageX - canvas.offsetLeft;

	if(szogmehet==0)
	{xszog=xuto+24;}

	if(menu==0 && sugoaktiv==0)
	document.body.style.cursor = "none";
	else
	document.body.style.cursor = "pointer";


/*	//zene ki/bekapcsolása
	if((event.pageX - canvas.offsetLeft)>=zenegombx && (event.pageX - canvas.offsetLeft)<=(zenegombx+32) && (event.pageY - canvas.offsetTop)>=zenegomby && (event.pageY - canvas.offsetTop)<=(zenegomby+30)  )
	{
		document.body.style.cursor = "pointer";
	}
*/
	
	//document.mouseYPos=yuto;
	//yuto = event.pageY - canvas.offsetTop;
	//start-------------------------
	if((event.pageX - canvas.offsetLeft)>=startx && (event.pageX - canvas.offsetLeft)<=(startx+120) && (event.pageY - canvas.offsetTop)>=starty && (event.pageY - canvas.offsetTop)<=(starty+60) && menu==1)
	{
		onmouseover_start = 1;
		document.body.style.cursor = "pointer";
		//context.drawImage(hatter,0,0);
	}
	else
	{
		onmouseover_start = 0;
		//context.drawImage(hatter,0,0);
	}
	//------------------------------------------

	//sugo-------------------------
	if((event.pageX - canvas.offsetLeft)>=sugox && (event.pageX - canvas.offsetLeft)<=(sugox+120) && (event.pageY - canvas.offsetTop)>=sugoy && (event.pageY - canvas.offsetTop)<=(sugoy+60) && menu==1)
	{
		onmouseover_sugo = 1;
		document.body.style.cursor = "pointer";
		//context.drawImage(hatter,0,0);
	}
	else
	{
		onmouseover_sugo = 0;
		//context.drawImage(hatter,0,0);
	}
	//------------------------------------------
	//szint-------------------------
	if((event.pageX - canvas.offsetLeft)>=szintx && (event.pageX - canvas.offsetLeft)<=(szintx+120) && (event.pageY - canvas.offsetTop)>=szinty && (event.pageY - canvas.offsetTop)<=(szinty+60) && menu==1)
	{
		onmouseover_szint = 1;
		document.body.style.cursor = "pointer";
		//context.drawImage(hatter,0,0);
	}
	else
	{
		onmouseover_szint = 0;
		//context.drawImage(hatter,0,0);
	}
	//------------------------------------------
	
	if(xuto>(568))
	{
		document.body.style.cursor = "default";
	}

	if(xuto>(568-utohossz+4))
	{
		xuto=568-utohossz+4;
		if(szogmehet==0)
		{xszog=xuto+24;}
	}
	if(xuto<11)
	{
		xuto=11;
		if(szogmehet==0)
		{xszog=xuto+24;}
	}


}

document.onkeydown = function(event) {
   var keyCode; 
 
   if(event == null)
   {
     keyCode = window.event.keyCode; 
   }
   else 
   {
     keyCode = event.keyCode; 
   }
 
   switch(keyCode)
   {
	case 83:
	 if(sugoaktiv==0)
	 {
	 sugoaktiv=1;
	 pause_=1;
	 }
	 else
	 {
	 context.drawImage(hatter,0,0);
	 sugoaktiv=0;
	 pause_=0;
	 }	 
	
	
	break;
	case 32:

	 if(pause_==0)
	 {
	 pause_=1;
	 }
	 else
	 {
	 pause_=0;
	 }	 
	 
	 break;
     
	case 13:

 	if(megfogta==1 )
	{
		x=xuto+Math.floor(utohossz/2-4);
		y=yuto-10;
		dx=0;
		dy=-1*dyorig;
		megfogta=0;
	}

	 if (  golyovan==0)
		{
		jatekvege=0;
		nyert=0;
		x=xuto+Math.floor(utohossz/2-4);
		y=yuto-10;
		//dx=-1*Math.abs(dx);
		dx=0;
		//dy=-1*Math.abs(dy);
		dy=-1*dyorig;
		mehet=1;
		eletok=1;
		inditgolyo=1;
		eletmaradt=elet-1;
		leesettok=1;
		}
	 break;
	 
	 case 50:

	 if(yszog<60 || yszog==yuto-10)
	 {
		if(szogara<=penz)
		{
		 if(szogmehet==0)
		 {
		 szogmehet=1;
		 penz=penz-szogara; 
		 }
		 else
		 {
		 szogmehet=0;
		 }	 
		}
	 }
	  break;
	case 49:
		if(szupergolyoara<=penz)
		{
		 penz=penz-szupergolyoara; 
		 szupergolyo=1;
	 	}
	 break;
	case 51:
		if(golyoara<=penz && elet<5)
		{
		 penz=penz-golyoara; 
		 elet=elet+1;
		 eletmaradt=elet-1;
		 info();
	 	}
	 break;
     

   // bal
     case 37:
       
	   
	   xuto=xuto-20;
       break; 
 
     // fel 
     case 38:
     
       break; 
 
     // jobb
     case 39:
     
	 xuto=xuto+20;
       break; 
 
     // le
     case 40:
     
       break; 
 
     default: 
       break; 
   } 
	document.body.style.cursor = "none";
	//yuto = event.pageY - canvas.offsetTop;
	if(xuto>(568))
	{
		document.body.style.cursor = "default";
	}
	if(xuto>(568-utohossz+4))
	{
		xuto=568-utohossz+4;
	
	}
	if(xuto<11)
	{
		xuto=11;
	}
   
 }
function is_html5_storage()
{  
	try
	{  
		return 'localStorage' in window && window['localStorage'] !== null;  
	} catch (e) {  
		return false;  
	}  
}
