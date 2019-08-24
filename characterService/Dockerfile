# Use a lighter version of Node as a parent image
FROM mhart/alpine-node
# Set the working directory to /server
WORKDIR /app
# copy package.json into the container at /server
COPY package*.json ./
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /server
COPY . ./
# Make port 80 available to the world outside this container
EXPOSE 3002
# Run the app when the container launches
#ENTRYPOINT ["npm", "run"]
#CMD ["dev"]
