
const api_key = 'myKXFvf8Q0UXbJRK1n7QI55A2d78QpRO'

const httpcode = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`)

httpcode.then((res) =>{
    res.json()
    .then(({data})=>{
        const {url} = data.images.original;

        const img= document.createElement('img')
        img.src = url;

        document.body.append(img)
    })
})
.catch( (err) =>{
    console.log(err)
})
