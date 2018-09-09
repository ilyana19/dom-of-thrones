function scene4() {
  console.log('Executing scene 4!');

  // Setup Stage
  stage = document.querySelector('#stage');
  castle = document.querySelector('#kings-landing');
  castleImgSrc = castle.getAttribute('src');
  stageImg = document.querySelector('#stage-img');
  stageImg.setAttribute('src', castleImgSrc);

  // Setup Cast

  // Character 1
  danerysContainer = document.createElement("div");
  danerysContainer.style.position = "absolute";
  danerysContainer.style.width = "10%";
  danerysContainer.style.height = "34%";
  danerysContainer.style.top = "43%";
  danerysContainer.style.left = "65%";

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
  drogoContainer.style.top = "35%";
  drogoContainer.style.left = "80%";

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

  // Action!
  frame(function() {
    drogoContainer.style.transform = "rotateY(0deg)";
    drogoContainer.style.left = "80%";
  });

  for (var i = 0; i < 3; i++) {
    frame(function() {
      drogoContainer.style.transform = "rotateY(180deg)";
      drogoContainer.style.left = "81%";
    });

    frame(function() {
      drogoContainer.style.transform = "rotateY(0deg)";
      drogoContainer.style.left = "80%";
    });
  }

  frame(function() {
    drogoContainer.style.top = "35%";
    drogoContainer.style.left = "80%";
    danerysContainer.style.top = "43%";
    danerysContainer.style.left = "65%";
  });

  frame(function() {
    drogoContainer.style.top = "50%";
    drogoContainer.style.left = "65%";
    danerysContainer.style.top = "60%";
    danerysContainer.style.left = "50%";
  });

  frame(function() {
    drogoContainer.style.top = "70%";
    drogoContainer.style.left = "50%";
    danerysContainer.style.top = "80%";
    danerysContainer.style.left = "35%";
  });

  frame(function() {
    drogoContainer.style.top = "100%";
    danerysContainer.style.top = "100%";
  });
}
