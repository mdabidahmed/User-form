document.getElementById("submit").addEventListener("click", function (event) {
  //<!--for prevent Default --->
  event.preventDefault();
  //<!-- form one data ie, Mobile and email-->
  formOneData();
  //<!-- Name , Dob, Address creating here --->
  var newLeftSectionId = document.getElementById("newSection");
  //<!--Creating Label of NAME input field -->
  var createLabel = document.createElement("label");
  createLabel.className = "col-sm-2 col-form-label";
  createLabel.innerText = "Name";
  newLeftSectionId.append(createLabel);
  //<!--Creating NAME input field -->
  var createName = document.createElement("input");
  createName.type = "text";
  createName.minLength = 3;
  createName.maxLength = 16;
  createName.className = "form-control col-sm-8 inputNames";
  createName.id = "inputName";
  createName.placeholder = "ex. John (16 char only)";
  newLeftSectionId.append(createName);
  //<!--Creating Label of DOB input field -->
  var newLeftSectionDob = document.getElementById("newSectionDob");
  var createLabelDob = document.createElement("label");
  createLabelDob.className = "col-sm-2 col-form-label";
  createLabelDob.innerText = "DOB";
  newLeftSectionDob.append(createLabelDob);
  //<!--Creating  DOB input field -->
  var createDob = document.createElement("input");
  createDob.type = "date";
  createDob.className = "form-control col-sm-8";
  createDob.id = "inputDob";
  createDob.placeholder = "DOB";
  newLeftSectionDob.append(createDob);
  //<!--Creating  Address input field -->
  var newLeftSectionAdd = document.getElementById("newSectionAdd");
  var createLabelAdd = document.createElement("label");
  createLabelAdd.className = "col-sm-2 col-form-label";
  createLabelAdd.innerText = "Address";
  newLeftSectionAdd.append(createLabelAdd);
  //<!--Creating  Address input field -->
  var createAdd = document.createElement("textarea");
  createAdd.className = "form-control col-sm-8";
  createAdd.id = "inputText";
  createAdd.maxLength = 40;
  createAdd.placeholder = "40 character only";
  newLeftSectionAdd.append(createAdd);
  //////////////////////////////////////////////////////////////
  // <!-- creating new Button Submit-->
  var createButton = document.createElement("button");
  createButton.className = "btn btn-primary col-sm-3 mt-5 ml-5 buttonClas ";
  createButton.id = "buttonId";
  createButton.innerText = "Button";
  newLeftSectionAdd.append(createButton);
  document
    .getElementById("buttonId")
    .addEventListener("click", function (event) {
      event.preventDefault();

      //  <!--updating Name -->
      var colRightSection = document.getElementById("right-section-insert");
      //<!--Creating new Name element-->
      var newElemName = document.createElement("div");
      newElemName.className = "nameClass";
      newElemName.id = "nameId";
      newElemName.style.fontSize = "20px";
      var nameDetails = document.getElementById("inputName").value;
      newElemName.innerText = `Name: ${nameDetails}`;
      colRightSection.prepend(newElemName);

      //<!--Creating new DOB element-->
      var newElemDob = document.createElement("div");
      newElemDob.className = "dobClass";
      newElemDob.id = "dobId";
      newElemDob.style.fontSize = "20px";
      var dobDetails = document.getElementById("inputDob").value;
      newElemDob.innerText = `DOB: ${dobDetails}`;
      colRightSection.append(newElemDob);
      //<-- end-->
      //<!--Creating new Address element-->
      var newElemAdd = document.createElement("div");
      newElemAdd.className = "addressClass";
      newElemAdd.id = "addId;";
      newElemAdd.style.fontSize = "20px";
      var addDetails = document.getElementById("inputText").value;
      newElemAdd.innerText = `${addDetails}`;
      colRightSection.append(newElemAdd);
      //////for displaying successful message///////
      isEmptyInput();
      /////////reset field///////////////
      resetInputs();
    });
});
//////////button disabled component/////////////
const ButtonDisabled = () => {
  var btnDisabled = document.getElementById("buttonId");
  btnDisabled.disabled = true;
};
//////////ButtonEnabled/////////////
const ButtonEnabled = () => {
  var btnDisabled = document.getElementById("buttonId");
  btnDisabled.disabled = false;
  // var a = document.getElementsByClassName("nameClass");
  // a.remove();
};

const resetInputs = () => {
  document.getElementById("inputName").value = "";
  document.getElementById("inputDob").value = "";
  document.getElementById("inputText").value = "";
  $("#inputName").focus();
};
/////////////////////////////////////////////
const remEmptyClass = () => {
  var className1 = document.getElementById("nameId");
  className1.remove();
  var className2 = document.getElementById("dobId");
  className2.remove();
  // var className3 = document.getElementById("addId");
  // className3.remove();
};
////////////////////////////////////////////
const isEmptyInput = () => {
  if (
    $("#inputName").val() === "" ||
    $("#inputDob").val() === "" ||
    $("#inputText").val() == ""
  ) {
    remEmptyClass();
    errorMessage();
    // ButtonDisabled();
  } else {
    Successmessage();
    ButtonDisabled();
  }
};

const errorMessage = () => {
  var errormessage = document.createElement("p");
  errormessage.className = "errorClass";
  errormessage.id = "errorId";
  errormessage.style.color = "red";
  errormessage.style.padding = "20px";
  var newLeftSectionAdd = document.getElementById("newSectionAdd");
  errormessage.innerText = "input field one more fields cannot be empty.";
  newLeftSectionAdd.append(errormessage);
};
////////////////////////////

////////////////////////////
const Successmessage = () => {
  var message = document.createElement("div");
  message.className = "successClass";
  message.id = "addId;";
  message.style.color = "green";
  message.style.padding = "20px";
  var newLeftSectionAdd = document.getElementById("newSectionAdd");
  message.innerText = "you have successfully submitted the Application form.";
  newLeftSectionAdd.append(message);
  var del = document.getElementById("errorId");
  del.remove();
};
///////////////////form validation for Email and Mobile number///////////////////////
var evalid = false;
var nvalid = false;
function valid() {
  if (evalid == true && nvalid == true) {
    $(".button1").removeAttr("disabled");
  }
}

$(".emailfull").focusout(function () {
  console.log("Event fired");
  var regexname = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!this.value.match(regexname)) {
    evalid = false;
    $(".emailError").css("opacity", "1");
    $(".button1").attr("disabled", true);
  } else {
    evalid = true;
    $(".emailError").css("opacity", "0");
    valid();
  }
});

$(".mobileNum").focusout(function () {
  console.log("Event fired");
  var regexname = /^([0-9]{10})$/;
  if (!this.value.match(regexname)) {
    nvalid = false;
    $(".nameError").css("opacity", "1");
    $(".button1").attr("disabled", true);
  } else {
    nvalid = true;
    $(".nameError").css("opacity", "0");
    valid();
  }
});
// <!--end for form validation-->
//////////////////// Form Data 1 //////////////////////
const formOneData = () => {
  var colRightSection = document.getElementById("right-section-insert");
  //Creating new Mobile element
  var newElemMobile = document.createElement("div");
  newElemMobile.className = "mobileClass";
  newElemMobile.style.fontSize = "20px";
  var MobileDetails = document.getElementById("inputMobile").value;
  newElemMobile.innerText = `Mobile Number: ${MobileDetails}`;
  colRightSection.append(newElemMobile);
  //Creating new Email element
  var newElemEmail = document.createElement("div");
  newElemEmail.className = "EmailClass";
  newElemEmail.style.fontSize = "20px";
  var EmailDetails = document.getElementById("inputEmail").value;
  newElemEmail.innerText = `Email id: ${EmailDetails}`;
  colRightSection.append(newElemEmail);
  //end of Email new element creation
  document.getElementById("left-section-remove").remove();
};
