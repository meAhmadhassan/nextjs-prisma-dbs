# 🔐 **Next.js Different Database Integrations with Prisma**  

 Next.js repository with Prisma that provides a guide on how to set up different databases such as MySQL, PostgreSQL, MongoDB, and more. This project demonstrates the flexibility of Prisma with various databases and how to configure each one step-by-step for a seamless Next.js integration.

 ## 📂 **Environment Variables (.env) Setup**  
To run this project, you need to configure the following **environment variables** in your `.env` file:

```env
# Site URL
DATABASE_URL=
```

## 🛠️ **Setup MySQL**
1. Clone the repository:  
   ```bash
   git clone https://github.com/meAhmadHassan/nextjs-prisma-dbs.git
   cd nextjs-prisma-dbs
   npm install
   ```
2. Create Schema File for MySQL or replace inner content of file
    ```bash
    // path: app/prisma/schema.prisma
    generator client {
        provider = "prisma-client-js"
        previewFeatures = ["fullTextIndex", "fullTextSearch"]
    }

    datasource db {
        provider = "mysql"
        url      = env("DATABASE_URL")
    }

    model Task {
        id        String   @id @default(uuid())
        title     String
        @@fulltext([title]) 
    }
    ```

3. Create a free account and database:
    - https://aiven.io/
    - Goto Services > MySQL
    - Choose Free Plan 
    - Select Region if required
    - Give a name to database 
    - Click Create 
    - Once database is ready and running copy the Service URI and copy in .env file in DATABASE_URL

4. Migrate and push database
    ```base
    npx prisma generate // to generate the schema
    npx prisma db push // to push schema to linked database 
    npx prisma studio // prisma browser dashboard to handle database and manually do the crud operations 
    ```

5. Run the development server:  
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.



## 🛠️ **Setup PostgreSql**
1. Clone the repository:  
   ```bash
   git clone https://github.com/meAhmadHassan/nextjs-prisma-dbs.git
   cd nextjs-prisma-dbs
   npm install
   ```

2. Create Schema File for MySQL or replace inner content of file
    ```bash
    // path: app/prisma/schema.prisma
    generator client {
     provider = "prisma-client-js"
    }

    datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
    }

    model Task {
        id        String   @id @default(uuid())
        title     String
    }

    ```

3. Create a free account and database:
    - https://neon.tech
    - Create New Project
    - Give a name to database 
    - Click Create 
    - Once database is ready and running copy the Database Connection String and copy in .env file in DATABASE_URL

4. Migrate and push database
    ```base
    npx prisma generate // to generate the schema
    npx prisma db push // to push schema to linked database 
    npx prisma studio // prisma browser dashboard to handle database and manually do the crud operations 
    ```

5. Run the development server:  
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.



## 🛠️ **Setup MongoDB**
1. Clone the repository:  
   ```bash
   git clone https://github.com/meAhmadHassan/nextjs-prisma-dbs.git
   cd nextjs-prisma-dbs
   npm install
   ```

2. Create Schema File for MySQL or replace inner content of file
    ```bash
    // path: app/prisma/schema.prisma
    generator client {
        provider = "prisma-client-js"
    }

    // DB Provider
    datasource db {
        provider = "mongodb"
        url      = env("DATABASE_URL")
    }

    // DB Table
    model Task {
        id        String   @id @default(auto()) @map("_id") @db.ObjectId
        title     String
    }

    ```

3. Create a free account and database:
    - https://www.mongodb.com/products/platform/atlas-database
    - Goto Database > Cluster 
    - Create New Cluster
    - Choose Free Plan
    - Give a name to database 
    - Click Create 
    - Create username and password 
    - Choose mongodb for vscode as a connection string method then copy Database Connection String and copy in .env file in DATABASE_URL

4. Migrate and push database
    ```base
    npx prisma generate // to generate the schema
    npx prisma db push // to push schema to linked database 
    npx prisma studio // prisma browser dashboard to handle database and manually do the crud operations 
    ```

5. Run the development server:  
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## 🛠️ **Setup Sqlite**
    - Coming soon 

## 🛠️ **Setup MariaDb**
    - Coming soon

## 🛠️ **Setup Microsoft SQL Server**
    - Coming soon


## 🛠️ **Setup Azure SQL**
    - Coming soon


## 📚 **Credits / Learning Resources**

- [Next.js Documentation](https://nextjs.org/docs) - The official documentation helped me understand how to implement server actions, middleware, and other core features of Next.js.
- [Auth.js Documentation](https://authjs.dev/) - I followed the Auth.js docs to set up authentication, including social logins, JWT, and session management.
- [Prisma Documentation](https://www.prisma.io/docs) - Prisma was essential for managing the database and performing queries.
- [Antonio](https://www.codewithantonio.com/) - I learned to implement database integration from his tutorials.