import { useContext } from 'react'
import { GenderContext } from '../../contexts/RegisterGenderContext.jsx'

const GenderRadioBtn = () => {
	const { handleRadioBtn, genderValue } = useContext(GenderContext)

	return (
		<div className="form-control flex flex-row gap-5 justify-center">
			<label className="cursor-pointer label">
				<span className="label-text">Male</span>
				<input
					type="radio"
					name="male"
					value="male"
					checked={genderValue === 'male'}
					onChange={handleRadioBtn}
					className={`radio radio-error ml-2`}
				/>
			</label>

			<label className="cursor-pointer label">
				<span className="label-text">Female</span>
				<input
					type="radio"
					name="female"
					value="female"
					checked={genderValue === 'female'}
					onChange={handleRadioBtn}
					className="radio radio-error ml-2"
				/>
			</label>
		</div>
	)
}

export default GenderRadioBtn
