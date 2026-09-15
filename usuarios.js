// Funcion para crear usuarios
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

// Funcion para validar los datos de los usuarios
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

// Funcion para filtrar los usuarios por rol
function getActiveUsersByRole(users, role){
   
    const rolUsers = users.filter(user => user.rol === role && user.active === true);
    return rolUsers;
}


// Funcion para buscar usuarios por correo electronico
function findUserByEmail(users, email){
    const emailUsers = users.find(user => user.email === email);
    if(emailUsers !== undefined){
        return emailUsers;
    }else{
        return null;
    }
}
// Funciones para comparar el valor esperrado vs el actual
function validateUserData(user, expectedRole, expectedActive){
    return user.rol === expectedRole && user.active === expectedActive;
}
function assertUserRole(user, expectedRole){
    if(user.rol === expectedRole){
        return "PASS";
    }else{
        return "FAIL";
    }
}

// Funcion para crear un usuario
function generateTestUser(id){

    const user = {};
    user.id = id;
    user.nombre = `user${id}`;
    user.email = `user${id}@test.com`;
    user.edad = 25;
    user.rol = "QA";
    user.active = true;

    return user;
}

// Funcion para crear muchos usuarios
function generateUsers(quantity){

    const users = [];
    for(let i = 1; i <= quantity; i++){
        let userGenerated = generateTestUser(i);
        users.push(userGenerated);
    }

    return users;
}

// Funcion para validar todos lo usuario y determinar si cada uno es válido
function validateGeneratedUsers(users){

    let passed = 0;
    let failed = 0;
    
    for(let i = 0; i < users.length; i++){
        const user = users[i];
        const resultado = validateUser(user);
        let validResultado = "";
        if( resultado === true){
             validResultado = "PASS";
             passed++;
        }else{
             validResultado = "FAIL";
             failed++;
        }
        console.log(`User ${user.id}: ${validResultado}`);
    }
    return users;
}

// --------------------------------------------------------------------------- //
// Probando las funciones de crear y validar usuario, con varios escenarios
// Escenarios: Positivos y negativos

// Caso positivo: Datos correctos
const user1 = createUser(8, "Karen", "karen@gmail.com", 19, "QA", false);
console.log(user1);
console.log(validateUser(user1));

// Caso negativo: Nombre vacio
const user2 = createUser(1,"", "karen@gmail.com", 18, "QA", true);
console.log(user2);
console.log(validateUser(user2));

// Caso negativo: Correo vacio
const user3 = createUser(2,"Ana", "", 28, "Developer", true);
console.log(user3);
console.log(validateUser(user3));

// Caso negativo: Edad < 18
const user4 = createUser(3,"Luis", "Luis@gmail.com", 0, "Manager", false);
console.log(user4);
console.log(validateUser(user4));

// Caso positivo: Validacion de Correo 
const user5 = createUser(5,"Alma", "karen.com", 32, "QA", true);
console.log(user5);
console.log(validateUser(user5));

// Caso negativo: Rol no listado
const user6 = createUser(6,"Alma", "alma_01@gmail.com", 32, "P", "");
console.log(user6);
console.log(validateUser(user6));

// Caso negativo: Activo diferente de true y false
const user7 = createUser(7,"", "", 12, "Admi", "yes");
console.log(user7);
console.log(validateUser(user7));

// Crear colección de usuarios
const users = [user1, user2, user3, user4, user5, user6, user7];

// Probamos funcion de Filtrar por rol, con los usuarios creados
const activeQAUsers = getActiveUsersByRole(users, "QA");
console.log("Usuarios filtrados por rol QA y activos:");
console.log(activeQAUsers);

// Probamos funcion de buscar por correo
const usersByEmail = findUserByEmail(users, "Luis@gmail.com");
console.log(usersByEmail);

// Probamos function de comparar valores esperados vs actual
const expectedDataUser = validateUserData(user2, "Developer", true);
console.log(expectedDataUser);

const expectedRoleUser = assertUserRole(user1, "Developer");
console.log(expectedRoleUser);

// Probamos function que crea un usuario
const newUser = generateTestUser(12);
console.log(newUser);

// Probamos function que crea muchos usuario
const usersGenerated = generateUsers(5);
console.log(usersGenerated);

// Probamos function que valida a los usuarios
const validUsers = validateGeneratedUsers(usersGenerated);
console.log(validUsers);
