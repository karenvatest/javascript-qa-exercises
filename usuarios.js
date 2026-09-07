function createUser(id,nombre, email, edad, rol, active){
    const user = {
        id,
        nombre,
        email,
        edad,
        rol,
        active
    };
    return user;   
}

function validateUser(user){
    const roles = ["QA", "Developer", "Manager", "PO"];
    let nombreValido;
    let emailValido;
    let edadValida;
    let rolValido;
    let activeValido;
    if(user.nombre !== ""){
        nombreValido = true;
    }else{
        nombreValido = false;
        console.log("Debes ingresar tu nombre");
    }
    if(user.email !== "" && user.email.includes("@") && user.email.includes(".")){
        emailValido = true;
    }else{
        emailValido = false;
        console.log("Debes ingresar un email valido");
    }
    if(user.edad >= 18){
        edadValida = true;
    }else{
        edadValida = false;
        console.log("Debes ser mayor de 18 años");
    }
    if(roles.includes(user.rol)){
        rolValido = true;
    }else{
        rolValido = false;
        console.log("Tu rol no esta en nuestra lista");
    }
    if(user.active === true || user.active === false){
        activeValido = true;
    }else{
        activeValido = false;
        console.log("Usuario no registrado");
    }

    // Debbuggin: Codigo para validar la funcion
    /*console.log("nombre:", nombreValido);
    console.log("email:", emailValido);
    console.log("edad:", edadValida);
    console.log("rol:", rolValido);
    console.log("active:", activeValido);

    console.log(
        nombreValido && emailValido && edadValida && rolValido && activeValido
    );*/

    if(nombreValido && emailValido  && edadValida && rolValido && activeValido){
        console.log("Usuario valido");
        return true;
    }else{
        console.log("Usuario invalido");
        return false;
    }
              
}

// Probando las funciones, con varios escenarios
// Positivos y negativos
const user1 = createUser(8, "Karen", "karen@gmail.com", 19, "QA", true);
console.log(user1);
console.log(validateUser(user1));

const user2 = createUser(1,"", "karen@gmail.com", 18, "QA", true);
console.log(user2);
console.log(validateUser(user2));

const user3 = createUser(2,"Ana", "", 28, "Developer", true);
console.log(user3);
console.log(validateUser(user3));

const user4 = createUser(3,"Luis", "Luis@gmail.com", 0, "Manager", false);
console.log(user4);
console.log(validateUser(user4));

const user5 = createUser(5,"Alma", "karen.com", 32, "QA", true);
console.log(user5);
console.log(validateUser(user5));

const user6 = createUser(6,"Alma", "alma_01@gmail.com", 32, "P", "");
console.log(user6);
console.log(validateUser(user6));

const user7 = createUser(7,"", "", 12, "Admi", "yes");
console.log(user7);
console.log(validateUser(user7));
