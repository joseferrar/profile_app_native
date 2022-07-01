import moment from 'moment';

export const DateTime = value => {
  var date = moment(value).format('LTS');
  return date;
};

export const Seconds = value => {
  var date = moment(value).format('ss');
  return date;
};

export const Hours = value => {
  var date = moment(value).format('hh');
  return date;
};
export const Mins = value => {
  var date = moment(value).format('mm');
  return date;
};
