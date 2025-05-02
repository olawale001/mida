'use client';

import { Component, useEffect } from "react";
import { useRouter } from "next/router";



export default function withAuth(Component) {
    return function Authenticated(props) {
      const router = useRouter();
  
      useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) router.push('/login');
      }, []);
  
      return <Component {...props} />;
    };
  }
  