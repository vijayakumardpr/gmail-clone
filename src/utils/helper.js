export function filterData(txt, allData) {
  return allData.filter((s) => s.title.toLowerCase().includes(txt));
}
