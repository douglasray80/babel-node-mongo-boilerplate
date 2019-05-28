const createUser = User => (name, birthday) => {
	if (!name || !birthday)
		throw new Error(`Name: ${name}, Birthday: ${birthday}`)

	const user = new User({ name, birthday })
	return user.save()
}

const listUsers = User => () => {
	return User.find({})
}

export default User => {
	return {
		createUser: createUser(User),
		listUsers: listUsers(User)
	}
}
