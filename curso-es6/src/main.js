import axios from 'axios';

class Api {
    static async getUserInfo(username){
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);

    }
}

Api.getUserInfo('joaojvf');

const minhaPromise = () => new Promise((resolve, reject) =>
{
    setTimeout(() => { resolve('OK')  
    }, 2000);
});

// minhaPromise().then(response => {
//     console.log(response);
// })
// .catch(err =>{

// });


async function executaPromise(){
    const response = await minhaPromise();
    console.log(response) //2 segundos

    console.log(await minhaPromise()); //4segundos
    console.log(await minhaPromise());//6segundos
}

executaPromise();