descargamos imagen de postgrs
	docker pull postgres

creamos volumes para da postgres
	mkdir -p $HOME/docker/volumes/postgres

sudo docker run --rm   --name pg-docker -e POSTGRES_PASSWORD=asinfo2680$ -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  postgres

ingresamos a container conteine postgres
	sudo docker exec -it a7f30476f632 bash
	
	Ingresamos a postgres para crear reestablecer base datos
		psql -h localhost -U postgres -d postgres

