import axios, {AxiosInstance} from "axios";

export const requestPostAxios = (url : string, axiosData : any) => {
    return customAxios.post(url,axiosData)
}

export const requestFirebaseAxios = (axiosData : any) => {
    return firebaseAxios.post("/send", axiosData)
}

export const requestGetAxios = (url : string, axiosData : any) => {
    return customAxios.get(url,axiosData)
}

export const paramSerialize = (params : any) => {
    return JSON.stringify(params)
}

const customAxios : AxiosInstance = axios.create({
    baseURL : `http://localhost:3000`,
    headers: {
        'Content-Type': 'application/json',
    },
})
const firebaseAxios : AxiosInstance = axios.create({
    baseURL : `https://fcm.googleapis.com/fcm`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'key=AAAAWYBVToE:APA91bGw3XB-gJ-FurrdiN8xa-irX_9HvWw9KaWxAUDiX6kcLjEsXk7UKsvtL-glPLpPKBqbuoNs1wVQHAFHbWzR8lXU5pID8S1DA2CTNPneTYYbpZpR2P_zv1eylwpYjEwZnmUzSif8' //위에서 찾았던 서버키 앞에 'key='을 붙여서 사용합니다.
    }
})