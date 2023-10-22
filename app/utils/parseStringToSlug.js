const parseStringToSlug = (str) => {
  if (!str) return '';
  const slug = str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
  return slug;
}

export default parseStringToSlug