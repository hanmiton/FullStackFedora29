nodemodules
	libs
json
	dependencies
style
	codigo css global para nuestra app
assets 
	archivos stativos imagenes
	crea la carpeta final para produccion
app.module.ts
	como correr la app
	bootstrap: [AppComponent]
		corre appComponent
app.component.ts
	se define el componente
		html
		css
		variables

@Componete define un componente
	selector app-root
		funcione en una sola pagina se inyecta en el html
	template url
		solo puede ser uno
	styleUrls: ['./app.component.css']
		generalmente 1 pero se peuden tener un array de estilos para dicho componete
	export class
		para poder usar desde cualqueir parte

ver usuam de cantidad en 

ng generate component 
	generacion de componentes

	bootstrap => es el componete que se inicia

Ciclo
	Componente
	Routes
		RouterModule.forRoot(appRoutes)
			caracteristicas de navegacion
		en app.compnente.html
			<router-outlet></router-outlet>
				para agregar la funcionalidad de navegacion
Href -: routerLink