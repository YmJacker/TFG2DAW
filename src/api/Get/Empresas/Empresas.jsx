

export const Empresas = async () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    const Empresas = await fetch("http://apicei58.ieslasenia.org/empresas", requestOptions).then(response => response.json())

    return Empresas
}