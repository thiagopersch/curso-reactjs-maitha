/**
 * Avaliação curto-circuito (short circuit)
 *
 * && -> false && true && true && true --> false
 *
 * || ->
 */

// valores Falsy => false, null, undefined, 0, "", NaN

/**
 * valores Trusy => if(true)
 * if({})
 * if([])
 * if(42)
 * if("foo")
 * if(new Date())
 * if(-42)
 * if(-3.14)
 */

console.log("Tiago" && {} && 1 && true); //Se todos for verdadeiro, ele retorna a ultima verdadeira
console.log(false || 0 || null || true || "Rafael"); // Se encontrar a primeira como verdadeira, ele a retorna
