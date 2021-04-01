const baseUrl ='http://alpha-meme-maker.herokuapp.com/'
const superHeroUrl='https://superheroapi.com/api/access-token'
const btnClick= document.querySelector('button') 
const imageContent = document.querySelector('.image-box')

const getMeme = async() => {
    const response = await fetch (`${baseUrl}1`)
    const data = await  response.json()
    return data
}

btnClick.addEventListener('click', async function(){
    const randomMeme = await getMeme()
    const firstRandomMeme = randomMeme.data
    console.log(firstRandomMeme)
    let index = Math.floor(Math.random()*25)
    const image = firstRandomMeme[index].image
    imageContent.innerHTML= `
    <img src=${image} alt="">
    `
})

