import { useState } from 'react';
import { addPG } from '@/api';

export default function AddPGForm({ token }: { token: string }) {
  const [form, setForm] = useState({ name: '', address: '', rooms: 0, price: 0, description: '' });
  const [msg, setMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await addPG(form, token);
    setMsg(res.name ? 'PG Added!' : res.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="PG Name" />
      <input name="address" value={form.address} onChange={handleChange} placeholder="Address" />
      <input name="rooms" type="number" value={form.rooms} onChange={handleChange} placeholder="Rooms" />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Adddd PG</button>
      {msg && <div>{msg}</div>}
    </form>
  );
}