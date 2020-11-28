FROM node:14.15.1-buster-slim
WORKDIR /frontend/
RUN apt-get -y update && apt-get -y install \
  git \
  vim
RUN touch ~/.vimrc \
  && echo "syntax on" >> ~/.vimrc
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 8080
ENTRYPOINT ["docker/scripts/entrypoint.sh"]
CMD ["yarn", "serve"]
