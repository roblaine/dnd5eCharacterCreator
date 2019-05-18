# Use a lighter version of Node as a parent image
FROM mhart/alpine-node
# Set the working directory to /server
WORKDIR /api
# copy package.json into the container at /server
COPY package*.json /api/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /server
COPY . /api/
# Make port 80 available to the world outside this container
EXPOSE 3001
# Run the app when the container launches
CMD ["npm", "run", "dev"]
