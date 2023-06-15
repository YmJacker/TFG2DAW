// export the Asistentes function, with the form prop
export const Asistentes = (form) => {
    // the header
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

    // the params to send to the api
    let urlencoded = new URLSearchParams()
    urlencoded.append("nombre", form.nombre)
    urlencoded.append("apellido", form.apellido)
    urlencoded.append("nombre_usuario", form.nombreUsuario)
    urlencoded.append("contrasenya", form.contrasenya)
    urlencoded.append("codigo_postal", form.codigoPostal)
    urlencoded.append("provincia", form.provincia)
    urlencoded.append("genero", form.genero)
    urlencoded.append("imagen", form.imagen)
    urlencoded.append("biografia", form.biografia)
    urlencoded.append("correo", form.correo)
    urlencoded.append("dni", form.dni)
    urlencoded.append("telefono", form.telefono)

    // the request options 
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    }

    // fetch to send the params in text format
    fetch("http://apicei58.ieslasenia.org/asistentes", requestOptions)
        .then(response => response.text())
}