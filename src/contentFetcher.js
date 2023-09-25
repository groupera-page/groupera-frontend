import contentData from "./content.json";

export default function contentFetcher(page, id, element, index) {
  if (!contentData[page]) {
    return index > -1 ? "" : [];
  }
  const data = contentData[page].find((item) => item.id === id);

  if (
    index > -1 &&
    data &&
    Array.isArray(data[element]) &&
    data[element][index] !== undefined
  ) {
    return data[element][index];
  } else if (index === -1) {
    return data[element];
  } else {
    return "";
  }
}
