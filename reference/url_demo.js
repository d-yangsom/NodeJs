const url = require('url')

const myUrl = new URL('http://start12345.com/hello.html?id=1919&status=active')

// Serialized URL
console.log(myUrl.href)       //http://start12345.com/hello.html?id=1919&status=active
console.log(myUrl.toString()) //http://start12345.com/hello.html?id=1919&status=active

// Host (root domain)
console.log(myUrl.host) // start12345.com

//Hots name
console.log(myUrl.hostname) // start12345.com

//Path name
console.log(myUrl.pathname) // /hello.html

// Serialized query
console.log(myUrl.search) // ?id=1919&status=active

// Params object
console.log(myUrl.searchParams) // URLSearchParams { 'id' => '1919', 'status' => 'active' }

//Add param
myUrl.searchParams.append('abc', '007') // URLSearchParams { 'id' => '1919', 'status' => 'active', 'abc' => '007' }
console.log(myUrl.searchParams);

//Loop thorugh param
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
/*
id: 1919
status: active
abc: 007
*/