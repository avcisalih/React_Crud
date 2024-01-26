import {v4} from "uuid";
import axios  from "axios";

const Form = ({setTodos}) => {

const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const status = e.target[1].value;

    if (!title){
        return alert("Not Ekle Kısmını Boş Bıraktınız. Lütfen Not Yazınız.")
    }

    const newTodo = {
        title: title,
        status: status,
        id: v4(),
        date: new Date().toLocaleDateString(),
    };

    console.log(newTodo);

    // fetch("http://localhost:3000/todos",{
    //     method: 'POST',
    //     body: JSON.stringify(newTodo),
    // })

    // .then(() => setTodos((prev) => [newTodo, ...prev ]))

    // .catch(() => alert('Üzgünüz Bir Sorun Oluştu'))


    axios.post('/todos', newTodo)
    
    .then(() => setTodos((todos) => [newTodo, ...todos ]))

    .catch(() => alert('Üzgünüz Bir Sorun Oluştu'));
};

    return (
        <form 
        onSubmit={handleSubmit}
        className="d-flex justify-content-center gap-3 my-5">
            <input 
            placeholder="Not Ekle..."
            className="form-control shadow"
            type="text"
            />

            <select className="form-select w-50 shadow">
                <option>Varsayılan</option>
                <option value={"important"}>Önemli</option>
                <option value={"daily"}>Günlük</option>
                <option value={"job"}>İş</option>
            </select>

            <button type="submit" className="btn btn-secondary shadow">Gönder</button>

        </form>
    )
    
};

export default Form;