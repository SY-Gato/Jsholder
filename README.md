# Jsholder
Some random scripts I made.


### [Script1.js](https://github.com/SY-Gato/Jsholder/blob/main/Script1.js)

This is a bookmarklet for [Blooket](https://blooket.com) (Kind of like Kahoot! but with more games) that gets your account token and name.
Use this instead, as it is minifed and smaller:
```js
javascript:(async function(){async function getName(authToken){const response=await fetch('https://api.blooket.com/api/users/verify-token?token=JWT+'+authToken);const data=await response.json();return data.name};const myToken=localStorage.token.split('JWT ')[1];const name=await getName(myToken);alert(`Token: ${myToken} Name: ${name}`)})()
```
