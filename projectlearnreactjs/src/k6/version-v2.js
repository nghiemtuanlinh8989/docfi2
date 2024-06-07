import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  VUs: 100,
  duration: '1m',
};

export default function() {
   http.get('http://40.90.170.197:9998/Place/Autocomplete?location=21.013715429594125%2C105.79829597455202&input=thanh');
   sleep(1);
}