function search() {
  var inputNamerValue = document.getElementById("search").value;
  var modal = document.getElementById("popup");
  var span = document.getElementsByClassName("close")[0];
  var HeadPop = document.getElementById("headPop");
  var roomHeading = "";
  var roomDetails = "";
  //   alert("Hello, " + inputNamerValue + "!");
  console.log(inputNamerValue);

  // Clear the input field
  document.getElementById('search').value = '';

  // Check room
  if (inputNamerValue == 123){
    roomHeading = "ห้อง 123 อยู่ที่ตึก 1";
    roomDetails = "หมายเหตุเพิ่มเติม : ห้องพักครู (57) หัวหน้ากลุ่มสาระฯ ภาษาต่างประเทศที่ 2 ห้องพยาบาล";
  }
  else{
    roomHeading = "ไม่พบห้อง!!";
    roomDetails = "กรุณากรอกหมายเลขห้องให้ถูกต้อง";
    HeadPop.style.color = "red";
  }

  // Set the message and display the popup
  document.getElementById("headPop").innerText = roomHeading;
  document.getElementById("popup-message").innerText = roomDetails;
  document.getElementById("popup").style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    HeadPop.style.color = "black";
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      HeadPop.style.color = "black";
    }
  };
}
