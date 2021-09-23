var provera=true;
var ime=prompt("Hello and Welcome. \n Enter your first name :");
var prezime= prompt("Enter your last name : ");
var god=prompt("Enter your age : ");
var vis=prompt("Enter your height : ");
var imep=prompt("Enter name of your pet : ");
var br=imep.length;
if(ime[0]!==prezime[0]) provera=false;
if(god<=20 || god>=30) provera=false;
if(vis<170) provera=false;
if(imep[br-1]!=="y") provera=false;
if(provera==1){
  console.log("Hello Ms Spy welcome to my site.");
}else{
  console.log("Hello ordinary user.");
}
