'use client';

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from '../../../lib/api'


export default function VerifyEmail() {
    const router = useRouter();
    const { uid, token } = router.query;
    const [message, setMessage] = useState('verifying...');

    useEffect(() => {
        if (uid && token) {
            api.get('/verify-email/${uid}/${token}/')
            .then(() => setMessage('Email verified you can logged in.'))
            .catch(() => setMessage('verification failed.'));
        }
    }, [uid, token]);

    return <p>{message}</p>
}