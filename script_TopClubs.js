const club = [
  {
    name: "Bayern Munchen",
    rank: 1,
    point: 2101,
    country: "Germany",
    logo: "bayern.jpg",
  },

  {
    name: "Liverpool FC",
    rank: 2,
    point: 1958,
    country: "England",
    logo: "liverpool.jpg",
  },

  {
    name: "Paris Saint-Germain",
    rank: 3,
    point: 1932,
    country: "France",
    logo: "paris.jpg",
  },

  {
    name: "Manchester City",
    rank: 4,
    point: 1922,
    country: "England",
    logo: "manchester.jpg",
  },

  {
    name: "Real Madrid",
    rank: 5,
    point: 1909,
    country: "Spain",
    logo: "real.jpg",
  }
];

function loadPage()
{
  i = 0;
  document.getElementById("TopList").innerHTML =
`
<table>

${club.map(function(c) {
  i+=1;

    return `

   <div class = "holder">

<tr><td>${c.rank}</td>        <td><img class = "logo" src = "${c.logo}"></td>          <td><h2>${c.name}</h2></td>       <td>Points: ${c.point}</td>    <td>Country: ${c.country}</td> </tr>

</div>
`
  }


  ).join('')}

</table>

`

}

