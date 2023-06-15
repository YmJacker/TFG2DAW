

export const Patrocinadores = () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    const patrocinadores = fetch("http://apicei58.ieslasenia.org/patrocinadores", requestOptions)
        .then(response => response.json())

    return patrocinadores
}