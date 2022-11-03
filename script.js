console.log('This is included');
let newsaccordian = document.getElementById("newsAccordian");
let source = 'bbc-news';
apiKey = '8c1ddbe02f0b41ec988ed9fbd6f80c97';

const xhr = new XMLHttpRequest();



xhr.open('GET', ' https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8c1ddbe02f0b41ec988ed9fbd6f80c97', true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
      let json =JSON.parse(this.responseText);
      
      let articles = json.articles;
      let newshtml = "";
    //   console.log(articles);
    articles.forEach(function(element,index) {
        // <a href = "${element.url}">Read More Here</a>
        console.log(index);
   
        // console.log(articles[news]);
        let news = ` <div class="accordion" id="newsAccordian">
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                   ${element.title}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                data-bs-parent="newsAccordian">
                <div class="accordion-body">
                <img src="${element.urlToImage}" alt="Girl in a jacket" width="200" height="200">
                    <strong>${element.content}.<a href= "${element.url}" target = "_blank"> Read More Here...</a></strong> 
                </div>
            </div>
        </div>`;
        newshtml+= news;
    });
newsaccordian.innerHTML = newshtml;


    }
    else{
        console.log('some error occured')
    }
}

    xhr.send()