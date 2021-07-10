const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Ok!");
        } else {
            reject("Ops!");
        }
    });
};

//Una aproximacion mas acertada

somethingWillHappen()
 .then(response => console.log(response))
 .catch(error => console.error(error));

 const somethingWillHappenB = () => {
     return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("OK!!");
            }, 3000);
        } else {
            const err = new Error("Ops!");
            reject(err);
        }
     });
 };

somethingWillHappenB()
 .then(response => console.log(response))
 .catch(err => console.error(err));

 Promise.all([somethingWillHappen(), somethingWillHappenB()])
 .then(response => {
     console.log("Array of responses", response);
 })
 .catch(err => {
    console.error("Array of errors:", err);
 });