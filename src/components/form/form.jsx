import { useState, useMemo } from "react";
import "./form.css"

function Form() {
    const [loginForm, setLoginForm] = useState({
        fname:'',
        lname:'',
        gender:'',
        country:'',
    });

    const [error, setError] = useState({
        fname:'',
        lname:'',
        gender:'',
        country:'',
    });

    const [ users,setUsers ] = useState([]);
    const [ editId,setEditId ] = useState(null);


    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(Object.values(error).every(error => error === '')) {
            setUsers((prev) => {
                if(editId !== null) {
                    prev[0] = loginForm;
                    setEditId(null);
                    return prev;
                } 
                return [...prev, loginForm];
            });
            setLoginForm({
                fname:'',
                lname:'',
                gender:'',
                country:'',
            })
        } else {
            console.log("Form has errors, please correct them.");
        }
    }


    const inputHandler = (e) => {
        const { name, value} = e.target;
        let err = '';

        if( name ==='fname' &&( value.trim() === '' || /\d/.test(value)) ) {
            err =' Please enter a valid fname';
        } else if( name ==='lname' &&( value.trim() === '' || /\d/.test(value)) ) {
            err =' Please enter a valid lname';
        } else if( name ==='gender' &&( value.trim() === '' || /\d/.test(value)) ) {
            err =' Please enter a valid gender';
        } else if( name ==='country' &&( value.trim() === '' || /\d/.test(value)) ) {
            err =' Please enter a valid country';
        }

        setError((prev) => ({
            ...prev,
            [name]: err
        }))

        setLoginForm((prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        }));
    }

    const editHandler = (id) => {
        setLoginForm(users[id]);
        setEditId(id);
    }


    // const memoizedUsers = useMemo(() => users, [users]);

    return (
        <div>
            <h1>Form</h1>
            <form className="form__container" onSubmit={formSubmitHandler}>
                <label htmlFor="fname">fname</label>
                <input required  onInput={(e) =>inputHandler(e)} type="text" value={loginForm.fname} name="fname" />
                {error.fname && <p className="error">{error.fname}</p>}

                <label htmlFor="lname">lname</label>
                <input required onInput={(e) =>inputHandler(e)} type="text" value={loginForm.lname} name="lname" />
                {error.lname && <p className="error">{error.lname}</p>}

                <label htmlFor="gender">gender</label>
                <input required onInput={(e) =>inputHandler(e)} type="text" value={loginForm.gender} name="gender" />
                {error.gender && <p className="error">{error.gender}</p>}

                <label htmlFor="country">country</label>
                <input  onInput={(e) =>inputHandler(e)} type="text" value={loginForm.country} name="country" />
                {error.country && <p className="error">{error.country}</p>}

                <button type="submit">Submit Form</button>
            </form>

            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Country</td>
                    </tr>

                    {
                        users.map((data,i) => (
                            <tr key={i} >
                                <td>{data.fname}</td>
                                <td>{data.country}</td>
                                <td>
                                    <button onClick={() => editHandler(i)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Form;