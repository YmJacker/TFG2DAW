

export const Asistentes = async () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    const asist = await fetch("http://apicei58.ieslasenia.org/asistentes", requestOptions)
        .then(response => response.json())

    return asist
}