function scene3() {
  console.log('Executing scene 3!');

  // Setup Stage
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)


  // Setup Cast

  // Character 1
  danerysContainer = document.createElement("div");
  danerysContainer.style.position = "absolute";
  danerysContainer.style.width = "10%";
  danerysContainer.style.height = "34%";
  danerysContainer.style.top = "50%";
  danerysContainer.style.left = "10%";

  danerys = document.querySelector("#danerys");
  danerys.style.position = "absolute";
  danerys.style.top = 0;
  danerys.style.width = "45%";
  danerys.style.left = "8%";

  dress = document.querySelector("#blue-dress");
  dress.style.position = "absolute";
  dress.style.bottom = 0;

  danerysContainer.append(danerys);
  danerysContainer.append(dress);
  stage.append(danerysContainer);

  // Character 2
  drogoContainer = document.createElement("div");
  drogoContainer.style.position = "absolute";
  drogoContainer.style.width = "10%";
  drogoContainer.style.height = "38%";
  drogoContainer.style.top = "45%";
  drogoContainer.style.left = "70%";

  drogo = document.querySelector("#drogo");
  drogo.style.position = "absolute";
  drogo.style.top = 0;
  drogo.style.width = "70%";
  drogo.style.left = "14%";

  bulky = document.querySelector("#bulky-man");
  bulky.style.position = "absolute";
  bulky.style.bottom = 0;

  drogoContainer.append(drogo);
  drogoContainer.append(bulky);
  stage.append(drogoContainer);

  // Setup Props

  // Prop 1
  egg = document.querySelector("#egg");
  egg.style.position = "absolute";
  egg.style.top = "60%";
  egg.style.left = "12%";
  egg.style.height = "10%";
  stage.append(egg);

  // Prop 2

  // Action!

  // Stage direction 1
  frame(function() {
    egg.style.top = "60%";
    egg.style.left = "12%";
  })

  frame(function() {
    egg.style.top = "55%";
    egg.style.left = "32%";
    egg.style.transform = "rotateZ(150deg)";
  })

  frame(function() {
    egg.style.top = "50%";
    egg.style.left = "42%";
    egg.style.transform = "rotateZ(170deg)";
  })

  frame(function() {
    egg.style.top = "55%";
    egg.style.left = "62%";
    egg.style.transform = "rotateZ(220deg)";
  })

  // Stage direction 2
  frame(function() {
    egg.style.top = "60%";
    egg.style.left = "72%";
    egg.style.transform = "rotateZ(0deg)";
  })

}
