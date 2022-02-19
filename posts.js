async function loadPosts() {
  try {
    const URL = "http://localhost:3000/prizes";
    const response = await fetch(URL);
    const datapoints = await response.json();
    //nested printing object
    //
    //   function printValues(datapoints) {
    //     for(var k in datapoints) {
    //         if(datapoints[k] instanceof Object) {
    //             printValues(datapoints[k]);
    //         } else {
    //             document.write(datapoints[k] + "<br>");
    //         };
    //     }
    // };

    // Printing all the values from the resulting object
    // printValues(datapoints);
    datapoints.map((post) => {
      const row = document.createElement("tr");
      const data = `
                <td>
                  ${post.year}
                </td>
                <td>
                  ${post.category}
                </td>
            <td>${post.laureates[0].id}</td>
            <td>${post.laureates[0].firstname}</td>
            <td>${post.laureates[0].surname}</td>
            <td>${post.laureates[0].motivation}</td>
            <td>${post.laureates[0].share}</td> 
               
              `;
      row.innerHTML = data;
      document.querySelector("#prizes-body").appendChild(row);
    });
  } catch (error) {
    console.log(error);
  }
}
