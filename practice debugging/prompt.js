//  prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
const addition = (promptData) =>{
   const Total = promptData + 200;
   alert(`this is addition number ${Total}`);
}

// console.log(parseInput+20);
const promptFn = () =>{
    const inputFlied = prompt('please input a number');
   const parseInput = JSON.parse(inputFlied);
   addition(parseInput);
}
promptFn();
