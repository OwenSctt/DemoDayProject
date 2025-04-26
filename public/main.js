var remove = document.getElementsByClassName("remove");

// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

var remove = document.getElementsByClassName("remove");

Array.from(remove).forEach(function (element) {
  element.addEventListener("click", function () {
    const parent = this.closest(".completedStop");
    const values = parent.querySelectorAll(".value")
    const rname = values[0].innerText
    const address = values[1].innerText
    const time = values[2].innerText
    const packages = values[3].innerText
    const location = values[4].innerText
    const type = values[5].innerText
    const notes = values[6].innerText

    fetch("completedStops", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
            'rname' : rname,
            'address' : address,
            'time' : time,
            'packages': packages,
            'location' : location,
            'type': type,
            'notes': notes
      }),
    }).then(function (response) {
      window.location.reload();
    });
  });
});

