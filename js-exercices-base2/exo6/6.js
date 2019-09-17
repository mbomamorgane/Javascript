var tab =[-2,1,4]

function soustrai(x){
var result= x+2; 
 if(x>0){
  return"positif";   
 }
 else{
     return"négatif";
 }
}
function affiche(){
alert(soustrai(tab[0]))
alert(soustrai(tab[tab.length-1]))

}