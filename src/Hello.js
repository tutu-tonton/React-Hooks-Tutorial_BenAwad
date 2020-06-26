import React from 'react';
// import { useCountRenders } from './hooks/useCountRenders';

// memoはprops監視してる。変化あったら実行する
export const Hello = React.memo(({ increment }) => {
	// useCountRenders();
	return <button onClick={() => increment(5)}>Hello</button>;
});
