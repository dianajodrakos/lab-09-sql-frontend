import request from 'superagent';

const URL = 'https://boiling-mountain-20825.herokuapp.com';

export async function getAllBooks() {
    const data = await request.get(`${URL}/books`);

    return data.body;
}