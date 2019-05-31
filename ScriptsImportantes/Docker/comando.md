eliminar todo los contenedores de docker
	docker rm $(docker ps -a -q)
		-q