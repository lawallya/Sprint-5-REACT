const cargarChiste = async () => {
    try {
        const respChiste =
            await fetch('https://icanhazdadjoke.com/', {headers: {
                    Accept: "application/json",} ,});
        //console.log(respChiste);//hay 3 parametros: id, joke y status, me interesa joke.
        const datosChiste = await respChiste.json();//objeto recibido desde el servidor
        console.log(datosChiste.joke);//aqui el chiste solamente.
        //ahora tengo que poner el chiste en pantalla
        document.getElementById("chiste").innerHTML = datosChiste.joke;
      
    } catch (error) {
        console.log(error);
    }
}
