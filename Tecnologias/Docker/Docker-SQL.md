sudo docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=asinfo2680$' -p 1433:1433 --name negrete -d mcr.microsoft.com/mssql/server:2017-latest

sudo docker exec -it negrete "bash"

conectar sql 
	/opt/mssql-tools/bin/sqlcmd
	realizacion del restore
		RESTORE DATABASE Adventureworks FROM DISK = 'D:\Adventureworks_full.bak'

probar todavia no probado
	prueba para backup 

	sudo docker exec -it negrete /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'asinfo2680$' -Q 'RESTORE FILELISTONLY FROM DISK = "/var/opt/mssql/backup/negrete.bak"' | tr -s ' ' | cut -d ' ' -f 1-2

	RESTORE DATABASE Adventureworks FROM DISK = 'D:\Adventureworks_full.bak'

