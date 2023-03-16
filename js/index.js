addEventListener("DOMContentLoaded",()=>{

	const article_txt = document.querySelector("main article");
	const text_inicial = article_txt.textContent;
	const ul = document.querySelector("nav ul");

	ul.addEventListener("mouseover",(e)=>{
		//console.log( e.target )
		//console.log( article_txt.textContent )

		if( e.target.matches( "li" ) ){
			// console.log( e.target.textContent )
			article_txt.textContent = e.target.textContent;
		}
	});

	ul.addEventListener("mouseout",(e)=>{
		//console.log( e.target )
		
		article_txt.textContent = text_inicial;
		
	})
})