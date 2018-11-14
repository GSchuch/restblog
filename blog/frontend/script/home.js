barraCat = document.querySelector('.topo')
inicio = document.querySelector('.inicio')
meio = document.querySelector('.meio');
const detalhes = document.querySelector('div.detalhes')
const but = document.querySelector('.botao-menu')

but.addEventListener('click', function(){
    detalhes.classList.add('open');
})

async function pegarDadosCategoria(){
	let req = await fetch('../api/categoria/read.php', {
        method: "GET"
    }) 


    let resp = await req.json()
    resp.forEach(categoria => {
        let div = document.createElement('div')
        div.setAttribute('id',categoria.id)
        div.setAttribute('class', 'item-menu')
        div.innerText=(categoria.nome)
        detalhes.appendChild(div)

        //listener de cada um dos itens
 		div.addEventListener('click', async function(){            
            meio.innerHTML = '';
 			let req = await fetch('../api/post/read.php?idcategoria='+this.id, {
             method: "GET"
            }) 

            let resp = await req.json()
            resp.forEach(post => {
                let div = document.createElement('p')
                div.setAttribute('id',post.id)
                div.setAttribute('class', 'item-menu')
                div.innerText=(post.texto)
                barraPost.appendChild(div)
            });
 		})

    });

	console.log(resp)
}
pegarDadosCategoria()
  

//	Post

barraPost = document.querySelector('.meio')

async function pegarDadosPost(){
	let req = await fetch('../api/post/read.php', {
        method: "GET"
    }) 
    let resp = await req.json()
    resp.forEach(post => {
        let div = document.createElement('p')
        div.setAttribute('id',post.id)
        div.setAttribute('class', 'item-menu')
        div.innerText=(post.texto)
        barraPost.appendChild(div)
    });

	console.log(resp)
}
pegarDadosPost()


inicio.addEventListener('click', async function(){
    meio.innerHTML = '';
    pegarDadosPost()
})