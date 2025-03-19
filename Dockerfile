FROM node:18
WORKDIR /app
<<<<<<< HEAD
COPY . .
RUN npm install
CMD ["node", "index.js"]
=======
COPY . . 
RUN npm install
CMD ["node", "index.js"]

>>>>>>> 151968c5f43056517a9207eae093d16b18956270
