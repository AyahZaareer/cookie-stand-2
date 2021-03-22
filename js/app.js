'use strict';
let hours=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const seattle={
  location:'Seattle',
  minCoust:23,
  maxcoust:65,
  avgCookiesPerSale:6.3,
  numOffCustPerHoure:[],
  amountPerCookesEachHoure:[],
  totalCookiesPerDay:0,
  getCustmerNumber:function(){
    for(let i=0;i<hours.length;i++){
      let num=getRandomCus(this.minCoust,this.maxcoust);
      this.numOffCustPerHoure.push(num);

    }

  },
  calcAmountCookesPerHoure:function(){
    for (let i=0;i<hours.length;i++)
    {
      const perHoure=Math.ceil(this.numOffCustPerHoure[i]*this.avgCookiesPerSale);
      this.amountPerCookesEachHoure.push(perHoure);
      this.totalCookiesPerDay=perHoure+this.totalCookiesPerDay;


    }



  },
  render:function(){
    const container = document.getElementById('coc');
    const divEl = document.createElement('div');
    container.appendChild(divEl);
    const h1El = document.createElement('h1');
    divEl.appendChild(h1El);
    h1El.textContent = 'Pats Salmon Cookies Sales Data';
    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.location;
    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.amountPerCookesEachHoure[i]} cookies`;
    }



    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = ` Total: ${this.totalCookiesPerDay}:cookies`;
  }

};
function getRandomCus(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}
seattle.getCustmerNumber();
seattle.calcAmountCookesPerHoure();
seattle.render();

const tokyo={
  location:'Tokyo',
  minCoust:3,
  maxcoust:24,
  avgCookiesPerSale:1.2,
  numOffCustPerHoure:[],
  amountPerCookesEachHoure:[],
  totalCookiesPerDay:0,
  getCustmerNumber:function(){
    for(let i=0;i<hours.length;i++){
      let num=getRandomCus(this.minCoust,this.maxcoust);
      this.numOffCustPerHoure.push(num);

    }

  },
  calcAmountCookesPerHoure:function(){
    for (let i=0;i<hours.length;i++)
    {
      const perHoure=Math.ceil(this.numOffCustPerHoure[i]*this.avgCookiesPerSale);
      this.amountPerCookesEachHoure.push(perHoure);
      this.totalCookiesPerDay=perHoure+this.totalCookiesPerDay;


    }



  },
  render:function(){
    const container = document.getElementById('coc');
    const divEl = document.createElement('div');
    container.appendChild(divEl);

    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.location;
    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.amountPerCookesEachHoure[i]} cookies`;
    }



    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = ` Total: ${this.totalCookiesPerDay}:cookies`;
  }

};

tokyo.getCustmerNumber();
tokyo.calcAmountCookesPerHoure();
tokyo.render();




const dubai={
  location:'Dubai',
  minCoust:11,
  maxcoust:38,
  avgCookiesPerSale:3.7,
  numOffCustPerHoure:[],
  amountPerCookesEachHoure:[],
  totalCookiesPerDay:0,
  getCustmerNumber:function(){
    for(let i=0;i<hours.length;i++){
      let num=getRandomCus(this.minCoust,this.maxcoust);
      this.numOffCustPerHoure.push(num);

    }

  },
  calcAmountCookesPerHoure:function(){
    for (let i=0;i<hours.length;i++)
    {
      const perHoure=Math.ceil(this.numOffCustPerHoure[i]*this.avgCookiesPerSale);
      this.amountPerCookesEachHoure.push(perHoure);
      this.totalCookiesPerDay=perHoure+this.totalCookiesPerDay;


    }



  },
  render:function(){
    const container = document.getElementById('coc');
    const divEl = document.createElement('div');
    container.appendChild(divEl);

    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.location;
    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.amountPerCookesEachHoure[i]} cookies`;
    }



    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = ` Total: ${this.totalCookiesPerDay}:cookies`;
  }

};

dubai.getCustmerNumber();
dubai.calcAmountCookesPerHoure();
dubai.render();




const paris={
  location:'Paris',
  minCoust:20,
  maxcoust:38,
  avgCookiesPerSale:2.3,
  numOffCustPerHoure:[],
  amountPerCookesEachHoure:[],
  totalCookiesPerDay:0,
  getCustmerNumber:function(){
    for(let i=0;i<hours.length;i++){
      let num=getRandomCus(this.minCoust,this.maxcoust);
      this.numOffCustPerHoure.push(num);

    }

  },
  calcAmountCookesPerHoure:function(){
    for (let i=0;i<hours.length;i++)
    {
      const perHoure=Math.ceil(this.numOffCustPerHoure[i]*this.avgCookiesPerSale);
      this.amountPerCookesEachHoure.push(perHoure);
      this.totalCookiesPerDay=perHoure+this.totalCookiesPerDay;


    }



  },
  render:function(){
    const container = document.getElementById('coc');
    const divEl = document.createElement('div');
    container.appendChild(divEl);

    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.location;
    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.amountPerCookesEachHoure[i]} cookies`;
    }



    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = ` Total: ${this.totalCookiesPerDay}:cookies`;
  }

};

paris.getCustmerNumber();
paris.calcAmountCookesPerHoure();
paris.render();



const lima={
  location:'Lima',
  minCoust:2,
  maxcoust:16,
  avgCookiesPerSale:4.6,
  numOffCustPerHoure:[],
  amountPerCookesEachHoure:[],
  totalCookiesPerDay:0,
  getCustmerNumber:function(){
    for(let i=0;i<hours.length;i++){
      let num=getRandomCus(this.minCoust,this.maxcoust);
      this.numOffCustPerHoure.push(num);

    }

  },
  calcAmountCookesPerHoure:function(){
    for (let i=0;i<hours.length;i++)
    {
      const perHoure=Math.ceil(this.numOffCustPerHoure[i]*this.avgCookiesPerSale);
      this.amountPerCookesEachHoure.push(perHoure);
      this.totalCookiesPerDay=perHoure+this.totalCookiesPerDay;


    }



  },
  render:function(){
    const container = document.getElementById('coc');
    const divEl = document.createElement('div');
    container.appendChild(divEl);

    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.location;
    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< hours.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.amountPerCookesEachHoure[i]} cookies`;
    }



    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = ` Total: ${this.totalCookiesPerDay}:cookies`;
  }

};
lima.getCustmerNumber();
lima.calcAmountCookesPerHoure();
lima.render();
