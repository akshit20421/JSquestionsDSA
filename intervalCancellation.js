var cancellable = function(fn, args, t) {
    fn(...args)
    const cancelFn=()=>{
        clearInterval(timer)
    }
    const timer=setInterval(()=>{
       fn(...args) 
    },t)
    return cancelFn
};

// To set an interval timer, we use the setInterval function. In the code snippet below, setInterval will repeatedly call () => fn(...args) every t milliseconds. It's important to note that setInterval does not immediately call the function before t milliseconds, which is why we manually call fn(...args) once before setting the interval.

// Next, we define a function called cancelFn that clears the interval when it's called. We return cancelFn from the main function. It's worth mentioning that cancelFn is not called when our cancellable function is initially defined. However, whenever the cancellable function is called, it returns cancelFn. The cancelFn can then be called at a later time to clear the interval.