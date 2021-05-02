import axios from "axios";

export default register = ({ email, password, name }) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ email, password, name});

    
    try{
        const res = await axios.post('/api/users', body, config)
    } catch(e){

    }

};

