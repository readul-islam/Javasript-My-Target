// The optional chaining operator provides a way to simplify accessing values through connected objects when it's possible that a reference or function may be undefined or null.
 const teamMamber = {
     name:'Akash Mahamud',
     work: 'junior web development'
 };
 const chack = teamMamber?.obj;
 console.log(chack);