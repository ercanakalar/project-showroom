export default function DateOrder(cards) {
  const createdArray = cards.sort(function (initial, final) {
    var dateA = new Date(initial.createdAt).getTime();
    var dateB = new Date(final.createdAt).getTime();
    return dateA < dateB ? 1 : -1; // ? -1 : 1 for ascending/increasing order
  });
  return createdArray;
}
