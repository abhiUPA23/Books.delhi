// console.log("3 to the 1 to 6 to the 9 reprstin abq what's up biach ");
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`Hello this is Macintosh<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <style>
      #btn {
        padding: 10px 10px;
        border: 3px solid black;
        background-color: red;
        color: white;
        font-weight: bold;
        cursor: pointer;
        border-radius: 12px;
      }
    </style>
    <body>
      
  
      <div class="container">
        <h2>
          <p id="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto
            accusamus provident nobis reiciendis, repellendus earum ratione
            architecto vel quo eum optio aperiam in consectetur nam ipsam quis
            labore. Quaerat necessitatibus magni, assumenda facilis unde iusto
            doloribus accusamus! Qui pariatur voluptatibus aliquam cupiditate
            maiores officia dicta voluptas velit adipisci? Error iste doloremque
            atque quas, voluptatem cumque veritatis earum commodi ut architecto
            magni cum molestiae quos voluptates quia assumenda est unde id
            distinctio ipsam blanditiis et hic dolores. Beatae similique
            consequatur a nisi, sit, ex magnam eaque autem itaque maxime
            distinctio? Quas quam aliquam aperiam quasi esse in, facilis eum
            dolorum exercitationem itaque minima possimus voluptate error nisi ab
            excepturi totam, neque, tenetur nihil repellendus veniam labore. Neque
            est tempora nemo impedit alias, accusamus rerum officiis incidunt
            aspernatur rem tempore corrupti similique ipsa dolor sequi nobis
            adipisci cum. Laudantium facilis ratione saepe aut sint id autem! Non
            obcaecati consequuntur beatae voluptatibus commodi animi aspernatur
            est esse minima expedita eligendi amet, quae et a veniam dolor
            aliquid, rerum sint culpa quod quaerat eos numquam veritatis! Atque,
            consequatur fugiat veniam unde perferendis, magnam fuga accusamus
            nostrum asperiores voluptatum, commodi corporis neque ducimus ipsum
            sed veritatis dolore maiores corrupti sint labore aperiam modi? Est!
          </p>
        </h2>
      </div>
  
      <button id="btn" onclick="togglehide()">Show/hide</button>
      <script>
        let para = document.getElementById("para");
        para.addEventListener("mouseover", function run() {
          console.log("mouse is inside the box");
        });
  
        para.addEventListener("mouseout", function run() {
          console.log("mouse is outside the box");
        });
  
  
        //   more events
        //  click, conteztmenu, mousedown/mouseup, mousemove, submit, focus, DOMContentLoaded
        // transitoned
  
        function togglehide() {
          let btn = document.getElementById("btn");
          let para = document.getElementById("para");
  
          if (para.style.display != "none") {
            para.style.display = "none";
          } else {
            para.style.display = "block";
          }
        }
      </script>
    </body>
  </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});