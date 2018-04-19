const {SHA256} = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var password = "123abc";

// bcrypt.genSalt(10,(err, salt)=>{
//   bcrypt.hash(password, salt, (err, hash)=>{
//     console.log(hash);
//   });
// });

var hashPassword = "$2a$10$Kwi2iMejgMfoI7F5EOL/JeC8pLbfO384PbTeUnQalo9sSx.MGl60y";

bcrypt.compare(password, hashPassword, (err, res) =>{
  console.log(res);
});



// var data = {
//   id:10
// };
//
// var token = jwt.sign(data,"dad233");
// console.log(token);
//
// var decoded = jwt.verify(token, "dad233");
// console.log(decoded);

// var message = "I love football";
// var hash = SHA256(message).toString();
//
// console.log(`This m ${message}`);
// console.log(`This hash ${hash}`);
//
//
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
