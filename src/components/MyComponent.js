import React, { Component } from "react";

export default class MyComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameInput: props.name,
			activityInput: props.activity
		};
	}
	_nameChangeHandler = nameInput => {
		this.setState({ nameInput });
	};
	_activityChangeHandler = activityInput => {
		this.setState({ activityInput });
	};
	render() {
		const { activity, name, handleClickName, handleClickBoth } = this.props;
		return (
			<div>
				<h1>name: {name}</h1>
				<div>activity: {activity}</div>
				<input
					onChange={e => {
						this._nameChangeHandler(e.target.value);
					}}
					value={this.state.nameInput}
				/>
				<input
					onChange={e => {
						this._activityChangeHandler(e.target.value);
					}}
					value={this.state.activityInput}
				/>
				<button
					onClick={() => {
						handleClickBoth(
							this.state.nameInput,
							this.state.activityInput
						);
					}}
				>
					SET IT!
				</button>
			</div>
		);
	}
}
