
const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");

const app = express();

app.use(express.json());

const dbPath = path.join(__dirname, "books.db");
const port = process.env.PORT || 3000;

let db;

// Initialize database and start server
const initializeDBAndServer = async () => {
  try {
    // Connect to SQLite database
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    console.log("Database connected successfully");

    // Create books table
    await db.exec(`
      CREATE TABLE IF NOT EXISTS book (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        price INTEGER,
        pages INTEGER
      );
    `);

    console.log("Books table created successfully");

    // Insert sample data if table is empty
    const booksCount = await db.get(
      "SELECT COUNT(*) AS count FROM book"
    );

    if (booksCount.count === 0) {
      await db.run(`
        INSERT INTO book (title, author, price, pages)
        VALUES
        ('Atomic Habits', 'James Clear', 450, 320),
        ('The Alchemist', 'Paulo Coelho', 350, 208),
        ('Rich Dad Poor Dad', 'Robert Kiyosaki', 399, 336),
        ('Wings of Fire', 'A P J Abdul Kalam', 299, 180),
        ('Think and Grow Rich', 'Napoleon Hill', 250, 250),
        ('The Psychology of Money', 'Morgan Housel', 399, 256),
        ('Deep Work', 'Cal Newport', 450, 304),
        ('Ikigai', 'Hector Garcia', 299, 208),
        ('Zero to One', 'Peter Thiel', 399, 224),
        ('The 5 AM Club', 'Robin Sharma', 350, 336);
      `);

      console.log("10 sample books inserted successfully");
    }

    // Start server only after database initialization
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    });

  } catch (error) {
    console.error(`Database initialization failed: ${error.message}`);
    process.exit(1);
  }
};

// GET: Retrieve all books
app.get("/books/", async (request, response) => {
  try {
    const books = await db.all(
      "SELECT * FROM book ORDER BY id"
    );

    response.status(200).send(books);
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

// GET: Retrieve a single book
app.get("/books/:bookId/", async (request, response) => {
  try {
    const { bookId } = request.params;

    const book = await db.get(
      "SELECT * FROM book WHERE id = ?",
      [bookId]
    );

    if (!book) {
      return response.status(404).send({
        error: "Book not found"
      });
    }

    response.status(200).send(book);
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

// POST: Add a new book
app.post("/books/", async (request, response) => {
  try {
    const { title, author, price, pages } = request.body;

    if (
      typeof title !== "string" ||
      !title.trim() ||
      typeof author !== "string" ||
      !author.trim() ||
      !Number.isInteger(price) ||
      !Number.isInteger(pages) ||
      price < 0 ||
      pages < 0
    ) {
      return response.status(400).send({
        error: "Provide valid title, author, price and pages"
      });
    }

    const query = `
      INSERT INTO book (title, author, price, pages)
      VALUES (?, ?, ?, ?)
    `;

    const result = await db.run(query, [
      title.trim(),
      author.trim(),
      price,
      pages
    ]);

    response.status(201).send({
      message: "Book added successfully",
      bookId: result.lastID
    });

  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

// PUT: Update an existing book
app.put("/books/:bookId/", async (request, response) => {
  try {
    const { bookId } = request.params;
    const { title, author, price, pages } = request.body;

    if (
      typeof title !== "string" ||
      !title.trim() ||
      typeof author !== "string" ||
      !author.trim() ||
      !Number.isInteger(price) ||
      !Number.isInteger(pages) ||
      price < 0 ||
      pages < 0
    ) {
      return response.status(400).send({
        error: "Provide valid title, author, price and pages"
      });
    }

    const existingBook = await db.get(
      "SELECT * FROM book WHERE id = ?",
      [bookId]
    );

    if (!existingBook) {
      return response.status(404).send({
        error: "Book not found"
      });
    }

    const query = `
      UPDATE book
      SET title = ?, author = ?, price = ?, pages = ?
      WHERE id = ?
    `;

    await db.run(query, [
      title.trim(),
      author.trim(),
      price,
      pages,
      bookId
    ]);

    response.status(200).send({
      message: "Book updated successfully"
    });

  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

// DELETE: Remove a book
app.delete("/books/:bookId/", async (request, response) => {
  try {
    const { bookId } = request.params;

    const result = await db.run(
      "DELETE FROM book WHERE id = ?",
      [bookId]
    );

    if (result.changes === 0) {
      return response.status(404).send({
        error: "Book not found"
      });
    }

    response.status(200).send({
      message: "Book deleted successfully"
    });

  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

// Initialize application
initializeDBAndServer();
