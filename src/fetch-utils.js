import request from 'superagent';

const URL = 'https://boiling-mountain-20825.herokuapp.com';

export async function getAllBooks() {
    const data = await request.get(`${URL}/books`);

    return data.body;
}

//other functions
//getOneBook - takes id as argument
//createBook - takes form data as argument
//editBook - takes id, form data as argument
//deleteBook - teaks id as argument?
//getAllAuthors
//getAllCategoryes
//getAllLanguages