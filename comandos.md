COMANDOS DE GENERACIÓN DE MODELOS Y MIGRACIONES

//Generation of model/migration for user
sequelize model:generate --name User --attributes name:string,email:string,password:string,phone:string,photUrl:string,role:integer

//Generation of model/migration for city
sequelize model:generate --name City --attributes name:string

//Generation of model/migration for parking
sequelize model:generate --name Parking --attributes name:string,description:text,document:string,owner:string,cityId:integer,latitude:string,longitude:string

//Generation of model/migration for reservation
sequelize model:generate --name Reservation --attributes parkingId:integer,userId:integer,price:decimal,timeStamp:date

//Generation of model/migration for parkings prices
sequelize model:generate --name ParkingPrice --attributes parkingId:integer,price:decimal,quantityHour:decimal


//COMANDOS PARA CREACIÓN DE VARIABLES GLOBALES EN NODEJS
