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
