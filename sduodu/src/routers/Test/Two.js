
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			obj: {},
			active: ''
		};
		this.xyz = [];
	}

	componentDidMount() {
		this.init();
	}

	init = () => {
		try {
			this.xyz = [];
			const getArr = (i, j) => {
				arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				let zArr = [];
				let x = i < 4 ? 1 : i < 7 ? 4 : 7;
				for (let ii = x; ii < x + 3; ii++) {
					let jj = Math.floor((j - 1) / 3) * 3;
					let aa = this.xyz['x' + ii] ? this.xyz['x' + ii].slice(jj, jj + 3) : [];
					zArr.push(...aa);
				}
				return arr
				.filter(item => (this.xyz['x' + i] || []).indexOf(item) == -1)
				.filter(item => (this.xyz['y' + j] || []).indexOf(item) == -1)
				.filter(item => zArr.indexOf(item) == -1)
			}
			const run = (num) => {
				for(let i = num; i < 10; i++) {
					for(let j = 1; j < 10; j++) {
						let arr = getArr(i, j);
						if (arr.length > 0) {
							let val = arr[Math.floor(Math.random() * arr.length)];
							this.xyz['x' + i] = [...(this.xyz['x' + i] || []), val];
							this.xyz['y' + j] = [...(this.xyz['y' + j] || []), val];
						} else {
							this.xyz['x' + i] = [];
		
							new Array(j - 1).fill().map((item, index) => {
								this.xyz['y' + (index + 1)].pop();
							});
							run(i);
							return false;
						}
						
					}
				}
			}
			run(1);
			let data = [], obj = {};
			for (let i = 1; i < 10; i++) {
				data.push(this.xyz['x' + i]);
				this.xyz['x' + i].map((item, j) => {
					obj[(i - 1) + '_' + j] = { value: item, isShow: !Math.floor(Math.random() * 2) }
				})
				
			}
			this.setState({
				data,
				obj
			})
		} catch(err) {
			this.init();
		}
		
	}

	render() {
		let obj = { ...this.state.obj };
		console.log(obj, 123);
		return (
			<View style={styles.container}>
				<View>
					<Button
						title="restart"
						color="#841584"
						onPress={this.init}
					/>
				</View>
				<View style={styles.table}>
					{this.state.data.map((item, i) => {
						return (
							<View key={'tr' + i} style={styles.tr}>
								{
									item && item.map((val, j) => {
										const { isShow, userNum } = obj[i + '_' + j];
										return (
											<Text 
												key={'td' + i + j} 
												style={[styles.td, i + '_' + j == this.state.active && styles.active, userNum == val && styles.yes]}
												onPress={() => {
													if (!isShow) { // 需要填
														if (userNum != val) {
															this.setState({
																active: i + '_' + j
															});
														}
													}
												}}
											>{isShow ? val : userNum ? userNum : ''}</Text>
										);
									})
								}
							</View>
						);
					})}
				</View>
				<View style={styles.digital}>
					{new Array(10).fill(1).map((it, i) => {
						console.log(i);
						return (
							<Text
								key={'btn' + i}
								style={styles.btn}
								onPress={() => {
									if (this.state.active) {
										if (obj[this.state.active].userNum != obj[this.state.active].value) {
											obj[this.state.active] = { ...obj[this.state.active], userNum: i + 1 }; 
											this.setState({
												obj
											})
										}
									}
								}}
							>{i + 1}</Text>
						)
					})}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	table: {
		// flex: 1,
		margin: 20
	},
	tr: {
		flexDirection: "row",
	},
	td: {
		fontSize: 20,
		width: 30, 
		height: 30,
		textAlign: 'center',
		flex: 1,
		backgroundColor: '#ccc',
		lineHeight: 30,
		borderStyle: 'solid',
		borderColor: '#aaa',
		borderWidth: 1
	},
	active: {
		backgroundColor: '#fff1b8'
	},
	yes: {
		backgroundColor: '#ffa39e'
	},
	digital: {
		flexDirection: "row",
		padding: 20
	},
	btn: {
		fontSize: 20,
		width: 30, 
		height: 30,
		textAlign: 'center',
		flex: 1,
		backgroundColor: '#87e8de',
		lineHeight: 30,
		borderStyle: 'solid',
		borderColor: '#13c2c2',
		borderWidth: 1
	}
});


