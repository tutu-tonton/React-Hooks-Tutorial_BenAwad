import React, { useState, useEffect } from 'react';
// カスタムフック読み込み
import { useForm } from './hooks/useForm';
import { useFetch } from './hooks/useFetch';

import './App.css';

const App = () => {
	const [values, handleChange] = useForm({ email: '', password: '' });

	const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')) ?? 1);
	const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

	// localStorageにcountを保存
	useEffect(() => {
		localStorage.setItem('count', JSON.stringify(count));
	}, [count]);

	// useEffect(() => {
	// 	console.log('rendering useEffect');
	//   // cleanUp
	// 	return () => {
	// 		console.log('unmount App');
	// 	};
	// }, []);

	return (
		<div>
			<div>{!data ? 'loading...' : data}</div>
			<div>count: {count}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
			<label for="email">E-mail</label>
			<input name="email" value={values.email} onChange={handleChange} />
			<label for="password">Password</label>
			<input type="password" name="password" value={values.password} onChange={handleChange} />
		</div>
	);
};

export default App;
