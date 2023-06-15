

export const PuestosComida = async () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    const comida = await fetch("http://apicei58.ieslasenia.org/puestosComida", requestOptions)
        .then(response => response.json())

    return comida
}



