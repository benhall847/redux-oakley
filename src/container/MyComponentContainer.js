import { connect } from "react-redux";
import MyComponent from "../components/MyComponent";
import {
	setActivityEat,
	setActivityNap,
	setActivityPlay
} from "../actions-reducers";

const mapStateToProps = state => {
	return {
		activity: state.activity
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleClickEat: () => {
			dispatch(setActivityEat());
		},
		handleClickNap: () => {
			dispatch(setActivityNap());
		},
		handleClickPlay: () => {
			dispatch(setActivityPlay());
		}
	};
};

const makeSmartComponent = connect(
	mapStateToProps,
	mapDispatchToProps
);

const mySmartComponent = makeSmartComponent(MyComponent);

export default mySmartComponent;
