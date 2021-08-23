export enum Routes {
	Login = '/login',
	PasswordHealth = '/items',
	Weak = '/items/weak',
	Reused = '/items/reused',
	Old = '/items/old',
	Root = '/',
}

export enum API {
	Login = 'api/login',
	Logout = 'api/logout',
	Items = 'api/items',
	User = 'api/user',
}

export enum DefaultValues {
	DaysOld = 30,
	StrongThreshold = 2,
}
