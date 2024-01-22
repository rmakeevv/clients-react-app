const formatDate = (date: string) => {
  const dateTo = new Date(date);
  const yyyy = dateTo.getFullYear();
  const mm = dateTo.getMonth() + 1;
  const dd = dateTo.getDate();
  let newDay = dd + '';
  let newMonth = mm + '';

  if (dd < 10) newDay = '0' + dd;
  if (mm < 10) newMonth = '0' + mm;

  return newDay + '/' + newMonth + '/' + yyyy.toString().slice(2, 4);
};

export default formatDate;
