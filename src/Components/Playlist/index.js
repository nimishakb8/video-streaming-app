import React, { useContext } from 'react';
import styles from './styles.module.css';
import { SelectedItemContext } from '../../context';

function Playlist(props) {
	const { data, onClick } = props;
	const [selectedItem, setSelectedItem] = useContext(SelectedItemContext);
	const getList = () => {
		return data.map((item) => {
			return (
				<div className={styles.thumbnail}>
					<img
						className={selectedItem === item ? styles.selected : styles.normal}
						src={item.image_url}
						height="100"
						width="150"
						onClick={(e) => {
							setSelectedItem(item);
						}}
					/>
					<label className={styles.ellipsis}>{item.title}</label>
				</div>
			);
		});
	};
	return <div className={styles.thumbnailList}>{getList()}</div>;
}
export default Playlist;
