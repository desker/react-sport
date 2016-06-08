import 'whatwg-fetch';

export function getAll() {
	return dispatch => {
		fetch('/api/collections')
			.then(resp => resp.json())
			.then(json => {
				dispatch({
					type: 'ALLISOK',
					body: json.body
				})
			}
			);
	}
}
