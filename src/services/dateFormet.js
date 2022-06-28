import moment from 'moment';

export const DateTime = value => {
  var date = moment(value).format('MMMM Do YYYY, h:mm:ss a');
  return date;
};
