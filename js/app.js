'use strict';
let h = ['6am ','7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];
function getRandom(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const container = document.getElementById('store');
const articleEl = document.createElement('article');
container.appendChild(articleEl);
const tableEl = document.createElement('table');
articleEl.appendChild(tableEl);
console.log(h);
let totaloftotal=0;
let footerdata = [];
for (let i = 0; i < h.length; i++) {
  footerdata.push(0);
}
function footer(){
  const headerRowEl2 = document.createElement('tr');
  tableEl.appendChild(headerRowEl2);
  const td3 =document.createElement('td');
  headerRowEl2.appendChild(td3);
  td3.textContent='Totals';
  for (let i = 0; i < footerdata.length; i++) {
    const td3 =document.createElement('td');
    headerRowEl2.appendChild(td3);
    td3.textContent=footerdata[i];
  }
  for (let i = 0; i < h.length; i++) {
    totaloftotal+= footerdata[i];
  }
  const td4 =document.createElement('td');
  headerRowEl2.appendChild(td4);
  td4.textContent=totaloftotal;
}
function renderHeader(){
  const headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  const th1El = document.createElement('th');
  headerRowEl.appendChild(th1El);
  for(let i=0; i< h.length; i++)
  {
    const th1El = document.createElement('th');
    headerRowEl.appendChild(th1El);
    th1El.textContent = `${h[i]}`;
  }
  const th3El = document.createElement('th');
  headerRowEl.appendChild(th3El);
  th3El.textContent = 'Daily Location Total';
}
function Stand(location, max,min, avg,custBerH,cookiesPerH,total) {
  this.location = location;
  this.max = max;
  this.min=min;
  this.avg = avg;
  this.custBerH=custBerH;
  this.cookiesPerH=cookiesPerH;
  this.total=total;
  this.totalstor=[];
}
Stand.prototype.getCust =function(){
  for (let i=0; i < h.length; i++) {
    this.custBerH.push( Math.floor(getRandom (this.min, this.max)));
  }},
Stand.prototype.getCookies = function () {
  for (let i=0; i < h.length; i++) {
    this.cookiesPerH.push( Math.floor( this.custBerH[i]*this.avg));
    this.total=this.total+this.cookiesPerH[i];
    footerdata[i]+=this.cookiesPerH[i];
  }
  this.totalstor.push(this.total);
},
Stand.prototype.render= function(){
  this.getCust();
  this.getCookies();
  this.cookiesPerH;
  this.total;
  const headerRowE2 = document.createElement('tr');
  tableEl.appendChild(headerRowE2);
  const th1El = document.createElement('th');
  headerRowE2.appendChild(th1El);
  th1El.textContent=`${this.location}`;
  for(let i=0; i< h.length; i++)
  {
    const td1El = document.createElement('td');
    headerRowE2.appendChild(td1El);
    td1El.textContent = `${this.cookiesPerH[i]}`;
  }
  const td2El = document.createElement('td');
  headerRowE2.appendChild(td2El);
  td2El.textContent=`${this.total}`;
};
renderHeader();
const stand1 = new Stand('Seattle', 65, 23, 6.3,[],[],0);
stand1.render();
const stand2 = new Stand('tokyo', 24, 3, 1.2,[],[],0);
stand2.render();
const stand3 = new Stand('Dubai', 38, 11, 3.7,[],[],0);
stand3.render();
const stand4 = new Stand('Paris', 38, 20, 2.3,[],[],0);
stand4.render();
const stand5 = new Stand('Lima', 16, 2, 4.6,[],[],0);
stand5.render();
footer();
