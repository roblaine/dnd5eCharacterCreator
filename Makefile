install:
	docker-compose -f ./dockerfiles/docker-compose.builder.yml run --rm characterInstall
	docker-compose -f ./dockerfiles/docker-compose.builder.yml run --rm apiGatewayInstall

setup:
	docker volume create character_nodemodules
	docker volume create apiGateway_nodemodules

up:
	docker-compose --file ./dockerfiles/docker-compose.yml up

down:
	docker-compose --file ./dockerfiles/docker-compose.yml down

ps:
	docker-compose --file ./dockerfiles/docker-compose.yml ps
