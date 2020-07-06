import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //convert array items to loash wrapper
  return _(items).slice(startIndex).take(pageSize).value();
}
