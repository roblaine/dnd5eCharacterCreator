# Stage 1 - the build process
FROM mhart/alpine-node AS build-deps
WORKDIR /client
ADD package.json yarn.lock /client/
RUN yarn install
COPY . /client/
RUN yarn build

# Stage 2 - the production environment
FROM mhart/alpine-node
WORKDIR /client
COPY --from=build-deps /client/ .
EXPOSE 3000
RUN yarn global add serve
# Run production server on startup
CMD ["yarn", "serve"]
