/**
 * @async
 * @public {function}
 * @param {String} text
 * @return {String}
 */
const escape = (text) => {
    return text
        .replace(/([<>&]|[^#-~| |!])/g, (match) => '&#' + match.charCodeAt(0) + ';')
        .replace(
            /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            (match) => '&#' + (match.charCodeAt(0) * 0x400 + match.charCodeAt(1) - 0x35fdc00) + ';'
        );
};

export {escape};
