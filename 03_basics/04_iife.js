// +++++++++++ normal function declaration +++++++++++
function chai(){
    console.log(`DB CONNECTED`);
}

chai();

// +++++++++++ IIFE - Immediately Invoked Function Expression  (Named IIFE) +++++++++++
(function chai(){  
    console.log(`DB CONNECTED ONE`);
})();

// +++++++++++ IIFE with Arrow Function  (Unnamed IIFE)+++++++++++
( (name) => {
    console.log(`DB CONNECTED Two ${name}`);
}) ('Sujeet')