/**
 * Returns back some attributes based on whether the
 * link is active or a parent of an active item
 *
 * @param {String} itemUrl The link in question
 * @param {String} pageUrl The page context
 * @returns {String} The attributes or empty
 */


/* 
    In this helper function, we pass in an item from 
    navigation.items and the current page URL. We 
    then return back some attributes, depending on state.

    If the page URL is a match with the item URL, then 
    we know it is the current page that the user’s on, 
    so we set a handy aria role of aria-current="page". 
    This role does exactly what it says on the tin and 
    tells screen reader users that this item’s link is 
    to the current page that they are on.
    If the page URL is not a match with the item URL, 
    but the URL features in the page URL, we know it’s 
    a child of the item. We return a data-state="active" 
    attribute—a CSS hook that we use to add a decoration 
    to the item to show the user they’re already in that 
    bit of the site. Because it’s a data attribute, it 
    won’t confuse screen reader users, either.
 */

export function getLinkActiveState(itemUrl, pageUrl) {
	let response = '';

	if (itemUrl === pageUrl) {
		response = ' aria-current="page"';
	}

	if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
		response += ' data-state="active"';
	}

	return response;
}