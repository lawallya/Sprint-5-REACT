"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const cargarChiste = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respChiste = yield fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: "application/json",
            },
        });
        //console.log(respChiste);//hay 3 parametros: id, joke y status, me interesa joke.
        const datosChiste = yield respChiste.json(); //objeto recibido desde el servidor
        console.log(datosChiste.joke); //aqui el chiste solamente.
        //ahora tengo que poner el chiste en pantalla
        document.getElementById("chiste").innerHTML = datosChiste.joke;
    }
    catch (error) {
        console.log(error);
    }
});
; //genero un "tipo" de objeto
let reportJoke = []; //preparo un array vacío 
function valorar(valoracion) {
    let chisteValorado = document.getElementById("chiste").innerHTML;
    let puntuacion = valoracion; //¿enum?
    let fecha = new Date();
    let fechaString = fecha.toISOString();
    const reportAcudit = {
        joke: chisteValorado,
        score: puntuacion,
        date: fechaString
    };
    reportJoke.push(reportAcudit);
    console.table(reportJoke);
    // Funciona tambien  
    //let reportAcudit:{joke:string, score:number, date:string}; //o lo inicializo y utilizo const. 
    //joke lo saca de la API, lo muestra y si se va a puntuar lo guarda.
    // score lo saca de la pantalla, de los botones ¿enum?
    //date lo saca del equipo local, pero antes de guardarlo hay que transformarlo.
    /*let fecha = new Date();
    let fechaString = fecha.toISOString();
    console.log (fechaString);
    let chisteValorado = document.getElementById("chiste").innerHTML;
    console.log(chisteValorado);
    let puntuacion = valoracion;
    console.log(puntuacion);
    let  reportAcudit : { joke:string, score:number, date: string} = {joke:'inicial', score:3, date: 'prueba'};
         reportAcudit.joke = chisteValorado;
        reportAcudit.score = puntuacion;
        reportAcudit.date= fechaString;
    
        console.table(reportAcudit);
    
        reportJokes.push(reportAcudit);
        console.table(reportJokes);
        Esto funciona pero voy a intentarlo con interfaces*/
    //interface ReportAcudit { joke:string, score: number, date :string};
}
;
