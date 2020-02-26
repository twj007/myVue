
// 同步 undefined - outside - inside

function a(){
  setTimeout(() => {
    console.log("inside");
    return 1;
  } , 3000)
}

async function b(){

  let l = await a()
  console.log(l)
  console.log("outside")

}

b()
// 异步 inside - 1 - outside

function c(){
  setTimeout(() => {
    console.log('inside')
    return new Promise((resolve, reject) => {
      resolve(1)
    })
  }, 3000)
}

async function d(){
  let l = await c()
  console.log(l)
  console.log('outside')
}
