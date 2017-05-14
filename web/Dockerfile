FROM mhart/alpine-node:7.5.0
LABEL maintainer Horace Reid <horace.reid@bluenetreflections.com>
ENV HOME=/home/ska.com
ADD package.json $HOME/
COPY . $HOME
WORKDIR $HOME
RUN npm i yarn -g
RUN yarn
EXPOSE 3000
CMD ["yarn", "start", ""]