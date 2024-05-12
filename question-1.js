const { error } = require('console');
const http = require('http');

const menClothing = [
   { product: 1,
    name:'t-shirt',
    brand:'abc',
    category: 'mens'
   },
   { product: 1,
    name:'t-shirt',
    brand:'abc',
    category: 'mens'
   },
   { product: 1,
    name:'t-shirt',
    brand:'abc',
    category: 'mens'
   },
   { product: 1,
    name:'t-shirt',
    brand:'abc',
    category: 'mens'
   },
   { product: 1,
    name:'t-shirt',
    brand:'abc',
    category: 'mens'
   },
   { product: 1,
    name:'t-shirt',
    brand:'abc',
    category: 'mens'
   },
   { product: 1,
    name:'t-shirt',
    brand:'abc',
    category: 'mens'
   },
   { product: 1,
    name:'t-shirt',
    brand:'abc',
    category: 'mens'
   },
   { product: 1,
    name:'t-shirt',
    brand:'abc',
    category: 'mens'
   },
   { product: 1,
    name:'t-shirt',
    brand:'abc',
    category: 'mens'
   }
];

const womenClothing = [
  { product: 1, name: "t-shirt", brand: "abcd", category: "women" },
  { product: 1, name: "t-shirt", brand: "abcd", category: "women" },
  { product: 1, name: "t-shirt", brand: "abcd", category: "women" },
  { product: 1, name: "t-shirt", brand: "abcd", category: "women" },
  { product: 1, name: "t-shirt", brand: "abcd", category: "women" },
  { product: 1, name: "t-shirt", brand: "abcd", category: "women" },
  { product: 1, name: "t-shirt", brand: "abcd", category: "women" },
  { product: 1, name: "t-shirt", brand: "abcd", category: "women" },
  { product: 1, name: "t-shirt", brand: "abcd", category: "women" },
  { product: 1, name: "t-shirt", brand: "abcd", category: "women" }
];

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','application/json');

    if(req.url === '/'){
        res.end('Welcome to dummy data of men and women')
    }
    else if(req.url === '/men'){
        res.end(JSON.stringify(menClothing))
    }
    else if(req.url === '/women'){
        res.end(JSON.stringify(womenClothing))
    }
    else{
        res.statusCode = 404;
        res.end(JSON.stringify({error:'server not found!'}))
    }
})
const PORT = 4000;
server.listen(PORT,()=>{
    console.log(`Server running on port:${PORT}`);
})