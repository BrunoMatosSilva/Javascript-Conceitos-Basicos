const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('Sucesso!');
    reject('Erro!');
  }, 2000)
});

//apiCall.then((res) => {
//  console.log(res);
//})
//.catch((error) => {
 // console.log(error)
//})

async function run () {
try {
  const resposta = await apiCall;
console.log(resposta)
}catch(error) {
  console.log(error);
}
}

run();
