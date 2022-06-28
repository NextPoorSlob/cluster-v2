FROM node
COPY package.json .
RUN npm install
ARG REACT_APP_KC_URL
ENV REACT_APP_KC_URL $REACT_APP_KC_URL
COPY app.js .
COPY keycloak.json .
EXPOSE 3000
CMD [ "npm", "start" ]
