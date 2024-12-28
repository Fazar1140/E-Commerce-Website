# E-Commerce-Website

Projek ini berupakan website yang dapat melakukan transaksi jual beli barang dengan menggunakan database postgres dengan sequelize, express dan node js sebagai framework dan juga ejs sebagai client

## Skema 

Penggunaan dbdiagram.io untuk memberikan penampilan awal database yang akan kita buat di sequelize cli

![alt text](https://github.com/Fazar1140/E-Commerce-Website/blob/checkpoint-1/Ecommerce.png)

Dengan fitur CRUD didalamnya

## Project Setup 
### yang dibutuhkan 
* Node JS v18.19.1 atau sebelumnya
* Postgresql & pgadmin 4


## Clone project

### Peringatan! projek komplit terdapat pada checkpoint ke 6 
```
 git clone --single-branch --branch checkpoint-6 https://github.com/Fazar1140/E-Commerce-Website.git
```
## Navigasi direktori 
```
 cd E-Commerce-Website
```

## Install npm 
buka terminal vs code dan ketik 

```
 npm instsall
```


## atur configurasi sequelize-cli 

```
{
  "development": {
    "username": "your-postgres-account",
    "password": "your-password",
    "database": "Market",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

## atur environtment variabel 
```
PORT = 'YOUR_PORT'
SECRET_KEY = 'YOUR_SECRET_KEY'
PRODUCTION = 'true'
COOKIE_EXPIRATION_DAYS = 1
PAYPAL_CLIENT_ID = 'YOUR_PAYPAL_CLIENT_ID'
PAYPAL_CLIENT_SECRET = 'YOUR_PAYPAL_CLIENT_ID'

```

> [!NOTE]  
> jika tidak memiliki akun paypal gunakan COD dalam payment

## Buat database menggunakan sequelize-cli 
```
  npx sequelize-cli db:create
```

## Migrasi skema database sequelize-cli 
```
  npx sequelize-cli db:migrate
```

### Seed atau membuat data ke dalam sequelize-cli
```
  npx sequelize-cli db:seed:all
```

### jika sudah seeding data jalankan aplikasi 
```
 npm run start
```


