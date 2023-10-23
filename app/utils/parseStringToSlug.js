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

export default parseStringToSlug