let chart;

const form = document.getElementById("formulario-busca");

const x = (event) => {
  event.preventDefault();
  let pais = event.target[0].value;
  let data = event.target[1].value;
  fetchData(pais, data);
};

form.addEventListener("submit", x);

const gerarGrafico = (response) => {
  const data = response.data.data;
  const ctx = document.getElementById("grafico").getContext("2d");
  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Mortes", "Confirmados", "Confirmados descartados"],
      datasets: [
        {
          data: [data.deaths, data.confirmed, data.confirmed_diff],
          backgroundColor: ["red", "blue", "green"],
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "COVID-19",
      },
    },
  });
};

const fetchData = (pais, data) => {
    axios.get(`https://covid-api.com/api/reports/total?date=${data}&iso=${pais}`)
    .then(gerarGrafico)
    .catch(e => console.log(e))
}

fetchData('bra', '2023-01-09')