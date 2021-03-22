'use strict';
let hours=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

const container = document.getElementById('coc');
const divEl = document.createElement('div');
container.appendChild(divEl);
const tableEl=document.createElement('table');
divEl.appendChild(tableEl);
let totalOftotal=0;
let footertotal=[];
for(let i=0;i<hours.length;i++)
{
  footertotal.push(0);

}
function footer()
{
  const headerRow2El=document.createElement('tr');
  tableEl.appendChild(headerRow2El);
  const td3El =document.createElement('td');
  headerRow2El.appendChild(td3El);
  td3El.textContent='Total';
  for(let i=0;i<hours.length;i++)
  {
    const td3E=document.createElement('td');
    headerRow2El.appendChild(td3E);
    td3E.textContent=footertotal[i];
  }
  for(let i=0;i<hours.length;i++)
  {
    totalOftotal += footertotal[i];
  }
  const td3E =document.createElement('td');
  headerRow2El.appendChild(td3E);
  td3E.textContent=totalOftotal;
}
function Place(location,minCoust,maxcoust, avgCookiesPerSale){
  this.location=location;
  this.minCoust=minCoust;
  this.maxcoust=maxcoust;
  this.avgCookiesPerSale=avgCookiesPerSale;
  this.amountPerCookesEachHoure=[];
  this.numOffCustPerHoure=[];
  this.totalCookiesPerDay=0;


}
function getRandomCus(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}
Place.prototype.getCustmerNumber=function()
{
  for(let i=0;i<hours.length;i++){
    let num=getRandomCus(this.minCoust,this.maxcoust);
    this.numOffCustPerHoure.push(num);
    //console.log(this.numOffCustPerHoure);

  }
};
Place.prototype.calcAmountCookesPerHoure=function()
{
  for (let i=0;i<hours.length;i++)
  {
    const perHoure=Math.ceil(this.numOffCustPerHoure[i]*this.avgCookiesPerSale);
    this.amountPerCookesEachHoure.push(perHoure);
    this.totalCookiesPerDay=perHoure+this.totalCookiesPerDay;
    footertotal[i]+=this.amountPerCookesEachHoure;


  }


};
Place.prototype.render=function()
{
  const headerRowEl=document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  const th1El =document.createElement(th1El);
  headerRowEl.appendChild(th1El);
  th1El.textContent=`${this.location}`;


  for(let i=0; i< hours.length; i++)
  {
    const td1El = document.createElement('td');
    headerRowEl.appendChild(td1El);
    td1El.textContent = ` ${this.amountPerCookesEachHoure[i]} `;
  }



};


function renderHeader()
{
  const headerRowEl=document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  const thEl =document.createElement('th');
  headerRowEl.appendChild(thEl);
  thEl.textContent='';
  for(let i=0;i,hours.length;i++)
  {
    const thEl =document.createElement('th');
    headerRowEl.appendChild(thEl);
    thEl.textContent=hours[i];
  }
  const th1El =document.createElement('th');
  headerRowEl.appendChild(th1El);
  th1El.textContent='Daily Location Total';


}
renderHeader();

footer();

const seattle=new Place('Seattel',23,65,6.4,0,0);
seattle.getCustmerNumber();
seattle.calcAmountCookesPerHoure();
seattle.render();

const tokyo=new Place('Tokyo',3,24,1.2,0,0);
tokyo.getCustmerNumber();
tokyo.calcAmountCookesPerHoure();
tokyo.render();

const dubai=new Place('Dubai',11,38,3.7,0,0);
dubai.getCustmerNumber();
dubai.calcAmountCookesPerHoure();
dubai.render();

const paris=new Place('Paris',20,38,2.3,0,0);
paris.getCustmerNumber();
paris.calcAmountCookesPerHoure();
paris.render();


const lima=new Place('Lima',2,16,2.6,0,0);
lima.getCustmerNumber();
lima.calcAmountCookesPerHoure();
lima.render();

