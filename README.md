- Uses MLab for remote instance of MongoDB

- For this app to work in your environemt, you will need to provide your own `keys.js` file containing the following keys:

```js
module.exports = {
  googleClientID: "<your google client ID>",
  googleClientSecret: "<your google client secret>",
  mongoURI: "<your MLab URI>",
  cookieKey: "<a random string>"
}
```
