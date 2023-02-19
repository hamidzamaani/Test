const fs = require('fs');
const crypto = require('crypto');

function computeHash(filename) {
  const data = fs.readFileSync(filename);
  const hash = crypto.createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
}

// Example usage
const knownHash = 'ABCD1234...';
const computedHash = computeHash('C:\\Users\\Hamid\\Desktop\\Snake Eddited\\snake_eddited_source_from_JADX\\resources\\lib\\arm64-v8a\\libnative-lib.so');

console.log("Hash : ")
console.log(computedHash);

if (computedHash === knownHash) {
  // code has not been modified
} else {
  // code has been modified
  // take appropriate action
}
