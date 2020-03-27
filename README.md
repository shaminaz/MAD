#while a user is using a node server to create a docker container

docker build -t abc .

#abc can be replaced by any name it is just a tag name

#after the above command

docker run -it -d -p <any_port>:<port_given_in_server.js> abc
