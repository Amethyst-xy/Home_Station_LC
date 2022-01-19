FROM node:14.17.0 AS builder
WORKDIR /usr/src/app
COPY . ./
RUN npm i
RUN npm run build
# Decrease image size.
RUN rm -rf ./node_modules/

FROM nginx:alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]