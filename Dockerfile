FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

#? FAZ O BUILD DA APLICACAO
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

#? EXPOE A APLICACAO NA PORTA 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
