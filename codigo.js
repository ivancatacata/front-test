var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');
let ver = document.getElementById('ver');
let verMas = document.getElementById('verMas');

ver.addEventListener('click', function(e){
  ver.style.display = "none";
  verMas.innerHTML = "¡Estos son todos los productos!";
});

formulario.addEventListener('submit', function(e){
	e.preventDefault();
	var datos = new FormData(formulario);
	fetch('https://sistemacaliva.com/api/front-test',{
		// mode: 'no-cors',
		method : "POST",
		body: datos,
		headers : {"X-Auth-Token":"eyJpdiI6IlAydWJkVGJuUVwvcXNyRVwvQVRUVURwdz09IiwidmFsdWUiOiJ4VVwvclV5YTV2ZE5kTTdcL3NXaDliZGVoaDByeWFvQVRuWFVBQkxGZ2x1UElEODJSR2FRejRcL2c5aUgwSFBvQ29WK0VINm1mbVFEUTBpS1lUVlRCOGxZZz09IiwibWFjIjoiMDYxMDdjZTUwZmQ1NTJlNzVlMzdhODRlNTA4MjM0M2Q2ZmE4MzQwZTg3MzgyZjU2NTdiOGQxODg0ZjQ4MmMyYSJ9"},
	})
		.then( res => res.json())
		.then( res => {
			console.log(res)
				respuesta.innerHTML = `
				<div class="alert alert-info" role="alert">
				Enviado Correctamente.
				</div>
				`
		})
})