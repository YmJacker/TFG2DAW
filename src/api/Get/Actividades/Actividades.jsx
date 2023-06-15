
// export Actividades information
export const Actividades = async () => {
    // the options for the fetch request
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    // save the information in json format in a variable 
    const actividad = await fetch("http://apicei58.ieslasenia.org/actividades", requestOptions)
        .then(response => response.json())

    // return the json
    return actividad
}