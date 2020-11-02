$(document).ready(function () {
  //   $.get("api/chirps", (req, res) => {});
  let btnChirp = $(document).find("#submitChirp");
let deleteChirpBtn = $(document).find("#deleteChirp");
  const getChirps = () => {
    return $.get("/api/chirps", (chirps) => {
      let chirpArr = Object.keys(chirps).map((chirpID) => {
        let chirp = chirps[chirpID];
        chirp.id = chirpID;
        return chirp;
      });
      chirpArr.reverse();
      console.log(chirpArr);
      chirpArr.forEach((chirp) => {
        let newChirpDiv = $(
        `<div class="card" style="width: 18rem; border border-dark">
    
        <div class="card-body" id="${chirp.id}>
          <h5 class="card-title">${chirp.user}</h5>
          <p class="card-text">${chirp.text}</p>
          <button type="submit" id="deleteChirpBtn"> delete </button> 
          <button data-id=${chirp.id}" type="submit" id="editChirpBtn"> edit </button> 
        </div>
      </div>`

   
        );
        $("#newChirpDiv").append(newChirpDiv);
      });
    });
  };

  const submitChirp = () => {
    const username = $("#username").val();
    const message = $("#message").val();
    const chirps = {
      user: username,
      text: message,
    };


    //$.post("/api/chirps", JSON.stringify(data));
    $.ajax({
      type: "POST",
      url: "/api/chirps",
      data: JSON.stringify(chirps),
      contentType: "application/json",
      dataType: "json",
    });
  };
 let deleteChirp=()=>{
      $.ajax({
          url:`/api/chirps/${event.target.id}`,
          type:"DELETE", 
      }).then(()=>{
          getChirps()
      })
  }
  btnChirp.click(() => {
    submitChirp();
  });
  deleteChirpBtn.click (()=>{
      deleteChirp()
      console.log(chirp)
  })
  getChirps();
  //     let chirps = JSON.stringify(data);
  //     fs.writeFileSync("./chirps.json", chirps, (err) => {
  //       if (err) throw err;
  //       console.log("worked");
  //       res.send("interesting...");
  //     });
  //     res.redirect("/chirpSubmission");
  //   });
  //   $.get("/chirpSubmission", (req, res) => {
  //     fs.readFile("./chirps.json", (err, chirps) => {
  //       res.type("text").send(chirps);
  //     });
  //   });
});
