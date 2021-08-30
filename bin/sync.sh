docker-sync start -c ./docker-configs/docker-sync.yml && \
docker-compose -p ciam -f ./docker-configs/docker-compose.sync.yml $@
