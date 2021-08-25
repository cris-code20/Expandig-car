const paneles = document.querySelectorAll('.panel')

paneles.forEach((panel) =>{
    panel.addEventListener('click', ()=>{
        removeActiveClases()
        panel.classList.add('active')
    })
})

function removeActiveClases(params) {
    paneles.forEach(panel =>{
        panel.classList.remove('active')
    })
}