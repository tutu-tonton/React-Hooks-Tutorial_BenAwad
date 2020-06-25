import React from 'react';
// カスタムフック
import { useForm } from './hooks/useForm';
import './App.css';

const App = () => {
	const [values, handleChange] = useForm({ email: '', password: '' });

	return (
		<div>
			<label for="email">E-mail</label>
			<input name="email" value={values.email} onChange={handleChange} />
			<label for="password">Password</label>
			<input type="password" name="password" value={values.password} onChange={handleChange} />
		</div>
	);
};

export default App;
