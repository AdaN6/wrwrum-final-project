import * as io from 'socket.io-client';
import { HexColorPicker } from 'react-colorful';
import { useState, useEffect } from 'react';
import Chat from './Chat';
import '../../assets/styles/share/mediumButton.scss';
import randomColor from 'randomcolor';
const backendLink: any = process.env.REACT_APP_BACKEND;
const socket = io.connect(backendLink);

export default function ChatScreen() {
	const [fakeUser, setFakeUser] = useState('');
	const [chat, setChat] = useState(false);
	const [colorMe, setColorMe] = useState('#aabbcc');
	const color = randomColor();
	const [colorOther, setColorOther] = useState(color);

	// useEffect(() => {
	// 	console.log(color);
	// }, [color]);

	return (
		<div className='w-screen flex justify-center pt-10 h-screen'>
			;{' '}
			{chat ? (
				<Chat
					fakeUser={fakeUser}
					colorMe={colorMe}
					colorOther={colorOther}
				/>
			) : (
				<form className='flex flex-col justify-center'>
					<div className='flex flex-col'>
						<h2>Choose Your Color!</h2>
						<HexColorPicker
							className='mr-5'
							color={colorMe}
							onChange={setColorMe}
						/>
					</div>
					{/* <div className=''>
							<h2>Other Color</h2>
							<HexColorPicker
								color={colorOther}
								onChange={setColorOther}
							/>
						</div> */}
					<input
						className='text-[#222222] p-2 rounded-sm mb-5  mt-5'
						value={fakeUser}
						placeholder='username'
						onChange={(e) => setFakeUser(e.target.value)}
					/>
					<div className='flex-row justify-center'>
						<button
							onClick={() => setChat(!chat)}
							className='medium-button py-2 w-[50%]'
						>
							Enter a chat
						</button>
					</div>
				</form>
			)}
		</div>
	);
}