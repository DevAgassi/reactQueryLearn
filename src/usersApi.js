import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:9000/api/v1/'
});

export const getUsers = () => api.get('user').then((res) => res.data);

export const getUser = (id) => api.get(`/user/${id}`).then((users) => users.data);

export const updateUser = ({uuid, ...updatedUser}) => {
    console.log(uuid)
    return api.put(`/user/${uuid}`, updatedUser).then((res)=> res.data);
}