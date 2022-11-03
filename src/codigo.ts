const cargarChiste = async () => {
    try {
        const respChiste =
            await fetch('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: "application/json",
                },
            });
        //console.log(respChiste);//hay 3 parametros: id, joke y status, me interesa joke.
        const datosChiste = await respChiste.json();//objeto recibido desde el servidor
        console.log(datosChiste.joke);//aqui el chiste solamente.
        //ahora tengo que poner el chiste en pantalla
        document.getElementById("chiste").innerHTML = datosChiste.joke;

    } catch (error) {
        console.log(error);
    }
}

//EJERCICIO 3

interface ReportAcudit { joke: string, score: number, date: string };//genero un "tipo" de objeto
type ReportJoke = ReportAcudit[];//declaro el tipo array de objetos del tipo ReportAcudit
let reportJoke: ReportJoke = [];//preparo un array vacío 


function valorar(valoracion: number): void {
    let chisteValorado: string = document.getElementById("chiste").innerHTML;
    let puntuacion: number = valoracion;//¿enum?
    let fecha = new Date();
    let fechaString = fecha.toISOString();
    
    const reportAcudit: ReportAcudit = {
      joke: chisteValorado,
      score: puntuacion,
      date : fechaString
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
     
    };

  
    



