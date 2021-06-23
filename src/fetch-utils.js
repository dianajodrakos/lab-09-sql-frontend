import request from 'superagent';

const URL = 'https://boiling-mountain-20825.herokuapp.com';

export async function getAllBooks() {
    const data = await request.get(`${URL}/books`);
    return data.body;
}

//other functions
//getOneBook - takes id as argument
export async function getOneBook(id) {
    const data = await request.get(`${URL}/books/${id}`);
    return data.body;
}

//createBook - takes form data as argument
export async function createBook(formData) {
    const data = await request
        .post(`${URL}/books/`)
        .send(formData);
    return data.body;
}

//editBook - takes id, form data as argument
export async function editBook(formData, id) {
    const data = await request
        .put(`${URL}/books/${id}`)
        .send(formData);
    return data.body;
}

//deleteBook - takes id as argument?
export async function deleteBook() {
    const data = await request.delete(`${URL}/books/${id}`);
    return data.body;
}

//getAllAuthors
export async function getAllAuthors() {
    const data = await request.get(`${URL}/authors`);
    return data.body;
}

//getAllCategories
export async function getAllCategories() {
    const data = await request.get(`${URL}/categories`);
    return data.body;
}

//getAllLanguages
export async function getAllLanguages() {
    const data = await request.get(`${URL}/languages`);
    return data.body;
}