


const myPromise = new Promise<number>( ( resolve, reject ) => {
    setTimeout(() => {
        reject('Mi amigo se dio a la fuga');
    }, 2000);
});


myPromise.then(
    (myMoneyIsBack) => {
        console.log(`Tengo mi dinero ${myMoneyIsBack}`)
    }
).catch( reason => {
    console.warn(reason)
}).finally(()=>{
    console.log('A seguir con mi vida')
});