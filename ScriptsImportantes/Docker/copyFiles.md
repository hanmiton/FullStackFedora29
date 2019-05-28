Copy a file from host to container:
	$ docker cp foo.txt 72ca2488b353:/foo.txt
Copy a file from Docker container to host:
	$ docker cp 72ca2488b353:/foo.txt foo.txt