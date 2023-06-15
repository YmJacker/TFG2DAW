

export const Patrocinador = (form) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();
    urlencoded.append("empresa_cif", form.empresa);
    urlencoded.append("paquete_id", form.paquete);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch(`http://apicei58.ieslasenia.org/patrocinador/empresa/${form.empresa}?paquete_id=${form.paquete}`, requestOptions)
        .then(response => response.text())

}