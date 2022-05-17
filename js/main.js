document.querySelector('button').addEventListener('click', getPOD)

function getPOD(){
  const choice = document.querySelector('input').value
  const url =`https://api.nasa.gov/planetary/apod?api_key=0XtCUWknVRd0zxGyGvmXsH0Hc4MfdKkZNQmWrQi0&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        if( data.media_type === 'image'){
          document.querySelector('#nasaImg').style.display = 'block'
          document.querySelector('#nasaImg').src = data.url
          document.querySelector('#nasaVid').style.display = 'none'
        }else if(data.media_type === 'video'){
          document.querySelector('#nasaVid').style.display = 'block'
          document.querySelector('#nasaVid').src = data.url
          document.querySelector('#nasaImg').style.display = 'none'
          
        }

        document.querySelector('#explanation').innerText = data.explanation

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

