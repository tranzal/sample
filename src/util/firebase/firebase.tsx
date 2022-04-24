import {getMessaging, getToken, onMessage} from "firebase/messaging";
import {initializeApp} from "firebase/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import {AxiosError, AxiosResponse} from "axios";
import {requestFirebaseAxios} from "../AxiosUtil";

const firebaseConfig = {
    apiKey: "AIzaSyCG0TTTvGdaL-ZQrJR8Y0xQiF0V8QeCCHw",
    authDomain: "blog-2b4fb.firebaseapp.com",
    projectId: "blog-2b4fb",
    storageBucket: "blog-2b4fb.appspot.com",
    messagingSenderId: "384405163649",
    appId: "1:384405163649:web:f8cf64e106409f5b34c780"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app)
const fireStore = getFirestore(app)

export const requestForToken = async () => {

    return await getToken(messaging, {vapidKey: 'BKRfCnmPYz_lkgw5ktVGgiOJ1TDxBC22L-Yj-clBfJHYp5U5ycDMdJIJuyD4cgXf-5kL7r97NMnzzrwFIuKSNIg'})
        .then((currentToken : string) => {
            if (currentToken) {
                return currentToken
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log("ttt")
            resolve(payload);
        });
    });

export const getFireStoreData = async (groupCode : string) => {
    let returnData: string[] = []
    const dataCollectionRef = collection(fireStore, groupCode)
    const dataSnapShot = await getDocs(dataCollectionRef)
    dataSnapShot.docs.map((doc) => {
        returnData.push(doc.data().token)
    })
    return returnData
}

export const sendFirebaseMessage = (tokenList : [], send : {title : string, body : string}) =>{
    tokenList.forEach((data) => {

        const option = {
            'to' : data, // 토큰 값
            'notification': {
                'title': send.title, //알림의 제목
                'body': send.body, //알림의 본문
            }
        }

        requestFirebaseAxios(option).then((data : AxiosResponse) => {
            console.debug(data)
        }).catch((error : AxiosError) => console.error(error))
    })
}
