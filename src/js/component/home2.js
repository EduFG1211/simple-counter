import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}

// Counter
export function SecondCounter() {
	const [counter, setCounter] = React.useState(99993);

	// Third Attempts
	React.useEffect(() => {
		const timer =
			counter >= 0 && setInterval(() => setCounter(counter + 1), 1000);
		return () => clearInterval(timer);
	}, [counter]);

	let hundredThousandth =
		Math.floor(counter / 100000) - Math.floor(counter / 1000000) * 10;
	let tenThousandth =
		Math.floor(counter / 10000) - Math.floor(counter / 100000) * 10;
	let thousandth =
		Math.floor(counter / 1000) - Math.floor(counter / 10000) * 10;
	let hundredth = Math.floor(counter / 100) - Math.floor(counter / 1000) * 10;
	let tenth = Math.floor(counter / 10) - Math.floor(counter / 100) * 10;
	let units = counter - Math.floor(counter / 10) * 10;

	return (
		<div className="row contain-fluid">
			<div className="card">
				<div className="card-body">
					<h1 className="bg-danger">{hundredThousandth}</h1>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<h1 className="bg-danger">{tenThousandth}</h1>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<h1 className="bg-danger">{thousandth}</h1>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<h1 className="bg-danger">{hundredth}</h1>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<h1 className="bg-danger">{tenth}</h1>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<h1 className="bg-danger">{units}</h1>
				</div>
			</div>
		</div>
	);
}

// Counter Type 1
export function Counter() {
	const [counter, setCounter] = React.useState(0);

	// Third Attempts
	React.useEffect(() => {
		const timer =
			counter >= 0 && setInterval(() => setCounter(counter + 1), 1000);
		return () => clearInterval(timer);
	}, [counter]);

	return (
		<div className="App">
			<div>
				<h1>Counter: {counter}</h1>
			</div>
		</div>
	);
}

// Counterdown from 60s
export function App() {
	const [counter, setCounter] = React.useState(60);

	// Second Attempts
	React.useEffect(() => {
		counter > 0 &&
			setInterval(() => {
				setCounter(time => time - 1);
			}, 1000);
	}, []);

	return (
		<div className="App">
			<div>Countdown: {counter}</div>
		</div>
	);
}
