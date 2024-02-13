# makefile for carbide-docs

# set the port
PORT:= 3000

# docker build for carbide docs
build:
	docker rm --force carbide-docs; docker build -t carbide-docs -f Dockerfile.local .

# docker run for carbide-docs
run:
	docker run -p ${PORT}:3000 --name=carbide-docs -ti carbide-docs; docker logs -f carbide-docs

# run all build commands
local-all: local-install local-build local-serve

# install dependencies
local-install:
	npm install

# test and run carbide-docs
# opens localhost:3000/carbide-docs
local-test:
	npm run start

# build and compile carbide-docs
local-build:
	npm run build

# server carbide-docs from build
# opens localhost:5000/carbide-docs
local-serve:
	npm run serve

# clear build outputs
clear:
	npm run clear && rm -rf node_modules
