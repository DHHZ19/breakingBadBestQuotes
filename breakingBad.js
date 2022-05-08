//Example fetch using pokemonapi.co
 document.querySelector('button').addEventListener('click', getFetch)

 const select = document.querySelector("select")
//  author: "Saul Goodman"
function getFetch(){
  const url = `https://breaking-bad-quotes.herokuapp.com/v1/quotes/10`
  // const choice = document.querySelector('#input').value.toLowerCase()

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let characters = []
        
       data.forEach((x,i) => characters.push(data[i].author))
       for(let i = 0; i < data.length; i++){
      document.querySelector('select').appendChild(document.createElement('option')).text = characters.sort()[i]
      select.addEventListener('change', event => {
        document.querySelector('.author').innerText = data[i].quote
        document.querySelector('p').innerText = data[i].author
  
      })
       }
            //event listener for choice
     

     
      })
      
      .catch(err => {
          console.log(`error ${err}`)
      });
}


