import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import Playlist from './Components/Playlist';
import VideoPlayer from './Components/VideoPlayer';
import { findByLabelText } from '@testing-library/react';
import data from './data';
import { SelectedItemContext } from './context';
function App() {
	const [selectedItem, setSelectedItem] = useState({});

	useEffect(() => {
		fetch(`https://s3.amazonaws.com/frankly-news-web/test/playlist.json`).then(
			(res) => {
				console.log(res);
			}
		);
		console.log(data);
	});
	const onClick = (item) => {
		//console.log('hi', item);
		setSelectedItem(item);
	};
	return (
		// <div className={styles.wrapper}>
		<SelectedItemContext.Provider value={[selectedItem, setSelectedItem]}>
			<VideoPlayer data={data} />
			<Playlist data={data} onClick={onClick} />
		</SelectedItemContext.Provider>
		// </div>
	);
}
export default App;
