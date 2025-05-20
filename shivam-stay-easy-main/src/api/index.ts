const API = 'http://localhost:5000/api';

export const register = async (data: any) =>
    fetch(`${API}/auth/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });

export const login = async (data: any) =>
    fetch(`${API}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        .then(res => res.json());

export const getPGs = async () =>
    fetch('http://localhost:5000/api/pg').then(res => res.json());

export const addPG = async (data: any, token: string) =>
    fetch('http://localhost:5000/api/pg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(data)
    }).then(res => res.json());