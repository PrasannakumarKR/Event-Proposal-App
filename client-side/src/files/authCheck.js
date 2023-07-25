import { useEffect, useState } from 'react';
import axios from 'axios';
import url from '../backendUrl';
import { useNavigate } from 'react-router-dom';

const useAuthCheck = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate(`/`);
        } else {
            const headers = { token };
            axios.get(`${url}/user/authcheck`, { headers })
                .then((res) => {
                    if (res.data.success) {
                        setData(res.data.data);
                    } else {
                        setData(null);
                        navigate('/');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    }, [navigate]);
    if (data) {
        return data;
    }

};

export default useAuthCheck;