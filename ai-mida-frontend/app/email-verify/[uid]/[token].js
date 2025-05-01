import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function VerifyEmail() {
    const router = useRouter();
    const { uid, token } = router.query
    const [message, setMessage] = useState('verifying...');


    useEffect(() => {
        if (uid && token) {
            axios.get('http://localhost:8000/api/verify-email/${uid}/${token}/')
            .then(() => setMessage('Email verified! you can now log in.'))
            .catch(() => setMessage('Verified failed.'));
        }
    }, [uid, token]);

    return <p>{message}</p>
}