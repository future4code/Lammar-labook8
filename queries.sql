-- Active: 1674174693537@@35.226.146.116@3306@jbl-4417156-caroline-cunha
 CREATE TABLE IF NOT EXISTS labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labook_posts(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES labook_users (id)
      );

      CREATE TABLE IF NOT EXISTS labook_users_friendship (
         id VARCHAR (255) PRIMARY KEY,
         user_id VARCHAR (255) NOT NULL,
         friendship_id VARCHAR (255) NOT NULL,
         FOREIGN KEY (user_id) REFERENCES labook_users (id),
         FOREIGN KEY (friendship_id) REFERENCES labook_users (id)
      );