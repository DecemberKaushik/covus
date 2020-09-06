const covidApi = `https://api.covid19api.com/summary`;
console.log('Hello World!');
fetch(covidApi)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data.Global);
    const Total = data.Global.TotalConfirmed;
    const TDeath = data.Global.TotalDeaths;
    const Trec = data.Global.TotalRecovered;
    document.getElementById("total").innerHTML = Total;
    document.getElementById("trecd").innerHTML = Trec;
    document.getElementById("tdeaths").innerHTML = TDeath;
    const decM = (Trec/Total);
    const perct = Math.round(decM*100);
    console.log(perct)
    const prog = document.querySelector(".progress-bar");
    prog.setAttribute('aria-valuenow', perct);
    prog.style.width = perct+'%';
    prog.innerText = perct+'%';
  });