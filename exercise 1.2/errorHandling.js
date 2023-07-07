try {
    let num = 5;

    num.toUpperCase();
} catch (error) {
    console.log("An ocured error : ", error.message);
}

// const wait = (time) => new Promise((resolve) => setTimeout(resolve,time));

// const asyncAwait = async () => {
//     console.log("before 1 second");
//     await wait(2000);
//     console.log("after 2 second");
// }