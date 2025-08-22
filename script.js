let nome = (prompt("nome do usuario"))
let idade = parseInt(prompt("idade do usuario"))
let senha = parseInt(prompt("senha do usuario"))

if ( idade >= 13 ){
alert (`

Login realizado com sucesso! Bem-vindo,${nome} `)

alert (`--- Cadastro de Usuário ---
nome: ${nome} 
idade: ${idade}
senha: ${senha}

Login realizado com sucesso! Bem-vindo,${nome} `) 
} 

else if ( idade < 13 ) { 
    alert (`não foi pssivel seu cadastro. Idade mínima: 13 anos. `)
    }

/*alert (`--- Cadastro de Usuário ---
Digite seu nome: ${nome} 
Digite sua idade: ${idade}
Digite uma senha: ${senha}

Cadastro realizado com sucesso!

--- Login ---
Digite seu nome: ${nome}
Digite sua senha: ${senha}

Login realizado com sucesso! Bem-vindo,${nome} `) */
