
const getImagen = async () => {
    try {
        const api_key = 'myKXFvf8Q0UXbJRK1n7QI55A2d78QpRO'
        const httpcode = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
        const data = await httpcode.json()
        const { url } = data.data.images.original
        return url
    } catch (err) {
        console.warn(err)
    }  
}
getImagen().then((url) => {
    const img = document.createElement('img')
    console.log(url)
    img.src = url;
    document.body.append(img)
})