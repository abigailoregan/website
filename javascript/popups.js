const abstract_art = { // Needs updating
    name: 'abstract',
    paths: [ '../hiRez/abstract/abigail_time.jpg', '../hiRez/abstract/abigail_pigeon.jpg', '../hiRez/abstract/abigail_shapes.jpg', '../hiRez/abstract/abigail_protovine.jpg', '../hiRez/abstract/abigail_vines.jpg' ],
    descs: [ 'Time, Collage on Board, 20"x24"', 'Celestial Oddities, Collage on Paper, 14"x10"', 'Shapes, Micron Pens on Watercolor Paper, 30"x22"', 'Proto-Vines, Micron Pens on Watercolor Paper - Study for Overgrowth', 'Overgrowth, Micron Pens on Watercolor Paper, 30"x22"' ],
    final: 4
}

const landscapes_art = { // Needs updating
    name: 'landscapes',
    paths: [ '../hiRez/landscapes/abigail_fireycreek.jpg', '../hiRez/landscapes/abigail_suffocation.jpg', '../hiRez/landscapes/abigail_fallschurch.jpg', '../hiRez/landscapes/abigail_birds.jpg', '../hiRez/landscapes/abigail_tree.jpg', '../hiRez/landscapes/abigail_richmond.jpg'],
    descs: [ 'Fiery Creek, Chalk Pastel on Pastel Paper, 12"x16"', 'Suffocation, Mixed Media on Canvas Board, 20"x24"', 'The Little City, Oil Paint on Canvas, 12"x16"', 'David\'s Birds, Oil Paint on Canvas, 20"x30"', 'Twilight\'s Guardian, Gouache on Hardcover Book', 'Richmond, Acrylic Paint on Canvas, 20"x16"' ],
    final: 5
}

const love_art = { // Complete Set
    name: 'love',
    paths: [ '../hiRez/love/abigail_summon.jpg', '../hiRez/love/abigail_noah.jpg', '../hiRez/love/abigail_noahsana.jpg' ],
    descs: [ 'Flickering Fate, Charcoal on Paper, 18"x24"', 'The Veil, Charcoal on Paper, 24"x18"', 'Dancing with Death, Charcoal on Paper, 44"x30"' ],
    final: 2
}

const murals_art = { // Up to Date
    name: 'murals',
    paths: [ '../hiRez/murals/abigail_drain.jpg', '../hiRez/murals/abigail_goddess.jpg' ],
    descs: [ 'Storm Drain Mural 1, <a class="link-button" href="https://sites.google.com/view/falls-church-art-walk/home-artwork-inventory/storm-drain-mural-1?authuser=0" target="_blank">learn more</a>', 'Goddess of Justice, Acrylic Mural, Meridian High School - Falls Church, VA' ],
    final: 1
}

const people_art = { // Needs starting
    name: 'people',
    paths: [ '' ],
    descs: [ '' ],
    final: 0
}

const stills_art = { // Needs starting
    name: 'stills',
    paths: [ '' ],
    descs: [ '' ],
    final: 0
}

const setList = [ abstract_art, landscapes_art, love_art, murals_art, people_art, stills_art ]

function closePopUp(node) {
    document.body.classList.remove('disabled')
    node.parentNode.classList.add('hide')
}

function openPopUp(image_num, name) {
    document.body.classList.add('disabled')
    const set = setList.find(artSet => artSet.name === name)
    const image = document.getElementById(`${name}-rotation`)
    const description = document.getElementById(`${name}-description`)
    standardMove(image_num, image, description, set)
    document.getElementById(`${name}-popup`).classList.remove('hide')
}

function moveRight(name) {
    const set = setList.find(artSet => artSet.name === name)
    const image = document.getElementById(`${name}-rotation`)
    const description = document.getElementById(`${name}-description`)
    const next = Number(image.getAttribute('current'))-1
    
    if (set.paths[next] === undefined) {
        // go to last item
        standardMove(set.final, image, description, set)
        return
    }
    // go to next item
    standardMove(next, image, description, set)
}

function moveLeft(name) {
    const set = setList.find(artSet => artSet.name === name)
    const image = document.getElementById(`${name}-rotation`)
    const description = document.getElementById(`${name}-description`)
    const next = Number(image.getAttribute('current'))+1
    
    if (set.paths[next] === undefined) {
        // go to item 0
        standardMove(0, image, description, set)
        return
    }
    // go to next item
    standardMove(next, image, description, set)
}

function standardMove(next, image, description, set) {
    image.setAttribute('current', next)
    image.src = set.paths[next]
    description.innerHTML = set.descs[next]
}