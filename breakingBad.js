//Example fetch using pokemonapi.co
 document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){
  const url = `https://breaking-bad-quotes.herokuapp.com/v1/quotes/10`
  const choice = document.querySelector('#input').value.toLowerCase()

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(choice)
        for(let i = 0; i < data.length; i++){
            if(data[i].author.toLowerCase() == `${choice}`){
            document.querySelector('.author').innerText = data[i].author
            document.querySelector('p').innerText = data[i].quote
        }
    }
      })
      
      .catch(err => {
          console.log(`error ${err}`)
      });
}


