import React, { useState, useEffect, useRef } from 'react'
import './MapOfPoland.css'

import InfoBox from './InfoBox'

const MapOfPoland = () => {
	const [activeVoivodeship, setActiveVoivodeship] = useState(null)
	const infoBoxRef = useRef()

	const handleClick = voivodeship => {
		setActiveVoivodeship(voivodeship)
	}

	const handleClickOutside = event => {
		if (infoBoxRef.current && !infoBoxRef.current.contains(event.target)) {
			setActiveVoivodeship(null)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const getDataByVoivodeship = voivodeship => {
		switch (voivodeship) {
			case 'mazowieckie':
				return {
					capital: 'Warszawa',
					area: '35,558 km²',
					population: '5,379,587',
				}
			case 'dolnośląskie':
				return {
					capital: 'Wrocław',
					area: '19,946 km²',
					population: '2,898,134',
				}
			case 'pomorskie':
				return {
					capital: 'Gdańsk',
					area: '18,310 km²',
					population: '2,339,682',
				}
			case 'warmińsko-mazurskie':
				return {
					capital: 'Olsztyn',
					area: '24,173 km²',
					population: '1,428,092',
				}
			case 'kujawsko-pomorskie':
				return {
					capital: 'Bydgoszcz',
					area: '17,972 km²',
					population: '2,069,001',
				}
			case 'lubelskie':
				return {
					capital: 'Lublin',
					area: '25,122 km²',
					population: '2,122,097',
				}
			case 'lubuskie':
				return {
					capital: 'Gorzów Wielkopolski',
					area: '13,988 km²',
					population: '1,015,473',
				}
			case 'łódzkie':
				return {
					capital: 'Łódź',
					area: '18,219 km²',
					population: '2,473,203',
				}
			case 'małopolskie':
				return {
					capital: 'Kraków',
					area: '15,183 km²',
					population: '3,434,389',
				}
			case 'opolskie':
				return {
					capital: 'Opole',
					area: '9,412 km²',
					population: '988,895',
				}
			case 'podkarpackie':
				return {
					capital: 'Rzeszów',
					area: '17,846 km²',
					population: '2,129,306',
				}
			case 'podlaskie':
				return {
					capital: 'Białystok',
					area: '20,187 km²',
					population: '1,180,286',
				}
			case 'śląskie':
				return {
					capital: 'Katowice',
					area: '12,333 km²',
					population: '4,510,787',
				}
			case 'świętokrzyskie':
				return {
					capital: 'Kielce',
					area: '11,710 km²',
					population: '1,238,889',
				}
			case 'wielkopolskie':
				return {
					capital: 'Poznań',
					area: '29,826 km²',
					population: '3,543,529',
				}
			case 'zachodniopomorskie':
				return {
					capital: 'Szczecin',
					area: '22,892 km²',
					population: '1,705,989',
				}
			default:
				return {
					capital: '',
					area: '',
					population: '',
				}
		}
	}

	return (
		<div className='map'>
			<h1 className='map__title'>Wprowadzony 1 stycznia 1999 roku podział administracyjny Polski obejmował 16 województw.</h1>
			<div className='map__voivodeship'>
				<div className={`map__voivodeship-item mazowieckie`} onClick={() => handleClick('mazowieckie')}></div>
				<div className={`map__voivodeship-item dolnoslaskie`} onClick={() => handleClick('dolnośląskie')}></div>
				<div className={`map__voivodeship-item pomorskie`} onClick={() => handleClick('pomorskie')}></div>
				<div
					className={`map__voivodeship-item warminsko-mazurskie`}
					onClick={() => handleClick('warmińsko-mazurskie')}></div>
				<div
					className={`map__voivodeship-item kujawsko-pomorskie`}
					onClick={() => handleClick('kujawsko-pomorskie')}></div>
				<div className={`map__voivodeship-item lubelskie`} onClick={() => handleClick('lubelskie')}></div>
				<div className={`map__voivodeship-item lubuskie`} onClick={() => handleClick('lubuskie')}></div>
				<div className={`map__voivodeship-item lodzkie`} onClick={() => handleClick('łódzkie')}></div>
				<div className={`map__voivodeship-item malopolskie`} onClick={() => handleClick('małopolskie')}></div>
				<div className={`map__voivodeship-item opolskie`} onClick={() => handleClick('opolskie')}></div>
				<div className={`map__voivodeship-item podkarpackie`} onClick={() => handleClick('podkarpackie')}></div>
				<div className={`map__voivodeship-item podlaskie`} onClick={() => handleClick('podlaskie')}></div>
				<div className={`map__voivodeship-item slaskie`} onClick={() => handleClick('śląskie')}></div>
				<div className={`map__voivodeship-item swietokrzyskie`} onClick={() => handleClick('świętokrzyskie')}></div>
				<div className={`map__voivodeship-item wielkopolskie`} onClick={() => handleClick('wielkopolskie')}></div>
				<div
					className={`map__voivodeship-item zachodniopomorskie`}
					onClick={() => handleClick('zachodniopomorskie')}></div>
				{activeVoivodeship && (
					<div ref={infoBoxRef}>
						<InfoBox
							title={activeVoivodeship}
							capital={getDataByVoivodeship(activeVoivodeship).capital}
							area={getDataByVoivodeship(activeVoivodeship).area}
							population={getDataByVoivodeship(activeVoivodeship).population}
							infoBoxRef={infoBoxRef}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default MapOfPoland
