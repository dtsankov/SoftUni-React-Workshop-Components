/* eslint-disable no-unused-vars */
const baseUrl = "http://localhost:3030/jsonstore/users";

export const getAll = async () => {
        const response = await fetch(baseUrl);
        const result = await response.json();

        const data = Object.values(result);

        return data;
};

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`)
    const userData = await response.json()

    return userData;
}

export const create = async (data) => {

    const body = {
        firstName : data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address: {
          country: data.country,
          city: data.city,
          street: data.street,
          streetNumber: data.streetNumber
        }
      }
      

    const response = await fetch(baseUrl,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    })

    const result = await(response.json())

    return result
}

export const deleteUser = async(userId) =>{
    const response = await fetch(`${baseUrl}/${userId}`,{
        method: 'DELETE',
        headers: {'Content-Type' : 'application/json'}
    })

    const result = await response.json()

    return result
}
