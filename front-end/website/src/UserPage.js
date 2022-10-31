import React, { useState , useRef} from 'react';
import { useEffect } from 'react';
import { API_URL } from './config';


function User({ user, editable, deleteUser }) {
	const [active, setActive] = useState(user.is_active);
	function clickEvent(e) {
		setActive(!active);
	}

	function ClickDelete() {
		deleteUser(user.id);
	}

	return (
		<>
		<div style={{paddingTop:"1em"}}></div>
		<a
			href="#"
			className={
				"list-group-item list-group-item-action" +
				(active ? " active" : "")
			}
			aria-current="true"
			key="{user.name}"
		>
			<div className="d-flex w-100 justify-content-between">
				<h6 className="mb-1">{user.id}</h6>
				<small>{active ? "Active" : "Inactive"}</small>
			</div>
			<p className="mb-1">{user.email}</p>
			{editable ? (
				<>
					<button
						onClick={clickEvent}
						type="button"
						className={
							active ? "btn btn-light" : "btn btn-outline-primary"
						}
					>
						{active ? "Deactivate" : "Activate"}{" "}
					</button>
					<button
						onClick={ClickDelete}
						type="button"
						className={"btn btn-danger"}
					>
						Delete
					</button>
				</>
			) : (
				<></>
			)}

			<br></br>
		</a>
	</>);
}

function UserList({ users, editable, deleteUser }) {
	return (
		<div className="list-group">
			{users.map((user) => (
				<User
					user={user}
					editable={editable}
					deleteUser={deleteUser}
					key={user.email}
				></User>
			))}
		</div>
	);
}

function UserForm({ createUser }) {
	let email = useRef("");
	let password = useRef("");
	let githubUser = useRef("");
	function clickCreate(e) {
		e.preventDefault();
		console.log("Creating user");
		let data = {
			"email": email.current.value,
			"password": password.current.value,
			"githubUser": githubUser.current.value,
		};
		createUser(data);
		email.current.value = "";
		password.current.value = "";
		githubUser.current.value = "";
	}
	return (
		<form onSubmit={clickCreate}>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">
					Email address
				</label>
				<input
					ref={email}
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				></input>
			</div>
			<div className="mb-3">
				<label
					ref={password}
					htmlFor="exampleInputPassword1"
					className="form-label"
				>
					Password
				</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
				></input>
			</div>
			<div className="mb-3">
				<label htmlFor="github-user" className="form-label">
					GitHub User
				</label>
				<input
					ref={githubUser}
					type="text"
					className="form-control"
					id="github-user"
				></input>
			</div>
			<button type="submit" className="btn btn-primary">
				Create
			</button>
		</form>
	);
}

function UserPage({ token }) {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		let succesful = false;
		fetch(API_URL + "/users/")
			.then((data) => {
				if (data.status === 200) {
					succesful = true;
				}
				return data.json();
			})
			.then((data) => {
				if (succesful) {
					setUsers(data);
				} else {
					throw new Error(data.detail);
				}
			})
			.catch((data) => alert(data));
	}, []);

	function deleteUser({ user_id }) {
		let succesful = false;
		fetch(API_URL + "/users/" + user_id, {
			method: "DELETE",
		})
			.then((data) => {
				if (data.status === 200) {
					succesful = true;
				}
				return data.json();
			})
			.then((data) => {
				if (succesful) {
					setUsers(users.filter((user) => user.id !== user_id));
				} else {
					throw new Error(data.detail);
				}
			})
			.catch((data) => alert(data));
	}

	function createUser(userData) {
		let succesful = false;
		fetch(API_URL + "/users/", {
			method: "POST",
			headers: {
				"Authorization": "Bearer " + token,
				"Content-Type": "application/json",
			},
			data: JSON.stringify(userData),
		})
			.then((data) => {
				if (data.status === 200) {
					succesful = true;
				}
				return data.json();
			})
			.then((data) => {
				if (succesful) {
					setUsers([...users, data]);
				} else {
					throw new Error(data.detail);
				}
			})
			.catch((data) => alert(data));
	}

	return (
		<>
			<br></br>
			<h1>User List</h1>
			<UserList
				users={users}
				editable={!!token}
				deleteUser={deleteUser}
			></UserList>
			<br></br>
			{!!token ? (
				<>
					<h3>Add New User</h3>
					<UserForm createUser={createUser}></UserForm>
				</>
			) : (
				<></>
			)}
		</>
	);
}

export default UserPage;
