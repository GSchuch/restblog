barraCat = document.querySelector('.topo')

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
        barraCat.appendChild(div)

        //listener de cada um dos itens
 		div.addEventListener('click', function(){
 			alert(this.id);

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


