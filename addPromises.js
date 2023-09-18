var addTwoPromises = async function(promise1, promise2) {
    const [val1,val2]= await Promise.all([promise1,promise2]);
    return val1+val2
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 In the code you provided, Promise.all is used to concurrently await the resolution of two promises: promise1 and promise2. It takes an array of promises as its argument and returns a new promise that resolves when all the promises in the array have resolved, or rejects when any one of them rejects.

Here's a detailed explanation of what Promise.all is doing in your code:

Promise.all([promise1, promise2]): This line creates an array [promise1, promise2], containing the two promises you want to concurrently await.

await Promise.all([promise1, promise2]): The await keyword is used to pause the execution of the function until the promise returned by Promise.all settles (either resolves or rejects). At this point, the code will wait for both promise1 and promise2 to resolve.

const [val1, val2]: The destructuring assignment is used to extract the resolved values of promise1 and promise2 from the array returned by Promise.all. val1 holds the resolved value of promise1, and val2 holds the resolved value of promise2.

return val1 + val2: Finally, the function returns a new promise that resolves to the sum of val1 and val2. Since you're using this code in an async function, JavaScript automatically wraps the result in a promise.

This entire process allows you to concurrently execute multiple promises and work with their resolved values as soon as they are all resolved, improving performance compared to sequential execution. It's especially useful when you have multiple asynchronous tasks that can be executed independently and you want to wait for all of them to complete before proceeding with further operations.
 */