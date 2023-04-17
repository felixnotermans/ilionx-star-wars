/**
 *
 * For example: if path is '/people/1' and paramName is 'people', this function will return 1
 *
 * @param path the path that contains the id
 * @param paramName the name of the param in front of the id
 * @returns the id for the given paramName
 */
const getUrlId = (path: string, paramName: string) => {
  const regex = new RegExp(`${paramName}/(\\d+)/`);
  const result = path.match(regex);

  if (result?.length == 2) {
    return result[1];
  }
};

export default getUrlId;
