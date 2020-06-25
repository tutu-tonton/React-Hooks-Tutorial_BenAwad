//========================================
//  カスタムフック
//  入力した値をstateに保存
//  email, password
//========================================

import { useState } from 'react';

export const useForm = (initialValues) => {
	const [values, setValues] = useState(initialValues);

	return [
		values,
		(e) => {
			setValues({
				...values,
				[e.target.name]: e.target.value,
			});
		},
	];
};
