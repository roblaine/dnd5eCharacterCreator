FROM mhart/alpine-node AS base

FROM base AS builder
WORKDIR /install
COPY package.json .
RUN npm install --prefix=/install

FROM base
COPY --from=builder /install/node_modules/ /usr/lib/node_modules/
ENV NODE_PATH '/usr/lib/node_modules:/src/node_modules'
WORKDIR /api
ADD src .
EXPOSE 3001
ENTRYPOINT ["node", "app.js"]
