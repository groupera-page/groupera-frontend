import {useState, useEffect, Fragment} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const EmailVerify = () => {
    const [validUrl, setValidUrl] = useState(false);
    const param = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const verifyEmailUrl = async () => {
            try {
                const url = `http://localhost:5005/user/${param.id}/verify/${param.token}`;
                const {data} = await axios.get(url);
                console.log(data)
                // setValidUrl(true);
                navigate("/login");
            }
            catch (error) {
                console.log(error);
                setValidUrl(false)
            }
        };
        verifyEmailUrl();
    }, [navigate, param])

    return (
        <div></div>
    )
};

export default EmailVerify;