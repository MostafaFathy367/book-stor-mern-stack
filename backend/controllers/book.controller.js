import Books from "../models/bookModel.js";

export const getBooks = async (req, res) => {
  try {
    const query = req.query;
    const limit = query.limit || 10;
    const page = query.page || 1;
    const skip = (page - 1) * limit;
    const books = await Books.find({}, { __v: false }).limit(limit).skip(skip);
    res.status(200).send({ status: "success", data: { books } });
  } catch (error) {
    res
      .status(404)
      .send({ status: "error", data: { title: "Book not found" } });
  }
};

export const getSingleBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Books.findById(id)
    if (!book) {
      return res
      .status(404)
      .send({ status: "error", data: { message: "Book not found" } });
    }
    return res.status(200).send({ status: "success", data: { book } });
  } catch (error) {
    res
      .status(404)
      .send({ status: "error", data: { message: "Book not found" } });
  }
};

export const createBook = async (req, res) => {
  try {
    const newBook = new Books(req.body);
    await newBook.save();
    res.status(201).send({ data: { newBook }, statue: "success" });
  } catch (error) {
    res.status(400).send({ message: error, status: "error" });
  }
};

export const updateBook = async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  try {
    const updateBook = await Books.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { returnDocument: "after" }
    );
    return res.status(200).send({ data: { updateBook }, status: 'success' });
  } catch (error) {
    res.status(400).send({ message: error, status: "error" });
  }
};

export const deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    await Books.findByIdAndDelete(id);
    res.status(200).send({ data: null, status: 'success' });
  } catch (error) {
    res.status(404).send({ status: 'error', message: error });
  }
};
