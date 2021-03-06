CREATE TABLE users (
    user_id TEXT NOT NULL PRIMARY KEY,
    user_hash TEXT NOT NULL,
    username TEXT NOT NULL
);

CREATE TABLE files (
    file_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    info TEXT NOT NULL,
    is_file INTEGER NOT NULL,
    is_public INTEGER NOT NULL,
    user_id TEXT NOT NULL,

    FOREIGN KEY(user_id) REFERENCES users(user_id)
);