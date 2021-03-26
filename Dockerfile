# [Choice] Node.js version: 14, 12, 10
ARG VARIANT=14
# FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
FROM node:${VARIANT}

# RUN su node -c "umask 0002 && npm install -g http-server @vue/cli @vue/cli-service-global"
RUN npm install -g http-server @vue/cli @vue/cli-service-global

EXPOSE 8080

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>
