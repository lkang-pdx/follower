import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Welcome to Preact</h1>
				<p>Created with Preact-CLI</p>
			</div>
		);
	}
}
