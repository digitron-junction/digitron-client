import { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';

export default function SelectInput({ label, options, onChange }) {
	const [selectionValue, setSelectionValue] = useState('');

	return (
		<>
			<TextField
				select
				fullWidth
				label={label}
				value={selectionValue}
				onChange={(e) => {
					setSelectionValue(e.target.value);
					onChange(e.target.value);
				}}
				sx={{
					background:
						'linear-gradient(90deg, rgba(207, 229, 255, 0.67) 2.19%, rgba(209, 225, 243, 0.268) 100%)',
					border: '0.5px solid #FFFFFF',
					boxShadow: '0px 11px 30px rgba(68, 82, 82, 0.02)',
					borderRadius: '12.469px'
				}}
			>
				{options.map((option, index) => (
					<MenuItem key={index + option} value={option}>
						{option}
					</MenuItem>
				))}
			</TextField>
		</>
	);
}
