import { useState } from "react";
import Button from "./Button";
import Input from "./input"; 

function App() {
  const [todos, setTodos] = useState({});
  const [inputNama, setInputNama] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const handlerNama = (e) => setInputNama(e.target.value);
  const handlerEmail = (e) => setInputEmail(e.target.value);

  const handlerTambahData = () => {
    setTodos({
      nama: inputNama,
      email: inputEmail 
    });
  }

  return (
    <div className="main-container">
      <h1>Register</h1>
      <div className="input-group">
        <Input 
            handlerInput={handlerNama} 
            placeholder="Masukkan Nama" 
        />
        
        <Input 
            handlerInput={handlerEmail} 
            placeholder="Alamat Email" 
        />

        <Button handlerTambahData={handlerTambahData} />
      </div>
      
      {/* Tampilan data jika sudah diisi */}
      {todos.nama && (
        <pre style={{marginTop: '30px'}}>
          {JSON.stringify(todos, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
