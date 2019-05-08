import { connect } from "react-redux";
import MyComponent from "../components/MyComponent";
import {
	setActivityEat,
	setActivityNap,
	setActivityPlay,
	setName,
	setActivity,
	setBoth
} from "../actions-reducers";

const mapStateToProps = state => {
	return {
		activity: state.activity,
		name: state.name
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleClickName: name => {
			dispatch(setName(name));
		},
		handleClickActivity: activity => {
			dispatch(setActivity(activity));
		},
		handleClickBoth: (name, activity) => {
			dispatch(setBoth(name, activity));
		}
	};
};

const makeSmartComponent = connect(
	mapStateToProps,
	mapDispatchToProps
);

const mySmartComponent = makeSmartComponent(MyComponent);

export default mySmartComponent;
