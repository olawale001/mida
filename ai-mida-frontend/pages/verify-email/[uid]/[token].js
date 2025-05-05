'use client';

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from '../../../lib/api';

export default function VerifyEmail() {
    const router = useRouter();
    const { uid, token } = router.query;
    const [message, setMessage] = useState('Verifying...');

    useEffect(() => {
        if (uid && token) {
            api.get(`/verify-email/${uid}/${token}/`)
                .then(() => setMessage('/verify-email/success'))
                .catch(() => setMessage('/verify-email/failed'));
        }
    }, [uid, token]);

    return <p>{message}</p>;
}
