# Docker Hands on

This repo covers steps to learn docker through hands on using https://labs.play-with-docker.com/.
Run the commands in the play ground post cloning the repo.

## Table of Contents

- [Prerequisites](#Prerequisites)
- [Introduction](#Introduction)
- [Run a Container](#Run-a-Container)
- [Architecture](#Architecture)
- [Docker Image](#Docker-Image)
- [My Image](#My-Image)
- [My Application](#My-Application)
- [Scale Using Docker Compose](#Scale-using-docker-compose)
- [Scale Using Swarm](scale-using-swarm)

## Prerequisites

- Register in docker hub
- Go to https://labs.play-with-docker.com/ and login is using docker hub credentials
- Click on Start
- Select 3 managers and 2 worker templet from the wrench icon
- Go to any worker 
- git clone https://github.com/rammishr/Docker.git

## Introduction

- What is Docker
  + Docker is a tool that helps you run your applications in a consistent and repeatable way.
  + It uses containers to isolate your application and its dependencies from the underlying system.
  + This makes it easy to deploy your application on different computers without worrying about compatibility issues.

## Run a Container

- docker container run hello-world

- docker container run -it alpine sh

- docker container run -p80:80 nginx

## Architecture

![image](https://user-images.githubusercontent.com/43367262/230041133-e0cf66b9-26cd-463f-96de-5165bb8e3d55.png)
![image](https://user-images.githubusercontent.com/43367262/230041179-690cc6a5-ad99-49e6-8fde-1a1e69d510b6.png)
![image](https://user-images.githubusercontent.com/43367262/230041199-f211aeec-12d1-4d6e-b064-48af6f622338.png)
![image](https://user-images.githubusercontent.com/43367262/230041224-b8a12d31-ee33-4b78-8b76-a4fc647abbfe.png)

## Docker Image
- What is an image
  + A Docker Image is a read-only template that contains instructions for creating a container.
  + It consists of multiple layers that are stacked on top of each other. Each layer represents a change made to the previous layer.
  + Docker Images are built from a Dockerfile or can be pulled from a registry like Docker Hub.
  + Images can be versioned, tagged and shared with others.
  + Docker Images are stored in a local cache called the Docker Image Cache on the host machine.

- Commands to run
  + docker image ls
  + docker image inspect hello-world

- Image life cyle
  + Define Dockerfile
    * A Dockerfile is a script that defines how to build a Docker image.
  + Build image
    * Run the docker build command to build the Docker image using the Dockerfile.
  + Tag a docker image
    * Once the image is built, give it a tag using the docker tag command.
    * The tag should be in the format <repository>:<tag>, where the repository is the name of the Docker registry you want to push the image to.
  + Push image to registry
    * Use the docker push command to push the image to a Docker registry.
  + Pull image from registry
    * To use the image, pull it from the registry using the docker pull command.

## My Image
Docker file and required file present in repo under myimage directory. So, execute following set of commands.
  + cd Docker/images
  + docker image build -t myimage .
  + docker image ls
  + docker container run -it myimage
  + Validate that myfile.txt exist inside the container.
  + Create the repository in the hub.
  + docker tag myimage:latest <new-repo>:myimage
  + docker push <new-repo>:myimage

## My Application
  You can open the host:3000 in the browser to see the output in following steps. 
  + cd ../firstapp
  + docker image build –t firstapp .
  + docker run –p 3000:3000 firstapp&

## Scale Using Docker Compose
 The following example shows how to start app in association with DB.
  + cd ../appWithDB
  + docker-compose up

## Scale Using Swarm
The following example shows runtime scaling of application on swarm manager node.
  + git clone --depth 1 https://github.com/rammishr/Docker.git
  + cd Docker/scale
  + docker stack deploy -c docker-compose.yml mywebapp
  + docker service scale mywebapp_web=3
  + docker service ls
  + docker container ps
  + docker service scale mywebapp_web=2
  + docker service ls
  + docker container ps

  
