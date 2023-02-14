PORT:= 3000

build:
	docker rm --force carbide-docs; docker build -t carbide-docs -f Dockerfile.local .
run: 
	docker run -p ${PORT}:3000 --name=carbide-docs -ti carbide-docs; docker logs -f carbide-docs