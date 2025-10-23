FROM  node:20-alpine AS builder 

WORKDIR /App

COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build 


FROM nginx:alpine AS production

COPY --from= builder /App/dist /usr/share/nginx/html
EXPOSE 3001

CMD ["nginx","-g", "daemon off;"]