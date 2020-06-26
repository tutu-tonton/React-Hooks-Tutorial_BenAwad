import React, { useState, useCallback } from 'react';
import { Hello } from './Hello';

import './App.css';
import { Square } from './Square';

const App = () => {
	const [count, setCount] = useState(0);
	const favoriteNums = [7, 21, 37];

	const increment = useCallback(
		(n) => {
			setCount((c) => c + n);
		},
		[setCount]
	);

	return (
		<div>
			<Hello increment={increment} />
			<div>count: {count}</div>
			{favoriteNums.map((n) => {
				return <Square increment={increment} n={n} key={n} />;
				// return <Square onClick={() => increment(n)} n={n} key={n} />;
			})}
		</div>
	);
};

export default App;

//========================================
//  useState, useEffect
//========================================
// import React, { useState, useEffect } from 'react';
// // カスタムフック読み込み
// import { useForm } from './hooks/useForm';
// import { useFetch } from './hooks/useFetch';

// import './App.css';

// const App = () => {
// 	const [values, handleChange] = useForm({ email: '', password: '' });

// 	const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')) ?? 1);
// 	const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

// 	// localStorageにcountを保存
// 	useEffect(() => {
// 		localStorage.setItem('count', JSON.stringify(count));
// 	}, [count]);

// 	// useEffect(() => {
// 	// 	console.log('rendering useEffect');
// 	//   // cleanUp
// 	// 	return () => {
// 	// 		console.log('unmount App');
// 	// 	};
// 	// }, []);

// 	return (
// 		<div>
// 			<div>{!data ? 'loading...' : data}</div>
// 			<div>count: {count}</div>
// 			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
// 			<label for="email">E-mail</label>
// 			<input name="email" value={values.email} onChange={handleChange} />
// 			<label for="password">Password</label>
// 			<input type="password" name="password" value={values.password} onChange={handleChange} />
// 		</div>
// 	);
// };

// export default App;
