const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//creat map

const map = L.map('mapid', options).setView([-20.1288564,-44.9048079], 15)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//creat icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//creat and add marker

L.marker([-20.1288564,-44.9048079], { icon })
.addTo(map)

/*  image gallery */

function selectImage(event){
    const button = event.currentTarget

    console.log(button.children)

    //remover as classes .active

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar a imagem clicada

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o conatiner de imagem

    imageContainer.src = image.src

    //adicionar a classe .active para esse botão

    button.classList.add('active')

}