document.getElementById("get_jokes").addEventListener("click", loadjokes);

function loadjokes(e) {

    let number = document.getElementById("number_input").value;

    // console.log(number);

    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${number}`, true);

    let xht = new XMLHttpRequest();
    xht.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    // xhr.onload = function() {
    //     if(this.status === 200){
    //         console.log("Clicked xhr");
    //         let data = JSON.parse(this.responseText);
    //         let oneData = data.title;
    //         // console.log(data);
    //         console.log(oneData);
    //     }
    // }

    xht.onprogress = function () {
        document.getElementById('output').innerHTML = "<h3>Loading.....</h3>";
    }

    xht.onload = function() {
        if(this.status === 200) {
            console.log("Clicked xht");
            let data2 = JSON.parse(this.responseText);
            // let titles = data2.value;

            let output = "<ol>";
            
            data2.forEach(function(item) {
                console.log(item);
                output += `<li>${item.id}; ${item.body}; ${item.title}; ${item.userID}</li>`;
            });

            output += "</ol>";

            document.getElementById("output").innerHTML = output;

            // console.log(data2);
            // console.log(titles);
        }
    }

    // xhr.send();

    xht.send();
}