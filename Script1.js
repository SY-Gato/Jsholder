(async function(){
async function getName(authToken) {
    const response = await fetch('https://api.blooket.com/api/users/verify-token?token=JWT+' + authToken);
    const data = await response.json();

    return data.name
};
const myToken = localStorage.token.split('JWT ')[1];
const name = await getName(myToken);
alert(`Token: ${myToken} Name: ${name}`);
})()
