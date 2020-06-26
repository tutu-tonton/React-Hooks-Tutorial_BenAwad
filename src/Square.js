//========================================
//  useCallbackで使用
//========================================
import React from 'react';
import { useCountRenders } from './hooks/useCountRenders';

export const Square = React.memo(({ n, increment }) => {
	useCountRenders();

	return <button onClick={() => increment(n)}>{n}</button>;
	// ===
	// export const Square = React.memo(({ n, onClick }) => {
	// 	useCountRenders();
	// 	return <button onClick={onClick}>{n}</button>;

	// ===
	// export const Square = React.memo(({ increment }) => {
	// 	useCountRenders();
	// 	return <button onClick={() => increment(5)}>hello</button>;
});
