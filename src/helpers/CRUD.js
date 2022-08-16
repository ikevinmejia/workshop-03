import axios from "axios";

const getDataState = async (url, state) => {
    try {
        const respuesta = await fetch(url);

        const datos = await respuesta.json();

        state(datos);
    } catch (error) {
        console.log(error);
    }
};

const getDataAxios = async (state, url) => {
    const peticion = await axios.get(url);
    state(peticion.data);
};

const postData = async (url, data) => {
    try {
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        });
    } catch (error) {
        console.error(error);
    }
};

const patchData = async (url, data) => {
    try {
        await fetch(url, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        });
    } catch (error) {
        console.error(error);
    }
};

const deleteData = async (url) => {
    try {
        await fetch(url, {
            method: "DELETE",
        });
    } catch (error) {
        console.error(error);
    }
};

export {
    getDataAxios,
    postData,
    patchData,
    deleteData,
    getDataState
};