const parseStringToSlug = (str) => {
  if (!str) return '';
  const slug = str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug;
}

module.exports = parseStringToSlug
export default parseStringToSlug