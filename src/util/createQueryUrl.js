const createUrl = (base, queryParams) => {
	// Destructuring the required params
	const { page, limit, ...otherParams } = queryParams;

	// Initialize URL with the base URL
	let url = new URL(base, process.env.REACT_APP_BACKEND_BASE_URL)

	// Add pagination parameters if they exist
	if (page !== undefined && page !== null) {
		url.searchParams.set('page', page);
	}

	if (limit !== undefined && limit !== null) {
		url.searchParams.set('limit', limit);
	}

	// Add any other query parameters
	Object.keys(otherParams).forEach(key => {
		if (otherParams[key] !== undefined && otherParams[key] !== null) {
			url.searchParams.set(key, otherParams[key]);
		}
	});

	return url;
}

export default createUrl;
