const JWT = require('jsonwebtoken');
const crypto = require('crypto');

const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', { modulusLength: 4096 });

console.log('Private key: ', privateKey.export({ type: 'pkcs1', format: 'pem'}).toString('utf-8'));
console.log('Public key: ', publicKey.export({ type: 'spki', format: 'pem'}).toString('utf-8'));

const token = JWT.sign({userId: 123, roles: ['admin']}, privateKey, { algorithm: 'RS256', expiresIn: '2 days'});

console.log('Sign token: ', token);

JWT.verify(token, publicKey, (err, decoded) => {
    console.log('Decoded: ', decoded);
});