/*
* CHALLENGE progresso do formulário

* INSTRUÇÕES
Neste desafio sua missão é criar um formulário e seus 4 campos (com controlled inputs),
juntamente com uma barra de progresso que altera-se conforme o usuário preenche os campos.
- Crie também validações para cada campo conforme instruções abaixo.

* BARRA DE PROGRESSO
Para aproveitar estilização já definida, crie:
- a barra com um elemento pai chamado .bar-container e seu filho .bar

* CAMPOS DO FORMULÁRIO:
input - nome completo - válido se digitar no mínimo dois nomes,
input - email - válido se digitar um e-mail,
select - estado civil,
radio - gênero

Para validação de e-mail use a seguinte RegEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

* FUNCIONAMENTO
Espera-se que o formulário tenha 4 campos ao todo. Portanto, quando o usuário preencher
o primeiro campo, a barra de progresso deve assumir 25% do tamanho total;
o segundo campo, 50% e assim por diante...

Caso o usuário não tenha definido valores para os elementos de select e radio,
os mesmos não devem ser considerados como preenchidos até então.

Se o usuário preencher um campo e apagar seu valor, este campo deve ser considerado como vazio,
fazendo com que a barra de progresso regrida novamente.

Desabilitar o botão de enviar caso todos os campos não estejam preenchidos/válidos.

Ao enviar, deve-se apresentar um alert javascript com sucesso, limpar todos os campos
do formulário e zerar a barra de progresso novamente.
*/

import { useEffect, useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [civilStatus,setCivilStatus]=useState('');
  const [sex,setSex]=useState('');
  const [emailError,setEmailError]=useState(false);


  useEffect(()=>{
    const object={name,email,civilStatus,sex};
    let newProgress=100;
    Object.values(object).forEach((value)=>{
      if(value==''){
        newProgress-=25;
      }
    })
    setProgress(newProgress);
  },[name,email,civilStatus,sex])


  const handleSubmit=(()=>{
    if(!validateEmail(email)){
      setEmailError(true);
      return;
    }
    alert('Formulário enviado com sucesso');
    setEmailError(false);
    setName('');
    setEmail('');
    setCivilStatus('');
    setSex('');
    setProgress(0);
  })

  const validateEmail=(email)=>{
    const regex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }


  return (
    <div className='App'>
      <h3>desafio fernandev</h3>
      <h1>progresso do formulário</h1>
      <main>
        <div className="bar-container">
          <div className='bar' style={{ width: `${progress}%` }}></div>
          </div>
        <div className='form-group'>
          <label htmlFor='name'>Nome Completo</label>
          <input id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>E-mail</label>
          <input id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          {emailError && <span style={{color:"#F00"}}>Email inválido</span>}
        </div>
        <div className='form-group'>
          <label htmlFor=''>Estado Civil</label>
          <select onChange={(e)=>setCivilStatus(e.target.value)} >
            <option value='' disabled selected={civilStatus===""}>- selecione...</option>
            <option value='solteiro' selected={civilStatus==="solteiro"}>Solteiro</option>
            <option value='casado' selected={civilStatus==="casado"}>Casado</option>
            <option value='divorciado' selected={civilStatus==="divorciado"}>Divorciado</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Gênero</label>
          <div className='radios-container'>
            <span>
              <input type='radio' value="masculino" checked={sex=="masculino"}  onChange={(e)=>setSex(e.target.value)}/> Masculino
            </span>
            <span>
              <input type='radio' value="feminino" checked={sex=="feminino"} onChange={(e)=>setSex(e.target.value)}/> Feminino
            </span>
          </div>
        </div>
        <button onClick={handleSubmit} disabled={!name || !email || !civilStatus || !sex}>Enviar Formulário</button>
      </main>
    </div>
  );
}

export default App;
