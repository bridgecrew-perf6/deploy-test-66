import axios from 'axios'

export async function loadFurniture() {
    try {    
        const res = await axios.get(`/api/furniture`
        // , {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept: "application/json; charset=UTF-8",
        //         'User-Agent': '*',
        //     },
        // }
        )
        // const data = await res.json()
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function loadFurnitureSections(params) {
    try {
        const res = await axios.get(`/api/furniture/${params.uri}`
        // , {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept: "application/json; charset=UTF-8",
        //         'User-Agent': '*',
        //     },
        // }
        )
        // const data = await res.json()
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
        return []
    }
  
}

export async function loadFurnitureSpecifics(params) {
    try {
        const res = await axios.get(`/api/furniture/${params.uri}/${params['furniture-specifics']}`
        // , {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept: "application/json; charset=UTF-8",
        //         'User-Agent': '*',
        //     },
        // }
        )
        // const data = await res.json()
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}