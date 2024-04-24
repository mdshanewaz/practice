 document.getElementById("get_data").addEventListener('click', loadData);

 function loadData() {
    // XHR object
    let xhr = new XMLHttpRequest();
    
    // 1st or modern way Open Function to access a file
    xhr.open('GET', 'txt/data.txt', true);

    // onprogress for using lodaing or waiting like things for big ammount data
    xhr.onprogress = function() {
        console.log(xhr.readyState)
    }


    // Onload Function to load data
    xhr.onload = function() {
        // HTTP statuses
        // 200 : "OK"
        // 403 : "Forbidden"
        // 404 : "Not Found"
        
        if (this.status===200){
            document.getElementById("output").innerHTML = this.responseText;
        }
    }


    //2nd or Old way to do the same thing
    xhr.onreadystatechange = function() {
        // readystate Values
        // 0 : request is not initialized
        // 1 : server connection established
        // 2 : request recived
        // 3 : processing request
        // 4 : request finished and response is ready

        // console.log(this.readyState)

        if(this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
        }
    }

    xhr.send();

    // console.log(xhr);
 };