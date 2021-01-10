function Person(name,lastname){
    this.name = name;
    this.lastname = lastname;
}
Person.prototype.Pershendetje = function(){
    console.log("Pershendetje " + this.name + " " + this.lastname);
}
var Artin = new Person("Artin", "Sermaxhaj");
Artin.Pershendetje();

var Haker = new Person("Haker", "Baba");
Haker.Pershendetje();

function Kafshe(name, speed){
    this.name = name;
    this.speed = speed;
}
Kafshe.prototype.Leviz = function(){
    console.log("Kafsha e llojit " + this.name + " leviz me shpejtesi " + this.speed);
}
var Haker1 = new Kafshe("Haker", "20km/h");
Haker1.Leviz();

var Automobili = {
    lloji : "Fiat",
    viti : 2020,
    transmisioni : "Automatik",
    get tipi() {
        console.log("Automobili eshte i tipit " + this.lloji + " dhe eshte prodhuar ne vitin " + this.viti);
    }
    };

    Automobili.tipi;

    var Shkolla = {
        lloji : "Mesme",
        klasa : 3,
        paralele : 12,
        nxenesneklase : 30,
        get nrnxenesvetotal(){
            console.log( "Nurmi total i nxenesve ne shkolle eshte " + this.nxenesneklase* this.paralele*this.klasa);
        }
    }
    Shkolla.nrnxenesvetotal;
function Projekt(nxenes, lenda, ora){
    this.nxenes = nxenes;
    this.lenda = lenda;
    this.ora = ora;
}
var Projekti = new Projekt(4, "Interneti",220);
Projekt.prototype.Mesazh = function(){
    console.log("Ne projektin nga lenda: " + this.lenda + " moren pjese "+ this.nxenes
    + " ku ata punuan " + this.ora + " ore.");

}
Projekti.Mesazh();
function Printo(x1,x2){
    if(x1 * x2 > Number.MAX_VALUE){
        console.log("Ky numer nuk mund te kuptohet nga JS.");
    }
    else { console.log("Ky numer eshte i perfshire ne domenin e JS.");}
}
console.log(isNaN("asndnasd"));
console.log(isNaN(123));
console.log(Printo.toString());
console.log(Projekt.toString());
function KuptimiEksponentit(x1){
    console.log("Numri pa perdorur metoden toExponential(): "+ x1);
    console.log("Numri me perdorimin e metodes toExponential(): " + x1.toExponential(2));
}
KuptimiEksponentit(3123.213213123);
const p = "Perdorimi i metodes replace";
const regex = /Perdorimi/g;
console.log(p.replace(regex,"Gabim"));
const regex1 = /Perdorimi/i;
console.log(p.replace(regex1, "Perdorimi i sakte"));
let kaliumi = /Perdorim/s;
let sps = console.log(kaliumi.exec("Perdorimi i metodes exec ne JS"));
let match = /[A-Z]/s;
console.log(p.match(match));
