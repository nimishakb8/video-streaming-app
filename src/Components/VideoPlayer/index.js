import React, { useState, useEffect, useContext } from 'react';
import { findByLabelText } from '@testing-library/react';
import styles from './styles.module.css';
import { SelectedItemContext } from '../../context';

function VideoPlayer(props) {
	const { data } = props;
	const [videoData, setVideoData] = useState(data);
	const [selectedItem, setSelectedItem] = useContext(SelectedItemContext);
	var i;
	var videoCount = data.length;
	if (Object.keys(selectedItem).length > 0) {
		i = data.indexOf(selectedItem) - 1;
		myHandler();
	}

	useEffect(() => {
		i = 0;

		document.getElementById('myVideo').setAttribute('src', data[0].content_url);
		document.getElementById('title').innerHTML = data[0].title;
		setSelectedItem(data[0]);

		document
			.getElementById('myVideo')
			.addEventListener('ended', myHandler, false);
	}, []);

	function myHandler() {
		let index;

		i++;
		document
			.getElementById('myVideo')
			.addEventListener('ended', myHandler, false);
		if (i == videoCount) {
			i = 0;
			videoPlay(i);
		} else {
			videoPlay(i);
		}
	}
	function videoPlay(videoNum) {
		document
			.getElementById('myVideo')
			.setAttribute('src', data[videoNum].content_url);
		document.getElementById('title').innerHTML = data[videoNum].title;
		setSelectedItem(data[videoNum]);
		document.getElementById('myVideo').load();
		document.getElementById('myVideo').play();
	}

	return (
		<div className={styles['video-player']}>
			<video autoPlay={'false'} controls id="myVideo"></video>
			<span id="title"></span>
		</div>
	);
}
export default VideoPlayer;
