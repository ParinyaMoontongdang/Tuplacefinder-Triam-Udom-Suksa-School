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
  if (inputNamerValue == 28 || inputNamerValue == 29 || inputNamerValue == 32 || inputNamerValue == 38 || inputNamerValue == 39 || inputNamerValue == 48 || inputNamerValue == 49 || inputNamerValue == 58 || inputNamerValue == 59){
    roomHeading = "ห้อง " + String(inputNamerValue)  + " อยู่ที่ตึก 1";
    roomDetails = "หมายเหตุเพิ่มเติม : ห้องพักครู (57) | หัวหน้ากลุ่มสาระฯ ภาษาต่างประเทศที่ 2 | ห้องพยาบาล";
  }
  else if (inputNamerValue == 125 || inputNamerValue == 126 || inputNamerValue == 144 || inputNamerValue == 145 || inputNamerValue == 146 || inputNamerValue == 154 || inputNamerValue == 155 || inputNamerValue == 156){
    roomHeading = "ห้อง " + String(inputNamerValue)  + " อยู่ที่ตึก 2";
    roomDetails = "หมายเหตุเพิ่มเติม : ห้องพักครู (184) | ห้องอินเตอร์คอม | ห้องสมุดตึก2 (186) | หัวหน้ากลุ่มสาระฯสังคมศึกษา | ห้องแนะแนว | ห้องทะเบียน | ห้องวัดผล | ห้องพักครูภาษาอังกฤษ (150) | ห้องงานประกันคุณภาพ (158) | ห้องงานสารสนเทศ (158) | ห้องเกียรติยศ (111) | ห้องงานบุคลากร";
  }
  else if (inputNamerValue >= 222 && inputNamerValue <= 229 || inputNamerValue >= 276 && inputNamerValue <= 278){
    roomHeading = "ห้อง " + String(inputNamerValue)  + " อยู่ที่ตึก 3";
    roomDetails = "หมายเหตุเพิ่มเติม : ห้องพักครู (290)	| ห้องพักครู (234) | ห้องพักครู (261)	| หัวหน้ากลุ่มสาระฯ ภาษาอังกฤษ (264) | หัวหน้ากลุ่มสาระฯ คณิตศาสตร์ (284) | ห้องพักครู (279)";
  }
  else if (inputNamerValue == 65 || inputNamerValue == 66 || inputNamerValue >= 71 && inputNamerValue <= 79 || inputNamerValue == 80 || inputNamerValue == 81){
    roomHeading = "ห้อง " + String(inputNamerValue)  + " อยู่ที่ตึก ศิลปะ";
    roomDetails = "หมายเหตุเพิ่มเติม : ห้องพักครู (76)";
  }
  else if (inputNamerValue >= 931 && inputNamerValue <= 937 || inputNamerValue >= 941 && inputNamerValue <= 947){
    roomHeading = "ห้อง " + String(inputNamerValue)  + " อยู่ที่ตึก 9";
    roomDetails = "หมายเหตุเพิ่มเติม : ห้องพักครู (924) | ห้องพักครู (944) | ศูนย์เทคโนโลยีสารสนเทศและการสื่อสาร (ICT) | ห้องพักครูคอมพิวเตอร์ ชั้นล่าง";
  }
  else if (inputNamerValue >= 332 && inputNamerValue <= 335 || inputNamerValue >= 341 && inputNamerValue <= 345){
    roomHeading = "ห้อง " + String(inputNamerValue)  + " อยู่ที่ตึก 60 ปี";
    roomDetails = "หมายเหตุเพิ่มเติม : ห้องโสตฯ";
  }
  else if (inputNamerValue == 431 || inputNamerValue == 432 ||inputNamerValue >= 436 && inputNamerValue <= 438 || inputNamerValue >= 443 && inputNamerValue <= 447){
    roomHeading = "ห้อง " + String(inputNamerValue)  + " อยู่ที่ตึก 72";
    roomDetails = "หมายเหตุเพิ่มเติม : ห้องพักครู | ห้องสมุดสารนุกรมไทย ตึก 72";
  }
  else if (inputNamerValue >= 812 && inputNamerValue <= 815 ||inputNamerValue >= 822 && inputNamerValue <= 825 || inputNamerValue >= 842 && inputNamerValue <= 846 || inputNamerValue >= 832 && inputNamerValue <= 835){
    roomHeading = "ห้อง " + String(inputNamerValue)  + " อยู่ที่ตึก คุณหญิงหรั่งฯ";
    roomDetails = "หมายเหตุเพิ่มเติม : ห้องพุทธรักษา / ห้องพยาบาล	| ห้องพักครู (831) | ห้องพักครู (836) | ห้องพักครู (841) | ห้องพักครู (846)	| ห้องพักครู (812)";
  }
  else if (inputNamerValue >= 651 && inputNamerValue <= 655 ||inputNamerValue >= 661 && inputNamerValue <= 666){
    roomHeading = "ห้อง " + String(inputNamerValue)  + " อยู่ที่ตึก 55 ปี";
    roomDetails = "หมายเหตุเพิ่มเติม : หัวหน้ากลุ่มสาระฯศิลปะ (622)	| ห้องพักครูคอมพิวเตอร์ (632) | ห้องปฏิบัติการชีววิทยา (643) | ห้องพักครู (663)";
  }
  else if (inputNamerValue == 532 || inputNamerValue == 533 || inputNamerValue >= 521 && inputNamerValue <= 525){
    roomHeading = "ห้อง " + String(inputNamerValue)  + " อยู่ที่ตึก 80 ปี";
    roomDetails = "หมายเหตุเพิ่มเติม : หัวหน้ากลุ่มสาระ ฯ วิทยาศาสตร์ | ห้องพักครู | ศูนย์ฟิสิกส์";
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
