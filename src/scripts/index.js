
function renderCardsFront(array){
    let ulFrontendJobs = document.querySelector('.ulFrontendJobs')
    ulFrontendJobs.innerText = '';
    for(var i=0; i < array.length; i++){
        let liFront = document.createElement('li')
            let divHeaderCardFront = document.createElement('div')
                let iconCardFront = document.createElement('p')
                let titleCardFront = document.createElement('h1')
                let locationCardFront = document.createElement('p')
            let jobDescriptionCardFront = document.createElement('p')
            let tagWorkloadCardFront = document.createElement('p')
            let tagModalityCardFront = document.createElement('p')

    liFront.classList.add('liFont')
    divHeaderCardFront.classList.add('divHeaderCardFront')
    iconCardFront.classList.add('iconCardFront')
    titleCardFront.classList.add('titleCardFront')
    locationCardFront.classList.add('locationCardFront')
    jobDescriptionCardFront.classList.add('jobDescriptionCardFront')
    tagWorkloadCardFront.classList.add('tagWorkloadCardFront')
    tagModalityCardFront.classList.add('tagModalityCardFront')

    iconCardFront.innerText = 'G'
    titleCardFront.innerText = array[i].title
    locationCardFront.innerText = 'Curitiba - Paraná'
    jobDescriptionCardFront.innerText = array[i].descrription
    tagWorkloadCardFront.innerText = array[i].modality[0]
    tagModalityCardFront.innerText = array[i].modality[1]
    

    ulFrontendJobs.append(liFront)
    liFront.append(divHeaderCardFront, jobDescriptionCardFront, tagWorkloadCardFront, tagModalityCardFront)
    divHeaderCardFront.append(iconCardFront, titleCardFront, locationCardFront)

 }
}

renderCardsFront(frontEndJobs)


function renderCardsBack(array){
    let ulBackendJobs = document.querySelector('.ulBackendJobs')
    ulBackendJobs.innerText = '';
    for(var i=0; i < array.length; i++){
        let liFront = document.createElement('li')
            let divHeaderCardFront = document.createElement('div')
                let iconCardFront = document.createElement('p')
                let titleCardFront = document.createElement('h1')
                let locationCardFront = document.createElement('p')
            let jobDescriptionCardFront = document.createElement('p')
            let tagWorkloadCardFront = document.createElement('p')
            let tagModalityCardFront = document.createElement('p')

    liFront.classList.add('liBack')
    divHeaderCardFront.classList.add('divHeaderCardBack')
    iconCardFront.classList.add('iconCardBack')
    titleCardFront.classList.add('titleCardBack')
    locationCardFront.classList.add('locationCardBack')
    jobDescriptionCardFront.classList.add('jobDescriptionCardBack')
    tagWorkloadCardFront.classList.add('tagWorkloadCardBack')
    tagModalityCardFront.classList.add('tagModalityCardBack')

    iconCardFront.innerText = 'G'
    titleCardFront.innerText = array[i].title
    locationCardFront.innerText = 'Curitiba - Paraná'
    jobDescriptionCardFront.innerText = array[i].descrription
    tagWorkloadCardFront.innerText = array[i].modality[0]
    tagModalityCardFront.innerText = array[i].modality[1]
    

    ulBackendJobs.append(liFront)
    liFront.append(divHeaderCardFront, jobDescriptionCardFront, tagWorkloadCardFront, tagModalityCardFront)
    divHeaderCardFront.append(iconCardFront, titleCardFront, locationCardFront)

 }
}

renderCardsBack(backEndJobs)